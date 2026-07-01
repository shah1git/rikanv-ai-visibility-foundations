# Claim Registry Pilot Table

Эта таблица нужна для первых 30 claims в ручном пилоте.

Не заполнять claims выдуманными фактами. Если данных нет на `rikanv.ru`, писать:
`TODO: нет данных на rikanv.ru`.

## Rules

### Статусы

- draft
- verified
- disputed
- outdated
- rejected

### Confidence

- low
- medium
- high
- verified

### Правила статуса

- `verified` — только если источник прямо подтверждает statement.
- `verified line-level` фиксируется как `status = verified`, но в `notes`
  обязательно указать `verified line-level`.
- Model-level specification claims допустимы только для `product_model`.
- Line-level source не подтверждает model-level specs.
- Сценарные claims по умолчанию `draft`.
- Official product page подтверждает specification claims, но не подтверждает
  превосходство или полевую эффективность.
- Claims по цене, наличию, скидкам, акциям, комплектации, гарантии, прошивкам
  и срокам поставки считать volatile и не использовать как постоянные claims
  без отдельного review.

## Claim counts

| Metric | Value |
|---|---|
| total claims | 30 |
| verified | 23 |
| draft | 7 |

## Claims

Group: A. RikaNV Ovod L25 — 7 claims

### claim-ovod-l25-spec-001

| Field | Value |
|---|---|
| claim_id | `claim-ovod-l25-spec-001` |
| claim_type | specification |
| statement | RikaNV Ovod L25 является тепловизионным прицелом. |
| product | RikaNV Ovod L25 |
| product_kind | product_model |
| parent_line | RikaNV Ovod |
| context | category |
| source_id | `src_rikanv_ru_ovod_l25_20260701` |
| evidence_id | `ev_rikanv_ru_ovod_l25_specs_20260701` |
| confidence | verified |
| status | verified |
| owner | Product Truth owner |
| reviewer | Doctrine compliance owner |
| next_action | doctrine check |
| notes | Не писать “лучший” |

### claim-ovod-l25-spec-002

| Field | Value |
|---|---|
| claim_id | `claim-ovod-l25-spec-002` |
| claim_type | specification |
| statement | RikaNV Ovod L25 относится к категории `thermal_riflescope`. |
| product | RikaNV Ovod L25 |
| product_kind | product_model |
| parent_line | RikaNV Ovod |
| context | category classification |
| source_id | `src_rikanv_ru_ovod_l25_20260701` |
| evidence_id | `ev_rikanv_ru_ovod_l25_specs_20260701` |
| confidence | verified |
| status | verified |
| owner | Product Truth owner |
| reviewer | Doctrine compliance owner |
| next_action | doctrine check |
| notes | Категорию не смешивать с observation_thermal |

### claim-ovod-l25-spec-003

| Field | Value |
|---|---|
| claim_id | `claim-ovod-l25-spec-003` |
| claim_type | specification |
| statement | На странице rikanv.ru для RikaNV Ovod L25 указан сенсор 256×192. |
| product | RikaNV Ovod L25 |
| product_kind | product_model |
| parent_line | RikaNV Ovod |
| context | official specs |
| source_id | `src_rikanv_ru_ovod_l25_20260701` |
| evidence_id | `ev_rikanv_ru_ovod_l25_specs_20260701` |
| confidence | verified |
| status | verified |
| owner | Product Truth owner |
| reviewer | Technical reviewer |
| next_action | technical review |
| notes | Только как official spec |

### claim-ovod-l25-spec-004

| Field | Value |
|---|---|
| claim_id | `claim-ovod-l25-spec-004` |
| claim_type | specification |
| statement | На странице rikanv.ru для RikaNV Ovod L25 указан объектив 25 мм F/0.9. |
| product | RikaNV Ovod L25 |
| product_kind | product_model |
| parent_line | RikaNV Ovod |
| context | official specs |
| source_id | `src_rikanv_ru_ovod_l25_20260701` |
| evidence_id | `ev_rikanv_ru_ovod_l25_specs_20260701` |
| confidence | verified |
| status | verified |
| owner | Product Truth owner |
| reviewer | Technical reviewer |
| next_action | technical review |
| notes | Только как official spec |

### claim-ovod-l25-spec-005

| Field | Value |
|---|---|
| claim_id | `claim-ovod-l25-spec-005` |
| claim_type | specification |
| statement | На странице rikanv.ru для RikaNV Ovod L25 указана дальность обнаружения 1300 м. |
| product | RikaNV Ovod L25 |
| product_kind | product_model |
| parent_line | RikaNV Ovod |
| context | official specs |
| source_id | `src_rikanv_ru_ovod_l25_20260701` |
| evidence_id | `ev_rikanv_ru_ovod_l25_specs_20260701` |
| confidence | verified |
| status | verified |
| owner | Product Truth owner |
| reviewer | Technical reviewer |
| next_action | technical review |
| notes | Не превращать в полевую гарантию |

### claim-ovod-l25-scenario-001

| Field | Value |
|---|---|
| claim_id | `claim-ovod-l25-scenario-001` |
| claim_type | scenario_fit |
| statement | TODO: нет данных на rikanv.ru для сценарного вывода по Ovod L25. |
| product | RikaNV Ovod L25 |
| product_kind | product_model |
| parent_line | RikaNV Ovod |
| context | scenario fit |
| source_id | TODO |
| evidence_id | TODO |
| confidence | low |
| status | draft |
| owner | Product Truth owner |
| reviewer | Technical reviewer |
| next_action | собрать scenario evidence |
| notes | Не делать вывод “лучше для леса” без тестов |

### claim-ovod-l25-limit-001

| Field | Value |
|---|---|
| claim_id | `claim-ovod-l25-limit-001` |
| claim_type | limitation |
| statement | TODO: нет данных на rikanv.ru по ограничениям, service/safety и условиям применения Ovod L25. |
| product | RikaNV Ovod L25 |
| product_kind | product_model |
| parent_line | RikaNV Ovod |
| context | limitation/service |
| source_id | TODO |
| evidence_id | TODO |
| confidence | low |
| status | draft |
| owner | Product Truth owner |
| reviewer | Technical reviewer |
| next_action | запросить ограничения RikaNV |
| notes | Не публиковать сервисные обещания без approval |

Group: B. RikaNV Lesnik / Lesnik2 650L — 8 claims

Group note: Lesnik остается `product_line`. RikaNV Lesnik2 650L выбран человеком RikaNV как базовая модель Lesnik для первого model-level Product Truth pilot.

### claim-lesnik-line-001

| Field | Value |
|---|---|
| claim_id | `claim-lesnik-line-001` |
| claim_type | specification |
| statement | RikaNV Lesnik является линейкой тепловизионных прицелов RikaNV. |
| product | RikaNV Lesnik |
| product_kind | product_line |
| parent_line | N/A |
| context | line classification |
| source_id | `src_rikanv_ru_lesnik_line_20260701` |
| evidence_id | `ev_rikanv_ru_lesnik_line_20260701` |
| confidence | verified |
| status | verified |
| owner | Product Truth owner |
| reviewer | Doctrine compliance owner |
| next_action | doctrine check |
| notes | verified line-level |

### claim-lesnik-line-002

| Field | Value |
|---|---|
| claim_id | `claim-lesnik-line-002` |
| claim_type | specification |
| statement | На странице линии Lesnik на rikanv.ru перечислены конкретные модели Lesnik2. |
| product | RikaNV Lesnik |
| product_kind | product_line |
| parent_line | N/A |
| context | line model list |
| source_id | `src_rikanv_ru_lesnik_line_20260701` |
| evidence_id | `ev_rikanv_ru_lesnik_line_20260701` |
| confidence | verified |
| status | verified |
| owner | Product Truth owner |
| reviewer | Technical reviewer |
| next_action | technical review |
| notes | verified line-level; не является model-level spec |

### claim-lesnik2-650l-spec-001

| Field | Value |
|---|---|
| claim_id | `claim-lesnik2-650l-spec-001` |
| claim_type | specification |
| statement | RikaNV Lesnik2 650L является конкретной моделью линейки Lesnik для первого pilot. |
| product | RikaNV Lesnik2 650L |
| product_kind | product_model |
| parent_line | RikaNV Lesnik |
| context | pilot model |
| source_id | `src_rikanv_ru_lesnik2_650l_20260701` |
| evidence_id | `ev_rikanv_ru_lesnik2_650l_specs_20260701` |
| confidence | verified |
| status | verified |
| owner | Product Truth owner |
| reviewer | Technical reviewer |
| next_action | technical review |
| notes | Model-level claim по выбранной модели |

### claim-lesnik2-650l-spec-002

| Field | Value |
|---|---|
| claim_id | `claim-lesnik2-650l-spec-002` |
| claim_type | specification |
| statement | На странице rikanv.ru для RikaNV Lesnik2 650L указан сенсор 640×512. |
| product | RikaNV Lesnik2 650L |
| product_kind | product_model |
| parent_line | RikaNV Lesnik |
| context | official specs |
| source_id | `src_rikanv_ru_lesnik2_650l_20260701` |
| evidence_id | `ev_rikanv_ru_lesnik2_650l_specs_20260701` |
| confidence | verified |
| status | verified |
| owner | Product Truth owner |
| reviewer | Technical reviewer |
| next_action | technical review |
| notes | Только как official spec |

### claim-lesnik2-650l-spec-003

| Field | Value |
|---|---|
| claim_id | `claim-lesnik2-650l-spec-003` |
| claim_type | specification |
| statement | На странице rikanv.ru для RikaNV Lesnik2 650L указан объектив 50mm F1.0. |
| product | RikaNV Lesnik2 650L |
| product_kind | product_model |
| parent_line | RikaNV Lesnik |
| context | official specs |
| source_id | `src_rikanv_ru_lesnik2_650l_20260701` |
| evidence_id | `ev_rikanv_ru_lesnik2_650l_specs_20260701` |
| confidence | verified |
| status | verified |
| owner | Product Truth owner |
| reviewer | Technical reviewer |
| next_action | technical review |
| notes | Только как official spec |

### claim-lesnik2-650l-spec-004

| Field | Value |
|---|---|
| claim_id | `claim-lesnik2-650l-spec-004` |
| claim_type | specification |
| statement | На странице rikanv.ru для RikaNV Lesnik2 650L указана дальность обнаружения 2600m. |
| product | RikaNV Lesnik2 650L |
| product_kind | product_model |
| parent_line | RikaNV Lesnik |
| context | official specs |
| source_id | `src_rikanv_ru_lesnik2_650l_20260701` |
| evidence_id | `ev_rikanv_ru_lesnik2_650l_specs_20260701` |
| confidence | verified |
| status | verified |
| owner | Product Truth owner |
| reviewer | Technical reviewer |
| next_action | technical review |
| notes | Не превращать в реальную полевую дальность без методики |

### claim-lesnik2-650l-spec-005

| Field | Value |
|---|---|
| claim_id | `claim-lesnik2-650l-spec-005` |
| claim_type | specification |
| statement | На странице rikanv.ru для RikaNV Lesnik2 650L указан LRF 1200m. |
| product | RikaNV Lesnik2 650L |
| product_kind | product_model |
| parent_line | RikaNV Lesnik |
| context | official specs |
| source_id | `src_rikanv_ru_lesnik2_650l_20260701` |
| evidence_id | `ev_rikanv_ru_lesnik2_650l_specs_20260701` |
| confidence | verified |
| status | verified |
| owner | Product Truth owner |
| reviewer | Technical reviewer |
| next_action | technical review |
| notes | Только как official spec |

### claim-lesnik2-650l-scenario-001

| Field | Value |
|---|---|
| claim_id | `claim-lesnik2-650l-scenario-001` |
| claim_type | scenario_fit |
| statement | TODO: нет данных на rikanv.ru для сценарного вывода по Lesnik2 650L. |
| product | RikaNV Lesnik2 650L |
| product_kind | product_model |
| parent_line | RikaNV Lesnik |
| context | scenario/service |
| source_id | TODO |
| evidence_id | TODO |
| confidence | low |
| status | draft |
| owner | Product Truth owner |
| reviewer | Technical reviewer |
| next_action | собрать tests/service evidence |
| notes | Не делать claims о надежности, влажности, СТП или полевой дальности без тестов |

Group: C. RikaNV Surok L15 — 7 claims

### claim-surok-l15-spec-001

| Field | Value |
|---|---|
| claim_id | `claim-surok-l15-spec-001` |
| claim_type | specification |
| statement | RikaNV Surok L15 относится к наблюдательным тепловизионным приборам, а не к прицелам. |
| product | RikaNV Surok L15 |
| product_kind | product_model |
| parent_line | RikaNV Surok |
| context | category classification |
| source_id | `src_rikanv_ru_surok_l15_20260701` |
| evidence_id | `ev_rikanv_ru_surok_l15_specs_20260701` |
| confidence | verified |
| status | verified |
| owner | Product Truth owner |
| reviewer | Doctrine compliance owner |
| next_action | doctrine check |
| notes | Не применять оружейные поля |

### claim-surok-l15-spec-002

| Field | Value |
|---|---|
| claim_id | `claim-surok-l15-spec-002` |
| claim_type | specification |
| statement | RikaNV Surok L15 — тепловизор / камера для наблюдения. |
| product | RikaNV Surok L15 |
| product_kind | product_model |
| parent_line | RikaNV Surok |
| context | official description |
| source_id | `src_rikanv_ru_surok_l15_20260701` |
| evidence_id | `ev_rikanv_ru_surok_l15_specs_20260701` |
| confidence | verified |
| status | verified |
| owner | Product Truth owner |
| reviewer | Doctrine compliance owner |
| next_action | doctrine check |
| notes | Формулировку проверить перед публикацией |

### claim-surok-l15-spec-003

| Field | Value |
|---|---|
| claim_id | `claim-surok-l15-spec-003` |
| claim_type | specification |
| statement | На странице rikanv.ru для RikaNV Surok L15 указан сенсор 256×192. |
| product | RikaNV Surok L15 |
| product_kind | product_model |
| parent_line | RikaNV Surok |
| context | official specs |
| source_id | `src_rikanv_ru_surok_l15_20260701` |
| evidence_id | `ev_rikanv_ru_surok_l15_specs_20260701` |
| confidence | verified |
| status | verified |
| owner | Product Truth owner |
| reviewer | Technical reviewer |
| next_action | technical review |
| notes | Только как official spec |

### claim-surok-l15-spec-004

| Field | Value |
|---|---|
| claim_id | `claim-surok-l15-spec-004` |
| claim_type | specification |
| statement | На странице rikanv.ru для RikaNV Surok L15 указан объектив 15 мм F/0.9. |
| product | RikaNV Surok L15 |
| product_kind | product_model |
| parent_line | RikaNV Surok |
| context | official specs |
| source_id | `src_rikanv_ru_surok_l15_20260701` |
| evidence_id | `ev_rikanv_ru_surok_l15_specs_20260701` |
| confidence | verified |
| status | verified |
| owner | Product Truth owner |
| reviewer | Technical reviewer |
| next_action | technical review |
| notes | Только как official spec |

### claim-surok-l15-scenario-001

| Field | Value |
|---|---|
| claim_id | `claim-surok-l15-scenario-001` |
| claim_type | scenario_fit |
| statement | TODO: нет данных на rikanv.ru для сценарного вывода по Surok L15. |
| product | RikaNV Surok L15 |
| product_kind | product_model |
| parent_line | RikaNV Surok |
| context | scenario fit |
| source_id | TODO |
| evidence_id | TODO |
| confidence | low |
| status | draft |
| owner | Product Truth owner |
| reviewer | Technical reviewer |
| next_action | собрать scenario evidence |
| notes | Не делать вывод “лучший для наблюдения” |

### claim-surok-l15-limit-001

| Field | Value |
|---|---|
| claim_id | `claim-surok-l15-limit-001` |
| claim_type | limitation |
| statement | Surok L15 не должен описываться как тепловизионный прицел без прямого official source. |
| product | RikaNV Surok L15 |
| product_kind | product_model |
| parent_line | RikaNV Surok |
| context | category limitation |
| source_id | `src_rikanv_ru_surok_l15_20260701` |
| evidence_id | `ev_rikanv_ru_surok_l15_specs_20260701` |
| confidence | high |
| status | draft |
| owner | Product Truth owner |
| reviewer | Doctrine compliance owner |
| next_action | doctrine/technical review |
| notes | Категорийное ограничение; draft до human wording approval |

### claim-surok-l15-usability-001

| Field | Value |
|---|---|
| claim_id | `claim-surok-l15-usability-001` |
| claim_type | usability |
| statement | TODO: нет данных на rikanv.ru по usability Surok L15. |
| product | RikaNV Surok L15 |
| product_kind | product_model |
| parent_line | RikaNV Surok |
| context | usability |
| source_id | TODO |
| evidence_id | TODO |
| confidence | low |
| status | draft |
| owner | Product Truth owner |
| reviewer | Technical reviewer |
| next_action | собрать usability evidence |
| notes | Не описывать удобство из предположений |

Group: D. RikaNV Hypnose / Hypnose2 / Hypnose2 650L — 8 claims

Group note: Hypnose и Hypnose2 в пилоте обрабатываются как `product_line`. RikaNV Hypnose2 650L выбран человеком RikaNV как базовая модель Hypnose2 для первого model-level Product Truth pilot.

### claim-hypnose-line-001

| Field | Value |
|---|---|
| claim_id | `claim-hypnose-line-001` |
| claim_type | specification |
| statement | RikaNV Hypnose является продуктовой линейкой наблюдательных тепловизионных приборов. |
| product | RikaNV Hypnose |
| product_kind | product_line |
| parent_line | N/A |
| context | line classification |
| source_id | `src_rikanv_ru_hypnose_line_20260701` |
| evidence_id | `ev_rikanv_ru_hypnose_line_20260701` |
| confidence | verified |
| status | verified |
| owner | Product Truth owner |
| reviewer | Doctrine compliance owner |
| next_action | doctrine check |
| notes | verified line-level |

### claim-hypnose2-line-001

| Field | Value |
|---|---|
| claim_id | `claim-hypnose2-line-001` |
| claim_type | specification |
| statement | RikaNV Hypnose2 ведется в пилоте как `product_line`, актуальное поколение / подлинейка внутри направления RikaNV Hypnose. |
| product | RikaNV Hypnose2 |
| product_kind | product_line |
| parent_line | N/A |
| context | taxonomy |
| source_id | `src_rikanv_ru_hypnose_line_20260701` |
| evidence_id | `ev_rikanv_ru_hypnose2_line_20260701` |
| confidence | verified |
| status | verified |
| owner | Product Truth owner |
| reviewer | Doctrine compliance owner |
| next_action | doctrine check |
| notes | verified line-level; human product decision applied |

### claim-hypnose2-650l-spec-001

| Field | Value |
|---|---|
| claim_id | `claim-hypnose2-650l-spec-001` |
| claim_type | specification |
| statement | RikaNV Hypnose2 650L является конкретной моделью линейки Hypnose2 для первого pilot. |
| product | RikaNV Hypnose2 650L |
| product_kind | product_model |
| parent_line | RikaNV Hypnose2 |
| context | pilot model |
| source_id | `src_rikanv_ru_hypnose2_650l_20260701` |
| evidence_id | `ev_rikanv_ru_hypnose2_650l_specs_20260701` |
| confidence | verified |
| status | verified |
| owner | Product Truth owner |
| reviewer | Technical reviewer |
| next_action | technical review |
| notes | Model-level claim по выбранной модели |

### claim-hypnose2-650l-spec-002

| Field | Value |
|---|---|
| claim_id | `claim-hypnose2-650l-spec-002` |
| claim_type | specification |
| statement | На странице rikanv.ru для RikaNV Hypnose2 650L указан сенсор 640×512. |
| product | RikaNV Hypnose2 650L |
| product_kind | product_model |
| parent_line | RikaNV Hypnose2 |
| context | official specs |
| source_id | `src_rikanv_ru_hypnose2_650l_20260701` |
| evidence_id | `ev_rikanv_ru_hypnose2_650l_specs_20260701` |
| confidence | verified |
| status | verified |
| owner | Product Truth owner |
| reviewer | Technical reviewer |
| next_action | technical review |
| notes | Только как official spec |

### claim-hypnose2-650l-spec-003

| Field | Value |
|---|---|
| claim_id | `claim-hypnose2-650l-spec-003` |
| claim_type | specification |
| statement | На странице rikanv.ru для RikaNV Hypnose2 650L указан объектив 50mm F0.9. |
| product | RikaNV Hypnose2 650L |
| product_kind | product_model |
| parent_line | RikaNV Hypnose2 |
| context | official specs |
| source_id | `src_rikanv_ru_hypnose2_650l_20260701` |
| evidence_id | `ev_rikanv_ru_hypnose2_650l_specs_20260701` |
| confidence | verified |
| status | verified |
| owner | Product Truth owner |
| reviewer | Technical reviewer |
| next_action | technical review |
| notes | Только как official spec |

### claim-hypnose2-650l-spec-004

| Field | Value |
|---|---|
| claim_id | `claim-hypnose2-650l-spec-004` |
| claim_type | specification |
| statement | На странице rikanv.ru для RikaNV Hypnose2 650L указана дальность обнаружения 2600m. |
| product | RikaNV Hypnose2 650L |
| product_kind | product_model |
| parent_line | RikaNV Hypnose2 |
| context | official specs |
| source_id | `src_rikanv_ru_hypnose2_650l_20260701` |
| evidence_id | `ev_rikanv_ru_hypnose2_650l_specs_20260701` |
| confidence | verified |
| status | verified |
| owner | Product Truth owner |
| reviewer | Technical reviewer |
| next_action | technical review |
| notes | Не превращать в реальную полевую дальность без методики |

### claim-hypnose2-650l-spec-005

| Field | Value |
|---|---|
| claim_id | `claim-hypnose2-650l-spec-005` |
| claim_type | specification |
| statement | На странице rikanv.ru для RikaNV Hypnose2 650L указан дальномер 1000m. |
| product | RikaNV Hypnose2 650L |
| product_kind | product_model |
| parent_line | RikaNV Hypnose2 |
| context | official specs |
| source_id | `src_rikanv_ru_hypnose2_650l_20260701` |
| evidence_id | `ev_rikanv_ru_hypnose2_650l_specs_20260701` |
| confidence | verified |
| status | verified |
| owner | Product Truth owner |
| reviewer | Technical reviewer |
| next_action | technical review |
| notes | Не переносить на всю линейку Hypnose2 |

### claim-hypnose2-650l-scenario-001

| Field | Value |
|---|---|
| claim_id | `claim-hypnose2-650l-scenario-001` |
| claim_type | scenario_fit |
| statement | TODO: нет данных на rikanv.ru для сценарного вывода по Hypnose2 650L. |
| product | RikaNV Hypnose2 650L |
| product_kind | product_model |
| parent_line | RikaNV Hypnose2 |
| context | scenario/limitation |
| source_id | TODO |
| evidence_id | TODO |
| confidence | low |
| status | draft |
| owner | Product Truth owner |
| reviewer | Technical reviewer |
| next_action | собрать scenario evidence |
| notes | Не делать вывод “лучший”; публикация требует doctrine review |

## Claims not allowed for content use


Нельзя использовать в контенте как подтвержденные:

- claims со статусом `draft`;
- claims с `TODO` в source/evidence;
- claims о превосходстве над конкурентами;
- claims о надежности без сервисной статистики;
- claims о работе во влажности, тумане, дожде без теста;
- claims о стабильности СТП без теста;
- claims о реальной полевой дальности без методики;
- claims по цене, наличию, скидкам, акциям, комплектации, гарантии, прошивкам,
  changelog, срокам поставки и дилерским условиям без отдельного review.

## Запрещенные claims

Не создавать claims вида:

- лучший;
- лучший на рынке;
- идеальный;
- не имеет аналогов;
- превосходит конкурентов;
- самый точный;
- самый надежный.
