# ADR-005: AI Visibility Measured, Not Assumed

## Status

accepted

## Context

AI-видимость нельзя оценивать “на глаз”. AI-ответы нестабильны и зависят от запросов, источников, системы и времени.

## Decision

AI visibility измеряется через фиксированный набор запросов, answer logs и метрики.

## Rationale

Фиксированный query set позволяет видеть динамику, errors, competitor gaps и темы для content tasks.

## Consequences

### Positive

- Появляется baseline.
- Gaps превращаются в задачи.
- Можно сравнивать месяц к месяцу.

### Tradeoffs

- Нельзя гарантировать попадание в AI-ответы.
- Нужно регулярно проводить тесты и сохранять методику.

## Review Date

2026-10-01
