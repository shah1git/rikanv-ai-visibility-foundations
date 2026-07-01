# Review Schema

## Назначение

`review` фиксирует проверку материала, claim, сравнения, теста или источника.

## Обязательные поля

| Поле | Описание |
|---|---|
| review_id | идентификатор |
| review_type | technical, bias, compliance, editorial, source |
| reviewed_object_type | что проверяется |
| reviewed_object_id | идентификатор объекта |
| reviewer | reviewer |
| date | дата |
| result | pass, needs revision, reject |
| findings | замечания |
| required_changes | обязательные правки |

## Опциональные поля

- related_claim_ids;
- risk_level;
- follow_up_date;
- notes;

## Связи

- `claim`;
- `article`;
- `comparison`;
- `test-report`;
- `source`;
- `digital-role`.

## Пример

| Поле | Значение |
|---|---|
| review_id | `review-technical-article-todo` |
| review_type | `technical` |
| result | `needs revision` |
| findings | `TODO` |
| required_changes | `TODO` |

## Типичные ошибки

- Писать “ок” без findings.
- Не фиксировать обязательные правки.
- Считать AI-review финальным human approval.

## Статус MVP

required
