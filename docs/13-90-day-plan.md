# План на 90 дней

План рассчитан на запуск agent-first, human-approved системы без выбора runtime
и без разработки кода.

## Agent-first 30-day pilot

### Week 1

- Site Import Agent обрабатывает `rikanv.ru` по базовому scope.
- Product Truth Agent извлекает данные.
- Claim Extraction Agent создает claims.
- Evidence Linker Agent связывает source/evidence.
- Agent Claim Review проставляет tiers/statuses.
- Human смотрит только exceptions.

### Week 2

- Content Draft Agent готовит drafts:
  - Ovod L25;
  - Lesnik2 650L;
  - Surok L15;
  - Hypnose2 650L.
- Doctrine Review Agent и Technical Consistency Agent делают pre-check.

### Week 3

- Human approves / sends back exceptions.
- GEO/SEO Agent улучшает структуру.
- Publisher/Repurposer Agent готовит версии для каналов.

### Week 4

- Собрать publication package.
- Опубликовать 1-2 материала или довести их до ready for publication.
- Провести AI visibility retest.
- Сделать gap analysis.

## Дни 1-7

Цели:
- запустить agent import по `rikanv.ru`;
- получить базовую Product Truth без переноса характеристик человеком;
- создать claims и evidence links агентами;
- отправить человеку только exceptions;
- подготовить первый AI visibility test.

Задачи:
- подтвердить приоритет первого пилота: Ovod L25, Lesnik, Surok L15, Hypnose, Hypnose2;
- разделить категории `thermal_riflescope` и `observation_thermal`;
- разделить `product_line` и `product_model`;
- Site Import Agent импортирует страницы `rikanv.ru` по выбранным объектам;
- Product Truth Agent извлекает характеристики Ovod L25, Surok L15 и выбранных конкретных моделей;
- Product Truth Agent фиксирует line-level Product Truth по Lesnik, Hypnose и Hypnose2;
- Evidence Linker Agent заводит source register и evidence register;
- Claim Extraction Agent создает 30-50 draft/verified candidate claims;
- Agent Claim Review присваивает tiers, risk flags и review statuses;
- человек смотрит только exceptions;
- утвердить первый query set на 20 запросов по прицелам и наблюдательным тепловизорам;
- выбрать первые 4 draft materials: Ovod L25, Lesnik2 650L, Surok L15, Hypnose2 650L.

Артефакты:
- заполненные product profiles;
- source register;
- evidence register;
- draft Claim Registry;
- AI query set v1;
- список content tasks.

В первом пилоте Lesnik является базовым приоритетом. Если конкретная модель Lesnik не выбрана, фиксируется blocker, а не перенос в later.

Люди:
- pilot owner;
- technical reviewer;
- doctrine compliance owner;
- publication owner;
- AI visibility owner.

Можно через AI:
- импортировать и структурировать источники;
- извлекать Product Truth;
- выделять claims;
- связывать evidence;
- делать agent claim review;
- формировать вопросы к эксперту.

Критерии готовности:
- нет критичных фактов без источника;
- TODO явно отмечены;
- утверждены первые priorities.

## Дни 8-30

Цели:
- подготовить первые agent-generated drafts;
- провести technical / doctrine pre-check;
- провести первый baseline AI visibility;
- вывести на человека только спорные claims и публикационные решения.

Задачи:
- Content Draft Agent готовит drafts по Ovod L25, Lesnik2 650L, Surok L15 и Hypnose2 650L;
- GEO/SEO Agent структурирует drafts для людей, поиска и AI;
- Technical Consistency Agent и Doctrine Review Agent проводят pre-check;
- человек утверждает или возвращает только exceptions;
- Publisher/Repurposer Agent готовит approved versions для каналов;
- опубликовать 1-2 approved материала или довести их до publication-ready;
- провести baseline test по 20 запросам;
- создать backlog gaps;
- подготовить 2-3 тестовых отчета.

Артефакты:
- опубликованные статьи/FAQ;
- baseline AI visibility report;
- первые comparison drafts;
- test report drafts;
- service FAQ drafts.

Люди:
- технический reviewer;
- редактор;
- сервис;
- владелец сайта/каналов.

Можно через AI:
- черновики материалов из approved-for-draft claims;
- адаптация approved content под каналы;
- анализ AI-ответов;
- подготовка таблиц gaps.

Критерии готовности:
- материалы не содержат неподтвержденных характеристик;
- все сравнения имеют ограничения;
- AI baseline зафиксирован.

## Дни 31-60

Цели:
- масштабировать Content Factory;
- усилить Evidence Base;
- закрыть ключевые gaps.

Задачи:
- выпустить 10-15 дополнительных материалов;
- провести первые честные сравнения;
- опубликовать тестовые отчеты;
- обновить product profiles;
- создать dealer materials;
- провести второй AI visibility test.

Артефакты:
- comparison articles;
- buyer guides;
- FAQ;
- YouTube scripts;
- PDF для дилеров;
- monthly AI visibility report.

Люди:
- технический эксперт;
- reviewer по конкурентам;
- маркетинг;
- дилерский представитель.

Можно через AI:
- repurposing approved content;
- подготовка FAQ;
- поиск несостыковок;
- draft gap analysis.

Критерии готовности:
- каждый материал связан с claims;
- есть measurable changes в AI visibility;
- спорные claims не опубликованы как факты.

## Дни 61-90

Цели:
- закрепить регулярный процесс;
- подготовить автоматизацию только там, где процесс стабилен;
- расширить источники доверия.

Задачи:
- провести третий AI visibility test;
- обновить 90-day backlog;
- определить роли для автоматизации;
- подготовить план независимых обзоров;
- систематизировать service knowledge;
- сформировать roadmap на следующий квартал.

Артефакты:
- 90-day report;
- updated Claim Registry;
- content performance review;
- automation candidates list;
- next-quarter roadmap.

Люди:
- бизнес-владелец;
- технический эксперт;
- редактор;
- сервис;
- legal/compliance при необходимости.

Можно через AI:
- сводки отчетов;
- выявление повторяющихся gaps;
- подготовка шаблонов;
- предварительная оценка coverage.

Критерии готовности:
- процесс повторяем;
- роли разделены;
- публикации проходят review;
- автоматизация не нарушает контроль качества.
