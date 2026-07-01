# Evidence Schema

## Назначение

`evidence` описывает конкретное подтверждение claim: измерение, фото, видео, лог, сервисный кейс, фрагмент инструкции или changelog.

## Обязательные поля

| Поле | Описание |
|---|---|
| evidence_id | идентификатор |
| evidence_type | тип evidence |
| source_id | связанный source |
| summary | краткое описание |
| related_product_ids | продукты |
| related_claim_ids | claims |
| date | дата |
| status | draft, accepted, rejected, outdated |
| reviewer | reviewer |

## Опциональные поля

- file_reference;
- test_conditions;
- raw_data_location;
- publication_allowed;
- anonymization_required;
- limitations.

## Связи

- `source`;
- `claim`;
- `test-report`;
- `review`.

## Пример

| Поле | Значение |
|---|---|
| evidence_id | `evidence-rangefinder-test-todo` |
| evidence_type | `test_measurement` |
| source_id | `TODO` |
| summary | `TODO: нужны данные RikaNV` |
| status | `draft` |

## Типичные ошибки

- Называть evidence мнение без подтверждения.
- Не хранить условия теста.
- Использовать фото или видео без разрешения.

## Статус MVP

required
