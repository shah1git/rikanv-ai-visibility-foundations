# START HERE: RikaNV AI Visibility Pilot

## Что мы делаем

Запускаем 30-дневный agent-first пилот, чтобы проверить рабочий цикл:

Agent site import -> Product Truth -> Evidence -> Claims -> Content -> AI Visibility.

Проект не требует ручной подготовки текстов. Основная работа выполняется
агентами на основе `rikanv.ru` и других разрешенных источников. Человек
участвует как владелец решений, reviewer спорных claims и final publication
approver.

`rikanv.ru` является primary public source для первого agent import.

Фокус пилота — тепловизионная оптика RikaNV: тепловизионные прицелы и приборы наблюдения. В первом пилоте не смешиваем категории:

- `thermal_riflescope` — тепловизионные прицелы;
- `observation_thermal` — тепловизоры, камеры и монокуляры для наблюдения.

Также не смешиваем уровень продукта:

- `product_line` — линейка;
- `product_model` — конкретная модель.

## RikaNV Doctrine

Проект следует RikaNV Doctrine. Все Product Truth, Claims, контент, сравнения и AI Visibility действия должны проходить doctrine compliance check.

Для первого пилота это означает: факты только из разрешенных источников, без маркетинговых эпитетов, без выдуманных характеристик, без смешения прицелов и наблюдательных приборов.

## Что НЕ делаем сейчас

- Не пишем production automation и не создаем runtime.
- Не пишем код.
- Не выбираем agent framework.
- Не делаем PBN.
- Не публикуем сравнения без данных.
- Не используем rikasale.ru, дилерские сайты, маркетплейсы или сторонние обзоры без отдельного разрешения.
- Не пытаемся заполнить все 130 файлов.
- Не начинаем с философии.

## Базовый Product Truth scope

1. RikaNV Ovod L25 — конкретная модель прицела.
2. RikaNV Lesnik — базовая линейка прицелов.
3. RikaNV Lesnik2 650L — выбранная базовая модель Lesnik для первого model-level Product Truth pilot.
4. RikaNV Surok L15 — конкретная модель наблюдательного тепловизора.
5. RikaNV Hypnose — продуктовая линейка наблюдательных приборов.
6. RikaNV Hypnose2 — `product_line`, актуальное поколение / подлинейка внутри направления RikaNV Hypnose.
7. RikaNV Hypnose2 650L — выбранная базовая модель Hypnose2 для первого model-level Product Truth pilot.

Линейка не равна модели. Verified specification claims создаются только для
конкретных моделей, если характеристика явно подтверждена официальной страницей
модели.

Для `product_line` допустимы только line-level claims: назначение линейки,
категория, список моделей, общая структура.

## Human product decisions for pilot

- Base Lesnik model: RikaNV Lesnik2 650L.
- Reason: сильная и понятная модель линейки Lesnik для первого model-level Product Truth. Если коммерческий приоритет позже сместится на PRO-версию, это нужно оформить отдельным решением.
- Hypnose2 taxonomy: `product_line`, актуальное поколение / подлинейка внутри направления RikaNV Hypnose.
- Base Hypnose2 model: RikaNV Hypnose2 650L.
- Reason: сильная и понятная модель наблюдательной линейки для первого model-level Product Truth.

Эти причины выбора не являются claims о превосходстве. Технические claims по выбранным моделям остаются проверяемыми только через official product pages и evidence.

## Owners

| Роль | Owner | Ответственность |
| --- | --- | --- |
| Pilot owner | Владелец проекта RikaNV AI Visibility / руководитель проекта | Общий ход 30-дневного пилота, решения по scope, финальная эскалация |
| Product Truth owner | Технический продуктовый ответственный RikaNV; временно владелец проекта + технический специалист по приборам | Product Truth, source/evidence/claim связка, модельные решения |
| Technical reviewer | Ведущий технический специалист / сервисный инженер RikaNV | Проверка specs, claims, ограничений, технических формулировок |
| Doctrine compliance owner | Владелец проекта RikaNV AI Visibility | Doctrine compliance review на первом месяце пилота |
| Publication owner | Контент-ответственный / редактор RikaNV | Подготовка публикационного пакета; final approval у владельца проекта |
| AI visibility owner | Маркетолог-аналитик / контент-аналитик; если отдельного человека нет — контент-ответственный | Baseline, answer log, metrics, gap analysis |

## Agent-first core loop

1. Agent site import.
2. Product Truth extraction.
3. Claim extraction.
4. Evidence linking.
5. Agent claim review.
6. Human exception review.
7. Content draft generation.
8. Technical / doctrine pre-check.
9. Human publication approval.
10. Publication.
11. AI visibility retest.

Human exception review означает, что человек смотрит только claims:

- `blocked_for_publication`;
- `human_review_required`;
- `needs_rewording` with high risk;
- competitor comparison;
- performance claims;
- confidential or volatile claims.

## MVP на 30 дней

1. Product Truth по Ovod L25, Lesnik, Lesnik2 650L, Surok L15, Hypnose, Hypnose2 и Hypnose2 650L.
2. Source Register по официальным страницам `https://rikanv.ru/`.
3. Evidence Register.
4. 30 draft/verified claims с разделением `product_line` и `product_model`, созданных агентами и проверенных через agent claim review.
5. Baseline на 20 AI-запросах: прицелы + наблюдательные тепловизоры.
6. 5 priority content tasks.
7. 4 agent-generated drafts по выбранным продуктам.
8. Technical / doctrine pre-check.
9. Human exception review.
10. Human publication approval.
11. Первый отчет.

## Первые 7 дней

| День | Что сделать | Результат |
| --- | --- | --- |
| 1 | Запустить agent site import | Source snapshot, Product Truth extraction draft, doctrine status |
| 2 | Проверить Product Truth extraction | Product Truth по базовым объектам; явные TODO и ambiguous fields |
| 3 | Выполнить claim extraction и evidence linking | 30 pilot claims связаны с sources/evidence или помечены TODO |
| 4 | Провести agent claim review | Claims получили tiers, agent_review_status и risk flags |
| 5 | Провести human exception review | Человек смотрит только risky/blocked/ambiguous claims |
| 6 | Запустить AI baseline по 20 запросам | Answer log, Mention Rate, Recommendation Rate, category errors |
| 7 | Сформировать agent-generated draft plan | Первые drafts по Ovod L25, Lesnik2 650L, Surok L15, Hypnose2 650L |

## Главный следующий шаг

Запустить agent site import по официальным страницам `rikanv.ru` для базового scope.

Не начинать с ручного написания статей. Сначала агент должен импортировать
официальные страницы, извлечь Product Truth, связать sources/evidence и создать
claims. Человек подключается к exceptions и финальному approval.

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
