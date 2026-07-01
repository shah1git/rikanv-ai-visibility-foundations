# Content Task Schema

## Назначение

`content-task` описывает задачу на производство или обновление контента.

## Обязательные поля

| Поле | Описание |
|---|---|
| task_id | идентификатор |
| title | название задачи |
| source_of_task | откуда появилась задача |
| target_audience | аудитория |
| format | формат |
| objective | цель |
| required_claims | нужные claims |
| required_evidence | нужные evidence |
| priority | high, medium, low |
| owner | ответственный |
| status | backlog, in_progress, blocked, review, approved, published |

## Опциональные поля

- related_ai_query_ids;
- related_gap;
- channel;
- deadline;
- risk_notes;
- reviewer;

## Связи

- `ai-query`;
- `ai-answer`;
- `claim`;
- `evidence`;
- `article`;
- `review`.

## Пример

| Поле | Значение |
|---|---|
| task_id | `task-service-faq-todo` |
| source_of_task | `service_request` |
| required_claims | `TODO` |
| priority | `high` |
| status | `backlog` |

## Типичные ошибки

- Создавать задачу “написать статью” без цели.
- Не указывать нужные evidence.
- Не назначать reviewer.

## Статус MVP

required
