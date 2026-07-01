# Agent Claim Review Board

## Purpose

Эта доска используется как Agent Claim Review Board для 30 pilot claims.

Она не заменяет Claim Registry. Ее задача — показать, какие claims агент может
использовать для draft generation, а какие требуют evidence, rewording или
human exception review.

Это не обязательная ручная проверка всех 30 claims. Человек смотрит только
exceptions и всегда сохраняет final publication approval.

## Review statuses

- auto_approved_for_draft
- human_review_required
- needs_evidence
- needs_rewording
- blocked_for_publication
- rejected

`recommended_review_status` retained in claim cards is the previous advisory
field. The active agent-first field is `agent_review_status`.

## Review principles

- `verified` does not automatically mean publication-ready.
- `draft` does not automatically mean `rejected`.
- Tier A official specification claims from `rikanv.ru` can be `auto_approved_for_draft`.
- Final publication still requires human approval.
- Scenario claims require evidence or careful wording.
- Line-level claims must remain line-level.
- `product_model` claims must not inherit line-level statements incorrectly.
- Publication requires technical review and doctrine compliance.

## Claim tiers

### Tier A

Official specifications from `rikanv.ru`. Allowed for agent-generated drafts
when source/evidence are linked and wording stays official-spec only.

### Tier B

Functional descriptions and line-level claims from `rikanv.ru`. Allowed after
agent doctrine/technical pre-check and careful line/model wording.

### Tier C

`scenario_fit`, performance and field claims. Needs evidence, test data or
human review before use beyond draft planning.

### Tier D

Competitor comparisons, confidential, volatile or legal-sensitive claims.
Blocked until explicit human approval.


## Review board

### claim-ovod-l25-spec-001

| Field | Value |
|:---|:---|
| claim_id | `claim-ovod-l25-spec-001` |
| product_or_line | RikaNV Ovod L25 |
| product_kind | product_model |
| claim_type | specification |
| current_status | verified |
| confidence | verified |
| source_id | `src_rikanv_ru_ovod_l25_20260701` |
| evidence_id | `ev_rikanv_ru_ovod_l25_specs_20260701` |
| statement_short | RikaNV Ovod L25 является тепловизионным прицелом. |
| risk_flag | doctrine_check |
| recommended_review_status | approved_for_content |
| claim_tier | Tier A |
| agent_review_status | auto_approved_for_draft |
| human_required_reason | final publication approval |
| human_decision | TODO |
| decision_owner | TODO |
| required_action | Confirm category wording before publication. |
| notes | Do not add “best” or superiority wording. |

### claim-ovod-l25-spec-002

| Field | Value |
|:---|:---|
| claim_id | `claim-ovod-l25-spec-002` |
| product_or_line | RikaNV Ovod L25 |
| product_kind | product_model |
| claim_type | specification |
| current_status | verified |
| confidence | verified |
| source_id | `src_rikanv_ru_ovod_l25_20260701` |
| evidence_id | `ev_rikanv_ru_ovod_l25_specs_20260701` |
| statement_short | RikaNV Ovod L25 относится к категории `thermal_riflescope`. |
| risk_flag | category_check, doctrine_check |
| recommended_review_status | approved_for_content |
| claim_tier | Tier A |
| agent_review_status | auto_approved_for_draft |
| human_required_reason | final publication approval |
| human_decision | TODO |
| decision_owner | TODO |
| required_action | Confirm category remains riflescope-only. |
| notes | Do not mix with `observation_thermal`. |

### claim-ovod-l25-spec-003

| Field | Value |
|:---|:---|
| claim_id | `claim-ovod-l25-spec-003` |
| product_or_line | RikaNV Ovod L25 |
| product_kind | product_model |
| claim_type | specification |
| current_status | verified |
| confidence | verified |
| source_id | `src_rikanv_ru_ovod_l25_20260701` |
| evidence_id | `ev_rikanv_ru_ovod_l25_specs_20260701` |
| statement_short | На странице rikanv.ru для RikaNV Ovod L25 указан сенсор 256×192. |
| risk_flag | none |
| recommended_review_status | approved_for_content |
| claim_tier | Tier A |
| agent_review_status | auto_approved_for_draft |
| human_required_reason | final publication approval |
| human_decision | TODO |
| decision_owner | TODO |
| required_action | Technical reviewer confirms notation. |
| notes | Use only as official specification. |

### claim-ovod-l25-spec-004

| Field | Value |
|:---|:---|
| claim_id | `claim-ovod-l25-spec-004` |
| product_or_line | RikaNV Ovod L25 |
| product_kind | product_model |
| claim_type | specification |
| current_status | verified |
| confidence | verified |
| source_id | `src_rikanv_ru_ovod_l25_20260701` |
| evidence_id | `ev_rikanv_ru_ovod_l25_specs_20260701` |
| statement_short | На странице rikanv.ru для RikaNV Ovod L25 указан объектив 25 мм F/0.9. |
| risk_flag | none |
| recommended_review_status | approved_for_content |
| claim_tier | Tier A |
| agent_review_status | auto_approved_for_draft |
| human_required_reason | final publication approval |
| human_decision | TODO |
| decision_owner | TODO |
| required_action | Technical reviewer confirms notation. |
| notes | Use only as official specification. |

### claim-ovod-l25-spec-005

| Field | Value |
|:---|:---|
| claim_id | `claim-ovod-l25-spec-005` |
| product_or_line | RikaNV Ovod L25 |
| product_kind | product_model |
| claim_type | specification |
| current_status | verified |
| confidence | verified |
| source_id | `src_rikanv_ru_ovod_l25_20260701` |
| evidence_id | `ev_rikanv_ru_ovod_l25_specs_20260701` |
| statement_short | На странице rikanv.ru для RikaNV Ovod L25 указана дальность обнаружения 1300 м. |
| risk_flag | performance_risk, doctrine_check |
| recommended_review_status | approved_for_content |
| claim_tier | Tier A |
| agent_review_status | auto_approved_for_draft |
| human_required_reason | official-spec wording only; performance wording check; final publication approval |
| human_decision | TODO |
| decision_owner | TODO |
| required_action | Keep official-spec wording; do not imply field guarantee. |
| notes | Needs technical reviewer attention. |

### claim-ovod-l25-scenario-001

| Field | Value |
|:---|:---|
| claim_id | `claim-ovod-l25-scenario-001` |
| product_or_line | RikaNV Ovod L25 |
| product_kind | product_model |
| claim_type | scenario_fit |
| current_status | draft |
| confidence | low |
| source_id | TODO |
| evidence_id | TODO |
| statement_short | TODO: нет данных на rikanv.ru для сценарного вывода по Ovod L25. |
| risk_flag | scenario_fit, needs_test, source_gap, evidence_gap |
| recommended_review_status | needs_evidence |
| claim_tier | Tier C |
| agent_review_status | needs_evidence |
| human_required_reason | missing source/evidence or test data |
| human_decision | TODO |
| decision_owner | TODO |
| required_action | Collect field test or explicit scenario source. |
| notes | Not usable in content yet. |

### claim-ovod-l25-limit-001

| Field | Value |
|:---|:---|
| claim_id | `claim-ovod-l25-limit-001` |
| product_or_line | RikaNV Ovod L25 |
| product_kind | product_model |
| claim_type | limitation |
| current_status | draft |
| confidence | low |
| source_id | TODO |
| evidence_id | TODO |
| statement_short | TODO: нет данных на rikanv.ru по ограничениям, service/safety и условиям применения Ovod L25. |
| risk_flag | source_gap, evidence_gap, doctrine_check |
| recommended_review_status | needs_evidence |
| claim_tier | Tier C |
| agent_review_status | needs_evidence |
| human_required_reason | missing source/evidence or test data |
| human_decision | TODO |
| decision_owner | TODO |
| required_action | Request internal product confirmation and service boundaries. |
| notes | Do not publish service promises without approval. |

### claim-lesnik-line-001

| Field | Value |
|:---|:---|
| claim_id | `claim-lesnik-line-001` |
| product_or_line | RikaNV Lesnik |
| product_kind | product_line |
| claim_type | specification |
| current_status | verified |
| confidence | verified |
| source_id | `src_rikanv_ru_lesnik_line_20260701` |
| evidence_id | `ev_rikanv_ru_lesnik_line_20260701` |
| statement_short | RikaNV Lesnik является линейкой тепловизионных прицелов RikaNV. |
| risk_flag | line_level, doctrine_check |
| recommended_review_status | approved_for_content |
| claim_tier | Tier B |
| agent_review_status | auto_approved_for_draft |
| human_required_reason | line-level wording check; final publication approval |
| human_decision | TODO |
| decision_owner | TODO |
| required_action | Keep line-level wording. |
| notes | Do not add model-level specs. |

### claim-lesnik-line-002

| Field | Value |
|:---|:---|
| claim_id | `claim-lesnik-line-002` |
| product_or_line | RikaNV Lesnik |
| product_kind | product_line |
| claim_type | specification |
| current_status | verified |
| confidence | verified |
| source_id | `src_rikanv_ru_lesnik_line_20260701` |
| evidence_id | `ev_rikanv_ru_lesnik_line_20260701` |
| statement_short | На странице линии Lesnik на rikanv.ru перечислены конкретные модели Lesnik2. |
| risk_flag | line_level, model_level |
| recommended_review_status | approved_for_content |
| claim_tier | Tier B |
| agent_review_status | auto_approved_for_draft |
| human_required_reason | line-level wording check; final publication approval |
| human_decision | TODO |
| decision_owner | TODO |
| required_action | Keep as model-list claim, not specification claim. |
| notes | Do not infer specs for all Lesnik models. |

### claim-lesnik2-650l-spec-001

| Field | Value |
|:---|:---|
| claim_id | `claim-lesnik2-650l-spec-001` |
| product_or_line | RikaNV Lesnik2 650L |
| product_kind | product_model |
| claim_type | specification |
| current_status | verified |
| confidence | verified |
| source_id | `src_rikanv_ru_lesnik2_650l_20260701` |
| evidence_id | `ev_rikanv_ru_lesnik2_650l_specs_20260701` |
| statement_short | RikaNV Lesnik2 650L является конкретной моделью линейки Lesnik для первого pilot. |
| risk_flag | needs_human_clarification, doctrine_check |
| recommended_review_status | blocked_for_publication |
| claim_tier | Tier D |
| agent_review_status | blocked_for_publication |
| human_required_reason | human clarification required before any publication |
| human_decision | TODO |
| decision_owner | TODO |
| required_action | Keep internal or reword before public use. |
| notes | Pilot-selection wording is not product content. |

### claim-lesnik2-650l-spec-002

| Field | Value |
|:---|:---|
| claim_id | `claim-lesnik2-650l-spec-002` |
| product_or_line | RikaNV Lesnik2 650L |
| product_kind | product_model |
| claim_type | specification |
| current_status | verified |
| confidence | verified |
| source_id | `src_rikanv_ru_lesnik2_650l_20260701` |
| evidence_id | `ev_rikanv_ru_lesnik2_650l_specs_20260701` |
| statement_short | На странице rikanv.ru для RikaNV Lesnik2 650L указан сенсор 640×512. |
| risk_flag | none |
| recommended_review_status | approved_for_content |
| claim_tier | Tier A |
| agent_review_status | auto_approved_for_draft |
| human_required_reason | final publication approval |
| human_decision | TODO |
| decision_owner | TODO |
| required_action | Technical reviewer confirms notation. |
| notes | Use only as official specification. |

### claim-lesnik2-650l-spec-003

| Field | Value |
|:---|:---|
| claim_id | `claim-lesnik2-650l-spec-003` |
| product_or_line | RikaNV Lesnik2 650L |
| product_kind | product_model |
| claim_type | specification |
| current_status | verified |
| confidence | verified |
| source_id | `src_rikanv_ru_lesnik2_650l_20260701` |
| evidence_id | `ev_rikanv_ru_lesnik2_650l_specs_20260701` |
| statement_short | На странице rikanv.ru для RikaNV Lesnik2 650L указан объектив 50mm F1.0. |
| risk_flag | none |
| recommended_review_status | approved_for_content |
| claim_tier | Tier A |
| agent_review_status | auto_approved_for_draft |
| human_required_reason | final publication approval |
| human_decision | TODO |
| decision_owner | TODO |
| required_action | Technical reviewer confirms notation. |
| notes | Use only as official specification. |

### claim-lesnik2-650l-spec-004

| Field | Value |
|:---|:---|
| claim_id | `claim-lesnik2-650l-spec-004` |
| product_or_line | RikaNV Lesnik2 650L |
| product_kind | product_model |
| claim_type | specification |
| current_status | verified |
| confidence | verified |
| source_id | `src_rikanv_ru_lesnik2_650l_20260701` |
| evidence_id | `ev_rikanv_ru_lesnik2_650l_specs_20260701` |
| statement_short | На странице rikanv.ru для RikaNV Lesnik2 650L указана дальность обнаружения 2600m. |
| risk_flag | performance_risk, doctrine_check |
| recommended_review_status | approved_for_content |
| claim_tier | Tier A |
| agent_review_status | auto_approved_for_draft |
| human_required_reason | official-spec wording only; performance wording check; final publication approval |
| human_decision | TODO |
| decision_owner | TODO |
| required_action | Keep official-spec wording; do not imply real field distance. |
| notes | Needs technical reviewer attention. |

### claim-lesnik2-650l-spec-005

| Field | Value |
|:---|:---|
| claim_id | `claim-lesnik2-650l-spec-005` |
| product_or_line | RikaNV Lesnik2 650L |
| product_kind | product_model |
| claim_type | specification |
| current_status | verified |
| confidence | verified |
| source_id | `src_rikanv_ru_lesnik2_650l_20260701` |
| evidence_id | `ev_rikanv_ru_lesnik2_650l_specs_20260701` |
| statement_short | На странице rikanv.ru для RikaNV Lesnik2 650L указан LRF 1200m. |
| risk_flag | performance_risk, doctrine_check |
| recommended_review_status | approved_for_content |
| claim_tier | Tier A |
| agent_review_status | auto_approved_for_draft |
| human_required_reason | official-spec wording only; performance wording check; final publication approval |
| human_decision | TODO |
| decision_owner | TODO |
| required_action | Keep official-spec wording; do not imply field guarantee. |
| notes | Needs technical reviewer attention. |

### claim-lesnik2-650l-scenario-001

| Field | Value |
|:---|:---|
| claim_id | `claim-lesnik2-650l-scenario-001` |
| product_or_line | RikaNV Lesnik2 650L |
| product_kind | product_model |
| claim_type | scenario_fit |
| current_status | draft |
| confidence | low |
| source_id | TODO |
| evidence_id | TODO |
| statement_short | TODO: нет данных на rikanv.ru для сценарного вывода по Lesnik2 650L. |
| risk_flag | scenario_fit, needs_test, source_gap, evidence_gap |
| recommended_review_status | needs_evidence |
| claim_tier | Tier C |
| agent_review_status | needs_evidence |
| human_required_reason | missing source/evidence or test data |
| human_decision | TODO |
| decision_owner | TODO |
| required_action | Collect test or service evidence. |
| notes | Do not make reliability, weather, zero-stability or field-distance claims. |

### claim-surok-l15-spec-001

| Field | Value |
|:---|:---|
| claim_id | `claim-surok-l15-spec-001` |
| product_or_line | RikaNV Surok L15 |
| product_kind | product_model |
| claim_type | specification |
| current_status | verified |
| confidence | verified |
| source_id | `src_rikanv_ru_surok_l15_20260701` |
| evidence_id | `ev_rikanv_ru_surok_l15_specs_20260701` |
| statement_short | RikaNV Surok L15 относится к наблюдательным тепловизионным приборам, а не к прицелам. |
| risk_flag | category_check, doctrine_check |
| recommended_review_status | approved_for_content |
| claim_tier | Tier A |
| agent_review_status | auto_approved_for_draft |
| human_required_reason | final publication approval |
| human_decision | TODO |
| decision_owner | TODO |
| required_action | Confirm observation category wording. |
| notes | Do not apply riflescope fields. |

### claim-surok-l15-spec-002

| Field | Value |
|:---|:---|
| claim_id | `claim-surok-l15-spec-002` |
| product_or_line | RikaNV Surok L15 |
| product_kind | product_model |
| claim_type | specification |
| current_status | verified |
| confidence | verified |
| source_id | `src_rikanv_ru_surok_l15_20260701` |
| evidence_id | `ev_rikanv_ru_surok_l15_specs_20260701` |
| statement_short | RikaNV Surok L15 — тепловизор / камера для наблюдения. |
| risk_flag | category_check, needs_human_clarification |
| recommended_review_status | needs_rewording |
| claim_tier | Tier B |
| agent_review_status | needs_rewording |
| human_required_reason | risk wording or category clarity required |
| human_decision | TODO |
| decision_owner | TODO |
| required_action | Use cleaner observation-device wording. |
| notes | Avoid category ambiguity. |

### claim-surok-l15-spec-003

| Field | Value |
|:---|:---|
| claim_id | `claim-surok-l15-spec-003` |
| product_or_line | RikaNV Surok L15 |
| product_kind | product_model |
| claim_type | specification |
| current_status | verified |
| confidence | verified |
| source_id | `src_rikanv_ru_surok_l15_20260701` |
| evidence_id | `ev_rikanv_ru_surok_l15_specs_20260701` |
| statement_short | На странице rikanv.ru для RikaNV Surok L15 указан сенсор 256×192. |
| risk_flag | none |
| recommended_review_status | approved_for_content |
| claim_tier | Tier A |
| agent_review_status | auto_approved_for_draft |
| human_required_reason | final publication approval |
| human_decision | TODO |
| decision_owner | TODO |
| required_action | Technical reviewer confirms notation. |
| notes | Use only as official specification. |

### claim-surok-l15-spec-004

| Field | Value |
|:---|:---|
| claim_id | `claim-surok-l15-spec-004` |
| product_or_line | RikaNV Surok L15 |
| product_kind | product_model |
| claim_type | specification |
| current_status | verified |
| confidence | verified |
| source_id | `src_rikanv_ru_surok_l15_20260701` |
| evidence_id | `ev_rikanv_ru_surok_l15_specs_20260701` |
| statement_short | На странице rikanv.ru для RikaNV Surok L15 указан объектив 15 мм F/0.9. |
| risk_flag | none |
| recommended_review_status | approved_for_content |
| claim_tier | Tier A |
| agent_review_status | auto_approved_for_draft |
| human_required_reason | final publication approval |
| human_decision | TODO |
| decision_owner | TODO |
| required_action | Technical reviewer confirms notation. |
| notes | Use only as official specification. |

### claim-surok-l15-scenario-001

| Field | Value |
|:---|:---|
| claim_id | `claim-surok-l15-scenario-001` |
| product_or_line | RikaNV Surok L15 |
| product_kind | product_model |
| claim_type | scenario_fit |
| current_status | draft |
| confidence | low |
| source_id | TODO |
| evidence_id | TODO |
| statement_short | TODO: нет данных на rikanv.ru для сценарного вывода по Surok L15. |
| risk_flag | scenario_fit, needs_test, source_gap, evidence_gap |
| recommended_review_status | needs_evidence |
| claim_tier | Tier C |
| agent_review_status | needs_evidence |
| human_required_reason | missing source/evidence or test data |
| human_decision | TODO |
| decision_owner | TODO |
| required_action | Collect scenario evidence. |
| notes | Do not publish “best for observation” style statements. |

### claim-surok-l15-limit-001

| Field | Value |
|:---|:---|
| claim_id | `claim-surok-l15-limit-001` |
| product_or_line | RikaNV Surok L15 |
| product_kind | product_model |
| claim_type | limitation |
| current_status | draft |
| confidence | high |
| source_id | `src_rikanv_ru_surok_l15_20260701` |
| evidence_id | `ev_rikanv_ru_surok_l15_specs_20260701` |
| statement_short | Surok L15 не должен описываться как тепловизионный прицел без прямого official source. |
| risk_flag | category_check, needs_human_clarification |
| recommended_review_status | needs_rewording |
| claim_tier | Tier C |
| agent_review_status | needs_rewording |
| human_required_reason | risk wording or category clarity required |
| human_decision | TODO |
| decision_owner | TODO |
| required_action | Reword as publication-safe category statement. |
| notes | Useful internal rule; risky public claim as written. |

### claim-surok-l15-usability-001

| Field | Value |
|:---|:---|
| claim_id | `claim-surok-l15-usability-001` |
| product_or_line | RikaNV Surok L15 |
| product_kind | product_model |
| claim_type | usability |
| current_status | draft |
| confidence | low |
| source_id | TODO |
| evidence_id | TODO |
| statement_short | TODO: нет данных на rikanv.ru по usability Surok L15. |
| risk_flag | source_gap, evidence_gap |
| recommended_review_status | needs_evidence |
| claim_tier | Tier C |
| agent_review_status | needs_evidence |
| human_required_reason | missing source/evidence or test data |
| human_decision | TODO |
| decision_owner | TODO |
| required_action | Collect usability evidence or technical review. |
| notes | Do not infer convenience from assumptions. |

### claim-hypnose-line-001

| Field | Value |
|:---|:---|
| claim_id | `claim-hypnose-line-001` |
| product_or_line | RikaNV Hypnose |
| product_kind | product_line |
| claim_type | specification |
| current_status | verified |
| confidence | verified |
| source_id | `src_rikanv_ru_hypnose_line_20260701` |
| evidence_id | `ev_rikanv_ru_hypnose_line_20260701` |
| statement_short | RikaNV Hypnose является продуктовой линейкой наблюдательных тепловизионных приборов. |
| risk_flag | line_level, doctrine_check |
| recommended_review_status | approved_for_content |
| claim_tier | Tier B |
| agent_review_status | auto_approved_for_draft |
| human_required_reason | line-level wording check; final publication approval |
| human_decision | TODO |
| decision_owner | TODO |
| required_action | Keep line-level wording. |
| notes | Do not attach model-level specs to the line. |

### claim-hypnose2-line-001

| Field | Value |
|:---|:---|
| claim_id | `claim-hypnose2-line-001` |
| product_or_line | RikaNV Hypnose2 |
| product_kind | product_line |
| claim_type | specification |
| current_status | verified |
| confidence | verified |
| source_id | `src_rikanv_ru_hypnose_line_20260701` |
| evidence_id | `ev_rikanv_ru_hypnose2_line_20260701` |
| statement_short | RikaNV Hypnose2 ведется в пилоте как `product_line`, актуальное поколение / подлинейка внутри направления RikaNV Hypnose. |
| risk_flag | line_level, needs_human_clarification, doctrine_check |
| recommended_review_status | needs_rewording |
| claim_tier | Tier B |
| agent_review_status | needs_rewording |
| human_required_reason | risk wording or category clarity required |
| human_decision | TODO |
| decision_owner | TODO |
| required_action | Confirm publication-safe line wording. |
| notes | Separate Hypnose2 line page was not found. |

### claim-hypnose2-650l-spec-001

| Field | Value |
|:---|:---|
| claim_id | `claim-hypnose2-650l-spec-001` |
| product_or_line | RikaNV Hypnose2 650L |
| product_kind | product_model |
| claim_type | specification |
| current_status | verified |
| confidence | verified |
| source_id | `src_rikanv_ru_hypnose2_650l_20260701` |
| evidence_id | `ev_rikanv_ru_hypnose2_650l_specs_20260701` |
| statement_short | RikaNV Hypnose2 650L является конкретной моделью линейки Hypnose2 для первого pilot. |
| risk_flag | needs_human_clarification, doctrine_check |
| recommended_review_status | blocked_for_publication |
| claim_tier | Tier D |
| agent_review_status | blocked_for_publication |
| human_required_reason | human clarification required before any publication |
| human_decision | TODO |
| decision_owner | TODO |
| required_action | Keep internal or reword before public use. |
| notes | Pilot-selection wording is not product content. |

### claim-hypnose2-650l-spec-002

| Field | Value |
|:---|:---|
| claim_id | `claim-hypnose2-650l-spec-002` |
| product_or_line | RikaNV Hypnose2 650L |
| product_kind | product_model |
| claim_type | specification |
| current_status | verified |
| confidence | verified |
| source_id | `src_rikanv_ru_hypnose2_650l_20260701` |
| evidence_id | `ev_rikanv_ru_hypnose2_650l_specs_20260701` |
| statement_short | На странице rikanv.ru для RikaNV Hypnose2 650L указан сенсор 640×512. |
| risk_flag | none |
| recommended_review_status | approved_for_content |
| claim_tier | Tier A |
| agent_review_status | auto_approved_for_draft |
| human_required_reason | final publication approval |
| human_decision | TODO |
| decision_owner | TODO |
| required_action | Technical reviewer confirms notation. |
| notes | Use only as official specification. |

### claim-hypnose2-650l-spec-003

| Field | Value |
|:---|:---|
| claim_id | `claim-hypnose2-650l-spec-003` |
| product_or_line | RikaNV Hypnose2 650L |
| product_kind | product_model |
| claim_type | specification |
| current_status | verified |
| confidence | verified |
| source_id | `src_rikanv_ru_hypnose2_650l_20260701` |
| evidence_id | `ev_rikanv_ru_hypnose2_650l_specs_20260701` |
| statement_short | На странице rikanv.ru для RikaNV Hypnose2 650L указан объектив 50mm F0.9. |
| risk_flag | none |
| recommended_review_status | approved_for_content |
| claim_tier | Tier A |
| agent_review_status | auto_approved_for_draft |
| human_required_reason | final publication approval |
| human_decision | TODO |
| decision_owner | TODO |
| required_action | Technical reviewer confirms notation. |
| notes | Use only as official specification. |

### claim-hypnose2-650l-spec-004

| Field | Value |
|:---|:---|
| claim_id | `claim-hypnose2-650l-spec-004` |
| product_or_line | RikaNV Hypnose2 650L |
| product_kind | product_model |
| claim_type | specification |
| current_status | verified |
| confidence | verified |
| source_id | `src_rikanv_ru_hypnose2_650l_20260701` |
| evidence_id | `ev_rikanv_ru_hypnose2_650l_specs_20260701` |
| statement_short | На странице rikanv.ru для RikaNV Hypnose2 650L указана дальность обнаружения 2600m. |
| risk_flag | performance_risk, doctrine_check |
| recommended_review_status | approved_for_content |
| claim_tier | Tier A |
| agent_review_status | auto_approved_for_draft |
| human_required_reason | official-spec wording only; performance wording check; final publication approval |
| human_decision | TODO |
| decision_owner | TODO |
| required_action | Keep official-spec wording; do not imply real field distance. |
| notes | Needs technical reviewer attention. |

### claim-hypnose2-650l-spec-005

| Field | Value |
|:---|:---|
| claim_id | `claim-hypnose2-650l-spec-005` |
| product_or_line | RikaNV Hypnose2 650L |
| product_kind | product_model |
| claim_type | specification |
| current_status | verified |
| confidence | verified |
| source_id | `src_rikanv_ru_hypnose2_650l_20260701` |
| evidence_id | `ev_rikanv_ru_hypnose2_650l_specs_20260701` |
| statement_short | На странице rikanv.ru для RikaNV Hypnose2 650L указан дальномер 1000m. |
| risk_flag | performance_risk, doctrine_check |
| recommended_review_status | approved_for_content |
| claim_tier | Tier A |
| agent_review_status | auto_approved_for_draft |
| human_required_reason | official-spec wording only; performance wording check; final publication approval |
| human_decision | TODO |
| decision_owner | TODO |
| required_action | Keep official-spec wording; do not imply field guarantee. |
| notes | Do not transfer to the whole Hypnose2 line. |

### claim-hypnose2-650l-scenario-001

| Field | Value |
|:---|:---|
| claim_id | `claim-hypnose2-650l-scenario-001` |
| product_or_line | RikaNV Hypnose2 650L |
| product_kind | product_model |
| claim_type | scenario_fit |
| current_status | draft |
| confidence | low |
| source_id | TODO |
| evidence_id | TODO |
| statement_short | TODO: нет данных на rikanv.ru для сценарного вывода по Hypnose2 650L. |
| risk_flag | scenario_fit, needs_test, source_gap, evidence_gap |
| recommended_review_status | needs_evidence |
| claim_tier | Tier C |
| agent_review_status | needs_evidence |
| human_required_reason | missing source/evidence or test data |
| human_decision | TODO |
| decision_owner | TODO |
| required_action | Collect scenario evidence. |
| notes | Do not make “best” claims; publication requires doctrine review. |

## Agent review output

После agent claim review и human exception review должно быть известно:

- сколько claims `auto_approved_for_draft`;
- сколько `human_review_required`;
- сколько `needs_evidence`;
- сколько `needs_rewording`;
- сколько `blocked_for_publication`;
- сколько `rejected`;
- какие claims можно использовать в первых материалах;
- какие evidence нужно собрать;
- какие материалы заблокированы;
- какие claims требуют doctrine compliance review;
- какие claims требуют technical reviewer;
- какие claims остаются на final human publication approval.
