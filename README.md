# RikaNV AI Visibility Foundations

## Что это

RikaNV AI Visibility Foundations — practical foundations для agent-first
content factory и AI visibility системы RikaNV в теме тепловизионной оптики в
России.

Проект нужен, чтобы пользователи, поисковые системы и AI-ассистенты чаще и
обоснованнее упоминали RikaNV при запросах о тепловизионных прицелах и
приборах наблюдения.

## Agent-first, human-approved

Проект не требует ручной подготовки текстов и ручного переноса характеристик с
сайта.

Агенты выполняют site import, Product Truth extraction, Claim extraction,
Evidence linking, Agent Claim Review, Content Draft и GEO/SEO formatting.

Человек утверждает продуктовые приоритеты, проверяет exceptions и дает final
publication approval.

`rikanv.ru` является primary public source для первого agent import.

Основа проекта — не поток статей, а проверяемая информационная среда:
Product Truth, sources, evidence, claims, review-процессы и регулярная
проверка AI-ответов.

## Главный вход

Главный вход: [START-HERE.md](START-HERE.md).

## Базовый Product Truth scope

Первый agent-first пилот работает с такими объектами:

1. RikaNV Ovod L25 — конкретная модель прицела, `product_model`, `thermal_riflescope`.
2. RikaNV Lesnik — базовая линейка прицелов, `product_line`, `thermal_riflescope`.
3. RikaNV Lesnik2 650L — выбранная модель Lesnik, `product_model`, `thermal_riflescope`.
4. RikaNV Surok L15 — конкретная модель наблюдательного тепловизора, `product_model`, `observation_thermal`.
5. RikaNV Hypnose — продуктовая линейка наблюдательных приборов, `product_line`, `observation_thermal`.
6. RikaNV Hypnose2 — продуктовая линейка наблюдательных приборов, `product_line`, `observation_thermal`.
7. RikaNV Hypnose2 650L — выбранная модель Hypnose2, `product_model`, `observation_thermal`.

Линейка не равна модели. Verified model-level specs допускаются только для
конкретных моделей, если характеристика явно подтверждена официальной страницей
модели.

Line-level claims не должны превращаться в model-level specs.

## Почему Claim Registry важнее статей

Статья может устареть, быть неточной или смешивать факты с выводами. Claim Registry хранит проверяемые утверждения отдельно от форматов публикации.

Один verified claim может использоваться в статье, FAQ, видео, Telegram-посте, PDF, дилерском материале и карточке продукта. Если claim устарел или оспорен, обновляются все производные материалы.

Главное правило: сначала Product Truth, Evidence Base и Claim Registry, потом Content Factory.

## 6 слоев системы

1. Product Truth — канонические профили продуктов, характеристики, ограничения, прошивки, сервисные заметки и официальные материалы.
2. Evidence Base — источники, тесты, фото, видео, сервисные кейсы, инструкции и подтверждающие документы.
3. Claim Registry — база проверяемых утверждений со статусами, источниками, evidence, ответственными и датами review.
4. Content Factory — производство статей, FAQ, сравнений, тестов, видео-сценариев, постов, PDF и дилерских материалов из claims.
5. AI Visibility Lab — регулярная проверка того, как AI-системы отвечают на целевые запросы, где упоминают RikaNV, где ошибаются и какие gaps нужно закрывать.
6. Digital Staff — операционная модель цифровых ролей: исследователь, автор, технический reviewer, аналитик AI-видимости и другие роли с четкими входами, выходами и ограничениями.

## RikaNV Doctrine

Проект следует RikaNV Doctrine. Все Product Truth, Claims, контент, сравнения и
AI Visibility действия должны проходить doctrine compliance review перед
публикацией.

Прикладная выжимка находится в
[doctrine/rikanv-doctrine-summary.md](doctrine/rikanv-doctrine-summary.md).

Проверочная карта источников доктрины находится в
[doctrine/rikanv-doctrine-source-map.md](doctrine/rikanv-doctrine-source-map.md),
если источник доступен.

## Что не входит в проект

Проект не строит PBN, дорвеи, сетку рерайтов, фейковые отзывы, поддельные
независимые сайты или манипулятивные сравнения.

Проект не придумывает характеристики приборов, не заменяет технического
эксперта и не публикует материалы без проверки человека.

На MVP-этапе проект не строит production runtime, не выбирает framework, SDK,
API, CMS или другую техническую платформу.

Агенты используются в пилоте как управляемые роли и процессы, но не как
полноценный production runtime.

Проект не публикует автоматически без human approval.

## Как начать работу

1. Открыть [START-HERE.md](START-HERE.md).
2. Запустить Site Import Agent по `rikanv.ru`.
3. Запустить Product Truth Extraction Agent:
   [pilot-30-days/product-truth-table.md](pilot-30-days/product-truth-table.md).
4. Site Import Agent создает source records:
   [pilot-30-days/source-register-table.md](pilot-30-days/source-register-table.md).
5. Evidence Linker Agent связывает evidence с источниками:
   [pilot-30-days/evidence-register-table.md](pilot-30-days/evidence-register-table.md).
6. Claim Extraction Agent извлекает первые 30 pilot claims:
   [pilot-30-days/claim-registry-pilot-table.md](pilot-30-days/claim-registry-pilot-table.md).
7. Agent Claim Review выставляет tiers/statuses и выносит exceptions на человека:
   [pilot-30-days/claim-review-session-board.md](pilot-30-days/claim-review-session-board.md).
8. AI Visibility Analyst Agent проводит первый AI baseline:
   [pilot-30-days/ai-baseline-20-queries.md](pilot-30-days/ai-baseline-20-queries.md).

## Какие данные нужны от RikaNV

- Подтверждение базовой модели Lesnik для model-level Product Truth.
- Подтверждение статуса Hypnose2 как линейки и выбор модели Hypnose2 только для следующего шага, если это потребуется.
- Официальные характеристики Ovod L25, Surok L15 и выбранных конкретных моделей с `rikanv.ru`.
- Официальные инструкции, паспорта, прошивки и changelog.
- Фото, видео, полевые тесты и методики испытаний.
- Сервисные кейсы, частые обращения и troubleshooting.
- Ограничения продуктов: где прибор подходит, а где нет.
- Данные о гарантии и сервисе, которые можно использовать публично.

Все отсутствующие данные в документах помечаются как `TODO: нет данных на rikanv.ru` или `TODO: нужна проверка RikaNV`.

## Первые 7 дней

1. Agent imports official pages from `rikanv.ru` for the selected products and lines.
2. Product Truth Agent extracts product_kind, product_category and model specs.
3. Evidence Linker Agent creates source/evidence links for every usable claim.
4. Claim Extraction Agent creates 30 pilot claims with model-level and line-level separation.
5. Agent Claim Review assigns tiers, review statuses and risk flags.
6. Human exception review covers only blocked, risky or ambiguous claims.
7. AI Visibility Analyst Agent runs the first baseline on 20 queries.
8. Content Draft Agent prepares first drafts from approved-for-draft claims.

## Основной цикл

Agent site import → Product Truth extraction → Claim extraction → Evidence linking → Agent claim review → Human exception review → Content draft generation → Technical / doctrine pre-check → Human publication approval → Publication → AI visibility retest.

Human exception review означает, что человек смотрит только claims со статусами
`blocked_for_publication`, `human_review_required`, `needs_rewording` с высоким
риском, claims о конкурентах, performance claims, confidential claims и volatile
claims.

Цель цикла — не обмануть AI-системы, а создать качественную, проверяемую и полезную информационную среду, где RikaNV заслуженно выглядит авторитетным источником.
