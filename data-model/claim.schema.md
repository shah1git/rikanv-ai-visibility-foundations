# Claim Schema

## Назначение

`claim` — проверяемое утверждение о продукте, группе продуктов, сравнении, сервисе, цене, доступности, прошивке или сценарии применения.

Claim является центральной единицей проекта. Статьи и другие материалы строятся из claims.

## Обязательные поля

| Поле | Описание |
|---|---|
| claim_id | стабильный идентификатор |
| statement | текст утверждения |
| product | продукт или группа продуктов |
| context | контекст, в котором утверждение верно |
| claim_type | тип claim |
| source_ids | источники |
| evidence_ids | evidence |
| confidence | уровень уверенности |
| status | статус claim |
| created_at | дата создания |
| updated_at | дата обновления |
| owner | ответственный |
| reviewer | reviewer |
| expiration_or_review_date | дата пересмотра |
| notes | заметки |

## Claim Type

| Тип | Значение |
|---|---|
| specification | характеристика |
| performance | результат работы или теста |
| comparison | сравнение с конкурентом или классом |
| service | сервисный опыт |
| usability | удобство использования |
| pricing | цена |
| availability | наличие |
| firmware | прошивка или функция прошивки |
| scenario_fit | пригодность для сценария |
| limitation | ограничение |

## Status

| Статус | Значение |
|---|---|
| draft | создано, но не подтверждено |
| verified | проверено и разрешено к использованию |
| disputed | есть спор или противоречие |
| outdated | устарело |
| rejected | отклонено и не используется |

## Confidence

| Уровень | Значение |
|---|---|
| low | слабые или неполные данные |
| medium | есть источник, но не хватает проверки или контекста |
| high | надежные источники и ясный контекст |
| verified | проверено reviewer |

На MVP-этапе не используются проценты уверенности.

## Опциональные поля

- related_claim_ids;
- competitor_product;
- measurement_conditions;
- channel_restrictions;
- public wording;
- internal_only_notes.

## Связи

- `product`;
- `source`;
- `evidence`;
- `test-report`;
- `comparison`;
- `article`;
- `review`.

## Пример

| Поле | Значение |
|---|---|
| claim_id | `claim-lesnik-spec-sensor-todo` |
| statement | `RikaNV Lesnik TODO: модель имеет TODO: сенсор по официальной спецификации TODO: источник.` |
| product | `RikaNV Lesnik` |
| context | `официальная карточка продукта` |
| claim_type | `specification` |
| source_ids | `TODO` |
| evidence_ids | `TODO` |
| confidence | `low` |
| status | `draft` |
| created_at | `TODO` |
| updated_at | `TODO` |
| owner | `TODO` |
| reviewer | `TODO` |
| expiration_or_review_date | `TODO` |
| notes | `TODO: нужны данные RikaNV` |

## Типичные ошибки

- Писать “лучший” без критерия и evidence.
- Не указывать контекст.
- Делать comparative claim без данных конкурента.
- Переводить draft в verified без reviewer.
- Использовать устаревшую цену или наличие.

## Статус MVP

required
