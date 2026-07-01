# AI Answer Schema

## Назначение

`ai-answer` фиксирует ответ AI-системы на тестовый запрос.

## Обязательные поля

| Поле | Описание |
|---|---|
| answer_id | идентификатор |
| query_id | связанный запрос |
| ai_system | AI-система |
| test_date | дата теста |
| answer_summary | краткое содержание |
| mentioned_brands | бренды |
| rikanv_mentioned | да/нет |
| rikanv_recommended | да/нет |
| errors_found | ошибки |
| source_attribution | источники, если есть |
| analyst_notes | заметки |

## Опциональные поля

- full_answer_reference;
- model_name;
- prompt_context;
- competitor_gap_notes;
- related_content_task_ids;

## Связи

- `ai-query`;
- `content-task`;
- `claim`;
- `review`.

## Пример

| Поле | Значение |
|---|---|
| answer_id | `answer-aiq-001-2026-07-01` |
| query_id | `aiq-001` |
| ai_system | `TODO` |
| rikanv_mentioned | `TODO` |
| errors_found | `TODO` |

## Типичные ошибки

- Сохранять только успешные ответы.
- Не фиксировать дату.
- Не отделять упоминание от рекомендации.

## Статус MVP

required
