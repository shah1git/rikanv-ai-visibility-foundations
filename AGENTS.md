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

## Repo Text Integrity Rules

Agents must not create compressed text files.

This applies to:

- Markdown;
- TypeScript;
- TSX;
- JavaScript;
- CSS;
- JSON;
- YAML;
- SQL;
- Caddyfile snippets;
- Dockerfile snippets.

Rules:

1. Files must be human-readable in GitHub raw and blob views.
2. TypeScript/TSX files must not be collapsed into one line.
3. JSON files must be pretty-printed unless generated lockfiles.
4. Caddyfile examples must be copy-safe and multiline.
5. Docker/YAML deploy snippets must be readable.
6. `python tools/validate-markdown-integrity.py` must pass before commit.
7. `python tools/validate-markdown-integrity.py --git HEAD` must pass after commit.
8. `python tools/validate-markdown-integrity.py --remote HEAD` must pass after push.
9. If validation fails, do not report “готово”.

For frontend work, final report must include:

- npm typecheck result;
- npm build result;
- Docker build result if relevant;
- repo text integrity result;
- protected artifact checks.

## Required Local Validation

Before reporting Markdown or frontend/config text work as complete, run:

```bash
python tools/validate-markdown-integrity.py
git diff --check
```

If specific Markdown or text files were edited, pass them explicitly:

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

Do not say remote text is ready if raw files are compressed, if code is collapsed into one line, or if
headings, lists or tables appear glued together.

## Project Constraints

Do not start Site Import Agent, import `rikanv.ru`, change claims, change
product taxonomy, change source/evidence IDs, create runtime or choose a
framework unless the current task explicitly asks for it.
