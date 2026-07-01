# Agent Content Draft

## Goal

Content Draft Agent готовит черновики материалов только из Product Truth,
approved-for-draft claims, sources and evidence.

## Inputs

- Content task.
- Product Truth.
- Claims with agent_review_status.
- Sources.
- Evidence.
- Target audience.
- Format template.
- Doctrine notes.

## Steps

1. Select allowed claims.
2. Exclude blocked and unresolved claims.
3. Draft structure.
4. Add source-aware factual blocks.
5. Add FAQ.
6. Add “кому подходит / кому не подходит” only if claims support it.
7. Add limitations.
8. Add claims used.
9. Add sources used.
10. Mark TODO where data is missing.

## Outputs

- Draft material.
- Claims used.
- Sources used.
- TODO list.
- Questions for technical reviewer.
- Doctrine risks.

## Rules

- Do not write from memory.
- Do not add facts that are absent from claims/sources.
- Do not use “лучший” or superiority language without evidence.
- Do not publish.
- Send draft to technical / doctrine pre-check.
- Final publication approval is always human.
