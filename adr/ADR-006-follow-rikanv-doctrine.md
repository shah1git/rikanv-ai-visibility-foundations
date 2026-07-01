# ADR-006: Follow RikaNV Doctrine

## Status

accepted

## Context

RikaNV AI Visibility Foundations производит Product Truth, claims, контент, сравнения и AI Visibility материалы. Эти артефакты влияют на то, как бренд звучит для пользователей, поисковых систем и AI-систем.

У RikaNV есть отдельная доктрина: `https://github.com/shah1git/rikanv-doctrine`. Репозиторий доступен, прочитаны README и ключевые Markdown-файлы: концепция приборов, voice principles, antimarketing, privacy/security/agent reliability.

## Decision

Проект следует RikaNV Doctrine. Все Product Truth, Claims, контент, сравнения и AI Visibility действия должны проходить doctrine compliance check.

## Rationale

- Доктрина фиксирует категории и принципы описания приборов RikaNV.
- Доктрина запрещает маркетинговые эпитеты, давление, выдуманные факты и смешение смысловых слоев.
- Доктрина требует проверяемости фактов и отказа от домыслов.
- Для этого проекта особенно важно не смешивать тепловизионные прицелы и наблюдательные приборы.

## Consequences

### Positive

- Product Truth становится ближе к брендовому источнику истины.
- Claims получают дополнительный doctrine quality gate.
- Контент остается в стиле RikaNV: факты, физика, числа, без рекламной воды.
- AI Visibility baseline фиксирует category errors.

### Tradeoffs

- Публикации могут замедлиться из-за doctrine review.
- Нужен doctrine compliance owner.
- При расхождении doctrine и `rikanv.ru` потребуется human decision.

## Implementation

- Создан `doctrine/rikanv-doctrine-summary.md`.
- Создан `checklists/doctrine-compliance-checklist.md`.
- В `START-HERE.md` добавлен раздел RikaNV Doctrine.
- В pilot files добавлен doctrine compliance reviewer и правило блокировки публикации без doctrine review.

## Review Date

2026-08-01
