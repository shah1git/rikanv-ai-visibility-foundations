# Safe Exception Resolution Run 001

## 1. Purpose

Агент предлагает безопасные решения по human exceptions, чтобы не задерживать первые drafts.

Важно: это не human approval.
Это safe operating default для agent-generated drafts.

## 2. Input files

- `pilot-30-days/human-exceptions-run-001.md`.
- `pilot-30-days/draft-ready-claims-run-001.md`.
- `reviews/review-020-agent-claim-review-run-001.md`.

## 3. Safe default policy

1. If an exception needs human approval, exclude it from first drafts.
2. If wording can be made neutral without changing meaning, create safer wording.
3. If a claim involves volatile commercial data, exclude it from first drafts.
4. If a claim involves detection/LRF range, use only official-spec wording.
5. If a claim could imply field performance, exclude or reword.
6. If a claim involves line/model ambiguity, keep it line-level or exclude.
7. If a claim involves competitor comparison, exclude from first drafts.
8. Publication still requires human approval.

## 4. Exception decisions

### exception-run001-hypnose2-line-source

| Field | Value |
|---|---|
| related_candidate_claim_id | candidate-run001-hypnose2-line-001 |
| product_or_line | RikaNV Hypnose2 |
| issue | source_gap |
| agent_safe_decision | block_until_product_clarification |
| default_action | Exclude Hypnose2 line-level claim from first drafts. |
| can_be_used_in_first_drafts | no |
| safe_wording_if_any | N/A - source gap remains unresolved. |
| human_approval_required_before_publication | yes |
| notes | Hypnose2 650L model-level specs remain usable from the product page. |

### exception-run001-ovod-l25-no-lrf

| Field | Value |
|---|---|
| related_candidate_claim_id | candidate-run001-ovod-l25-limit-001 |
| product_or_line | RikaNV Ovod L25 |
| issue | publication_restriction; wording_risk |
| agent_safe_decision | require_human_approval |
| default_action | Exclude no-LRF limitation from first drafts. |
| can_be_used_in_first_drafts | no |
| safe_wording_if_any | N/A - public limitation wording needs explicit approval. |
| human_approval_required_before_publication | yes |
| notes | Do not use this limitation in buyer-facing drafts until owner approval. |

### exception-run001-detection-range-wording

| Field | Value |
|---|---|
| related_candidate_claim_id | candidate-run001-ovod-l25-spec-004; candidate-run001-surok-l15-spec-004; candidate-run001-hypnose2-650l-spec-005 |
| product_or_line | Multiple products |
| issue | performance_claim; wording_risk |
| agent_safe_decision | use_only_with_neutral_official_spec_wording |
| default_action | Use only as official-spec wording in technical tables or source-backed fact blocks. |
| can_be_used_in_first_drafts | yes |
| safe_wording_if_any | На официальной странице указана заявленная дальность обнаружения [value]. |
| human_approval_required_before_publication | yes |
| notes | Do not imply guaranteed field detection or real-world range. |

### exception-run001-lrf-wording

| Field | Value |
|---|---|
| related_candidate_claim_id | candidate-run001-lesnik2-650l-spec-004; candidate-run001-hypnose2-650l-spec-004 |
| product_or_line | Lesnik2 650L; Hypnose2 650L |
| issue | performance_claim; wording_risk |
| agent_safe_decision | use_only_with_neutral_official_spec_wording |
| default_action | Use only as official-spec wording in technical tables or source-backed fact blocks. |
| can_be_used_in_first_drafts | yes |
| safe_wording_if_any | На официальной странице указан заявленный лазерный дальномер [value]. |
| human_approval_required_before_publication | yes |
| notes | Do not claim reliable field measurement at the stated distance without tests. |

### exception-run001-lesnik2-recoil-rating

| Field | Value |
|---|---|
| related_candidate_claim_id | candidate-run001-lesnik2-650l-spec-005 |
| product_or_line | RikaNV Lesnik2 650L |
| issue | technical_risk |
| agent_safe_decision | require_human_approval |
| default_action | Exclude recoil rating from first drafts. |
| can_be_used_in_first_drafts | no |
| safe_wording_if_any | N/A - technical reviewer approval required. |
| human_approval_required_before_publication | yes |
| notes | Do not infer durability, reliability or field stability from this value. |

### exception-run001-volatile-commercial-fields

| Field | Value |
|---|---|
| related_candidate_claim_id | N/A |
| product_or_line | All products |
| issue | volatile_data |
| agent_safe_decision | exclude_from_first_drafts |
| default_action | Exclude volatile commercial fields from first drafts. |
| can_be_used_in_first_drafts | no |
| safe_wording_if_any | N/A - volatile data excluded. |
| human_approval_required_before_publication | yes |
| notes | Price, availability, bundle, firmware and warranty conditions need explicit dated approval. |

## 5. Summary

| Safe decision | Count |
|---|---:|
| block_until_product_clarification | 1 |
| require_human_approval | 2 |
| use_only_with_neutral_official_spec_wording | 2 |
| exclude_from_first_drafts | 1 |

## 6. Result

- Exceptions processed: 6.
- Exceptions excluded from first drafts: 4.
- Exceptions usable with safe wording: 2.
- Exceptions requiring additional evidence: 0 for first drafts; field-performance wording would need tests later.
- Exceptions requiring human approval before publication: 6.
