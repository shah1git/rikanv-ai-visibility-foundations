#!/usr/bin/env python3
"""Validate repo text integrity for RikaNV AI Visibility Foundations.

The script keeps its historical filename because many repo instructions already
call it, but it now checks Markdown plus frontend/config text files. It catches
compressed Markdown, one-line TypeScript/TSX, one-line human JSON, compressed
Caddy snippets and oversized non-URL lines.
"""

from __future__ import annotations

import argparse
import json
import re
import subprocess
import sys
from pathlib import Path
from urllib.parse import quote
from urllib.request import urlopen

TEXT_EXTENSIONS = {
    '.md',
    '.ts',
    '.tsx',
    '.js',
    '.mjs',
    '.css',
    '.json',
    '.yml',
    '.yaml',
    '.sql',
}

IGNORE_DIRS = {
    '.git',
    'node_modules',
    '.next',
    'dist',
    'build',
    'coverage',
}

LOCKFILE_NAMES = {
    'package-lock.json',
}

KEY_LINE_THRESHOLDS = {
    'apps/approval-console/README.md': 40,
    'apps/approval-console/deploy/README.md': 40,
    'apps/approval-console/deploy/Caddyfile.console.rikanv.ru.example': 15,
    'apps/approval-console/app/api/decisions/route.ts': 20,
    'apps/approval-console/app/page.tsx': 50,
    'apps/approval-console/lib/types.ts': 30,
    'apps/approval-console/package.json': 10,
    'reviews/review-028-approval-console-mvp-implementation.md': 60,
}

DEFAULT_FILES = [
    'AGENTS.md',
    'README.md',
    'START-HERE.md',
    'docs/00-agent-operating-rules.md',
    'workflows/agent-first-content-pipeline.md',
    'workflows/site-ingest-to-claims.md',
    'workflows/agent-claim-review.md',
    'workflows/agent-content-draft.md',
    'prompts/site-import-agent.prompt.md',
    'reviews/index.md',
    'reviews/review-014-agent-first-consistency-patch.md',
    'reviews/review-015-agent-first-markdown-and-wording-repair.md',
    'reviews/review-016-heredoc-markdown-repair.md',
    'reviews/review-018-systemic-markdown-guardrails.md',
]

HEADING_RE = re.compile(r'(?<!`)#{1,6}\s+')
SEPARATOR_CELL_RE = re.compile(r'^\|\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$')
HAS_SEPARATOR_RE = re.compile(r'\|\s*:?-{3,}:?\s*\|')
LIST_GLUE_RE = re.compile(r'^\s*[-*]\s+.+\s[-*]\s+\S')
NUMBERED_LIST_GLUE_RE = re.compile(r'^\s*\d+\.\s+.+\s\d+\.\s+\S')
IMPORT_RE = re.compile(r'\bimport\b')


def norm_path(path: str | Path) -> str:
    return str(path).replace('\\', '/').lstrip('./')


def ignored(path: Path) -> bool:
    return any(part in IGNORE_DIRS for part in path.parts)


def is_special_text_file(path: Path) -> bool:
    name = path.name
    return (
        name == 'Dockerfile'
        or name.startswith('Dockerfile')
        or name.startswith('Caddyfile')
        or name.endswith('.example')
    )


def is_candidate_path(path: Path) -> bool:
    if ignored(path):
        return False
    return path.suffix.lower() in TEXT_EXTENSIONS or is_special_text_file(path)


def is_url_line(line: str) -> bool:
    return 'http://' in line or 'https://' in line


def is_markdown(path: str) -> bool:
    return path.endswith('.md')


def is_typescript(path: str) -> bool:
    return path.endswith('.ts') or path.endswith('.tsx')


def is_json(path: str) -> bool:
    return path.endswith('.json')


def is_lockfile(path: str) -> bool:
    return Path(path).name in LOCKFILE_NAMES


def is_caddyfile(path: str) -> bool:
    name = Path(path).name
    return name.startswith('Caddyfile') or 'Caddyfile' in name


def should_apply_strict_line_length(path: str) -> bool:
    return not is_lockfile(path)


def working_tree_files(all_files: bool, changed: bool, explicit_files: list[str]) -> list[Path]:
    if explicit_files:
        return [Path(file_name) for file_name in explicit_files]

    if changed:
        names: set[str] = set()
        commands = [
            ['git', 'diff', '--name-only'],
            ['git', 'diff', '--cached', '--name-only'],
        ]
        for command in commands:
            try:
                output = subprocess.check_output(command, text=True, stderr=subprocess.DEVNULL)
            except Exception:
                continue
            names.update(line for line in output.splitlines() if line.strip())
        return sorted(Path(name) for name in names if is_candidate_path(Path(name)))

    if all_files:
        return sorted(path for path in Path('.').rglob('*') if path.is_file() and is_candidate_path(path))

    default = [Path(name) for name in DEFAULT_FILES if Path(name).exists()]
    key_files = [Path(name) for name in KEY_LINE_THRESHOLDS if Path(name).exists()]
    return sorted(set(default + key_files))


def markdown_checks(label: str, lines: list[str]) -> list[str]:
    errors: list[str] = []

    for idx, line in enumerate(lines, 1):
        if len(HEADING_RE.findall(line)) > 1:
            errors.append(f'{label}:{idx}: multiple Markdown headings on one line')

        if line.count('### claim-') > 1:
            errors.append(f'{label}:{idx}: multiple claim cards on one line')

        if '| claim_id |' in line and line.count('| claim_id |') > 1:
            errors.append(f'{label}:{idx}: multiple claim_id rows on one line')

        if HAS_SEPARATOR_RE.search(line) and not SEPARATOR_CELL_RE.match(line):
            errors.append(f'{label}:{idx}: table separator appears mixed with other content')

        if LIST_GLUE_RE.search(line):
            errors.append(f'{label}:{idx}: possible glued bullet list items')

        if NUMBERED_LIST_GLUE_RE.search(line):
            errors.append(f'{label}:{idx}: possible glued numbered list items')

        if line.lstrip().startswith('#') and HEADING_RE.match(line.lstrip()):
            if idx < len(lines) and lines[idx].strip() != '':
                errors.append(f'{label}:{idx}: heading is not followed by a blank line')

    return errors


def typescript_checks(label: str, text: str, lines: list[str]) -> list[str]:
    errors: list[str] = []

    if len(lines) < 5 and len(text) > 300:
        errors.append(f'{label}: TypeScript/TSX appears compressed into fewer than 5 lines')

    for idx, line in enumerate(lines, 1):
        if line.count(';') > 8:
            errors.append(f'{label}:{idx}: one line contains more than 8 semicolons')

        if len(IMPORT_RE.findall(line)) > 1:
            errors.append(f'{label}:{idx}: multiple import statements on one line')

        if 'export async function' in line and line.count(';') > 1:
            errors.append(f'{label}:{idx}: export async function line contains multiple statements')

    return errors


def json_checks(label: str, text: str, lines: list[str]) -> list[str]:
    errors: list[str] = []

    try:
        json.loads(text)
    except json.JSONDecodeError as exc:
        return [f'{label}:{exc.lineno}: invalid JSON: {exc.msg}']

    if not is_lockfile(label) and len(lines) == 1 and len(text) > 300:
        errors.append(f'{label}: human-authored JSON is one long line')

    return errors


def caddy_checks(label: str, lines: list[str]) -> list[str]:
    errors: list[str] = []

    if len(lines) < 8:
        errors.append(f'{label}: Caddyfile example has fewer than 8 lines')

    for idx, line in enumerate(lines, 1):
        if '{' in line and 'reverse_proxy' in line:
            errors.append(f'{label}:{idx}: domain block and reverse_proxy appear glued')

        normalized = line.replace('basic_auth', 'basicauth')
        if 'basicauth' in normalized and 'reverse_proxy' in normalized:
            errors.append(f'{label}:{idx}: basic auth comment/config and reverse_proxy appear glued')

    return errors


def key_threshold_checks(label: str, lines: list[str]) -> list[str]:
    threshold = KEY_LINE_THRESHOLDS.get(label)
    if threshold is None:
        return []
    if len(lines) <= threshold:
        return [f'{label}: expected more than {threshold} lines, found {len(lines)}']
    return []


def check_bytes(label: str, data: bytes) -> list[str]:
    errors: list[str] = []
    label = norm_path(label)

    if data and b'\n' not in data and len(data) > 300:
        errors.append(f'{label}: file has no newline bytes and is longer than 300 bytes')

    try:
        text = data.decode('utf-8')
    except UnicodeDecodeError as exc:
        return [f'{label}: not valid UTF-8: {exc}']

    lines = text.splitlines()

    if should_apply_strict_line_length(label):
        for idx, line in enumerate(lines, 1):
            if len(line) > 300 and not is_url_line(line):
                errors.append(f'{label}:{idx}: non-URL line longer than 300 chars ({len(line)})')

    if is_markdown(label):
        errors.extend(markdown_checks(label, lines))

    if is_typescript(label):
        errors.extend(typescript_checks(label, text, lines))

    if is_json(label):
        errors.extend(json_checks(label, text, lines))

    if is_caddyfile(label):
        errors.extend(caddy_checks(label, lines))

    errors.extend(key_threshold_checks(label, lines))
    return errors


def check_file(path: Path) -> list[str]:
    if not path.exists():
        return [f'{path}: missing file']
    if not is_candidate_path(path):
        return []
    return check_bytes(norm_path(path), path.read_bytes())


def git_candidate_files(ref: str) -> list[str]:
    output = subprocess.check_output(
        ['git', 'ls-tree', '-r', '--name-only', ref],
        text=True,
        stderr=subprocess.DEVNULL,
    )
    files: list[str] = []
    for line in output.splitlines():
        path = Path(line)
        if is_candidate_path(path):
            files.append(line)
    return files


def check_git_ref(ref: str) -> tuple[int, list[str]]:
    errors: list[str] = []
    files = git_candidate_files(ref)
    for file_name in files:
        try:
            data = subprocess.check_output(['git', 'show', f'{ref}:{file_name}'])
        except subprocess.CalledProcessError as exc:
            errors.append(f'{file_name}: could not read from git ref {ref}: {exc}')
            continue
        errors.extend(check_bytes(file_name, data))
    return len(files), errors


def origin_repo_slug() -> str:
    remote = subprocess.check_output(
        ['git', 'config', '--get', 'remote.origin.url'],
        text=True,
    ).strip()
    if remote.startswith('git@github.com:'):
        return remote.removeprefix('git@github.com:').removesuffix('.git')
    if 'github.com/' in remote:
        return remote.split('github.com/', 1)[1].removesuffix('.git')
    raise ValueError(f'remote.origin.url is not a GitHub URL: {remote}')


def check_remote_ref(ref: str) -> tuple[int, list[str]]:
    errors: list[str] = []
    commit = subprocess.check_output(['git', 'rev-parse', '--short', ref], text=True).strip()
    slug = origin_repo_slug()
    files = git_candidate_files(ref)
    for file_name in files:
        url = f'https://raw.githubusercontent.com/{slug}/{commit}/{quote(file_name)}'
        try:
            with urlopen(url, timeout=20) as response:
                data = response.read()
        except Exception as exc:
            errors.append(f'{file_name}: could not read remote raw {url}: {exc}')
            continue
        errors.extend(check_bytes(file_name, data))
    return len(files), errors


def print_result(prefix: str, count: int, errors: list[str]) -> int:
    if errors:
        print(f'FAIL: {prefix} failed for {count} file(s)')
        for error in errors:
            print(f'- {error}')
        return 1
    print(f'PASS: {prefix} passed for {count} file(s)')
    return 0


def main() -> int:
    parser = argparse.ArgumentParser(description='Validate repo text integrity.')
    parser.add_argument('files', nargs='*', help='Specific text files to check')
    parser.add_argument('--all', action='store_true', help='Check every supported text file in the repository')
    parser.add_argument('--changed', action='store_true', help='Check supported text files changed in the working tree or index')
    parser.add_argument('--git', metavar='REF', help='Check supported text files in a local git ref')
    parser.add_argument('--remote', metavar='REF', help='Check remote raw supported text files for a git ref on GitHub')
    args = parser.parse_args()

    if args.git:
        count, errors = check_git_ref(args.git)
        return print_result('git object repo text integrity', count, errors)

    if args.remote:
        count, errors = check_remote_ref(args.remote)
        return print_result('remote repo text integrity', count, errors)

    files = working_tree_files(args.all, args.changed, args.files)
    if not files:
        print('PASS: repo text integrity passed for 0 file(s)')
        return 0

    all_errors: list[str] = []
    checked = 0
    for path in files:
        if is_candidate_path(path):
            checked += 1
            all_errors.extend(check_file(path))

    return print_result('repo text integrity', checked, all_errors)


if __name__ == '__main__':
    sys.exit(main())
