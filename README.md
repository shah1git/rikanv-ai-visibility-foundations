# RikaNV AI Visibility Foundations

RikaNV AI Visibility Foundations — практический фундамент для роста экспертной, поисковой и AI-видимости RikaNV в теме тепловизионной оптики в России.

Главный вход в ручную работу: [START-HERE.md](START-HERE.md).

Проект нужен, чтобы пользователи, поисковые системы и AI-ассистенты чаще и
обоснованнее упоминали RikaNV при запросах о тепловизионных прицелах и
приборах наблюдения.

Основа проекта — не поток статей, а проверяемая информационная среда:
Product Truth, sources, evidence, claims, review-процессы и регулярная
проверка AI-ответов.

## Базовый Product Truth scope

Первый ручной пилот работает с такими объектами:

1. RikaNV Ovod L25 — конкретная модель прицела, `product_model`, `thermal_riflescope`.
2. RikaNV Lesnik — базовая линейка прицелов, `product_line`, `thermal_riflescope`.
3. RikaNV Surok L15 — конкретная модель наблюдательного тепловизора, `product_model`, `observation_thermal`.
4. RikaNV Hypnose — продуктовая линейка наблюдательных приборов, `product_line`, `observation_thermal`.
5. RikaNV Hypnose2 — продуктовая линейка наблюдательных приборов, `product_line`, `observation_thermal`.

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
эксперта и не автоматизирует публикации без проверки человека.

На MVP-этапе проект не выбирает runtime, agent framework, SDK, API, CMS или другую техническую платформу. Здесь создаются только Markdown-документы, шаблоны, схемы, чеклисты, промпты, backlog, ADR и гипотезы.

## Как начать работу

1. Открыть [START-HERE.md](START-HERE.md).
2. Провести Day 1 Product Truth Start: [pilot-30-days/day-1-product-truth-start.md](pilot-30-days/day-1-product-truth-start.md).
3. Заполнить рабочую таблицу: [pilot-30-days/product-truth-table.md](pilot-30-days/product-truth-table.md).
4. Зарегистрировать официальные источники: [pilot-30-days/source-register-table.md](pilot-30-days/source-register-table.md).
5. Связать evidence с источниками: [pilot-30-days/evidence-register-table.md](pilot-30-days/evidence-register-table.md).
6. Создать первые 30 pilot claims: [pilot-30-days/claim-registry-pilot-table.md](pilot-30-days/claim-registry-pilot-table.md).
7. Провести первый ручной AI baseline: [pilot-30-days/ai-baseline-20-queries.md](pilot-30-days/ai-baseline-20-queries.md).

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

1. Провести Product Truth Start по Ovod L25, Lesnik, Surok L15, Hypnose и Hypnose2.
2. Проверить официальные источники только на `rikanv.ru`.
3. Заполнить Product Truth без переноса характеристик между line/model.
4. Создать Source Register и Evidence Register.
5. Создать 30 pilot claims с разделением model-level и line-level.
6. Провести ручной baseline по 20 AI-запросам минимум в 3 AI-системах.
7. Подготовить первые priority content tasks без написания статей.

## Основной цикл

AI visibility test → gap analysis → content task → evidence gathering → claim creation → content draft → technical review → doctrine compliance review → bias check → human approval → publication → retest AI visibility.

Цель цикла — не обмануть AI-системы, а создать качественную, проверяемую и полезную информационную среду, где RikaNV заслуженно выглядит авторитетным источником.
