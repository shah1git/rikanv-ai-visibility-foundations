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

## A. RikaNV Ovod L25 — 8 claims

| claim_id | claim_type | statement | product | product_kind | parent_line | context | source_id | evidence_id | confidence | status | owner | reviewer | next_action | notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| claim-ovod-l25-spec-001 | specification | RikaNV Ovod L25 является тепловизионным прицелом. | RikaNV Ovod L25 | product_model | RikaNV Ovod | category | src_rikanv_ru_ovod_l25_20260701 | ev_rikanv_ru_ovod_l25_specs_20260701 | verified | verified | TODO | TODO | doctrine check | Не писать “лучший” |
| claim-ovod-l25-spec-002 | specification | RikaNV Ovod L25 относится к категории `thermal_riflescope`. | RikaNV Ovod L25 | product_model | RikaNV Ovod | category classification | src_rikanv_ru_ovod_l25_20260701 | ev_rikanv_ru_ovod_l25_specs_20260701 | verified | verified | TODO | TODO | doctrine check | Категорию не смешивать с observation_thermal |
| claim-ovod-l25-spec-003 | specification | На странице rikanv.ru для RikaNV Ovod L25 указан сенсор 256×192. | RikaNV Ovod L25 | product_model | RikaNV Ovod | official specs | src_rikanv_ru_ovod_l25_20260701 | ev_rikanv_ru_ovod_l25_specs_20260701 | verified | verified | TODO | TODO | technical review | Только как official spec |
| claim-ovod-l25-spec-004 | specification | На странице rikanv.ru для RikaNV Ovod L25 указан объектив 25 мм F/0.9. | RikaNV Ovod L25 | product_model | RikaNV Ovod | official specs | src_rikanv_ru_ovod_l25_20260701 | ev_rikanv_ru_ovod_l25_specs_20260701 | verified | verified | TODO | TODO | technical review | Только как official spec |
| claim-ovod-l25-spec-005 | specification | На странице rikanv.ru для RikaNV Ovod L25 указана дальность обнаружения 1300 м. | RikaNV Ovod L25 | product_model | RikaNV Ovod | official specs | src_rikanv_ru_ovod_l25_20260701 | ev_rikanv_ru_ovod_l25_specs_20260701 | verified | verified | TODO | TODO | technical review | Не превращать в полевую гарантию |
| claim-ovod-l25-scenario-001 | scenario_fit | TODO: нет данных на rikanv.ru для сценарного вывода по Ovod L25. | RikaNV Ovod L25 | product_model | RikaNV Ovod | scenario fit | TODO | TODO | low | draft | TODO | TODO | собрать scenario evidence | Не делать вывод “лучше для леса” без данных |
| claim-ovod-l25-limit-001 | limitation | TODO: нет данных на rikanv.ru по ограничениям Ovod L25. | RikaNV Ovod L25 | product_model | RikaNV Ovod | limitations | TODO | TODO | low | draft | TODO | TODO | запросить ограничения RikaNV | Ограничения обязательны для честного материала |
| claim-ovod-l25-service-001 | service | TODO: нет данных на rikanv.ru по service/safety Ovod L25. | RikaNV Ovod L25 | product_model | RikaNV Ovod | service/safety | TODO | TODO | low | draft | TODO | TODO | запросить service data | Не публиковать сервисные обещания без approval |

## B. RikaNV Lesnik — 8 claims

До выбора базовой модели Lesnik для пилота claims остаются line-level или TODO. Найденные модели Lesnik2 не означают, что вся линейка имеет одну и ту же модельную спецификацию.

| claim_id | claim_type | statement | product | product_kind | parent_line | context | source_id | evidence_id | confidence | status | owner | reviewer | next_action | notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| claim-lesnik-line-001 | specification | RikaNV Lesnik является линейкой тепловизионных прицелов RikaNV. | RikaNV Lesnik | product_line | N/A | line classification | src_rikanv_ru_lesnik_line_20260701 | ev_rikanv_ru_lesnik_line_20260701 | verified | verified | TODO | TODO | doctrine check | verified line-level |
| claim-lesnik-line-002 | specification | На странице линии Lesnik на rikanv.ru перечислены конкретные модели Lesnik2. | RikaNV Lesnik | product_line | N/A | line model list | src_rikanv_ru_lesnik_line_20260701 | ev_rikanv_ru_lesnik_line_20260701 | verified | verified | TODO | TODO | выбрать базовую модель | verified line-level; не является model-level spec |
| claim-lesnik-line-003 | limitation | Для model-level specification claims по Lesnik нужно выбрать конкретную модель Lesnik. | RikaNV Lesnik | product_line | N/A | Product Truth blocker | src_rikanv_ru_lesnik_line_20260701 | ev_rikanv_ru_lesnik_line_20260701 | high | draft | TODO | TODO | human product decision | Blocker, а не later |
| claim-lesnik-todo-001 | specification | TODO: нужна конкретная модель Lesnik для model-level claim по сенсору. | RikaNV Lesnik | product_line | N/A | missing model selection | TODO | TODO | low | draft | TODO | TODO | выбрать модель Lesnik | Не переносить specs со всей линейки |
| claim-lesnik-todo-002 | specification | TODO: нужна конкретная модель Lesnik для model-level claim по объективу. | RikaNV Lesnik | product_line | N/A | missing model selection | TODO | TODO | low | draft | TODO | TODO | выбрать модель Lesnik | Не переносить specs со всей линейки |
| claim-lesnik-todo-003 | specification | TODO: нужна конкретная модель Lesnik для model-level claim по дальномеру. | RikaNV Lesnik | product_line | N/A | missing model selection | TODO | TODO | low | draft | TODO | TODO | выбрать модель Lesnik | Не переносить specs со всей линейки |
| claim-lesnik-todo-004 | scenario_fit | TODO: нет данных на rikanv.ru для сценарного вывода по конкретной модели Lesnik. | RikaNV Lesnik | product_line | N/A | scenario fit | TODO | TODO | low | draft | TODO | TODO | выбрать модель и собрать scenario evidence | Не делать вывод “лучше для леса” без данных |
| claim-lesnik-todo-005 | service | TODO: нет данных на rikanv.ru по service/safety для выбранной модели Lesnik. | RikaNV Lesnik | product_line | N/A | service/safety | TODO | TODO | low | draft | TODO | TODO | запросить service data | Не публиковать сервисные обещания без approval |

## C. RikaNV Surok L15 — 7 claims

| claim_id | claim_type | statement | product | product_kind | parent_line | context | source_id | evidence_id | confidence | status | owner | reviewer | next_action | notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| claim-surok-l15-spec-001 | specification | RikaNV Surok L15 относится к наблюдательным тепловизионным приборам, а не к прицелам. | RikaNV Surok L15 | product_model | RikaNV Surok | category classification | src_rikanv_ru_surok_l15_20260701 | ev_rikanv_ru_surok_l15_specs_20260701 | verified | verified | TODO | TODO | doctrine check | Не применять оружейные поля |
| claim-surok-l15-spec-002 | specification | RikaNV Surok L15 — тепловизор / камера для наблюдения. | RikaNV Surok L15 | product_model | RikaNV Surok | official description | src_rikanv_ru_surok_l15_20260701 | ev_rikanv_ru_surok_l15_specs_20260701 | verified | verified | TODO | TODO | doctrine check | Формулировку проверить перед публикацией |
| claim-surok-l15-spec-003 | specification | На странице rikanv.ru для RikaNV Surok L15 указан сенсор 256×192. | RikaNV Surok L15 | product_model | RikaNV Surok | official specs | src_rikanv_ru_surok_l15_20260701 | ev_rikanv_ru_surok_l15_specs_20260701 | verified | verified | TODO | TODO | technical review | Только как official spec |
| claim-surok-l15-spec-004 | specification | На странице rikanv.ru для RikaNV Surok L15 указан объектив 15 мм F/0.9. | RikaNV Surok L15 | product_model | RikaNV Surok | official specs | src_rikanv_ru_surok_l15_20260701 | ev_rikanv_ru_surok_l15_specs_20260701 | verified | verified | TODO | TODO | technical review | Только как official spec |
| claim-surok-l15-scenario-001 | scenario_fit | TODO: нет данных на rikanv.ru для сценарного вывода по Surok L15. | RikaNV Surok L15 | product_model | RikaNV Surok | scenario fit | TODO | TODO | low | draft | TODO | TODO | собрать scenario evidence | Не делать вывод “лучший для наблюдения” |
| claim-surok-l15-limit-001 | limitation | Surok L15 не должен описываться как тепловизионный прицел без прямого official source. | RikaNV Surok L15 | product_model | RikaNV Surok | category limitation | src_rikanv_ru_surok_l15_20260701 | ev_rikanv_ru_surok_l15_specs_20260701 | high | draft | TODO | TODO | doctrine/technical review | Категорийное ограничение |
| claim-surok-l15-usability-001 | usability | TODO: нет данных на rikanv.ru по usability Surok L15. | RikaNV Surok L15 | product_model | RikaNV Surok | usability | TODO | TODO | low | draft | TODO | TODO | собрать usability evidence | Не описывать удобство из предположений |

## D. RikaNV Hypnose / Hypnose2 — 7 claims

Hypnose и Hypnose2 в пилоте обрабатываются как `product_line`. Specification claims по сенсору, объективу, дальности, дальномеру и питанию допустимы только для конкретных моделей Hypnose/Hypnose2.

| claim_id | claim_type | statement | product | product_kind | parent_line | context | source_id | evidence_id | confidence | status | owner | reviewer | next_action | notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| claim-hypnose-line-001 | specification | RikaNV Hypnose является продуктовой линейкой наблюдательных тепловизионных приборов. | RikaNV Hypnose | product_line | N/A | line classification | src_rikanv_ru_hypnose_line_20260701 | ev_rikanv_ru_hypnose_line_20260701 | verified | verified | TODO | TODO | doctrine check | verified line-level |
| claim-hypnose-line-002 | specification | На странице линии Hypnose на rikanv.ru Hypnose описан как наблюдательная камера, а не прицел. | RikaNV Hypnose | product_line | N/A | category classification | src_rikanv_ru_hypnose_line_20260701 | ev_rikanv_ru_hypnose_line_20260701 | verified | verified | TODO | TODO | doctrine check | verified line-level |
| claim-hypnose2-line-001 | specification | RikaNV Hypnose2 является линейкой/поколением RikaNV, перечисленным на странице Hypnose. | RikaNV Hypnose2 | product_line | N/A | line/generation classification | src_rikanv_ru_hypnose_line_20260701 | ev_rikanv_ru_hypnose2_line_20260701 | high | draft | TODO | TODO | human product clarification | Отдельная `/lines/hypnose2` не найдена |
| claim-hypnose2-line-002 | specification | На странице Hypnose на rikanv.ru перечислены модели RikaNV Hypnose2 335L, 650L и 660D. | RikaNV Hypnose2 | product_line | N/A | line model list | src_rikanv_ru_hypnose_line_20260701 | ev_rikanv_ru_hypnose2_line_20260701 | high | draft | TODO | TODO | technical review | Line-level model list; не model-level specs |
| claim-hypnose-limit-001 | limitation | Hypnose и Hypnose2 нельзя описывать как конкретные модели без выбора product_model. | RikaNV Hypnose / Hypnose2 | product_line | N/A | Product Truth limitation | src_rikanv_ru_hypnose_line_20260701 | ev_rikanv_ru_hypnose_line_20260701 | high | draft | TODO | TODO | doctrine/technical review | Исправляет риск смешения линейки и модели |
| claim-hypnose-todo-001 | specification | TODO: выбрать конкретную модель Hypnose/Hypnose2 для model-level claim по сенсору. | RikaNV Hypnose / Hypnose2 | product_line | N/A | missing model selection | TODO | TODO | low | draft | TODO | TODO | выбрать модель | Не переносить line-level specs на модель |
| claim-hypnose-todo-002 | scenario_fit | TODO: нет данных на rikanv.ru для сценарного вывода по конкретной модели Hypnose/Hypnose2. | RikaNV Hypnose / Hypnose2 | product_line | N/A | scenario fit | TODO | TODO | low | draft | TODO | TODO | собрать scenario evidence | Не делать вывод “лучший” |

## Запрещенные claims

Не создавать claims вида:

- лучший;
- лучший на рынке;
- идеальный;
- не имеет аналогов;
- превосходит конкурентов;
- самый точный;
- самый надежный.
