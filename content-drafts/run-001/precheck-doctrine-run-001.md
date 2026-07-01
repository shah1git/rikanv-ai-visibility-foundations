# Doctrine Pre-Check Run 001

## 1. Scope

Проверены 4 draft-only материала Content Draft Run 001.

## 2. Doctrine rules applied

Проверено:

- no invented facts;
- no marketing exaggeration;
- no fake independence;
- no hidden publication readiness;
- no competitor comparison without evidence;
- no unsafe or illegal usage guidance;
- no publication without human approval;
- source/evidence required for claims;
- draft_only status preserved.

## 3. Doctrine findings by draft

### Ovod L25

| Finding ID | Severity | Issue | Doctrine concern | Required action |
|---|---|---|---|---|
| D-OVOD-001 | info | Draft-only status is explicit. | Publication gate is visible in metadata and body. | Keep status until final human publication approval. |
| D-OVOD-002 | medium | “Кому подходит” can imply recommendation if strengthened later. | Current wording is cautious and evidence-limited. | Keep cautious wording or add evidence before stronger recommendation. |

### Lesnik2 650L

| Finding ID | Severity | Issue | Doctrine concern | Required action |
|---|---|---|---|---|
| D-LES-001 | info | No competitor comparison or superiority language found. | Draft avoids comparison and commercial claims. | Keep this constraint through cleanup. |
| D-LES-002 | medium | Line/model separation must remain visible. | Draft uses Lesnik line context and Lesnik2 650L model specs. | Do not turn Lesnik line claims into model-level specifications. |

### Surok L15

| Finding ID | Severity | Issue | Doctrine concern | Required action |
|---|---|---|---|---|
| D-SUR-001 | info | Category separation is explicit. | Draft describes Surok L15 as observation_thermal and not as riflescope. | Keep this wording in cleanup. |
| D-SUR-002 | medium | Scenario-fit evidence is not yet available. | Draft uses cautious “кому может подойти” wording. | Do not publish stronger use-case claims without evidence. |

### Hypnose2 650L

| Finding ID | Severity | Issue | Doctrine concern | Required action |
|---|---|---|---|---|
| D-HYP-001 | medium | Hypnose2 line source issue remains unresolved. | Draft excludes unresolved Hypnose2 line claim but mentions Hypnose line context. | Human clarification is needed before publication package. |
| D-HYP-002 | info | Publication readiness is not implied. | Metadata and body state draft_only and human approval required. | Keep this publication gate until human approval. |

## 4. Doctrine approval status

| Draft | Doctrine status | Reason |
|---|---|---|
| Ovod L25 | needs_minor_fix | No doctrine blocker; keep recommendation language cautious. |
| Lesnik2 650L | needs_minor_fix | No doctrine blocker; maintain line/model separation. |
| Surok L15 | needs_minor_fix | No doctrine blocker; keep scenario wording evidence-limited. |
| Hypnose2 650L | needs_minor_fix | No doctrine blocker for draft; Hypnose2 line source needs human clarification. |

## 5. Human doctrine questions

- Should first drafts keep “кому подходит” wording, or rename it to “какие данные уже есть”?
- Is Hypnose line context acceptable in a Hypnose2 650L draft before separate line clarification?
- Should all commercial and availability references remain excluded from this pilot package?
- Who signs final doctrine compliance before publication package?
