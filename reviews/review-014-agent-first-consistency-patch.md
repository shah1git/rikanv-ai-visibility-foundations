# Review 014: Agent-First Consistency Patch

## 1. Why This Was Needed

`review-013` introduced the agent-first pivot, but several entry-point and
operational files still had wording that could be read as manual-first:
manual preparation, manual data transfer or full human review as the default
path.

This patch aligns README, START-HERE and key operating docs with the model:
agent-first, human-approved.

## 2. Files Changed

- `README.md`
- `START-HERE.md`
- `docs/04-core-loop.md`
- `docs/08-editorial-workflow.md`
- `docs/13-90-day-plan.md`
- `pilot-30-days/day-1-product-truth-start.md`
- `pilot-30-days/30-day-definition-of-done.md`
- `workflows/agent-first-content-pipeline.md`
- `workflows/site-ingest-to-claims.md`
- `workflows/agent-claim-review.md`
- `workflows/agent-content-draft.md`
- `prompts/site-import-agent.prompt.md`
- `reviews/index.md`

## 3. Contradictions Fixed

| Old wording/problem | New wording/fix | File |
|:---|:---|:---|
| Manual-first pilot could be inferred | Agent-first, human-approved pilot | `README.md`, `START-HERE.md` |
| “Do not automate” wording could be misread as no agents | Do not build production runtime or publish automatically | `START-HERE.md` |
| Manual data transfer as primary path | Site Import Agent and Product Truth Extraction Agent | `README.md`, Day 1 doc |
| Full human review of claims as default | Human exception review only | Core loop and editorial workflow |
| Day 1 as Product Truth Start session | Day 1 as Agent Site Import Start | Day 1 doc |
| Unclear source discovery scope | Discover only within `rikanv.ru`; external domains blocked | Site import prompt and workflow |

## 4. What Did Not Change

- Product taxonomy.
- Selected products and lines.
- The 30 claims.
- `source_id` / `evidence_id`.
- Human approval.
- RikaNV Doctrine.
- Anti-PBN policy.
- No-code / no-runtime constraint.

## 5. Remaining Human Responsibilities

- Approve product scope.
- Resolve taxonomy ambiguity.
- Review blocked/high-risk claims.
- Provide additional sources when evidence is missing.
- Approve publication.
- Own final publication approval.

## 6. Verdict

READY FOR AGENT SITE IMPORT

## 7. Next Step

Run Site Import Agent on the approved `rikanv.ru` base scope and produce the
next source snapshot.
