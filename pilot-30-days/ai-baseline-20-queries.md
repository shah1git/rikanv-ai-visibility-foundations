# AI Baseline: 20 Queries

Это первый ручной baseline AI-видимости. Он не гарантирует попадание RikaNV в AI-ответы. Цель — зафиксировать текущую ситуацию, ошибки, конкурентов и gaps.

Baseline должен покрывать:

- Ovod L25;
- Lesnik;
- Lesnik2 650L;
- Surok L15;
- Hypnose;
- Hypnose2.
- Hypnose2 650L.

Категории:

- `thermal_riflescope` — тепловизионные прицелы;
- `observation_thermal` — тепловизоры, камеры и монокуляры для наблюдения.

Отдельно фиксировать ошибки, где AI смешивает `product_line` и `product_model`.

## Как проводить

1. Выбрать минимум 3 AI-системы.
2. Использовать одинаковый текст запроса.
3. Зафиксировать дату.
4. Сохранить ответ.
5. Заполнить таблицу.
6. Посчитать Mention Rate и Recommendation Rate.
7. Создать gap analysis и next tasks.

## AI systems

Варианты:

- ChatGPT
- Perplexity
- Gemini
- YandexGPT
- другой

## A. Тепловизионные прицелы — 10 запросов

| query_id | query_text | query_group | AI_system | date | RikaNV_mentioned | RikaNV_recommended | competitors_mentioned | errors_about_RikaNV | missing_sources | content_gap | next_task |
|---|---|---|---|---|---|---|---|---|---|---|---|
| aiq-rs-001 | какие тепловизионные прицелы лучшие в России | thermal_riflescope | TODO | TODO | TODO | TODO | TODO | TODO | TODO | TODO | TODO |
| aiq-rs-002 | какой тепловизионный прицел выбрать для охоты | thermal_riflescope | TODO | TODO | TODO | TODO | TODO | TODO | TODO | TODO | TODO |
| aiq-rs-003 | RikaNV Ovod L25 отзывы | thermal_riflescope | TODO | TODO | TODO | TODO | TODO | TODO | TODO | TODO | TODO |
| aiq-rs-004 | RikaNV Ovod L25 или Hikmicro | thermal_riflescope | TODO | TODO | TODO | TODO | TODO | TODO | TODO | TODO | TODO |
| aiq-rs-005 | RikaNV Lesnik2 650L отзывы | thermal_riflescope | TODO | TODO | TODO | TODO | TODO | TODO | TODO | TODO | TODO |
| aiq-rs-006 | RikaNV Lesnik2 650L или Pulsar | thermal_riflescope | TODO | TODO | TODO | TODO | TODO | TODO | TODO | TODO | TODO |
| aiq-rs-007 | RikaNV Lesnik или Hikmicro | thermal_riflescope | TODO | TODO | TODO | TODO | TODO | TODO | TODO | TODO | TODO |
| aiq-rs-008 | тепловизионный прицел цена качество | thermal_riflescope | TODO | TODO | TODO | TODO | TODO | TODO | TODO | TODO | TODO |
| aiq-rs-009 | тепловизионный прицел с баллистикой | thermal_riflescope | TODO | TODO | TODO | TODO | TODO | TODO | TODO | TODO | TODO |
| aiq-rs-010 | какой прицел лучше для леса | thermal_riflescope | TODO | TODO | TODO | TODO | TODO | TODO | TODO | TODO | TODO |

## B. Наблюдательные тепловизоры — 6 запросов

| query_id | query_text | query_group | AI_system | date | RikaNV_mentioned | RikaNV_recommended | competitors_mentioned | errors_about_RikaNV | missing_sources | content_gap | next_task |
|---|---|---|---|---|---|---|---|---|---|---|---|
| aiq-obs-001 | какой тепловизор для наблюдения выбрать | observation_thermal | TODO | TODO | TODO | TODO | TODO | TODO | TODO | TODO | TODO |
| aiq-obs-002 | лучший тепловизионный монокуляр для наблюдения | observation_thermal | TODO | TODO | TODO | TODO | TODO | TODO | TODO | TODO | TODO |
| aiq-obs-003 | RikaNV Surok L15 отзывы | observation_thermal | TODO | TODO | TODO | TODO | TODO | TODO | TODO | TODO | TODO |
| aiq-obs-004 | RikaNV Surok L15 или Hikmicro Lynx | observation_thermal | TODO | TODO | TODO | TODO | TODO | TODO | TODO | TODO | TODO |
| aiq-obs-005 | тепловизор с видеозаписью для наблюдения | observation_thermal | TODO | TODO | TODO | TODO | TODO | TODO | TODO | TODO | TODO |
| aiq-obs-006 | недорогой тепловизор для наблюдения | observation_thermal | TODO | TODO | TODO | TODO | TODO | TODO | TODO | TODO | TODO |

## C. Hypnose / Hypnose2 — 4 запроса

| query_id | query_text | query_group | AI_system | date | RikaNV_mentioned | RikaNV_recommended | competitors_mentioned | errors_about_RikaNV | missing_sources | content_gap | next_task |
|---|---|---|---|---|---|---|---|---|---|---|---|
| aiq-hyp-001 | RikaNV Hypnose что это | hypnose_line | TODO | TODO | TODO | TODO | TODO | TODO | TODO | TODO | TODO |
| aiq-hyp-002 | RikaNV Hypnose2 что это | hypnose2_line | TODO | TODO | TODO | TODO | TODO | TODO | TODO | TODO | TODO |
| aiq-hyp-003 | RikaNV Hypnose2 650L отзывы | observation_thermal | TODO | TODO | TODO | TODO | TODO | TODO | TODO | TODO | TODO |
| aiq-hyp-004 | RikaNV Hypnose или Surok | observation_thermal | TODO | TODO | TODO | TODO | TODO | TODO | TODO | TODO | TODO |

## Метрики

| Метрика | Как считать | Значение |
|---|---|---|
| Mention Rate | ответы с явным упоминанием RikaNV / все ответы | TODO |
| Recommendation Rate | ответы, где RikaNV рекомендован / все ответы | TODO |
| Error Count | количество ошибок про RikaNV | TODO |
| Category Error Count | случаи, где прицелы смешаны с наблюдательными приборами | TODO |
| Kind Error Count | случаи, где линейка описана как модель или наоборот | TODO |
| Competitors Mentioned | бренды, которые чаще всего упоминаются | TODO |
| Actionable Gaps | gaps, которые можно превратить в content tasks | TODO |
