# Product Schema

## Назначение

`product` описывает конкретный прибор, модель, линейку или продуктовую группу RikaNV.

## Обязательные поля

| Поле | Описание |
|---|---|
| product_id | стабильный идентификатор |
| official_name | официальное название |
| product_line | линейка |
| status | актуальная, архивная, draft |
| short_purpose | краткое назначение |
| owner | ответственный |
| updated_at | дата обновления |

## Опциональные поля

- aliases;
- category;
- release_date;
- market_status;
- related_product_profile_id;
- notes.

## Связи

- `product-profile`;
- `claim`;
- `source`;
- `evidence`;
- `test-report`;
- `comparison`.

## Пример

| Поле | Значение |
|---|---|
| product_id | `product-lesnik-todo` |
| official_name | `RikaNV Lesnik TODO: нужны данные RikaNV` |
| product_line | `Lesnik` |
| status | `draft` |
| short_purpose | `TODO: нужны данные RikaNV` |
| owner | `TODO` |
| updated_at | `TODO` |

## Типичные ошибки

- Использовать неофициальное название как каноническое.
- Смешивать линейку и конкретную модель.
- Указывать характеристики без источника.

## Статус MVP

required
