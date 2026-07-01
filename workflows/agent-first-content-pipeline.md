# Agent-First Content Pipeline

## Goal

Описать общий pipeline, где агенты выполняют импорт, извлечение, review и
черновики, а человек утверждает exceptions и публикацию.

## Pipeline

```text
Agent site import
↓
Product Truth extraction
↓
Claim extraction
↓
Evidence linking
↓
Agent claim review
↓
Human exception review
↓
Content draft generation
↓
Technical / doctrine pre-check
↓
Human publication approval
↓
Publication
↓
AI visibility retest
```

## Agent Work

- Import official pages from `rikanv.ru`.
- Extract Product Truth.
- Extract claims.
- Link sources and evidence.
- Assign claim tiers and risk flags.
- Create drafts from allowed claims.
- Optimize structure for human, search and AI readability.
- Prepare repurposed versions after approval.

## Human Work

- Approve priorities.
- Resolve ambiguous taxonomy.
- Review blocked or high-risk claims.
- Provide additional sources.
- Approve publication.

## Non-Goals

- No runtime selection.
- No agent framework.
- No code.
- No publication without human approval.
- No fake facts.
- No PBN or rewrite network.
