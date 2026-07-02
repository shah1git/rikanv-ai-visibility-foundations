#!/usr/bin/env python3
"""Validate Markdown integrity for RikaNV AI Visibility Foundations.

The checker focuses on regressions seen in this repository:
compressed Markdown, glued headings, glued tables, oversized non-URL lines and
single-line claim cards.
"""

from __future__ import annotations

import argparse
import re
import subprocess
import sys
from pathlib import Path
from urllib.parse import quote
from urllib.request import urlopen

DEFAULT_FILES = [
    "AGENTS.md",
    "README.md",
    "START-HERE.md",
    "docs/00-agent-operating-rules.md",
    "workflows/agent-first-content-pipeline.md",
    "workflows/site-ingest-to-claims.md",
    "workflows/agent-claim-review.md",
    "workflows/agent-content-draft.md",
    "prompts/site-import-agent.prompt.md",
    "reviews/index.md",
    "reviews/review-014-agent-first-consistency-patch.md",
    "reviews/review-015-agent-first-markdown-and-wording-repair.md",
    "reviews/review-016-heredoc-markdown-repair.md",
    "reviews/review-018-systemic-markdown-guardrails.md",
]

HEADING_RE = re.compile(r"(?<!`)#{1,6}\s+")
SEPARATOR_CELL_RE = re.compile(r"^\|\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$")
HAS_SEPARATOR_RE = re.compile(r"\|\s*:?-{3,}:?\s*\|")
LIST_GLUE_RE = re.compile(r"^\s*[-*]\s+.+\s[-*]\s+\S")
NUMBERED_LIST_GLUE_RE = re.compile(r"^\s*\d+\.\s+.+\s\d+\.\s+\S")


def git_changed_markdown() -> list[Path]:
    try:
        out = subprocess.check_output(
            ["git", "diff", "--name-only", "--", "*.md"],
            text=True,
            stderr=subprocess.DEVNULL,
        )
    except Exception:
        return []
    return [Path(line) for line in out.splitlines() if line.strip()]


def discover_files(args: argparse.Namespace) -> list[Path]:
    if args.all:
        return sorted(p for p in Path(".").rglob("*.md") if ".git" not in p.parts)
    if args.changed:
        return git_changed_markdown()
    if args.files:
        return [Path(f) for f in args.files]
    return [Path(f) for f in DEFAULT_FILES if Path(f).exists()]


def is_url_line(line: str) -> bool:
    return "http://" in line or "https://" in line


def check_bytes(label: str, data: bytes) -> list[str]:
    errors: list[str] = []
    if data and b"\n" not in data and len(data) > 300:
        errors.append(f"{label}: file has no newline bytes and is longer than 300 bytes")

    try:
        text = data.decode("utf-8")
    except UnicodeDecodeError as exc:
        return [f"{label}: not valid UTF-8: {exc}"]

    lines = text.splitlines()

    for idx, line in enumerate(lines, 1):
        if len(line) > 300 and not is_url_line(line):
            errors.append(f"{label}:{idx}: non-URL line longer than 300 chars ({len(line)})")

        if len(HEADING_RE.findall(line)) > 1:
            errors.append(f"{label}:{idx}: multiple Markdown headings on one line")

        if line.count("### claim-") > 1:
            errors.append(f"{label}:{idx}: multiple claim cards on one line")

        if "| claim_id |" in line and line.count("| claim_id |") > 1:
            errors.append(f"{label}:{idx}: multiple claim_id rows on one line")

        if HAS_SEPARATOR_RE.search(line) and not SEPARATOR_CELL_RE.match(line):
            errors.append(f"{label}:{idx}: table separator appears mixed with other content")

        if LIST_GLUE_RE.search(line):
            errors.append(f"{label}:{idx}: possible glued bullet list items")

        if NUMBERED_LIST_GLUE_RE.search(line):
            errors.append(f"{label}:{idx}: possible glued numbered list items")

        if line.lstrip().startswith("#") and HEADING_RE.match(line.lstrip()):
            if idx < len(lines) and lines[idx].strip() != "":
                errors.append(f"{label}:{idx}: heading is not followed by a blank line")

    return errors


def check_file(path: Path) -> list[str]:
    try:
        data = path.read_bytes()
    except FileNotFoundError:
        return [f"{path}: missing file"]
    return check_bytes(str(path), data)


def git_markdown_files(ref: str) -> list[str]:
    out = subprocess.check_output(
        ["git", "ls-tree", "-r", "--name-only", ref],
        text=True,
        stderr=subprocess.DEVNULL,
    )
    return [line for line in out.splitlines() if line.endswith(".md")]


def check_git_ref(ref: str) -> tuple[int, list[str]]:
    errors: list[str] = []
    files = git_markdown_files(ref)
    for file_name in files:
        try:
            data = subprocess.check_output(["git", "show", f"{ref}:{file_name}"])
        except subprocess.CalledProcessError as exc:
            errors.append(f"{file_name}: could not read from git ref {ref}: {exc}")
            continue
        errors.extend(check_bytes(file_name, data))
    return len(files), errors


def origin_repo_slug() -> str:
    remote = subprocess.check_output(
        ["git", "config", "--get", "remote.origin.url"],
        text=True,
    ).strip()
    if remote.startswith("git@github.com:"):
        slug = remote.removeprefix("git@github.com:").removesuffix(".git")
    elif "github.com/" in remote:
        slug = remote.split("github.com/", 1)[1].removesuffix(".git")
    else:
        raise ValueError(f"remote.origin.url is not a GitHub URL: {remote}")
    return slug


def check_remote_ref(ref: str) -> tuple[int, list[str]]:
    errors: list[str] = []
    commit = subprocess.check_output(["git", "rev-parse", "--short", ref], text=True).strip()
    slug = origin_repo_slug()
    files = git_markdown_files(ref)
    for file_name in files:
        url = f"https://raw.githubusercontent.com/{slug}/{commit}/{quote(file_name)}"
        try:
            with urlopen(url, timeout=20) as response:
                data = response.read()
        except Exception as exc:
            errors.append(f"{file_name}: could not read remote raw {url}: {exc}")
            continue
        errors.extend(check_bytes(file_name, data))
    return len(files), errors


def main() -> int:
    parser = argparse.ArgumentParser(description="Validate Markdown integrity.")
    parser.add_argument("files", nargs="*", help="Markdown files to check")
    parser.add_argument("--all", action="store_true", help="Check every Markdown file in the repository")
    parser.add_argument("--changed", action="store_true", help="Check Markdown files changed in the working tree")
    parser.add_argument("--git", metavar="REF", help="Check every Markdown file in a local git ref")
    parser.add_argument("--remote", metavar="REF", help="Check remote raw Markdown for a git ref on GitHub")
    args = parser.parse_args()

    if args.git:
        count, all_errors = check_git_ref(args.git)
        if all_errors:
            print("Markdown integrity check failed:")
            for error in all_errors:
                print(f"- {error}")
            return 1
        print(f"OK: Markdown integrity passed for {count} git file(s)")
        return 0

    if args.remote:
        count, all_errors = check_remote_ref(args.remote)
        if all_errors:
            print("Markdown integrity check failed:")
            for error in all_errors:
                print(f"- {error}")
            return 1
        print(f"OK: remote Markdown integrity passed for {count} file(s)")
        return 0

    files = discover_files(args)
    if not files:
        print("OK: no Markdown files selected")
        return 0

    all_errors: list[str] = []
    for path in files:
        if path.suffix.lower() != ".md":
            continue
        all_errors.extend(check_file(path))

    if all_errors:
        print("Markdown integrity check failed:")
        for error in all_errors:
            print(f"- {error}")
        return 1

    print(f"OK: Markdown integrity passed for {len(files)} file(s)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
