# Review 007: Human Product Decisions Applied

## 1. Decisions applied

| decision | value | impact |
|---|---|---|
| Pilot owner | Владелец проекта RikaNV AI Visibility / руководитель проекта | Есть единая точка ответственности за 30-дневный pilot |
| Product Truth owner | Технический продуктовый ответственный RikaNV; временно владелец проекта + технический специалист по приборам | Product Truth больше не остается без владельца |
| Technical reviewer | Ведущий технический специалист / сервисный инженер RikaNV | Technical review стал обязательным gate |
| Doctrine compliance owner | Владелец проекта RikaNV AI Visibility | Doctrine review закреплен на первом месяце |
| Publication owner | Контент-ответственный / редактор RikaNV; final approval — владелец проекта | Публикация отделена от drafting и review |
| AI visibility owner | Маркетолог-аналитик / контент-аналитик; если отдельного человека нет — контент-ответственный | Baseline и gap analysis получили owner |
| Base Lesnik model | RikaNV Lesnik2 650L | Model-level Product Truth по Lesnik больше не заблокирован |
| Reason for Lesnik model choice | Сильная и понятная модель линейки Lesnik; PRO-версия требует отдельного решения при смене коммерческого приоритета | Причина выбора зафиксирована как human product decision, не как superiority claim |
| Hypnose2 taxonomy | `product_line`, актуальное поколение / подлинейка внутри направления RikaNV Hypnose | Hypnose2 не смешивается с concrete model |
| Base Hypnose2 model | RikaNV Hypnose2 650L | Model-level Product Truth по Hypnose2 больше не заблокирован |
| Reason for Hypnose2 model choice | Сильная и понятная модель наблюдательной линейки для первого model-level Product Truth | Причина выбора зафиксирована как human product decision, не как superiority claim |
| Volatile data | Цена, наличие, скидки, акции, комплектация, гарантия, прошивки, changelog, сроки поставки, дилерские условия, маркетинговые формулировки | Эти данные не используются как постоянные claims без отдельного review |
| Publication restrictions | See restriction list below | Draft может быть подготовлен, публикация требует отдельного разрешения и review |

Publication restriction list:

- competitor comparisons;
- superiority;
- reliability;
- weather;
- zero stability;
- real field range;
- supplier messages;
- personal data;
- internal firmware docs;
- prices;
- legal-sensitive scenarios.

## 2. Product scope after decisions

| product_or_line | product_kind | product_category | pilot_status | notes |
|---|---|---|---|---|
| RikaNV Ovod L25 | product_model | thermal_riflescope | base scope | Model-level specs allowed from official product page |
| RikaNV Lesnik | product_line | thermal_riflescope | base scope | Line-level claims only |
| RikaNV Lesnik2 650L | product_model | thermal_riflescope | selected base model | First model-level Product Truth for Lesnik |
| RikaNV Surok L15 | product_model | observation_thermal | base scope | Observation device; no riflescope fields without official source |
| RikaNV Hypnose | product_line | observation_thermal | base scope | Line-level claims only |
| RikaNV Hypnose2 | product_line | observation_thermal | base scope | Actual generation/subline inside Hypnose direction |
| RikaNV Hypnose2 650L | product_model | observation_thermal | selected base model | First model-level Product Truth for Hypnose2 |

## 3. Owners

| role | owner | responsibility |
|---|---|---|
| Pilot owner | Владелец проекта RikaNV AI Visibility / руководитель проекта | Scope, timeline, final escalation |
| Product Truth owner | Технический продуктовый ответственный RikaNV; временно владелец проекта + технический специалист по приборам | Product Truth, source/evidence/claim consistency |
| Technical reviewer | Ведущий технический специалист / сервисный инженер RikaNV | Technical correctness of specs, claims, limitations |
| Doctrine compliance owner | Владелец проекта RikaNV AI Visibility | Doctrine compliance check before publication |
| Publication owner | Контент-ответственный / редактор RikaNV | Publication package; final approval by project owner |
| AI visibility owner | Маркетолог-аналитик / контент-аналитик; fallback: контент-ответственный | AI baseline, answer log, metrics, gap analysis |

## 4. Source / Evidence updates

Updated:

- `src_rikanv_ru_lesnik2_650l_20260701` marked as selected base Lesnik model for pilot.
- `src_rikanv_ru_hypnose2_650l_20260701` marked as selected base Hypnose2 model for pilot.
- `pilot-30-days/source-snapshot.md` now records human product selection separately from official specs.

Added evidence:

- `ev_rikanv_ru_lesnik2_650l_specs_20260701`
- `ev_rikanv_ru_hypnose2_650l_specs_20260701`

Unchanged:

- `src_rikanv_ru_hypnose_line_20260701` remains the line-level source for Hypnose/Hypnose2.
- No third-party sources were added.
- `rikasale.ru`, dealer sites, marketplaces and reviews were not used.

## 5. Claims updates

Current Claim Registry pilot count:

- verified: 23
- draft: 7
- TODO-bearing draft claims: 6

Verified model-level claims exist only for:

- RikaNV Ovod L25;
- RikaNV Lesnik2 650L;
- RikaNV Surok L15;
- RikaNV Hypnose2 650L.

Line-level claims exist only for:

- RikaNV Lesnik;
- RikaNV Hypnose;
- RikaNV Hypnose2.

Claims not allowed for content use:

- any `draft` claim;
- any claim with `TODO` source/evidence;
- competitor comparison claims;
- superiority claims;
- reliability claims without service statistics;
- weather/fog/rain claims without tests;
- zero stability claims without tests;
- real field range claims without methodology;
- price, availability, discount, warranty, firmware, changelog, delivery and dealer terms without separate review.

## 6. Remaining blockers

- Scenario-fit claims need tests or technical review.
- Service/safety claims need service data and approval.
- Claims about humidity, fog, rain, zero stability and real field distance need test reports.
- Warranty, firmware, changelog, delivery and dealer terms remain volatile.
- Competitor comparisons require separate permission, sources, evidence, bias check and human approval.
- Final publication still requires technical review, doctrine compliance review and human approval.

## 7. Readiness verdict

READY FOR CLAIM REVIEW.

Human product decisions have been applied.

The pilot now has selected model-level Product Truth targets for Lesnik and
Hypnose2, assigned owners and a clearer publication gate.

The next risk is not taxonomy; it is claim review quality and missing
test/service evidence.

## 8. Next step

Run a 90-minute Claim Review session for the 30 pilot claims and mark each claim as `verified`, `draft`, `needs evidence`, `blocked for publication` or `rejected`.
