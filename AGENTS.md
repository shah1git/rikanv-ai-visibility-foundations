# AGENTS.md

## Project Identity

This repository is `RikaNV AI Visibility Foundations`.

It defines an agent-first, human-approved content and AI visibility operating
model for RikaNV.

The project is documentation-first at this stage. It does not contain
production runtime, application code or an agent framework.

## Core Operating Rule

Do not report a Markdown formatting task as complete unless Markdown integrity
validation passes.

If a file is pushed, do not report remote readiness unless remote raw validation
by exact commit hash passes.

## Markdown Editing Rules

When editing Markdown files:

1. Use real newline characters.
2. Every Markdown heading must be on its own line.
3. A heading must be followed by a blank line.
4. Every list item must be on its own line.
5. Every table row must be on its own line.
6. No non-URL line may exceed 300 characters.
7. No line may contain multiple Markdown headings.
8. No line may contain multiple table separators such as `|---` or `| ---`.
9. Claim cards must not be compressed into single lines.
10. Tables must be valid GitHub-readable Markdown tables.

## Safe Markdown Write Method

For large Markdown rewrites, do not use fragile patching that may collapse
newlines.

Prefer writing files using Python with explicit newline joins:

```python
from pathlib import Path

lines = [
    "# Title",
    "",
    "## Section",
    "",
    "- item 1",
    "- item 2",
]

Path("FILE.md").write_text("\n".join(lines) + "\n", encoding="utf-8")
```

## Required Local Validation

Before reporting Markdown work as complete, run:

```bash
python tools/validate-markdown-integrity.py
git diff --check
```

If specific Markdown files were edited, pass them explicitly:

```bash
python tools/validate-markdown-integrity.py README.md START-HERE.md
```

## Required Remote Raw Validation After Push

After pushing Markdown formatting work, validate raw GitHub by exact commit hash.

Example:

```bash
NEW_HEAD=$(git rev-parse --short HEAD)
curl -L "https://raw.githubusercontent.com/shah1git/rikanv-ai-visibility-foundations/${NEW_HEAD}/START-HERE.md" | wc -l
```

Do not say remote Markdown is ready if the raw line count is compressed or if
headings, lists or tables appear glued together.

## Project Constraints

Do not start Site Import Agent, import `rikanv.ru`, change claims, change
product taxonomy, change source/evidence IDs, create runtime or choose a
framework unless the current task explicitly asks for it.
