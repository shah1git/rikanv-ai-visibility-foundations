# Day 1: Agent Site Import Start

## Цель сессии

Запустить первый agent site import и получить черновую Product Truth extraction
по Ovod L25, Lesnik, Lesnik2 650L, Surok L15, Hypnose, Hypnose2 и Hypnose2 650L.

Результат сессии должен быть практическим: source snapshot, Product Truth
extraction draft, первые sources/evidence, первые claims, owners, doctrine
status, exceptions и следующие действия.

Человек не переносит характеристики вручную. Он проверяет, что агент использует
правильные URL, не смешивает line/model и не выходит за allowed source policy.

## Участники

- Pilot owner: владелец проекта RikaNV AI Visibility / руководитель проекта.
- Product Truth owner: технический продуктовый ответственный RikaNV; временно владелец проекта + технический специалист по приборам.
- Technical reviewer: ведущий технический специалист / сервисный инженер RikaNV.
- Doctrine compliance owner: владелец проекта RikaNV AI Visibility.
- Сервисный специалист.
- Менеджер продаж или дилерский представитель.
- Publication owner: контент-ответственный / редактор RikaNV.
- AI visibility owner: маркетолог-аналитик / контент-аналитик; если отдельного человека нет — контент-ответственный.
- Координатор пилота.

## Подготовить до сессии

- Страницу RikaNV Ovod L25 на `rikanv.ru`.
- Страницу линии RikaNV Lesnik на `rikanv.ru`.
- Страницу RikaNV Lesnik2 650L на `rikanv.ru`.
- Страницу RikaNV Surok L15 на `rikanv.ru`.
- Страницу линии RikaNV Hypnose на `rikanv.ru`.
- Страницу линии RikaNV Hypnose2, если она доступна на `rikanv.ru`.
- Страницу RikaNV Hypnose2 650L на `rikanv.ru`.
- Документацию, видео и FAQ с `rikanv.ru`, если доступны.
- Сервисные вопросы, если их разрешено использовать.
- Список конкурентов для будущих draft comparison gaps.
- Ограничения продуктов.
- Краткое резюме RikaNV Doctrine.

## Повестка на 2 часа

| Время | Тема | Что сделать |
|---|---|---|
| 0-10 минут | Категории и уровни продукта | Уточнить `thermal_riflescope`, `observation_thermal`, `product_line`, `product_model`; зафиксировать, что линейка не равна модели |
| 10-30 минут | Agent import URLs | Проверить список официальных URL `rikanv.ru` для Ovod L25, Lesnik, Lesnik2 650L, Surok L15, Hypnose, Hypnose2, Hypnose2 650L |
| 30-50 минут | Product Truth extraction | Агент извлекает identity, category, specs, line-level fields и TODO |
| 50-70 минут | Source/evidence linking | Агент создает source/evidence records и отмечает gaps |
| 70-90 минут | Claim extraction | Агент создает первые claims без ручного переписывания характеристик |
| 90-105 минут | Agent claim review | Агент присваивает tiers, risk flags и agent_review_status |
| 105-115 минут | Human exception triage | Человек смотрит только blocked, high-risk, volatile, line/model ambiguity |
| 115-120 минут | Owners, blockers, next actions | Зафиксировать owners, doctrine status, publication restrictions и следующий import/review шаг |

## Результаты сессии

- Создан source snapshot по официальным страницам `rikanv.ru`.
- Сформирована первая Product Truth extraction по Ovod L25, Lesnik, Lesnik2 650L, Surok L15, Hypnose/Hypnose2 и Hypnose2 650L.
- Создан или обновлен Source Register.
- Создан или обновлен Evidence Register.
- Создано минимум 10 agent-extracted claims.
- Agent Claim Review присвоил tiers/statuses/risk flags.
- Зафиксированы blockers по отсутствующим тестам, сервисным данным, volatile data и publication restrictions.
- Назначены owner, reviewer и doctrine compliance owner.
- Выбраны первые priority content tasks.

## Definition of Done

- У Ovod L25, Lesnik, Lesnik2 650L, Surok L15, Hypnose, Hypnose2 и Hypnose2 650L есть строки в Product Truth Table.
- У каждого объекта заполнены `product_kind` и `product_category`.
- Lesnik не указан как later.
- Lesnik2 650L указан как выбранная базовая модель Lesnik для pilot.
- Hypnose и Hypnose2 не описаны как конкретные модели.
- Hypnose2 650L указан как выбранная базовая модель Hypnose2 для pilot.
- Для `product_line` в модельных полях стоит `N/A — product_line, model-level specs require concrete model.`
- У всех неизвестных характеристик стоит `TODO: нет данных на rikanv.ru`.
- У неприменимых полей стоит `N/A — не относится к категории прибора`.
- Нет выдуманных характеристик.
- Есть source rows по официальным страницам `rikanv.ru`.
- Есть evidence rows по официальным страницам `rikanv.ru`.
- Есть минимум 10 agent-extracted claims.
- Agent review отметил claims, которые можно использовать в drafts, и claims,
  которые требуют human exception review.
- Для каждого claim указан owner и reviewer.
- Назначены ответственные за Product Truth, technical review, doctrine compliance, content и AI baseline.
- Выбраны первые priority content tasks.
- Список blockers записан явно.
