# Source Schema

## Назначение

`source` описывает источник информации, из которого берутся facts и claims.

## Обязательные поля

| Поле | Описание |
|---|---|
| source_id | идентификатор источника |
| title | название |
| source_type | тип источника |
| owner | владелец или ответственный |
| date | дата источника или получения |
| access_level | public, internal, confidential |
| usage_allowed | можно ли использовать в публикациях |
| notes | ограничения |

## Опциональные поля

- url;
- file_reference;
- author;
- version;
- related_product_ids;
- related_evidence_ids;
- permission_status.

## Связи

- `claim`;
- `evidence`;
- `test-report`;
- `article`;

## Пример

| Поле | Значение |
|---|---|
| source_id | `source-lesnik-manual-todo` |
| title | `Инструкция RikaNV Lesnik TODO` |
| source_type | `manual` |
| access_level | `TODO` |
| usage_allowed | `TODO` |
| notes | `TODO: нужны данные RikaNV` |

## Типичные ошибки

- Использовать источник без даты.
- Публиковать confidential source.
- Не фиксировать, разрешено ли публичное использование.

## Статус MVP

required
