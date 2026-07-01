# Evidence Register Table

Evidence Register фиксирует конкретные подтверждения claims.

Official product page может подтверждать specification claims для конкретной модели. Она не подтверждает независимые claims о превосходстве, полевой эффективности или сравнении с конкурентами без тестов.

Official line page подтверждает только line-level claims: категорию линейки, наличие линейки, список моделей, общие описания линейки. Official line page не подтверждает конкретные характеристики модели, если эти данные относятся к одной модели внутри линейки.

## Допустимые evidence_type

- official_product_page
- official_line_page
- technical_document
- official_faq
- photo_video
- measurement
- field_test
- service_case
- customer_feedback
- comparison_result

## Evidence Register

| evidence_id | evidence_type | related_product | related_claim | source_id | context | test_conditions | date | who_observed | publishable | confidence | status | notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| ev_rikanv_ru_ovod_l25_specs_20260701 | official_product_page | RikaNV Ovod L25 | specification claims | src_rikanv_ru_ovod_l25_20260701 | official specs and product description | N/A — official page | 2026-07-01 | RikaNV public site | yes | verified | accepted | Подтверждает только то, что прямо указано на product page |
| ev_rikanv_ru_lesnik_line_20260701 | official_line_page | RikaNV Lesnik | line-level claims | src_rikanv_ru_lesnik_line_20260701 | official Lesnik line page | N/A — official page | 2026-07-01 | RikaNV public site | yes | verified | accepted | Подтверждает line-level claims; не подтверждает model-level specs без выбора модели |
| ev_rikanv_ru_surok_l15_specs_20260701 | official_product_page | RikaNV Surok L15 | specification claims | src_rikanv_ru_surok_l15_20260701 | official specs and product description | N/A — official page | 2026-07-01 | RikaNV public site | yes | verified | accepted | Подтверждает только то, что прямо указано на product page |
| ev_rikanv_ru_hypnose_line_20260701 | official_line_page | RikaNV Hypnose | line-level claims | src_rikanv_ru_hypnose_line_20260701 | official Hypnose line page | N/A — official page | 2026-07-01 | RikaNV public site | yes | verified | accepted | Hypnose = product_line; не подтверждает model-level specs |
| ev_rikanv_ru_hypnose2_line_20260701 | official_line_page | RikaNV Hypnose2 | line-level claims | src_rikanv_ru_hypnose_line_20260701 | Hypnose2 generation/models listed on official Hypnose line page | N/A — official page | 2026-07-01 | RikaNV public site | yes | high | accepted | Отдельная line page не найдена; использовать осторожно как line-level evidence |
| ev_rikanv_ru_ovod_line_20260701 | official_line_page | RikaNV Ovod | line-level claims | src_rikanv_ru_ovod_line_20260701 | official Ovod line page | N/A — official page | 2026-07-01 | RikaNV public site | yes | verified | accepted | Не подтверждает claims по конкретной модели сверх страницы модели |
| ev_rikanv_ru_surok_line_20260701 | official_line_page | RikaNV Surok | line-level claims | src_rikanv_ru_surok_line_20260701 | official Surok line page | N/A — official page | 2026-07-01 | RikaNV public site | yes | verified | accepted | Не подтверждает claims по конкретной модели сверх страницы модели |

## Candidate model evidence

| evidence_id | evidence_type | related_product | related_claim | source_id | context | test_conditions | date | who_observed | publishable | confidence | status | notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| ev_rikanv_ru_lesnik_models_20260701 | official_product_page | RikaNV Lesnik2 models | candidate model specification claims | src_rikanv_ru_lesnik_line_20260701 | found model pages: 335L, 360L, 360L PRO, 650L, 650L PRO, 660L, 660L PRO | N/A — official pages | 2026-07-01 | RikaNV public site | yes | high | accepted | Use model-specific source_id before verified model-level claim |
| ev_rikanv_ru_hypnose2_models_20260701 | official_product_page | RikaNV Hypnose2 models | candidate model specification claims | src_rikanv_ru_hypnose_line_20260701 | found model pages: 335L, 650L, 660D | N/A — official pages | 2026-07-01 | RikaNV public site | yes | high | accepted | Use model-specific source_id before verified model-level claim |

## Правила

- Evidence должно ссылаться на `source_id`.
- Если evidence нельзя публиковать, поставить `publishable = no`.
- Если это сервисный кейс, данные должны быть обезличены.
- `confidence`: low / medium / high / verified.
- `status`: draft / accepted / rejected / outdated.
- Сравнительные claims требуют тестов, competitor sources и bias check.
- Для claims о превосходстве, надежности, полевой эффективности и сравнении с конкурентами нужны отдельные `test_report`, `field_test` или `comparison_result`.
