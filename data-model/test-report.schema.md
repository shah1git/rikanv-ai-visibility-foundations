# Test Report Schema

## Назначение

`test-report` фиксирует методику и результаты испытаний, из которых можно создавать evidence и claims.

## Обязательные поля

| Поле | Описание |
|---|---|
| test_report_id | идентификатор |
| title | название теста |
| product_ids | продукты |
| objective | цель |
| methodology | методика |
| conditions | условия |
| results | результаты |
| limitations | ограничения |
| evidence_ids | evidence |
| claim_ids | claims |
| reviewer | reviewer |
| status | draft, reviewed, published, rejected |
| date | дата |

## Опциональные поля

- competitor_product_ids;
- equipment_used;
- raw_data_location;
- photo_video_links;
- repeatability_notes;
- safety_notes.

## Связи

- `product`;
- `evidence`;
- `claim`;
- `comparison`;
- `article`.

## Пример

| Поле | Значение |
|---|---|
| test_report_id | `test-autonomy-todo` |
| title | `Тест автономности TODO` |
| objective | `TODO: нужны данные RikaNV` |
| methodology | `TODO` |
| status | `draft` |

## Типичные ошибки

- Публиковать результат без условий теста.
- Делать общий вывод из одного слабого измерения.
- Не указывать ограничения.

## Статус MVP

required
