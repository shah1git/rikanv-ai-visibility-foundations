# Technical Consistency Pre-Check Run 001

## 1. Scope

Проверены 4 draft-only материала:

- Ovod L25.
- Lesnik2 650L.
- Surok L15.
- Hypnose2 650L.

## 2. Rules

Проверено:

- product_line не описан как product_model;
- product_model не получает line-level claims как specs;
- thermal_riflescope и observation_thermal не смешаны;
- observation_thermal не получает riflescope-only fields;
- official detection / recognition / LRF ranges не представлены как field guarantees;
- no-LRF limitation не используется без approval;
- recoil rating не используется без technical approval;
- Hypnose2 line context не используется как model-level source;
- все технические характеристики имеют claim/source/evidence;
- нет claims без claim ID.

## 3. Technical findings by draft

### Ovod L25

| Finding ID | Severity | Issue | Evidence | Required action |
|---|---|---|---|---|
| T-OVOD-001 | medium | Scenario-fit wording remains evidence-limited. | Draft uses cautious “кому может подойти” wording and TODO for scenarios. | Keep as draft-only or add verified scenario-fit evidence before publication package. |
| T-OVOD-002 | info | Detection value is handled as official spec. | Draft says “заявленная на официальной странице: 1300 м”. | Preserve this wording; do not convert into field performance guarantee. |
| T-OVOD-003 | info | No-LRF limitation is excluded. | Draft lists `candidate-run001-ovod-l25-limit-001` only under Claims excluded. | Do not use this limitation unless human approves public wording. |

### Lesnik2 650L

| Finding ID | Severity | Issue | Evidence | Required action |
|---|---|---|---|---|
| T-LES-001 | medium | Line-level Lesnik context appears in model draft. | Draft separates Lesnik line context from Lesnik2 650L model specs. | During cleanup, keep line claims as context and never as model-level specs. |
| T-LES-002 | info | LRF value is handled as official spec. | Draft says “заявленный на официальной странице: 1200 м”. | Preserve official-spec wording; do not claim field measurement reliability. |
| T-LES-003 | medium | Recoil rating remains excluded and unresolved. | Draft excludes `candidate-run001-lesnik2-650l-spec-005` and has TODO for reviewer. | Technical reviewer must decide before this value appears in any publication package. |

### Surok L15

| Finding ID | Severity | Issue | Evidence | Required action |
|---|---|---|---|---|
| T-SUR-001 | info | Product category is technically consistent. | Draft classifies Surok L15 as observation_thermal and does not add riflescope fields. | Keep category wording explicit in cleanup. |
| T-SUR-002 | medium | Scenario-fit evidence is missing. | Draft says TODO for confirmed RikaNV scenarios and field tests. | Do not strengthen “кому подходит” without scenario evidence. |
| T-SUR-003 | info | Detection value is handled as official spec. | Draft says “заявленная на официальной странице: 750 м”. | Preserve this wording and avoid field-performance language. |

### Hypnose2 650L

| Finding ID | Severity | Issue | Evidence | Required action |
|---|---|---|---|---|
| T-HYP-001 | medium | Hypnose line context is used carefully but remains sensitive. | Draft uses Hypnose line claims as context and excludes unresolved Hypnose2 line claim. | Human should clarify Hypnose2 line source before publication package. |
| T-HYP-002 | info | LRF and detection values are handled as official specs. | Draft uses “заявленный” and “заявленная” wording for 1000 m and 2600 m. | Preserve this wording; do not imply real field performance. |
| T-HYP-003 | medium | Scenario-fit evidence is missing. | Draft has TODO for human clarification and field tests. | Do not strengthen use-case conclusions without additional evidence. |

## 4. Technical approval status

| Draft | Technical status | Reason |
|---|---|---|
| Ovod L25 | needs_minor_fix | Scenario-fit section is cautious but still needs evidence before publication package. |
| Lesnik2 650L | needs_minor_fix | Line/model separation is controlled; recoil rating remains unresolved. |
| Surok L15 | needs_minor_fix | Category is correct; scenario-fit evidence is missing. |
| Hypnose2 650L | needs_minor_fix | Model specs are controlled; Hypnose2 line-source context needs human clarification. |

## 5. Human technical questions

- Can Lesnik2 recoil rating be used in public technical tables after reviewer confirmation?
- Can Ovod L25 no-LRF limitation be used publicly, and with what wording?
- Should detection/LRF ranges always use “заявленная” and “на официальной странице указана”?
- Can Hypnose2 650L draft mention Hypnose line context before Hypnose2 line-source clarification?
