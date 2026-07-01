# Review 013: Agent-First Pivot

## 1. Why this pivot was needed

`rikanv.ru` уже содержит подробные публичные описания выбранных приборов и
линеек. Поэтому человек не должен вручную готовить текст, переносить
характеристики и собирать Product Truth по строкам.

Основная работа должна выполняться агентами: site import, Product Truth
extraction, claim extraction, evidence linking, предварительный review,
content draft и GEO/SEO formatting.

Человек остается владельцем решений, reviewer исключений и final publication
approver.

## 2. What changed

- Manual-first процесс заменен на agent-first, human-approved процесс.
- Claim Review превращен в Agent Claim Review + human exceptions.
- Product Truth Start заменен на Site Ingest / Product Truth extraction.
- Content writing заменен на claim-based draft generation.
- Human review больше не означает обязательную ручную проверку всех 30 claims.
- `rikanv.ru` закреплен как primary public source для первого agent import.

## 3. What did not change

- RikaNV Doctrine остается обязательной.
- Нельзя выдумывать факты.
- Нельзя делать PBN, дорвеи, сетку рерайтов или фейковые отзывы.
- Нельзя публиковать без human approval.
- Product taxonomy не менялась:
  - `product_line`;
  - `product_model`;
  - `thermal_riflescope`;
  - `observation_thermal`.
- Выбранные продукты не менялись:
  - Ovod L25;
  - Lesnik;
  - Lesnik2 650L;
  - Surok L15;
  - Hypnose;
  - Hypnose2;
  - Hypnose2 650L.
- Source/evidence requirements не менялись.

## 4. New Agent-First Workflow

```text
Agent site import
↓
Product Truth extraction
↓
Claim extraction
↓
Evidence linking
↓
Agent claim review
↓
Human exception review
↓
Content draft generation
↓
Technical / doctrine pre-check
↓
Human publication approval
↓
Publication
↓
AI visibility retest
```

## 5. Human Role After Pivot

Человек:

- утверждает продуктовые приоритеты;
- решает taxonomy ambiguity;
- проверяет blocked/high-risk claims;
- утверждает спорные claims;
- дает дополнительные источники, если evidence недостаточно;
- утверждает публикацию;
- несет ответственность за final publication approval.

Человек не должен вручную переносить характеристики с сайта в таблицы, если это
может сделать агент на основе разрешенного source snapshot.

## 6. Risks

- Агент может переоценить marketing text и превратить его в claim.
- Агент может смешать product_line и product_model.
- Агент может превратить official specs в claims о реальной полевой эффективности.
- Агент может написать слишком рекламный draft.
- Агент может применить оружейные поля к `observation_thermal`.
- Человек может пропустить final approval, приняв agent review за публикационное разрешение.
- `rikanv.ru` может содержать volatile fields: цена, наличие, комплектация, акции.

## 7. Verdict

READY FOR AGENT-FIRST PILOT

## 8. Next Step

Запустить agent site import по базовому scope на `rikanv.ru` и обновить source
snapshot перед следующей итерацией.
