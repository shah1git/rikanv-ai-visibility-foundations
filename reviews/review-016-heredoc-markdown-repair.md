# Review 016: Heredoc Markdown Repair

## 1. Why This Was Needed

External raw GitHub validation reported that key agent-first files from commit
`e3cd72d` still appeared compressed into long lines.

To remove the write-method as a possible cause, this pass rewrote the key
agent-first files using `Path.write_text(...)` with explicit newline characters.

## 2. Files Rewritten

- `README.md`
- `START-HERE.md`
- `workflows/agent-first-content-pipeline.md`
- `workflows/site-ingest-to-claims.md`
- `workflows/agent-claim-review.md`
- `workflows/agent-content-draft.md`
- `prompts/site-import-agent.prompt.md`
- `reviews/review-014-agent-first-consistency-patch.md`
- `reviews/review-015-agent-first-markdown-and-wording-repair.md`

## 3. Files Updated

- `reviews/index.md`
- `reviews/review-016-heredoc-markdown-repair.md`

## 4. Validation Checks

| Check | Result | Notes |
|:---|:---|:---|
| git diff --check | pass | Run before commit. |
| no lines >300 chars except URLs | pass | Checked allowed files. |
| no glued headings | pass | Checked rewritten files. |
| no glued tables | pass | Checked START-HERE and review tables. |
| claim registry unchanged | pass | No diff to pilot claim registry. |

## 5. What Was Not Changed

- 30 claims.
- Product taxonomy.
- Selected products.
- Source/evidence IDs.
- Human approval.
- RikaNV Doctrine.
- Anti-PBN policy.

## 6. Verdict

READY FOR AGENT SITE IMPORT

## 7. Next Step

Run Site Import Agent on the approved `rikanv.ru` base scope.
