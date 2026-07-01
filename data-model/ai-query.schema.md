# AI Query Schema

## Назначение

`ai-query` хранит тестовый запрос для AI Visibility Lab.

## Обязательные поля

| Поле | Описание |
|---|---|
| query_id | идентификатор |
| query_text | текст запроса |
| query_group | группа |
| user_intent | намерение пользователя |
| priority | high, medium, low |
| expected_relevance_to_rikanv | why relevant |
| status | active, paused, retired |
| version | версия набора |

## Опциональные поля

- target_region;
- budget_context;
- scenario;
- competitor_mentions;
- safety_notes.

## Связи

- `ai-answer`;
- `content-task`;
- `article`.

## Пример

| Поле | Значение |
|---|---|
| query_id | `aiq-001` |
| query_text | `какой тепловизионный прицел выбрать` |
| query_group | `общие рекомендации` |
| status | `active` |
| version | `v1` |

## Типичные ошибки

- Менять запрос без новой версии.
- Использовать слишком узкие запросы только про RikaNV.
- Не группировать запросы по intent.

## Статус MVP

required
