# Comparison Schema

## Назначение

`comparison` описывает честное сравнение RikaNV с конкурентом, классом устройств или пользовательским сценарием.

## Обязательные поля

| Поле | Описание |
|---|---|
| comparison_id | идентификатор |
| title | тема сравнения |
| products_compared | модели или группы |
| scenario | сценарий |
| known_data | что известно |
| missing_data | каких данных нет |
| claim_ids | claims |
| source_ids | sources |
| evidence_ids | evidence |
| limitations | ограничения |
| bias_review_status | статус bias check |
| technical_review_status | статус technical review |
| status | draft, reviewed, approved, rejected |

## Опциональные поля

- competitor_sources;
- test_report_ids;
- table_reference;
- target_audience;
- publication_channel.

## Связи

- `product`;
- `claim`;
- `source`;
- `evidence`;
- `review`;
- `article`.

## Пример

| Поле | Значение |
|---|---|
| comparison_id | `comparison-lesnik-vs-competitor-todo` |
| title | `RikaNV Lesnik vs TODO: конкурент` |
| products_compared | `TODO` |
| missing_data | `TODO: нужны данные RikaNV и данные конкурента` |
| status | `draft` |

## Типичные ошибки

- Сравнивать модели разных классов без пояснения.
- Делать абсолютного победителя без тестов.
- Не показывать сильные стороны конкурента.

## Статус MVP

required
