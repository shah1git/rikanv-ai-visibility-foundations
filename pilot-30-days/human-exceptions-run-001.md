# Human Exceptions Run 001

## Purpose

Этот файл содержит только claims/issues, которые требуют human decision.

## Exception Types

- taxonomy_ambiguity
- line_model_risk
- performance_claim
- volatile_data
- missing_evidence
- wording_risk
- doctrine_risk
- technical_risk
- publication_restriction
- source_gap

## Exceptions

### exception-run001-hypnose2-line-source

| Field | Value |
|---|---|
| related_candidate_claim_id | candidate-run001-hypnose2-line-001 |
| product_or_line | RikaNV Hypnose2 |
| issue | source_gap |
| why_human_needed | Separate Hypnose2 line page was not found; current support comes from Hypnose line page. |
| recommended_decision_options | approve Hypnose page as line-level source; require separate source; block line-level use |
| default_safe_action | Do not use Hypnose2 line-level claim in drafts until human decision. |
| owner | TODO |
| human_decision | TODO |
| notes | Does not affect Hypnose2 650L model-level specs from product page. |

### exception-run001-ovod-l25-no-lrf

| Field | Value |
|---|---|
| related_candidate_claim_id | candidate-run001-ovod-l25-limit-001 |
| product_or_line | RikaNV Ovod L25 |
| issue | publication_restriction; wording_risk |
| why_human_needed | The claim is a limitation and should be used only if RikaNV approves public wording. |
| recommended_decision_options | approve neutral limitation; reword; omit from first drafts |
| default_safe_action | Omit from drafts until human decision. |
| owner | TODO |
| human_decision | TODO |
| notes | If approved, wording should remain factual and non-comparative. |

### exception-run001-detection-range-wording

| Field | Value |
|---|---|
| related_candidate_claim_id | candidate-run001-ovod-l25-spec-004; candidate-run001-surok-l15-spec-004; candidate-run001-hypnose2-650l-spec-005 |
| product_or_line | Multiple products |
| issue | performance_claim; wording_risk |
| why_human_needed | Detection range values are official specs and must not be presented as guaranteed field performance. |
| recommended_decision_options | allow official-spec wording; require field test wording later; omit ranges from narrative drafts |
| default_safe_action | Use only technical tables or omit until human wording policy is approved. |
| owner | TODO |
| human_decision | TODO |
| notes | Safe wording uses `заявленная дальность обнаружения` or `на официальной странице указана`. |

### exception-run001-lrf-wording

| Field | Value |
|---|---|
| related_candidate_claim_id | candidate-run001-lesnik2-650l-spec-004; candidate-run001-hypnose2-650l-spec-004 |
| product_or_line | Lesnik2 650L; Hypnose2 650L |
| issue | performance_claim; wording_risk |
| why_human_needed | LRF distance is an official spec, not proof of real field measurement reliability. |
| recommended_decision_options | allow official-spec wording; require test evidence for performance language; omit from narrative drafts |
| default_safe_action | Use only official-spec wording until human publication policy is approved. |
| owner | TODO |
| human_decision | TODO |
| notes | Do not write that the device reliably measures at that distance without a test. |

### exception-run001-lesnik2-recoil-rating

| Field | Value |
|---|---|
| related_candidate_claim_id | candidate-run001-lesnik2-650l-spec-005 |
| product_or_line | RikaNV Lesnik2 650L |
| issue | technical_risk |
| why_human_needed | Recoil rating should be confirmed by technical reviewer before public use. |
| recommended_decision_options | approve official-spec wording; require technical note; omit from first drafts |
| default_safe_action | Hold for technical reviewer before publication package. |
| owner | TODO |
| human_decision | TODO |
| notes | No reliability or durability claim should be inferred from this spec. |

### exception-run001-volatile-commercial-fields

| Field | Value |
|---|---|
| related_candidate_claim_id | N/A |
| product_or_line | All products |
| issue | volatile_data |
| why_human_needed | Price, availability, bundle, firmware and warranty conditions can change and need human approval. |
| recommended_decision_options | exclude from first drafts; include with dated check; keep only in internal notes |
| default_safe_action | Exclude volatile commercial fields from first drafts. |
| owner | TODO |
| human_decision | TODO |
| notes | This exception applies even when a page currently shows commercial details. |

## Required Human Decisions

- Можно ли использовать Hypnose page as line-level source for Hypnose2 context.
- Можно ли публично использовать Ovod L25 no-LRF limitation.
- Как формулировать official detection/LRF ranges.
- Исключить ли volatile commercial fields из первых drafts полностью.
