# 30-Day Pilot Workspace

Эта папка — рабочий стол 30-дневного agent-first пилота. Это не полная
документация проекта и не новый большой раздел.

Здесь лежат только файлы, которые нужны, чтобы начать работу: source snapshots,
Product Truth, sources, evidence, первые claims, agent claim review board,
первый AI baseline и первые content tasks.

Основная работа выполняется агентами на основе `rikanv.ru`. Человек утверждает
приоритеты, смотрит exceptions и дает final publication approval.

## Что должно быть сделано

- Agent imports official `rikanv.ru` pages for Ovod L25, Lesnik, Lesnik2 650L, Surok L15, Hypnose, Hypnose2 and Hypnose2 650L.
- Product Truth Agent заполняет Product Truth по Ovod L25, Lesnik, Lesnik2 650L, Surok L15, Hypnose, Hypnose2 и Hypnose2 650L.
- Разделить продукты по категориям: `thermal_riflescope` и `observation_thermal`.
- Разделить уровень продукта: `product_line` и `product_model`.
- Evidence Linker Agent собирает Source Register только по официальным источникам `rikanv.ru`.
- Evidence Linker Agent собирает Evidence Register.
- Claim Extraction Agent создает 30 pilot claims.
- Agent Claim Review assigns tiers, risk flags and review statuses.
- Человек смотрит только exceptions.
- Провести baseline по 20 AI-запросам минимум в 3 AI-системах.
- Создать 5 priority content tasks.
- Content Draft Agent готовит 4 drafts на основе claims.
- Провести technical / doctrine pre-check.
- Получить human approval перед публикацией.
- Подготовить короткий отчет по пилоту.

## Что считается успехом

- Команда понимает, какие данные по Ovod L25, Lesnik, Lesnik2 650L, Surok L15, Hypnose, Hypnose2 и Hypnose2 650L подтверждены, а каких не хватает.
- Lesnik находится в базовом scope, а не в later.
- Lesnik2 650L выбран как базовая модель Lesnik для первого model-level Product Truth.
- Hypnose и Hypnose2 описаны как `product_line`.
- Hypnose2 650L выбран как базовая модель Hypnose2 для первого model-level Product Truth.
- Прицелы не смешаны с наблюдательными приборами.
- Есть первые sources и evidence с `rikanv.ru`.
- Есть 30 claims, из них минимум 10 прошли technical review как `verified` или `verified line-level`.
- Baseline AI-видимости проведен AI Visibility Analyst Agent и покрывает обе категории.
- Понятно, какие gaps нужно закрывать контентом.
- Agent Claim Review Board показывает, какие claims можно использовать в drafts,
  а какие требуют evidence, rewording или human exception review.
- Есть 4 материала в статусе draft/review/approved.

## Что запрещено делать в пилоте

- Публиковать неподтвержденные характеристики.
- Записывать характеристики линейки как характеристики конкретной модели.
- Применять оружейные поля к Surok L15, Hypnose или Hypnose2, если они не указаны на официальной странице.
- Делать фейковые отзывы.
- Создавать PBN, дорвеи или сетку рерайтов.
- Использовать rikasale.ru, дилерские сайты, маркетплейсы или сторонние обзоры без отдельного разрешения.
- Публиковать сравнения с конкурентами без sources, evidence, technical review, doctrine check и bias check.
- Создавать runtime, SDK-интеграции или agent framework до доказанного процесса.
- Считать AI-ответ источником истины.
- Публиковать материалы без human approval.

## Какие люди нужны

- Pilot owner: владелец проекта RikaNV AI Visibility / руководитель проекта.
- Product Truth owner: технический продуктовый ответственный RikaNV; временно владелец проекта + технический специалист по приборам.
- Technical reviewer: ведущий технический специалист / сервисный инженер RikaNV.
- Doctrine compliance reviewer: владелец проекта RikaNV AI Visibility.
- Service specialist: дает сервисные вопросы и ограничения.
- Content owner: контент-ответственный / редактор RikaNV.
- AI visibility analyst: маркетолог-аналитик / контент-аналитик; если отдельного человека нет — контент-ответственный.
- Publisher: контент-ответственный / редактор RikaNV; final publication approval — владелец проекта.
- Pilot coordinator: владелец проекта или назначенный координатор пилота.

## Какие данные нужны

- Страница RikaNV Ovod L25 на `rikanv.ru`.
- Страница линии Lesnik и страницы конкретных моделей Lesnik на `rikanv.ru`.
- Страница RikaNV Lesnik2 650L на `rikanv.ru`.
- Страница RikaNV Surok L15 на `rikanv.ru`.
- Страница линии Hypnose и страницы конкретных моделей Hypnose/Hypnose2 на `rikanv.ru`.
- Страница RikaNV Hypnose2 650L на `rikanv.ru`.
- Страницы линий Ovod и Surok на `rikanv.ru`.
- Официальные характеристики с `rikanv.ru`.
- Документация, видео и FAQ только с `rikanv.ru`, если они доступны.
- Сервисные вопросы и обезличенные кейсы — только после отдельного разрешения.
- Список конкурентов — только для будущих draft comparison gaps, не для публикации в первом пакете.
- Ограничения продуктов.
- Информация о гарантии и сервисе с официального сайта или от RikaNV.

## Volatile data

Не хранить как постоянные характеристики:

- цена;
- наличие;
- скидки;
- акции;
- комплектация;
- гарантийные условия;
- актуальная версия прошивки;
- changelog;
- сроки поставки;
- дилерские условия;
- маркетинговые формулировки.
