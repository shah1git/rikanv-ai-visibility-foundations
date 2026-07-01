# Review 012: Claim Review Markdown Fix

## 1. Why this was needed

`review-011` and `claim-review-session-board` were created, but raw GitHub
showed compressed Markdown in the new Claim Review files.

Human Claim Review should not start until the session board is readable in raw
GitHub and in normal Markdown rendering.

## 2. Files fixed

- `pilot-30-days/claim-review-session-board.md`
- `reviews/review-011-claim-review-prep.md`
- `reviews/index.md`
- `reviews/review-012-claim-review-markdown-fix.md`

## 3. Validation

| Check | Result | Notes |
|:---|:---|:---|
| git diff --check | pass | No whitespace errors |
| claim board has 30 claims | pass | `grep -c '^### claim-'` returns 30 |
| no lines >300 chars except URLs | pass | Checked Claim Review files |
| no glued headings | pass | Claim cards keep headings on separate lines |
| no glued tables | pass | Table separator rows normalized for the required checker |
| review-011 readable | pass | Sections and tables remain separated |

## 4. What was not changed

- Claim content.
- `source_id` / `evidence_id`.
- Claim statuses.
- `recommended_review_status` values.
- Product taxonomy.
- Product priorities.
- Doctrine rules.

## 5. Verdict

READY FOR HUMAN CLAIM REVIEW.

## 6. Next step

Run the 90-minute human Claim Review Session using
`pilot-30-days/claim-review-session-board.md`.
