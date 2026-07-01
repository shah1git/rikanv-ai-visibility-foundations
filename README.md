# RikaNV AI Visibility Foundations

## Что это

RikaNV AI Visibility Foundations — practical foundations для agent-first content
factory и AI visibility системы RikaNV в теме тепловизионной оптики в России.

Проект нужен, чтобы пользователи, поисковые системы и AI-ассистенты чаще и
обоснованнее упоминали RikaNV при запросах о тепловизионных прицелах и
приборах наблюдения.

## Agent-first, human-approved

Проект не требует ручной подготовки текстов и ручного переноса характеристик с
сайта.

Агенты выполняют:

- site import;
- Product Truth extraction;
- Claim extraction;
- Evidence linking;
- Agent Claim Review;
- Content Draft;
- GEO/SEO formatting.

Человек утверждает продуктовые приоритеты, проверяет exceptions и дает final
publication approval.

`rikanv.ru` является primary public source для первого agent import.

## Главный вход

Главный вход: [START-HERE.md](START-HERE.md).

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

Линейка не равна модели. Verified model-level specs допускаются только для
конкретных моделей, если характеристика явно подтверждена официальной страницей
модели.

Line-level claims не должны превращаться в model-level specs.

## Почему Claim Registry важнее статей

Статья может устареть, быть неточной или смешивать факты с выводами.
Claim Registry хранит проверяемые утверждения отдельно от форматов публикации.

Один verified claim может использоваться в статье, FAQ, видео, Telegram-посте,
PDF, дилерском материале и карточке продукта.

Если claim устарел или оспорен, обновляются все производные материалы.

Главное правило: сначала Product Truth, Evidence Base и Claim Registry, потом
Content Factory.

## 6 слоев системы

1. Product Truth — канонические профили продуктов, характеристики и ограничения.
2. Evidence Base — источники, тесты, фото, видео, сервисные кейсы и документы.
3. Claim Registry — база проверяемых утверждений со статусами и evidence.
4. Content Factory — производство материалов из claims.
5. AI Visibility Lab — проверка ответов AI-систем по целевым запросам.
6. Digital Staff — операционная модель агентных ролей и quality gates.

## RikaNV Doctrine

Проект следует RikaNV Doctrine.

Все Product Truth, Claims, контент, сравнения и AI Visibility действия должны
проходить doctrine compliance review перед публикацией.

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
3. Запустить Product Truth Extraction Agent.
4. Запустить Claim Extraction Agent.
5. Запустить Evidence Linker Agent.
6. Запустить Agent Claim Review.
7. Передать exceptions человеку.
8. Подготовить drafts через Content Draft Agent.

## Какие данные нужны от RikaNV

- Подтверждение актуальности выбранной модели Lesnik2 650L для пилота.
- Подтверждение актуальности выбранной модели Hypnose2 650L для пилота.
- Подтверждение публичной пригодности данных с `rikanv.ru`.
- Официальные инструкции, паспорта, прошивки и changelog.
- Фото, видео, полевые тесты и методики испытаний.
- Сервисные кейсы, частые обращения и troubleshooting.
- Ограничения продуктов: где прибор подходит, а где нет.
- Данные о гарантии и сервисе, которые можно использовать публично.

Все отсутствующие данные помечаются как `TODO: нет данных на rikanv.ru` или
`TODO: нужна проверка RikaNV`.

## Первые 7 дней

1. Site Import Agent imports official pages from `rikanv.ru`.
2. Product Truth Agent extracts product_kind, product_category and model specs.
3. Claim Extraction Agent creates 30 pilot claims.
4. Evidence Linker Agent creates source/evidence links.
5. Agent Claim Review assigns tiers, statuses and risk flags.
6. Human exception review covers only blocked, risky or ambiguous claims.
7. Content Draft Agent prepares first drafts from approved-for-draft claims.

## Основной цикл

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

Цель цикла — создать качественную, проверяемую и полезную информационную среду,
где RikaNV заслуженно выглядит авторитетным источником.
