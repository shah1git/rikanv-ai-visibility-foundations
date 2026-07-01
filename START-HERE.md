# START HERE: RikaNV AI Visibility Pilot

## Что мы делаем

Запускаем 30-дневный agent-first, human-approved пилот.

Агенты делают:

- site import;
- Product Truth extraction;
- Claim extraction;
- Evidence linking;
- Agent Claim Review;
- Content Draft;
- GEO/SEO formatting.

Человек делает:

- утверждает product scope;
- решает taxonomy ambiguity;
- проверяет exceptions;
- дает дополнительные sources;
- утверждает финальную публикацию.

`rikanv.ru` является primary public source для первого agent import.

## RikaNV Doctrine

Проект следует RikaNV Doctrine.

Все Product Truth, Claims, контент, сравнения и AI Visibility действия должны
проходить doctrine compliance check.

## Что НЕ делаем сейчас

- Не строим production runtime.
- Не выбираем framework.
- Не пишем код приложения.
- Не публикуем автоматически без human approval.
- Не используем rikasale.ru и сторонние сайты без отдельного разрешения.
- Не делаем PBN.
- Не выдумываем характеристики.
- Не публикуем claims без source/evidence.
- Не превращаем marketing language в verified claims.

## Базовый Product Truth scope

| Product or line | product_kind | product_category | Pilot role |
|:---|:---|:---|:---|
| RikaNV Ovod L25 | product_model | thermal_riflescope | Base product |
| RikaNV Lesnik | product_line | thermal_riflescope | Base line |
| RikaNV Lesnik2 650L | product_model | thermal_riflescope | Selected Lesnik model |
| RikaNV Surok L15 | product_model | observation_thermal | Base observation product |
| RikaNV Hypnose | product_line | observation_thermal | Base line |
| RikaNV Hypnose2 | product_line | observation_thermal | Generation / subline |
| RikaNV Hypnose2 650L | product_model | observation_thermal | Selected Hypnose2 model |

Правила:

- линейка не равна модели;
- verified model-level specs допустимы только для конкретных моделей;
- line-level claims не должны превращаться в model-level specs.

## Human product decisions for pilot

- Base Lesnik model: RikaNV Lesnik2 650L.
- Base Hypnose2 model: RikaNV Hypnose2 650L.
- Hypnose2 taxonomy: product_line, актуальное поколение / подлинейка внутри направления RikaNV Hypnose.

Эти решения не являются claims о превосходстве.

## Owners

| Role | Owner | Responsibility |
|:---|:---|:---|
| Pilot owner | Владелец проекта RikaNV AI Visibility | Scope, escalation, final direction |
| Product Truth owner | Технический продуктовый ответственный RikaNV | Product Truth, source/evidence/claim связка |
| Technical reviewer | Ведущий технический специалист / сервисный инженер | Specs, claims, limitations |
| Doctrine compliance owner | Владелец проекта на первом месяце | Doctrine compliance review |
| Publication owner | Контент-ответственный / редактор | Publication package, final approval через владельца |
| AI visibility owner | Маркетолог-аналитик / контент-аналитик | Baseline, answer log, metrics, gap analysis |

## Agent-first operating model

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

## Human exception review

Человек смотрит только:

- `blocked_for_publication`;
- `human_review_required`;
- `needs_rewording` with high risk;
- performance claims;
- comparison claims;
- volatile claims;
- confidential / legal-sensitive claims.

## MVP на 30 дней

1. Agent import по `rikanv.ru` для базового product scope.
2. Product Truth extraction по выбранным продуктам и линейкам.
3. Source Register и Evidence Register.
4. 30 draft/verified claims без изменения product taxonomy.
5. Agent Claim Review с tiers, statuses and risk flags.
6. Human exception review.
7. AI baseline на 20 запросах.
8. Drafts по Ovod L25, Lesnik2 650L, Surok L15, Hypnose2 650L.
9. Technical / doctrine pre-check.
10. Human publication approval.
11. Первый отчет.

## Первые 7 дней

| День | Что сделать | Результат |
|:---|:---|:---|
| 1 | Запустить Site Import Agent | Source snapshot and import blockers |
| 2 | Запустить Product Truth Extraction Agent | Product Truth draft and TODO fields |
| 3 | Запустить Claim Extraction Agent | Candidate claims from official sources |
| 4 | Запустить Evidence Linker Agent | Source/evidence links and gaps |
| 5 | Запустить Agent Claim Review | Claim tiers, statuses and exception list |
| 6 | Провести Human Exception Review | Human decisions only for exceptions |
| 7 | Подготовить draft plan | First draft tasks for Content Draft Agent |

## Главный следующий шаг

Запустить Site Import Agent по approved `rikanv.ru` base scope.

## Publication restrictions

Без отдельного разрешения нельзя публиковать:

- сравнения с конкурентами;
- claims о превосходстве над конкурентами;
- claims о надежности без сервисной статистики;
- claims о работе во влажности, тумане, дожде без теста;
- claims о стабильности СТП без теста;
- claims о реальной полевой дальности без методики;
- данные из переписки с поставщиками;
- сервисные кейсы с персональными данными клиентов;
- необезличенные отзывы клиентов;
- внутренние документы по прошивкам;
- цены, наличие и условия поставки;
- юридически чувствительные сценарии применения.

## Какие файлы открыть первыми

- [Day 1: Agent Site Import Start](pilot-30-days/day-1-product-truth-start.md)
- [Product Truth Table](pilot-30-days/product-truth-table.md)
- [Source Register Table](pilot-30-days/source-register-table.md)
- [Evidence Register Table](pilot-30-days/evidence-register-table.md)
- [Claim Registry Pilot Table](pilot-30-days/claim-registry-pilot-table.md)
- [Agent Claim Review Board](pilot-30-days/claim-review-session-board.md)
- [AI Baseline 20 Queries](pilot-30-days/ai-baseline-20-queries.md)
- [First Priority Content Tasks](pilot-30-days/first-3-content-tasks.md)
