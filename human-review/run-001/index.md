# Human Review Package Run 001

## Purpose

Этот пакет нужен, чтобы человек не перечитывал все drafts вручную,
а принял только ключевые решения.

Пакет не делает материалы publication-ready.
Он только собирает вопросы, рекомендации и последствия решений.

## Inputs

- `content-drafts/run-001-cleaned/index.md`.
- `content-drafts/run-001-cleaned/ovod-l25-cleaned-draft.md`.
- `content-drafts/run-001-cleaned/lesnik2-650l-cleaned-draft.md`.
- `content-drafts/run-001-cleaned/surok-l15-cleaned-draft.md`.
- `content-drafts/run-001-cleaned/hypnose2-650l-cleaned-draft.md`.
- `content-drafts/run-001-cleaned/cleanup-change-log.md`.
- `content-drafts/run-001-cleaned/cleanup-remaining-issues.md`.
- `content-drafts/run-001/draft-risk-register.md`.
- `content-drafts/run-001/precheck-technical-run-001.md`.
- `content-drafts/run-001/precheck-doctrine-run-001.md`.
- `content-drafts/run-001/precheck-publication-blockers.md`.
- `reviews/review-024-content-draft-cleanup-run-001.md`.

## What humans must decide

- Как обрабатывать Ovod L25 no-LRF limitation.
- Можно ли использовать Lesnik2 650L recoil rating.
- Как трактовать Hypnose2 line-source context.
- Какая формула допустима для detection и LRF values.
- Можно ли использовать field-performance claims без тестов.
- Нужно ли исключить volatile commercial data из первого package.
- Можно ли двигать cleaned drafts к следующему publication package run.

## What humans do not need to review line-by-line

- Safe claims уже отфильтрованы агентами.
- Volatile fields исключены.
- Competitor comparisons исключены.
- Field-performance guarantees исключены.
- Drafts остаются `draft_only`.
- Publication still requires final human approval.

## Package files

| File | Purpose |
|---|---|
| `decision-dashboard.md` | Краткая карта решений и blockers. |
| `technical-review-questions.md` | Технические вопросы для reviewer. |
| `doctrine-review-questions.md` | Doctrine/compliance вопросы. |
| `publication-approval-checklist.md` | Gate checklist before publication. |
| `human-decision-form.md` | Форма, которую заполняет человек. |
| `recommended-decisions.md` | Safe recommendations from agent. |

## Recommended workflow

1. Open `decision-dashboard.md`.
2. Answer `human-decision-form.md`.
3. Review only questions marked P0/P1.
4. Send decisions back to Codex for Human Decisions Apply Run 001.
