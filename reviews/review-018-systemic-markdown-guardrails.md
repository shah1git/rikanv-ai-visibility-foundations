# Review 018: Systemic Markdown Guardrails

## 1. Why This Was Needed

The project repeatedly hit the same failure mode: Codex reported Markdown
linebreaks as fixed, but external raw GitHub checks showed compressed Markdown.

The issue was not only a single broken file. The repository needed permanent
operating rules and validation tooling to prevent future sessions from repeating
the same failure.

## 2. What Was Added

- `AGENTS.md` with repo-level instructions for Codex and other agents.
- `docs/00-agent-operating-rules.md` with operational Markdown rules.
- `tools/validate-markdown-integrity.py` for local Markdown integrity checks.
- README and START-HERE links to the Markdown integrity gate.

## 3. Guardrail Rules

- Do not report Markdown formatting complete unless validation passes.
- Do not report pushed Markdown ready unless remote raw validation passes by
  exact commit hash.
- Use real newline characters.
- Keep headings, list items and table rows on separate lines.
- Keep non-URL lines at 300 characters or less.
- Do not compress claim cards into one line.
- Do not start Site Import Agent until guardrail validation passes.

## 4. Validation Command

```bash
python tools/validate-markdown-integrity.py
git diff --check
```

For changed Markdown files only:

```bash
python tools/validate-markdown-integrity.py --changed
```

For the whole repository:

```bash
python tools/validate-markdown-integrity.py --all
```

## 5. Files Changed

- `AGENTS.md`
- `README.md`
- `START-HERE.md`
- `docs/00-agent-operating-rules.md`
- `tools/validate-markdown-integrity.py`
- `reviews/index.md`
- `reviews/review-018-systemic-markdown-guardrails.md`

## 6. What Was Not Changed

- 30 claims.
- Product taxonomy.
- Selected products.
- Source/evidence IDs.
- Business meaning of Product Truth.
- Human approval.
- RikaNV Doctrine.
- Anti-PBN policy.

## 7. Validation Result

Local guardrail validation was added and executed.

Results:

- `python tools/validate-markdown-integrity.py`: pass.
- `python tools/validate-markdown-integrity.py --changed`: pass.
- `python tools/validate-markdown-integrity.py --all`: pass.
- `git diff --check`: pass.
- Claim Registry diff: empty.

No Site Import Agent was run in this review.

## 8. Verdict

READY FOR MARKDOWN-GUARDED AGENT SITE IMPORT

## 9. Next Step

Run Markdown guardrail validation, then start Site Import Agent only if it
passes.
