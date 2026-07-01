# Article Schema

## Назначение

`article` описывает публикационный материал: статью, FAQ, buyer guide, сервисный материал, сравнение или тест.

## Обязательные поля

| Поле | Описание |
|---|---|
| article_id | идентификатор |
| title | заголовок |
| format | формат |
| target_audience | аудитория |
| objective | цель |
| claim_ids | claims used |
| source_ids | sources used |
| review_ids | reviews |
| publication_status | draft, approved, published, outdated |
| owner | ответственный |
| updated_at | дата обновления |

## Опциональные поля

- channel;
- seo_query_group;
- faq_items;
- related_product_ids;
- related_comparison_id;
- repurposed_from;
- canonical_url.

## Связи

- `content-task`;
- `claim`;
- `source`;
- `review`;
- `comparison`;

## Пример

| Поле | Значение |
|---|---|
| article_id | `article-buyer-guide-todo` |
| title | `Как выбрать тепловизионный прицел: TODO` |
| format | `buyer_guide` |
| claim_ids | `TODO` |
| publication_status | `draft` |

## Типичные ошибки

- Писать статью без claims.
- Не указывать дату обновления.
- Дублировать материал в каналах без адаптации.

## Статус MVP

required
