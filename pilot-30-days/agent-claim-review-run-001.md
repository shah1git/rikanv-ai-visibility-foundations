# Agent Claim Review Run 001

## 1. Scope

- Source file: `pilot-30-days/site-import-run-001-claim-candidates.md`.
- Candidate claims reviewed: 26.
- Products and lines covered:
  - RikaNV Hypnose.
  - RikaNV Hypnose2.
  - RikaNV Hypnose2 650L.
  - RikaNV Lesnik.
  - RikaNV Lesnik2 650L.
  - RikaNV Ovod L25.
  - RikaNV Surok L15.

## 2. Review Rules Applied

- Tier A official specification claims may be `auto_approved_for_draft`.
- `auto_approved_for_draft` does not mean publication approval.
- Publication always requires human approval.
- Tier B claims require doctrine and technical consistency check.
- Tier C claims require evidence or human review.
- Tier D claims are blocked until explicit human approval.
- Official detection, recognition and LRF values are official specs, not field performance guarantees.
- Price, availability, bundle, firmware and warranty fields are volatile.
- Product line claims must remain line-level.
- Model-level specs require a product_model page.
- Observation products must not receive riflescope-only claims without direct official source.
- Marketing language must be neutralized or flagged.

## 3. Summary

| Review status | Count |
|---|---:|
| auto_approved_for_draft | 18 |
| human_review_required | 3 |
| needs_evidence | 0 |
| needs_rewording | 5 |
| blocked_for_publication | 0 |
| rejected | 0 |

| Claim tier | Count |
|---|---:|
| Tier A | 20 |
| Tier B | 6 |
| Tier C | 0 |
| Tier D | 0 |

| Product or line | Candidate claims | auto_approved_for_draft | human_review_required | needs_evidence | needs_rewording | blocked_for_publication | rejected |
|---|---:|---:|---:|---:|---:|---:|---:|
| RikaNV Hypnose | 2 | 2 | 0 | 0 | 0 | 0 | 0 |
| RikaNV Hypnose2 | 1 | 0 | 1 | 0 | 0 | 0 | 0 |
| RikaNV Hypnose2 650L | 6 | 4 | 0 | 0 | 2 | 0 | 0 |
| RikaNV Lesnik | 2 | 2 | 0 | 0 | 0 | 0 | 0 |
| RikaNV Lesnik2 650L | 5 | 3 | 1 | 0 | 1 | 0 | 0 |
| RikaNV Ovod L25 | 5 | 3 | 1 | 0 | 1 | 0 | 0 |
| RikaNV Surok L15 | 5 | 4 | 0 | 0 | 1 | 0 | 0 |

## 4. Reviewed Claims

### candidate-run001-ovod-l25-spec-001

| Field | Value |
|---|---|
| candidate_claim_id | `candidate-run001-ovod-l25-spec-001` |
| product_or_line | RikaNV Ovod L25 |
| product_kind | product_model |
| claim_type | classification |
| original_statement | RikaNV Ovod L25 является конкретной моделью тепловизионного прицела RikaNV. |
| source_id | `src_rikanv_ru_ovod_l25_20260701` |
| evidence_id | `ev_rikanv_ru_ovod_l25_specs_20260701` |
| claim_tier | Tier A |
| agent_review_status | auto_approved_for_draft |
| risk_flags | none |
| doctrine_risk | low |
| technical_risk | low |
| publication_allowed_without_human | no |
| safer_wording | RikaNV Ovod L25 указан как конкретная модель тепловизионного прицела RikaNV. |
| required_human_action | Use safer wording in drafts; human approval remains required before publication. |
| notes | Tier A claim allowed for draft use only with source/evidence and neutral wording. |

### candidate-run001-ovod-l25-spec-002

| Field | Value |
|---|---|
| candidate_claim_id | `candidate-run001-ovod-l25-spec-002` |
| product_or_line | RikaNV Ovod L25 |
| product_kind | product_model |
| claim_type | specification |
| original_statement | На официальной странице RikaNV Ovod L25 указана матрица 256x192. |
| source_id | `src_rikanv_ru_ovod_l25_20260701` |
| evidence_id | `ev_rikanv_ru_ovod_l25_specs_20260701` |
| claim_tier | Tier A |
| agent_review_status | auto_approved_for_draft |
| risk_flags | none |
| doctrine_risk | low |
| technical_risk | low |
| publication_allowed_without_human | no |
| safer_wording | На официальной странице RikaNV Ovod L25 указана матрица 256x192. |
| required_human_action | Use safer wording in drafts; human approval remains required before publication. |
| notes | Tier A claim allowed for draft use only with source/evidence and neutral wording. |

### candidate-run001-ovod-l25-spec-003

| Field | Value |
|---|---|
| candidate_claim_id | `candidate-run001-ovod-l25-spec-003` |
| product_or_line | RikaNV Ovod L25 |
| product_kind | product_model |
| claim_type | specification |
| original_statement | На официальной странице RikaNV Ovod L25 указан объектив 25 мм F0.9. |
| source_id | `src_rikanv_ru_ovod_l25_20260701` |
| evidence_id | `ev_rikanv_ru_ovod_l25_specs_20260701` |
| claim_tier | Tier A |
| agent_review_status | auto_approved_for_draft |
| risk_flags | none |
| doctrine_risk | low |
| technical_risk | low |
| publication_allowed_without_human | no |
| safer_wording | На официальной странице RikaNV Ovod L25 указан объектив 25 мм F0.9. |
| required_human_action | Use safer wording in drafts; human approval remains required before publication. |
| notes | Tier A claim allowed for draft use only with source/evidence and neutral wording. |

### candidate-run001-ovod-l25-spec-004

| Field | Value |
|---|---|
| candidate_claim_id | `candidate-run001-ovod-l25-spec-004` |
| product_or_line | RikaNV Ovod L25 |
| product_kind | product_model |
| claim_type | specification |
| original_statement | На официальной странице RikaNV Ovod L25 указана дальность обнаружения 1300 м. |
| source_id | `src_rikanv_ru_ovod_l25_20260701` |
| evidence_id | `ev_rikanv_ru_ovod_l25_specs_20260701` |
| claim_tier | Tier A |
| agent_review_status | needs_rewording |
| risk_flags | performance_risk |
| doctrine_risk | medium: must not imply field guarantee |
| technical_risk | medium: official spec may be misread as real field performance |
| publication_allowed_without_human | no |
| safer_wording | На официальной странице RikaNV Ovod L25 указана заявленная дальность обнаружения 1300 м. |
| required_human_action | Use only the safer official-spec wording and get human approval before publication. |
| notes | Official value can be mentioned only as stated on the official page, not as field performance proof. |

### candidate-run001-ovod-l25-limit-001

| Field | Value |
|---|---|
| candidate_claim_id | `candidate-run001-ovod-l25-limit-001` |
| product_or_line | RikaNV Ovod L25 |
| product_kind | product_model |
| claim_type | limitation |
| original_statement | На официальной странице RikaNV Ovod L25 указано, что у L25 нет встроенного лазерного дальномера. |
| source_id | `src_rikanv_ru_ovod_l25_20260701` |
| evidence_id | `ev_rikanv_ru_ovod_l25_specs_20260701` |
| claim_tier | Tier B |
| agent_review_status | human_review_required |
| risk_flags | limitation |
| doctrine_risk | medium: limitation can be used only with neutral wording |
| technical_risk | medium: public limitation wording needs human decision |
| publication_allowed_without_human | no |
| safer_wording | На официальной странице RikaNV Ovod L25 указано, что у L25 нет встроенного лазерного дальномера. |
| required_human_action | Human decides whether this limitation can be used in public materials. |
| notes | Human review required before this claim is used in drafts or publication package. |

### candidate-run001-lesnik-line-001

| Field | Value |
|---|---|
| candidate_claim_id | `candidate-run001-lesnik-line-001` |
| product_or_line | RikaNV Lesnik |
| product_kind | product_line |
| claim_type | line_level |
| original_statement | RikaNV Lesnik является продуктовой линейкой RikaNV в категории тепловизионных прицелов. |
| source_id | `src_rikanv_ru_lesnik_line_20260701` |
| evidence_id | `ev_rikanv_ru_lesnik_line_20260701` |
| claim_tier | Tier B |
| agent_review_status | auto_approved_for_draft |
| risk_flags | line_level |
| doctrine_risk | medium: do not turn line-level fact into model-level spec |
| technical_risk | medium: keep claim at line level only |
| publication_allowed_without_human | no |
| safer_wording | RikaNV Lesnik описывается как продуктовая линейка RikaNV в категории тепловизионных прицелов. |
| required_human_action | Use safer wording in drafts; human approval remains required before publication. |
| notes | Tier B claim allowed for draft use only with source/evidence and neutral wording. |

### candidate-run001-lesnik-line-002

| Field | Value |
|---|---|
| candidate_claim_id | `candidate-run001-lesnik-line-002` |
| product_or_line | RikaNV Lesnik |
| product_kind | product_line |
| claim_type | line_level |
| original_statement | Официальная страница линейки Lesnik содержит ссылки на модели Lesnik2. |
| source_id | `src_rikanv_ru_lesnik_line_20260701` |
| evidence_id | `ev_rikanv_ru_lesnik_line_20260701` |
| claim_tier | Tier B |
| agent_review_status | auto_approved_for_draft |
| risk_flags | line_level |
| doctrine_risk | medium: do not turn line-level fact into model-level spec |
| technical_risk | medium: keep claim at line level only |
| publication_allowed_without_human | no |
| safer_wording | Официальная страница линейки Lesnik содержит ссылки на модели Lesnik2. |
| required_human_action | Use safer wording in drafts; human approval remains required before publication. |
| notes | Tier B claim allowed for draft use only with source/evidence and neutral wording. |

### candidate-run001-lesnik2-650l-spec-001

| Field | Value |
|---|---|
| candidate_claim_id | `candidate-run001-lesnik2-650l-spec-001` |
| product_or_line | RikaNV Lesnik2 650L |
| product_kind | product_model |
| claim_type | specification |
| original_statement | На официальной странице RikaNV Lesnik2 650L указана матрица 640x512. |
| source_id | `src_rikanv_ru_lesnik2_650l_20260701` |
| evidence_id | `ev_rikanv_ru_lesnik2_650l_specs_20260701` |
| claim_tier | Tier A |
| agent_review_status | auto_approved_for_draft |
| risk_flags | none |
| doctrine_risk | low |
| technical_risk | low |
| publication_allowed_without_human | no |
| safer_wording | На официальной странице RikaNV Lesnik2 650L указана матрица 640x512. |
| required_human_action | Use safer wording in drafts; human approval remains required before publication. |
| notes | Tier A claim allowed for draft use only with source/evidence and neutral wording. |

### candidate-run001-lesnik2-650l-spec-002

| Field | Value |
|---|---|
| candidate_claim_id | `candidate-run001-lesnik2-650l-spec-002` |
| product_or_line | RikaNV Lesnik2 650L |
| product_kind | product_model |
| claim_type | specification |
| original_statement | На официальной странице RikaNV Lesnik2 650L указан объектив 50 мм F1.0. |
| source_id | `src_rikanv_ru_lesnik2_650l_20260701` |
| evidence_id | `ev_rikanv_ru_lesnik2_650l_specs_20260701` |
| claim_tier | Tier A |
| agent_review_status | auto_approved_for_draft |
| risk_flags | none |
| doctrine_risk | low |
| technical_risk | low |
| publication_allowed_without_human | no |
| safer_wording | На официальной странице RikaNV Lesnik2 650L указан объектив 50 мм F1.0. |
| required_human_action | Use safer wording in drafts; human approval remains required before publication. |
| notes | Tier A claim allowed for draft use only with source/evidence and neutral wording. |

### candidate-run001-lesnik2-650l-spec-003

| Field | Value |
|---|---|
| candidate_claim_id | `candidate-run001-lesnik2-650l-spec-003` |
| product_or_line | RikaNV Lesnik2 650L |
| product_kind | product_model |
| claim_type | specification |
| original_statement | На официальной странице RikaNV Lesnik2 650L указан NETD <=18 мК. |
| source_id | `src_rikanv_ru_lesnik2_650l_20260701` |
| evidence_id | `ev_rikanv_ru_lesnik2_650l_specs_20260701` |
| claim_tier | Tier A |
| agent_review_status | auto_approved_for_draft |
| risk_flags | none |
| doctrine_risk | low |
| technical_risk | low |
| publication_allowed_without_human | no |
| safer_wording | На официальной странице RikaNV Lesnik2 650L указан NETD <=18 мК. |
| required_human_action | Use safer wording in drafts; human approval remains required before publication. |
| notes | Tier A claim allowed for draft use only with source/evidence and neutral wording. |

### candidate-run001-lesnik2-650l-spec-004

| Field | Value |
|---|---|
| candidate_claim_id | `candidate-run001-lesnik2-650l-spec-004` |
| product_or_line | RikaNV Lesnik2 650L |
| product_kind | product_model |
| claim_type | specification |
| original_statement | На официальной странице RikaNV Lesnik2 650L указан лазерный дальномер 1200 м. |
| source_id | `src_rikanv_ru_lesnik2_650l_20260701` |
| evidence_id | `ev_rikanv_ru_lesnik2_650l_specs_20260701` |
| claim_tier | Tier A |
| agent_review_status | needs_rewording |
| risk_flags | performance_risk |
| doctrine_risk | medium: must not imply field guarantee |
| technical_risk | medium: official spec may be misread as real field performance |
| publication_allowed_without_human | no |
| safer_wording | На официальной странице RikaNV Lesnik2 650L указан заявленный лазерный дальномер 1200 м. |
| required_human_action | Use only the safer official-spec wording and get human approval before publication. |
| notes | Official value can be mentioned only as stated on the official page, not as field performance proof. |

### candidate-run001-lesnik2-650l-spec-005

| Field | Value |
|---|---|
| candidate_claim_id | `candidate-run001-lesnik2-650l-spec-005` |
| product_or_line | RikaNV Lesnik2 650L |
| product_kind | product_model |
| claim_type | specification |
| original_statement | На официальной странице RikaNV Lesnik2 650L указана стойкость к отдаче 6000 Дж. |
| source_id | `src_rikanv_ru_lesnik2_650l_20260701` |
| evidence_id | `ev_rikanv_ru_lesnik2_650l_specs_20260701` |
| claim_tier | Tier A |
| agent_review_status | human_review_required |
| risk_flags | technical_review |
| doctrine_risk | medium: avoid unsupported reliability/performance implication |
| technical_risk | medium: technical reviewer should confirm interpretation before publication |
| publication_allowed_without_human | no |
| safer_wording | На официальной странице RikaNV Lesnik2 650L указана стойкость к отдаче 6000 Дж. |
| required_human_action | Technical reviewer confirms recoil wording and acceptable public use. |
| notes | Human review required before this claim is used in drafts or publication package. |

### candidate-run001-surok-l15-spec-001

| Field | Value |
|---|---|
| candidate_claim_id | `candidate-run001-surok-l15-spec-001` |
| product_or_line | RikaNV Surok L15 |
| product_kind | product_model |
| claim_type | classification |
| original_statement | RikaNV Surok L15 является наблюдательным тепловизионным прибором, а не тепловизионным прицелом. |
| source_id | `src_rikanv_ru_surok_l15_20260701` |
| evidence_id | `ev_rikanv_ru_surok_l15_specs_20260701` |
| claim_tier | Tier A |
| agent_review_status | auto_approved_for_draft |
| risk_flags | category_check |
| doctrine_risk | medium: category separation must remain explicit |
| technical_risk | medium: category wording must avoid weapon-specific confusion |
| publication_allowed_without_human | no |
| safer_wording | RikaNV Surok L15 классифицируется как наблюдательный тепловизионный прибор. |
| required_human_action | Use safer wording in drafts; human approval remains required before publication. |
| notes | Tier A claim allowed for draft use only with source/evidence and neutral wording. |

### candidate-run001-surok-l15-spec-002

| Field | Value |
|---|---|
| candidate_claim_id | `candidate-run001-surok-l15-spec-002` |
| product_or_line | RikaNV Surok L15 |
| product_kind | product_model |
| claim_type | specification |
| original_statement | На официальной странице RikaNV Surok L15 указана матрица 256x192. |
| source_id | `src_rikanv_ru_surok_l15_20260701` |
| evidence_id | `ev_rikanv_ru_surok_l15_specs_20260701` |
| claim_tier | Tier A |
| agent_review_status | auto_approved_for_draft |
| risk_flags | none |
| doctrine_risk | low |
| technical_risk | low |
| publication_allowed_without_human | no |
| safer_wording | На официальной странице RikaNV Surok L15 указана матрица 256x192. |
| required_human_action | Use safer wording in drafts; human approval remains required before publication. |
| notes | Tier A claim allowed for draft use only with source/evidence and neutral wording. |

### candidate-run001-surok-l15-spec-003

| Field | Value |
|---|---|
| candidate_claim_id | `candidate-run001-surok-l15-spec-003` |
| product_or_line | RikaNV Surok L15 |
| product_kind | product_model |
| claim_type | specification |
| original_statement | На официальной странице RikaNV Surok L15 указан объектив 15 мм F0.9. |
| source_id | `src_rikanv_ru_surok_l15_20260701` |
| evidence_id | `ev_rikanv_ru_surok_l15_specs_20260701` |
| claim_tier | Tier A |
| agent_review_status | auto_approved_for_draft |
| risk_flags | none |
| doctrine_risk | low |
| technical_risk | low |
| publication_allowed_without_human | no |
| safer_wording | На официальной странице RikaNV Surok L15 указан объектив 15 мм F0.9. |
| required_human_action | Use safer wording in drafts; human approval remains required before publication. |
| notes | Tier A claim allowed for draft use only with source/evidence and neutral wording. |

### candidate-run001-surok-l15-spec-004

| Field | Value |
|---|---|
| candidate_claim_id | `candidate-run001-surok-l15-spec-004` |
| product_or_line | RikaNV Surok L15 |
| product_kind | product_model |
| claim_type | specification |
| original_statement | На официальной странице RikaNV Surok L15 указана дальность обнаружения 750 м. |
| source_id | `src_rikanv_ru_surok_l15_20260701` |
| evidence_id | `ev_rikanv_ru_surok_l15_specs_20260701` |
| claim_tier | Tier A |
| agent_review_status | needs_rewording |
| risk_flags | performance_risk |
| doctrine_risk | medium: must not imply field guarantee |
| technical_risk | medium: official spec may be misread as real field performance |
| publication_allowed_without_human | no |
| safer_wording | На официальной странице RikaNV Surok L15 указана заявленная дальность обнаружения 750 м. |
| required_human_action | Use only the safer official-spec wording and get human approval before publication. |
| notes | Official value can be mentioned only as stated on the official page, not as field performance proof. |

### candidate-run001-surok-l15-spec-005

| Field | Value |
|---|---|
| candidate_claim_id | `candidate-run001-surok-l15-spec-005` |
| product_or_line | RikaNV Surok L15 |
| product_kind | product_model |
| claim_type | specification |
| original_statement | На официальной странице RikaNV Surok L15 указано поле зрения 11.7 x 8.8 градусов. |
| source_id | `src_rikanv_ru_surok_l15_20260701` |
| evidence_id | `ev_rikanv_ru_surok_l15_specs_20260701` |
| claim_tier | Tier A |
| agent_review_status | auto_approved_for_draft |
| risk_flags | none |
| doctrine_risk | low |
| technical_risk | low |
| publication_allowed_without_human | no |
| safer_wording | На официальной странице RikaNV Surok L15 указано поле зрения 11.7 x 8.8 градусов. |
| required_human_action | Use safer wording in drafts; human approval remains required before publication. |
| notes | Tier A claim allowed for draft use only with source/evidence and neutral wording. |

### candidate-run001-hypnose-line-001

| Field | Value |
|---|---|
| candidate_claim_id | `candidate-run001-hypnose-line-001` |
| product_or_line | RikaNV Hypnose |
| product_kind | product_line |
| claim_type | line_level |
| original_statement | RikaNV Hypnose является продуктовой линейкой наблюдательных тепловизионных приборов RikaNV. |
| source_id | `src_rikanv_ru_hypnose_line_20260701` |
| evidence_id | `ev_rikanv_ru_hypnose_line_20260701` |
| claim_tier | Tier B |
| agent_review_status | auto_approved_for_draft |
| risk_flags | line_level |
| doctrine_risk | medium: do not turn line-level fact into model-level spec |
| technical_risk | medium: keep claim at line level only |
| publication_allowed_without_human | no |
| safer_wording | RikaNV Hypnose описывается как продуктовая линейка наблюдательных тепловизионных приборов RikaNV. |
| required_human_action | Use safer wording in drafts; human approval remains required before publication. |
| notes | Tier B claim allowed for draft use only with source/evidence and neutral wording. |

### candidate-run001-hypnose-line-002

| Field | Value |
|---|---|
| candidate_claim_id | `candidate-run001-hypnose-line-002` |
| product_or_line | RikaNV Hypnose |
| product_kind | product_line |
| claim_type | line_level |
| original_statement | Официальная страница линейки Hypnose содержит ссылки на модели Hypnose2. |
| source_id | `src_rikanv_ru_hypnose_line_20260701` |
| evidence_id | `ev_rikanv_ru_hypnose_line_20260701` |
| claim_tier | Tier B |
| agent_review_status | auto_approved_for_draft |
| risk_flags | line_level |
| doctrine_risk | medium: do not turn line-level fact into model-level spec |
| technical_risk | medium: keep claim at line level only |
| publication_allowed_without_human | no |
| safer_wording | Официальная страница линейки Hypnose содержит ссылки на модели Hypnose2. |
| required_human_action | Use safer wording in drafts; human approval remains required before publication. |
| notes | Tier B claim allowed for draft use only with source/evidence and neutral wording. |

### candidate-run001-hypnose2-line-001

| Field | Value |
|---|---|
| candidate_claim_id | `candidate-run001-hypnose2-line-001` |
| product_or_line | RikaNV Hypnose2 |
| product_kind | product_line |
| claim_type | line_level |
| original_statement | Hypnose2 модели отображаются на официальной странице линейки Hypnose. |
| source_id | `src_rikanv_ru_hypnose_line_20260701` |
| evidence_id | `ev_rikanv_ru_hypnose2_line_20260701` |
| claim_tier | Tier B |
| agent_review_status | human_review_required |
| risk_flags | line_level; source_gap |
| doctrine_risk | high: source gap needs human decision |
| technical_risk | high: separate Hypnose2 line source was not found |
| publication_allowed_without_human | no |
| safer_wording | Модели Hypnose2 отображаются на официальной странице линейки Hypnose. |
| required_human_action | Human confirms whether Hypnose page can support Hypnose2 line-level context. |
| notes | Separate Hypnose2 line page was not found; keep as exception until human decision. |

### candidate-run001-hypnose2-650l-spec-001

| Field | Value |
|---|---|
| candidate_claim_id | `candidate-run001-hypnose2-650l-spec-001` |
| product_or_line | RikaNV Hypnose2 650L |
| product_kind | product_model |
| claim_type | specification |
| original_statement | На официальной странице RikaNV Hypnose2 650L указана матрица 640x512. |
| source_id | `src_rikanv_ru_hypnose2_650l_20260701` |
| evidence_id | `ev_rikanv_ru_hypnose2_650l_specs_20260701` |
| claim_tier | Tier A |
| agent_review_status | auto_approved_for_draft |
| risk_flags | none |
| doctrine_risk | low |
| technical_risk | low |
| publication_allowed_without_human | no |
| safer_wording | На официальной странице RikaNV Hypnose2 650L указана матрица 640x512. |
| required_human_action | Use safer wording in drafts; human approval remains required before publication. |
| notes | Tier A claim allowed for draft use only with source/evidence and neutral wording. |

### candidate-run001-hypnose2-650l-spec-002

| Field | Value |
|---|---|
| candidate_claim_id | `candidate-run001-hypnose2-650l-spec-002` |
| product_or_line | RikaNV Hypnose2 650L |
| product_kind | product_model |
| claim_type | specification |
| original_statement | На официальной странице RikaNV Hypnose2 650L указан объектив 50 мм F0.9. |
| source_id | `src_rikanv_ru_hypnose2_650l_20260701` |
| evidence_id | `ev_rikanv_ru_hypnose2_650l_specs_20260701` |
| claim_tier | Tier A |
| agent_review_status | auto_approved_for_draft |
| risk_flags | none |
| doctrine_risk | low |
| technical_risk | low |
| publication_allowed_without_human | no |
| safer_wording | На официальной странице RikaNV Hypnose2 650L указан объектив 50 мм F0.9. |
| required_human_action | Use safer wording in drafts; human approval remains required before publication. |
| notes | Tier A claim allowed for draft use only with source/evidence and neutral wording. |

### candidate-run001-hypnose2-650l-spec-003

| Field | Value |
|---|---|
| candidate_claim_id | `candidate-run001-hypnose2-650l-spec-003` |
| product_or_line | RikaNV Hypnose2 650L |
| product_kind | product_model |
| claim_type | specification |
| original_statement | На официальной странице RikaNV Hypnose2 650L указан NETD <=18 мК. |
| source_id | `src_rikanv_ru_hypnose2_650l_20260701` |
| evidence_id | `ev_rikanv_ru_hypnose2_650l_specs_20260701` |
| claim_tier | Tier A |
| agent_review_status | auto_approved_for_draft |
| risk_flags | none |
| doctrine_risk | low |
| technical_risk | low |
| publication_allowed_without_human | no |
| safer_wording | На официальной странице RikaNV Hypnose2 650L указан NETD <=18 мК. |
| required_human_action | Use safer wording in drafts; human approval remains required before publication. |
| notes | Tier A claim allowed for draft use only with source/evidence and neutral wording. |

### candidate-run001-hypnose2-650l-spec-004

| Field | Value |
|---|---|
| candidate_claim_id | `candidate-run001-hypnose2-650l-spec-004` |
| product_or_line | RikaNV Hypnose2 650L |
| product_kind | product_model |
| claim_type | specification |
| original_statement | На официальной странице RikaNV Hypnose2 650L указан лазерный дальномер 1000 м. |
| source_id | `src_rikanv_ru_hypnose2_650l_20260701` |
| evidence_id | `ev_rikanv_ru_hypnose2_650l_specs_20260701` |
| claim_tier | Tier A |
| agent_review_status | needs_rewording |
| risk_flags | performance_risk |
| doctrine_risk | medium: must not imply field guarantee |
| technical_risk | medium: official spec may be misread as real field performance |
| publication_allowed_without_human | no |
| safer_wording | На официальной странице RikaNV Hypnose2 650L указан заявленный лазерный дальномер 1000 м. |
| required_human_action | Use only the safer official-spec wording and get human approval before publication. |
| notes | Official value can be mentioned only as stated on the official page, not as field performance proof. |

### candidate-run001-hypnose2-650l-spec-005

| Field | Value |
|---|---|
| candidate_claim_id | `candidate-run001-hypnose2-650l-spec-005` |
| product_or_line | RikaNV Hypnose2 650L |
| product_kind | product_model |
| claim_type | specification |
| original_statement | На официальной странице RikaNV Hypnose2 650L указана дальность обнаружения 2600 м. |
| source_id | `src_rikanv_ru_hypnose2_650l_20260701` |
| evidence_id | `ev_rikanv_ru_hypnose2_650l_specs_20260701` |
| claim_tier | Tier A |
| agent_review_status | needs_rewording |
| risk_flags | performance_risk |
| doctrine_risk | medium: must not imply field guarantee |
| technical_risk | medium: official spec may be misread as real field performance |
| publication_allowed_without_human | no |
| safer_wording | На официальной странице RikaNV Hypnose2 650L указана заявленная дальность обнаружения 2600 м. |
| required_human_action | Use only the safer official-spec wording and get human approval before publication. |
| notes | Official value can be mentioned only as stated on the official page, not as field performance proof. |

### candidate-run001-hypnose2-650l-spec-006

| Field | Value |
|---|---|
| candidate_claim_id | `candidate-run001-hypnose2-650l-spec-006` |
| product_or_line | RikaNV Hypnose2 650L |
| product_kind | product_model |
| claim_type | specification |
| original_statement | На официальной странице RikaNV Hypnose2 650L указан USB-C с видеовыходом. |
| source_id | `src_rikanv_ru_hypnose2_650l_20260701` |
| evidence_id | `ev_rikanv_ru_hypnose2_650l_specs_20260701` |
| claim_tier | Tier A |
| agent_review_status | auto_approved_for_draft |
| risk_flags | none |
| doctrine_risk | low |
| technical_risk | low |
| publication_allowed_without_human | no |
| safer_wording | На официальной странице RikaNV Hypnose2 650L указан USB-C с видеовыходом. |
| required_human_action | Use safer wording in drafts; human approval remains required before publication. |
| notes | Tier A claim allowed for draft use only with source/evidence and neutral wording. |
