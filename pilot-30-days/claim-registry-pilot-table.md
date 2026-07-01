# Claim Registry Pilot Table

Эта таблица нужна для первых 30 claims в ручном пилоте. Не заполнять claims выдуманными фактами. Если данных нет на `rikanv.ru`, писать `TODO: нет данных на rikanv.ru`.

## Статусы

- draft
- verified
- disputed
- outdated
- rejected

## Confidence

- low
- medium
- high
- verified

## Правила статуса

- `verified` — только если источник прямо подтверждает statement.
- `verified line-level` фиксируется как `status = verified`, но в `notes` обязательно указать `verified line-level`.
- Model-level specification claims допустимы только для `product_model`.
- Line-level source не подтверждает model-level specs.
- Сценарные claims по умолчанию `draft`.
- Official product page подтверждает specification claims, но не подтверждает превосходство или полевую эффективность.
- Claims по цене, наличию, скидкам, акциям, комплектации, гарантии, прошивкам и срокам поставки считать volatile и не использовать как постоянные claims без отдельного review.

## A. RikaNV Ovod L25 — 7 claims

| claim_id | claim_type | statement | product | product_kind | parent_line | context | source_id | evidence_id | confidence | status | owner | reviewer | next_action | notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| claim-ovod-l25-spec-001 | specification | RikaNV Ovod L25 является тепловизионным прицелом. | RikaNV Ovod L25 | product_model | RikaNV Ovod | category | src_rikanv_ru_ovod_l25_20260701 | ev_rikanv_ru_ovod_l25_specs_20260701 | verified | verified | Product Truth owner | Doctrine compliance owner | doctrine check | Не писать “лучший” |
| claim-ovod-l25-spec-002 | specification | RikaNV Ovod L25 относится к категории `thermal_riflescope`. | RikaNV Ovod L25 | product_model | RikaNV Ovod | category classification | src_rikanv_ru_ovod_l25_20260701 | ev_rikanv_ru_ovod_l25_specs_20260701 | verified | verified | Product Truth owner | Doctrine compliance owner | doctrine check | Категорию не смешивать с observation_thermal |
| claim-ovod-l25-spec-003 | specification | На странице rikanv.ru для RikaNV Ovod L25 указан сенсор 256×192. | RikaNV Ovod L25 | product_model | RikaNV Ovod | official specs | src_rikanv_ru_ovod_l25_20260701 | ev_rikanv_ru_ovod_l25_specs_20260701 | verified | verified | Product Truth owner | Technical reviewer | technical review | Только как official spec |
| claim-ovod-l25-spec-004 | specification | На странице rikanv.ru для RikaNV Ovod L25 указан объектив 25 мм F/0.9. | RikaNV Ovod L25 | product_model | RikaNV Ovod | official specs | src_rikanv_ru_ovod_l25_20260701 | ev_rikanv_ru_ovod_l25_specs_20260701 | verified | verified | Product Truth owner | Technical reviewer | technical review | Только как official spec |
| claim-ovod-l25-spec-005 | specification | На странице rikanv.ru для RikaNV Ovod L25 указана дальность обнаружения 1300 м. | RikaNV Ovod L25 | product_model | RikaNV Ovod | official specs | src_rikanv_ru_ovod_l25_20260701 | ev_rikanv_ru_ovod_l25_specs_20260701 | verified | verified | Product Truth owner | Technical reviewer | technical review | Не превращать в полевую гарантию |
| claim-ovod-l25-scenario-001 | scenario_fit | TODO: нет данных на rikanv.ru для сценарного вывода по Ovod L25. | RikaNV Ovod L25 | product_model | RikaNV Ovod | scenario fit | TODO | TODO | low | draft | Product Truth owner | Technical reviewer | собрать scenario evidence | Не делать вывод “лучше для леса” без тестов |
| claim-ovod-l25-limit-001 | limitation | TODO: нет данных на rikanv.ru по ограничениям, service/safety и условиям применения Ovod L25. | RikaNV Ovod L25 | product_model | RikaNV Ovod | limitation/service | TODO | TODO | low | draft | Product Truth owner | Technical reviewer | запросить ограничения RikaNV | Не публиковать сервисные обещания без approval |

## B. RikaNV Lesnik / Lesnik2 650L — 8 claims

Lesnik остается `product_line`. RikaNV Lesnik2 650L выбран человеком RikaNV как базовая модель Lesnik для первого model-level Product Truth pilot.

| claim_id | claim_type | statement | product | product_kind | parent_line | context | source_id | evidence_id | confidence | status | owner | reviewer | next_action | notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| claim-lesnik-line-001 | specification | RikaNV Lesnik является линейкой тепловизионных прицелов RikaNV. | RikaNV Lesnik | product_line | N/A | line classification | src_rikanv_ru_lesnik_line_20260701 | ev_rikanv_ru_lesnik_line_20260701 | verified | verified | Product Truth owner | Doctrine compliance owner | doctrine check | verified line-level |
| claim-lesnik-line-002 | specification | На странице линии Lesnik на rikanv.ru перечислены конкретные модели Lesnik2. | RikaNV Lesnik | product_line | N/A | line model list | src_rikanv_ru_lesnik_line_20260701 | ev_rikanv_ru_lesnik_line_20260701 | verified | verified | Product Truth owner | Technical reviewer | technical review | verified line-level; не является model-level spec |
| claim-lesnik2-650l-spec-001 | specification | RikaNV Lesnik2 650L является конкретной моделью линейки Lesnik для первого pilot. | RikaNV Lesnik2 650L | product_model | RikaNV Lesnik | pilot model | src_rikanv_ru_lesnik2_650l_20260701 | ev_rikanv_ru_lesnik2_650l_specs_20260701 | verified | verified | Product Truth owner | Technical reviewer | technical review | Model-level claim по выбранной модели |
| claim-lesnik2-650l-spec-002 | specification | На странице rikanv.ru для RikaNV Lesnik2 650L указан сенсор 640×512. | RikaNV Lesnik2 650L | product_model | RikaNV Lesnik | official specs | src_rikanv_ru_lesnik2_650l_20260701 | ev_rikanv_ru_lesnik2_650l_specs_20260701 | verified | verified | Product Truth owner | Technical reviewer | technical review | Только как official spec |
| claim-lesnik2-650l-spec-003 | specification | На странице rikanv.ru для RikaNV Lesnik2 650L указан объектив 50mm F1.0. | RikaNV Lesnik2 650L | product_model | RikaNV Lesnik | official specs | src_rikanv_ru_lesnik2_650l_20260701 | ev_rikanv_ru_lesnik2_650l_specs_20260701 | verified | verified | Product Truth owner | Technical reviewer | technical review | Только как official spec |
| claim-lesnik2-650l-spec-004 | specification | На странице rikanv.ru для RikaNV Lesnik2 650L указана дальность обнаружения 2600m. | RikaNV Lesnik2 650L | product_model | RikaNV Lesnik | official specs | src_rikanv_ru_lesnik2_650l_20260701 | ev_rikanv_ru_lesnik2_650l_specs_20260701 | verified | verified | Product Truth owner | Technical reviewer | technical review | Не превращать в реальную полевую дальность без методики |
| claim-lesnik2-650l-spec-005 | specification | На странице rikanv.ru для RikaNV Lesnik2 650L указан LRF 1200m. | RikaNV Lesnik2 650L | product_model | RikaNV Lesnik | official specs | src_rikanv_ru_lesnik2_650l_20260701 | ev_rikanv_ru_lesnik2_650l_specs_20260701 | verified | verified | Product Truth owner | Technical reviewer | technical review | Только как official spec |
| claim-lesnik2-650l-scenario-001 | scenario_fit | TODO: нет данных на rikanv.ru для сценарного вывода по Lesnik2 650L. | RikaNV Lesnik2 650L | product_model | RikaNV Lesnik | scenario/service | TODO | TODO | low | draft | Product Truth owner | Technical reviewer | собрать tests/service evidence | Не делать claims о надежности, влажности, СТП или полевой дальности без тестов |

## C. RikaNV Surok L15 — 7 claims

| claim_id | claim_type | statement | product | product_kind | parent_line | context | source_id | evidence_id | confidence | status | owner | reviewer | next_action | notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| claim-surok-l15-spec-001 | specification | RikaNV Surok L15 относится к наблюдательным тепловизионным приборам, а не к прицелам. | RikaNV Surok L15 | product_model | RikaNV Surok | category classification | src_rikanv_ru_surok_l15_20260701 | ev_rikanv_ru_surok_l15_specs_20260701 | verified | verified | Product Truth owner | Doctrine compliance owner | doctrine check | Не применять оружейные поля |
| claim-surok-l15-spec-002 | specification | RikaNV Surok L15 — тепловизор / камера для наблюдения. | RikaNV Surok L15 | product_model | RikaNV Surok | official description | src_rikanv_ru_surok_l15_20260701 | ev_rikanv_ru_surok_l15_specs_20260701 | verified | verified | Product Truth owner | Doctrine compliance owner | doctrine check | Формулировку проверить перед публикацией |
| claim-surok-l15-spec-003 | specification | На странице rikanv.ru для RikaNV Surok L15 указан сенсор 256×192. | RikaNV Surok L15 | product_model | RikaNV Surok | official specs | src_rikanv_ru_surok_l15_20260701 | ev_rikanv_ru_surok_l15_specs_20260701 | verified | verified | Product Truth owner | Technical reviewer | technical review | Только как official spec |
| claim-surok-l15-spec-004 | specification | На странице rikanv.ru для RikaNV Surok L15 указан объектив 15 мм F/0.9. | RikaNV Surok L15 | product_model | RikaNV Surok | official specs | src_rikanv_ru_surok_l15_20260701 | ev_rikanv_ru_surok_l15_specs_20260701 | verified | verified | Product Truth owner | Technical reviewer | technical review | Только как official spec |
| claim-surok-l15-scenario-001 | scenario_fit | TODO: нет данных на rikanv.ru для сценарного вывода по Surok L15. | RikaNV Surok L15 | product_model | RikaNV Surok | scenario fit | TODO | TODO | low | draft | Product Truth owner | Technical reviewer | собрать scenario evidence | Не делать вывод “лучший для наблюдения” |
| claim-surok-l15-limit-001 | limitation | Surok L15 не должен описываться как тепловизионный прицел без прямого official source. | RikaNV Surok L15 | product_model | RikaNV Surok | category limitation | src_rikanv_ru_surok_l15_20260701 | ev_rikanv_ru_surok_l15_specs_20260701 | high | draft | Product Truth owner | Doctrine compliance owner | doctrine/technical review | Категорийное ограничение; draft до human wording approval |
| claim-surok-l15-usability-001 | usability | TODO: нет данных на rikanv.ru по usability Surok L15. | RikaNV Surok L15 | product_model | RikaNV Surok | usability | TODO | TODO | low | draft | Product Truth owner | Technical reviewer | собрать usability evidence | Не описывать удобство из предположений |

## D. RikaNV Hypnose / Hypnose2 / Hypnose2 650L — 8 claims

Hypnose и Hypnose2 в пилоте обрабатываются как `product_line`. RikaNV Hypnose2 650L выбран человеком RikaNV как базовая модель Hypnose2 для первого model-level Product Truth pilot.

| claim_id | claim_type | statement | product | product_kind | parent_line | context | source_id | evidence_id | confidence | status | owner | reviewer | next_action | notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| claim-hypnose-line-001 | specification | RikaNV Hypnose является продуктовой линейкой наблюдательных тепловизионных приборов. | RikaNV Hypnose | product_line | N/A | line classification | src_rikanv_ru_hypnose_line_20260701 | ev_rikanv_ru_hypnose_line_20260701 | verified | verified | Product Truth owner | Doctrine compliance owner | doctrine check | verified line-level |
| claim-hypnose2-line-001 | specification | RikaNV Hypnose2 ведется в пилоте как `product_line`, актуальное поколение / подлинейка внутри направления RikaNV Hypnose. | RikaNV Hypnose2 | product_line | N/A | taxonomy | src_rikanv_ru_hypnose_line_20260701 | ev_rikanv_ru_hypnose2_line_20260701 | verified | verified | Product Truth owner | Doctrine compliance owner | doctrine check | verified line-level; human product decision applied |
| claim-hypnose2-650l-spec-001 | specification | RikaNV Hypnose2 650L является конкретной моделью линейки Hypnose2 для первого pilot. | RikaNV Hypnose2 650L | product_model | RikaNV Hypnose2 | pilot model | src_rikanv_ru_hypnose2_650l_20260701 | ev_rikanv_ru_hypnose2_650l_specs_20260701 | verified | verified | Product Truth owner | Technical reviewer | technical review | Model-level claim по выбранной модели |
| claim-hypnose2-650l-spec-002 | specification | На странице rikanv.ru для RikaNV Hypnose2 650L указан сенсор 640×512. | RikaNV Hypnose2 650L | product_model | RikaNV Hypnose2 | official specs | src_rikanv_ru_hypnose2_650l_20260701 | ev_rikanv_ru_hypnose2_650l_specs_20260701 | verified | verified | Product Truth owner | Technical reviewer | technical review | Только как official spec |
| claim-hypnose2-650l-spec-003 | specification | На странице rikanv.ru для RikaNV Hypnose2 650L указан объектив 50mm F0.9. | RikaNV Hypnose2 650L | product_model | RikaNV Hypnose2 | official specs | src_rikanv_ru_hypnose2_650l_20260701 | ev_rikanv_ru_hypnose2_650l_specs_20260701 | verified | verified | Product Truth owner | Technical reviewer | technical review | Только как official spec |
| claim-hypnose2-650l-spec-004 | specification | На странице rikanv.ru для RikaNV Hypnose2 650L указана дальность обнаружения 2600m. | RikaNV Hypnose2 650L | product_model | RikaNV Hypnose2 | official specs | src_rikanv_ru_hypnose2_650l_20260701 | ev_rikanv_ru_hypnose2_650l_specs_20260701 | verified | verified | Product Truth owner | Technical reviewer | technical review | Не превращать в реальную полевую дальность без методики |
| claim-hypnose2-650l-spec-005 | specification | На странице rikanv.ru для RikaNV Hypnose2 650L указан дальномер 1000m. | RikaNV Hypnose2 650L | product_model | RikaNV Hypnose2 | official specs | src_rikanv_ru_hypnose2_650l_20260701 | ev_rikanv_ru_hypnose2_650l_specs_20260701 | verified | verified | Product Truth owner | Technical reviewer | technical review | Не переносить на всю линейку Hypnose2 |
| claim-hypnose2-650l-scenario-001 | scenario_fit | TODO: нет данных на rikanv.ru для сценарного вывода по Hypnose2 650L. | RikaNV Hypnose2 650L | product_model | RikaNV Hypnose2 | scenario/limitation | TODO | TODO | low | draft | Product Truth owner | Technical reviewer | собрать scenario evidence | Не делать вывод “лучший”; публикация требует doctrine review |

## Claims not allowed for content use

Нельзя использовать в контенте как подтвержденные:

- claims со статусом `draft`;
- claims с `TODO` в source/evidence;
- claims о превосходстве над конкурентами;
- claims о надежности без сервисной статистики;
- claims о работе во влажности, тумане, дожде без теста;
- claims о стабильности СТП без теста;
- claims о реальной полевой дальности без методики;
- claims по цене, наличию, скидкам, акциям, комплектации, гарантии, прошивкам, changelog, срокам поставки и дилерским условиям без отдельного review.

## Запрещенные claims

Не создавать claims вида:

- лучший;
- лучший на рынке;
- идеальный;
- не имеет аналогов;
- превосходит конкурентов;
- самый точный;
- самый надежный.
