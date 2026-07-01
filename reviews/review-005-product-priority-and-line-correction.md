# Review 005: Product Priority and Line Correction

## 1. Why this correction was needed

Предыдущий пилот содержал две операционные ошибки:

- Lesnik ошибочно был перенесен в later, хотя он является базовым приоритетом Product Truth.
- Hypnose/Hypnose2 могли быть трактованы как конкретные продукты, хотя в пилоте их нужно вести как продуктовые линейки.

Это создавало риск неправильных claims: характеристики линейки могли быть записаны как характеристики конкретного прибора, а Lesnik мог выпасть из базового AI visibility baseline.

## 2. Corrected product priority

| product/line | product_kind | product_category | priority | status | notes |
|---|---|---|---|---|---|
| RikaNV Ovod L25 | product_model | thermal_riflescope | 1 | active | Concrete product page found on rikanv.ru |
| RikaNV Lesnik | product_line | thermal_riflescope | 2 | active | Base priority; choose concrete model for model-level claims |
| RikaNV Surok L15 | product_model | observation_thermal | 3 | active | Concrete product page found on rikanv.ru |
| RikaNV Hypnose | product_line | observation_thermal | 4 | active line-level | Do not use as concrete model |
| RikaNV Hypnose2 | product_line | observation_thermal | 5 | active line-level | Separate line page not found; models listed on Hypnose line page |
| Other Ovod / Surok / Lesnik models | product_model | depends | optional | candidate | Add after base Product Truth |

## 3. Hypnose/Hypnose2 handling

Hypnose and Hypnose2 are handled as `product_line`.

Allowed:

- line-level claims about category, line structure and model list if supported by `rikanv.ru`;
- model-level claims only for concrete models such as Hypnose2 335L, 650L or 660D after selecting the model and linking to official product page.

Not allowed:

- `RikaNV Hypnose has sensor X`, if X belongs to one concrete model;
- using line page copy as proof of model-level specs;
- describing Hypnose/Hypnose2 as a riflescope unless an official source explicitly says so.

## 4. Lesnik handling

Lesnik is restored as a base priority.

Current handling:

- Lesnik = `product_line`, `thermal_riflescope`.
- Found models on `rikanv.ru`: Lesnik2 335L, 360L, 360L PRO, 650L, 650L PRO, 660L, 660L PRO.
- A human must choose the base Lesnik model for the first Product Truth pilot.
- If no model is chosen, the blocker remains explicit; Lesnik is not moved to later.

## 5. Files corrected

- `START-HERE.md`
- `pilot-30-days/index.md`
- `pilot-30-days/day-1-product-truth-start.md`
- `pilot-30-days/product-truth-table.md`
- `pilot-30-days/source-register-table.md`
- `pilot-30-days/evidence-register-table.md`
- `pilot-30-days/claim-registry-pilot-table.md`
- `pilot-30-days/ai-baseline-20-queries.md`
- `pilot-30-days/first-3-content-tasks.md`
- `pilot-30-days/30-day-definition-of-done.md`
- `pilot-30-days/rikanv-ru-import-log.md`
- `docs/01-goal.md`
- `docs/03-strategy.md`
- `docs/05-source-of-truth.md`
- `docs/06-claim-registry.md`
- `docs/09-ai-visibility-evaluation.md`
- `docs/13-90-day-plan.md`
- `product-truth/products/index.md`
- `product-truth/products/lesnik-template.md`
- `product-truth/products/ovod-template.md`
- `product-truth/products/surok-template.md`
- `product-truth/products/hypnose-template.md`
- `product-truth/products/hypnose2-template.md`

## 6. Remaining blockers

- Выбрать базовую модель Lesnik для пилота.
- Подтвердить модели внутри Hypnose.
- Подтвердить модели внутри Hypnose2.
- Уточнить, как RikaNV официально хочет называть Hypnose2: отдельная линейка, поколение или подлинейка.
- Назначить doctrine compliance owner.
- Проверить doctrine summary/checklist на предмет старых формулировок про Hypnose без `product_kind`.

## 7. Verdict

NEEDS HUMAN PRODUCT CLARIFICATION

Коррекция Product Truth scope выполнена, Lesnik возвращен в base priority, Hypnose/Hypnose2 больше не обрабатываются как конкретные модели. Но для model-level claims по Lesnik и Hypnose/Hypnose2 нужен human product decision: какие конкретные модели входят в первый пилот.
