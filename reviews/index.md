# Reviews Index

Этот файл фиксирует историю операционных ревью и планов проекта. Он не заменяет сами review-документы.

## Current review files

| file | type | purpose | status |
|:---|:---|:---|:---|
| [action-plan-001.md](action-plan-001.md) | action plan | Первый 30-дневный план ручного пилота | historical; use with current START-HERE |
| [review-001-spine.md](review-001-spine.md) | review | Spine Review несущего скелета проекта | completed |
| [review-005-product-priority-and-line-correction.md](review-005-product-priority-and-line-correction.md) | review | Коррекция product priority, Lesnik и line/model handling | completed |
| [review-006-repo-hygiene-and-provenance.md](review-006-repo-hygiene-and-provenance.md) | review | Repo Hygiene & Provenance Pass 001 | completed |
| [review-007-human-product-decisions-applied.md](review-007-human-product-decisions-applied.md) | review | Применение human product decisions к 30-дневному пилоту | completed |
| [review-008-markdown-render-fix.md](review-008-markdown-render-fix.md) | review | Markdown Render Fix | superseded by review-009 |
| [review-009-real-markdown-linebreak-fix.md](review-009-real-markdown-linebreak-fix.md) | review | Real Markdown Linebreak Fix | completed |
| [review-010-remote-verified-markdown-repair.md](review-010-remote-verified-markdown-repair.md) | review | Remote-Verified Markdown Repair | completed |
| [review-011-claim-review-prep.md](review-011-claim-review-prep.md) | review | Claim Review Preparation | created |
| [review-012-claim-review-markdown-fix.md](review-012-claim-review-markdown-fix.md) | review | Claim Review Markdown Fix | completed |
| [review-013-agent-first-pivot.md](review-013-agent-first-pivot.md) | review | Agent-First Pivot | completed |
| [review-014-agent-first-consistency-patch.md](review-014-agent-first-consistency-patch.md) | review | Agent-First Consistency Patch | completed |
| [review-015-agent-first-markdown-and-wording-repair.md](review-015-agent-first-markdown-and-wording-repair.md) | review | Agent-First Markdown and Wording Repair | completed |

## Review 008 Entry

- file: [review-008-markdown-render-fix.md](review-008-markdown-render-fix.md)
- Theme: Markdown Render Fix
- Status: superseded by review-009
- Purpose: make key Markdown files readable on GitHub before Claim Review.

## Review 009 Entry

- file: [review-009-real-markdown-linebreak-fix.md](review-009-real-markdown-linebreak-fix.md)
- Theme: Real Markdown Linebreak Fix
- Status: completed
- Purpose: actually restore linebreak-safe Markdown before Claim Review Prep.

## Review 010 Entry

- file: [review-010-remote-verified-markdown-repair.md](review-010-remote-verified-markdown-repair.md)
- Theme: Remote-Verified Markdown Repair
- Status: completed
- Purpose: confirm Markdown linebreaks through raw GitHub after push.

## Review 011 Entry

- file: [review-011-claim-review-prep.md](review-011-claim-review-prep.md)
- Theme: Claim Review Preparation
- Status: created
- Purpose: prepare human review of 30 pilot claims.

## Review 012 Entry

- file: [review-012-claim-review-markdown-fix.md](review-012-claim-review-markdown-fix.md)
- Theme: Claim Review Markdown Fix
- Status: completed
- Purpose: make Claim Review Prep files readable before human session.

## Review 013 Entry

- file: [review-013-agent-first-pivot.md](review-013-agent-first-pivot.md)
- Theme: Agent-First Pivot
- Status: completed
- Purpose: shift the operating model from manual-first to agent-first, human-approved.

## Review 014 Entry

- file: [review-014-agent-first-consistency-patch.md](review-014-agent-first-consistency-patch.md)
- Theme: Agent-First Consistency Patch
- Status: completed
- Purpose: remove remaining manual-first contradictions from entry-point and operating docs.

## Review 015 Entry

- file: [review-015-agent-first-markdown-and-wording-repair.md](review-015-agent-first-markdown-and-wording-repair.md)
- Theme: Agent-First Markdown and Wording Repair
- Status: completed
- Purpose: make agent-first pivot files GitHub-readable and fix residual wording before Site Import Agent.

## Numbering note

`review-002`, `review-003` и `review-004` отсутствуют в текущем репозитории. Они не считаются потерянными обязательными документами.

Если потребуется, future review может отдельно создать:

- doctrine sanity review;
- product import quality review;
- publication readiness review.

`review-008` создан как Markdown Render Fix перед Claim Review Prep.

`review-009` заменяет статус `review-008` как фактическая проверка переносов
строк после внешней raw GitHub проверки.

`review-010` фиксирует remote raw validation через `raw.githubusercontent.com`.
