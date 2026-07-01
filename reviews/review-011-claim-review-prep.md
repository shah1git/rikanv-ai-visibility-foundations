# Review 011: Claim Review Preparation

## 1. Scope

Подготовлена 90-минутная human Claim Review Session по 30 pilot claims.

Покрытые продукты и линейки:

- RikaNV Ovod L25;
- RikaNV Lesnik;
- RikaNV Lesnik2 650L;
- RikaNV Surok L15;
- RikaNV Hypnose;
- RikaNV Hypnose2;
- RikaNV Hypnose2 650L.

Исходный файл `pilot-30-days/claim-registry-pilot-table.md` не изменялся.

## 2. Review rules

- Verified claim must have `source_id` and `evidence_id`.
- Official product page can verify official specification claims.
- Official line page can verify only line-level claims.
- Official source does not verify field performance claims.
- `scenario_fit` claims stay `draft` unless supported by tests or explicit source.
- Price, availability, firmware and bundle data are volatile.
- No claim with marketing language can be approved without rewording.
- No model-level specs for `product_line`.
- No weapon-specific fields for `observation_thermal` unless direct official source supports it.
- Doctrine compliance review is required before publication.
- `approved_for_content` is a human review decision, not an automatic consequence of `verified` status.

## 3. Claim counts

| Status | Count |
| --- | ---: |
| verified | 23 |
| draft | 7 |
| disputed | 0 |
| outdated | 0 |
| rejected | 0 |
| total | 30 |

| Product or line | Verified | Draft | TODO | Needs attention |
| --- | ---: | ---: | ---: | ---: |
| RikaNV Ovod L25 | 5 | 2 | 2 | 3 |
| RikaNV Lesnik | 2 | 0 | 0 | 2 |
| RikaNV Lesnik2 650L | 5 | 1 | 1 | 4 |
| RikaNV Surok L15 | 4 | 3 | 2 | 5 |
| RikaNV Hypnose | 1 | 0 | 0 | 1 |
| RikaNV Hypnose2 | 1 | 0 | 0 | 1 |
| RikaNV Hypnose2 650L | 5 | 1 | 1 | 4 |
| Total | 23 | 7 | 6 | 20 |

## 4. High-risk claims

| Claim ID | Issue | Risk | Recommended action |
| --- | --- | --- | --- |
| claim-ovod-l25-spec-005 | Detection distance in official spec | Could be read as real field guarantee | human_approve_possible |
| claim-ovod-l25-scenario-001 | Scenario claim has TODO source/evidence | Unsupported scenario fit | needs_evidence |
| claim-ovod-l25-limit-001 | Limitation/service claim has TODO source/evidence | Unsupported service or safety statement | needs_evidence |
| claim-lesnik-line-001 | Line-level claim | Could be expanded into model-level wording | human_approve_possible |
| claim-lesnik-line-002 | Line-level model-list claim | Could be read as model specification | human_approve_possible |
| claim-lesnik2-650l-spec-001 | Internal pilot-selection statement | Not a public product claim | blocked_for_publication |
| claim-lesnik2-650l-spec-004 | Detection distance in official spec | Could be read as real field performance | human_approve_possible |
| claim-lesnik2-650l-spec-005 | LRF distance in official spec | Could be read as field guarantee | human_approve_possible |
| claim-lesnik2-650l-scenario-001 | Scenario/service claim has TODO source/evidence | Unsupported scenario, service or reliability implication | needs_evidence |
| claim-surok-l15-spec-001 | Category boundary claim | Must not become riflescope positioning | human_approve_possible |
| claim-surok-l15-spec-002 | Interpretive product wording | Slash wording may need cleaner public formulation | needs_rewording |
| claim-surok-l15-scenario-001 | Scenario claim has TODO source/evidence | Unsupported observation scenario fit | needs_evidence |
| claim-surok-l15-limit-001 | Negative category limitation | Good internal rule, risky public wording | needs_rewording |
| claim-surok-l15-usability-001 | Usability claim has TODO source/evidence | Unsupported usability statement | needs_evidence |
| claim-hypnose-line-001 | Line-level claim | Could be misread as model-level spec | human_approve_possible |
| claim-hypnose2-line-001 | Human taxonomy decision plus line evidence | Separate Hypnose2 line page not found | needs_rewording |
| claim-hypnose2-650l-spec-001 | Internal pilot-selection statement | Not a public product claim | blocked_for_publication |
| claim-hypnose2-650l-spec-004 | Detection distance in official spec | Could be read as real field performance | human_approve_possible |
| claim-hypnose2-650l-spec-005 | Rangefinder distance in official spec | Could be read as field guarantee | human_approve_possible |
| claim-hypnose2-650l-scenario-001 | Scenario claim has TODO source/evidence | Unsupported scenario fit | needs_evidence |

## 5. Claims likely ready for content

Это не final approval. Это список claims, которые можно вынести на human approval.

| Claim ID | Reason | Required human check |
| --- | --- | --- |
| claim-ovod-l25-spec-001 | Official product page supports product category | Doctrine wording check |
| claim-ovod-l25-spec-002 | Category is consistent with Product Truth | Category wording check |
| claim-ovod-l25-spec-003 | Official product page supports sensor spec | Technical reviewer confirms notation |
| claim-ovod-l25-spec-004 | Official product page supports lens spec | Technical reviewer confirms notation |
| claim-ovod-l25-spec-005 | Official product page supports stated detection distance | Must remain official-spec wording |
| claim-lesnik-line-001 | Official line page supports line-level handling | Keep line-level only |
| claim-lesnik-line-002 | Official line page supports model-list statement | Do not convert into model specs |
| claim-lesnik2-650l-spec-002 | Official product page supports sensor spec | Technical reviewer confirms notation |
| claim-lesnik2-650l-spec-003 | Official product page supports lens spec | Technical reviewer confirms notation |
| claim-lesnik2-650l-spec-004 | Official product page supports stated detection distance | Must remain official-spec wording |
| claim-lesnik2-650l-spec-005 | Official product page supports LRF statement | Must remain official-spec wording |
| claim-surok-l15-spec-001 | Official product page supports observation category | Doctrine category check |
| claim-surok-l15-spec-003 | Official product page supports sensor spec | Technical reviewer confirms notation |
| claim-surok-l15-spec-004 | Official product page supports lens spec | Technical reviewer confirms notation |
| claim-hypnose-line-001 | Official line page supports line-level handling | Keep line-level only |
| claim-hypnose2-650l-spec-002 | Official product page supports sensor spec | Technical reviewer confirms notation |
| claim-hypnose2-650l-spec-003 | Official product page supports lens spec | Technical reviewer confirms notation |
| claim-hypnose2-650l-spec-004 | Official product page supports stated detection distance | Must remain official-spec wording |
| claim-hypnose2-650l-spec-005 | Official product page supports rangefinder statement | Must remain official-spec wording |

## 6. Claims that need evidence

| Claim ID | Missing evidence | Suggested evidence type |
| --- | --- | --- |
| claim-ovod-l25-scenario-001 | Scenario fit for Ovod L25 | field_test |
| claim-ovod-l25-limit-001 | Product limitations, service or safety context | internal_product_confirmation |
| claim-lesnik2-650l-scenario-001 | Scenario fit, service evidence and reliability boundaries | field_test |
| claim-surok-l15-scenario-001 | Observation scenario fit | field_test |
| claim-surok-l15-usability-001 | Usability evidence | technical_review |
| claim-hypnose2-650l-scenario-001 | Scenario fit for Hypnose2 650L | field_test |

## 7. Claims needing rewording

| Claim ID | Current statement | Problem | Safer wording |
| --- | --- | --- | --- |
| claim-lesnik2-650l-spec-001 | RikaNV Lesnik2 650L является конкретной моделью линейки Lesnik для первого pilot. | Internal pilot wording is not public content | RikaNV Lesnik2 650L является конкретной моделью линейки Lesnik. |
| claim-surok-l15-spec-002 | RikaNV Surok L15 — тепловизор / камера для наблюдения. | Slash wording may be imprecise for publication | RikaNV Surok L15 относится к наблюдательным тепловизионным приборам. |
| claim-surok-l15-limit-001 | Surok L15 не должен описываться как тепловизионный прицел без прямого official source. | Sounds like an editorial rule, not a public claim | RikaNV Surok L15 описывается как наблюдательный тепловизионный прибор, если official source не указывает иное. |
| claim-hypnose2-line-001 | RikaNV Hypnose2 ведется в пилоте как `product_line`. | Human taxonomy decision needs publication-safe wording | В пилоте RikaNV Hypnose2 учитывается как line-level направление внутри Hypnose до отдельного подтверждения страницы линейки. |
| claim-hypnose2-650l-spec-001 | RikaNV Hypnose2 650L является конкретной моделью линейки Hypnose2 для первого pilot. | Internal pilot wording is not public content | RikaNV Hypnose2 650L является конкретной моделью линейки Hypnose2. |

## 8. Claims blocked for publication

| Claim ID | Reason | What would unblock it |
| --- | --- | --- |
| claim-ovod-l25-scenario-001 | no source; no evidence; scenario fit | Field test or explicit source plus technical review |
| claim-ovod-l25-limit-001 | no source; no evidence; service/safety context | Internal product confirmation plus doctrine review |
| claim-lesnik2-650l-spec-001 | internal pilot-selection claim | Reword as product existence claim or keep internal |
| claim-lesnik2-650l-scenario-001 | no source; no evidence; scenario/service context | Field test, service evidence or technical review |
| claim-surok-l15-spec-002 | needs safer wording before publication | Human-approved observation-device wording |
| claim-surok-l15-scenario-001 | no source; no evidence; scenario fit | Field test or explicit source |
| claim-surok-l15-limit-001 | editorial rule wording; category sensitivity | Reword and approve through doctrine review |
| claim-surok-l15-usability-001 | no source; no evidence; usability claim | Usability evidence or technical review |
| claim-hypnose2-line-001 | human taxonomy decision; separate line page not found | Human clarification and safer wording |
| claim-hypnose2-650l-spec-001 | internal pilot-selection claim | Reword as product existence claim or keep internal |
| claim-hypnose2-650l-scenario-001 | no source; no evidence; scenario fit | Field test or explicit source |

## 9. Recommended agenda for 90-minute session

- 0-10 min — rules and review statuses.
- 10-30 min — Ovod L25 claims.
- 30-50 min — Lesnik / Lesnik2 650L claims.
- 50-65 min — Surok L15 claims.
- 65-80 min — Hypnose / Hypnose2 / Hypnose2 650L claims.
- 80-90 min — final decisions, blockers, next content tasks.

## 10. Required human roles

| Role | Required? | Responsibility |
| --- | --- | --- |
| Pilot owner | yes | Own session outcome and resolve blocked decisions |
| Product Truth owner | yes | Confirm line/model handling and source/evidence consistency |
| Technical reviewer | yes | Confirm specs, terms, ranges, limitations and risky wording |
| Doctrine compliance owner | yes | Confirm anti-marketing, category and publication constraints |
| Content owner | yes | Identify claims usable in first materials after approval |
| AI visibility owner | optional | Connect approved claims to AI visibility gaps and content tasks |

## 11. Verdict

READY FOR HUMAN CLAIM REVIEW.

## 12. Next step

Run the 90-minute Claim Review Session using
`pilot-30-days/claim-review-session-board.md`.
