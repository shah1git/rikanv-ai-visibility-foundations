# Human Approval Workflow

## Цель

Зафиксировать, когда и как человек утверждает материал перед публикацией.

Agent-first pipeline уменьшает ручную работу, но не отменяет final human
publication approval.

## Human Approval обязателен

- Перед публикацией.
- При сравнении с конкурентом.
- При технических claims.
- При юридически чувствительных формулировках.
- При данных из переписки с поставщиками.
- При сервисных инструкциях.
- При материалах на основе отзывов клиентов.

## Human Exception Review

До финального approval человек смотрит только exceptions:

- `blocked_for_publication`;
- `human_review_required`;
- `needs_rewording` with high risk;
- competitor comparison;
- performance claims;
- confidential or volatile claims;
- line/model ambiguity.

## Шаги

1. Проверить, что draft прошел нужные reviews.
2. Проверить sources и evidence.
3. Проверить, что TODO не опубликованы как факты.
4. Проверить конфиденциальность.
5. Принять решение: approved, needs revision или rejected.
6. Зафиксировать дату, ответственного и notes.

## Ошибки

- Считать AI-review финальным approval.
- Считать agent claim review финальным approval.
- Утверждать материал без technical review.
- Публиковать “временно”, если claims не проверены.
