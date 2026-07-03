# Agent Operating Rules

## Purpose

This document records repository-level operating rules for Codex and other
coding agents working on RikaNV AI Visibility Foundations.

The rules exist because repeated Markdown formatting regressions made files look
valid locally while external raw GitHub checks showed compressed Markdown.

## Current Project Mode

The project is agent-first and human-approved.

Agents may prepare documentation, validation tools, reviews, prompts and
operating workflows when requested.

Agents must not start Site Import Agent, import `rikanv.ru`, write articles,
change claims, change product taxonomy, change source/evidence IDs, create
runtime or choose a framework unless explicitly instructed.

## Repo Text Integrity Rule

Repo text integrity is a release gate for documentation, frontend and deploy-config work.

A Markdown, frontend or deploy-config text task is not complete until:

1. `python tools/validate-markdown-integrity.py` passes.
2. `git diff --check` passes.
3. If pushed, remote raw validation by exact commit hash passes.

## Frontend / Config Formatting

Application and deployment text must remain readable in GitHub raw and blob views.

Rules:

- App code must be readable and multiline.
- Route handlers must not be one-line files.
- `package.json` should be pretty-printed.
- Caddyfile snippets must be multiline and copy-safe.
- Docker and YAML deploy snippets must be readable.
- SQL migrations must keep one statement block per readable section.
- `package-lock.json` may be generated, but must remain valid JSON.

## Required Markdown Properties

- Real newline bytes are present.
- Headings are on separate lines.
- A heading is followed by a blank line.
- List items are on separate lines.
- Table rows are on separate lines.
- Non-URL lines are not longer than 300 characters.
- Claim cards are not compressed into single-line blocks.
- Markdown tables render in GitHub.

## Recommended Write Method

For large Markdown rewrites, prefer writing files from explicit line arrays or
triple-quoted strings with `Path.write_text(..., encoding="utf-8")`.

The safest pattern is:

```python
from pathlib import Path

lines = [
    "# Title",
    "",
    "## Section",
    "",
    "Text.",
]

Path("FILE.md").write_text("\n".join(lines) + "\n", encoding="utf-8")
```

## Remote Raw Validation

When a Markdown, frontend or deploy-config formatting fix is pushed, validate raw GitHub by exact commit
hash, not by branch name.

Example:

```bash
NEW_HEAD=$(git rev-parse --short HEAD)
curl -L "https://raw.githubusercontent.com/shah1git/rikanv-ai-visibility-foundations/${NEW_HEAD}/README.md" | wc -l
```

If remote raw is compressed, the task remains failed even when local files look
correct.

## Escalation

If validation fails on a file outside the current allowed edit scope, do not
rewrite it silently.

Record the failure in the relevant review document and ask for explicit scope or
perform only the minimal allowed fix.
