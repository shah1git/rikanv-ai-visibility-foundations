# Review 001: Spine Review

## 1. Reviewed files

Обязательные файлы:

- `README.md`
- `docs/01-goal.md`
- `docs/02-non-goals.md`
- `docs/03-strategy.md`
- `docs/04-core-loop.md`
- `docs/05-source-of-truth.md`
- `docs/06-claim-registry.md`
- `docs/09-ai-visibility-evaluation.md`
- `docs/11-digital-staff.md`
- `docs/13-90-day-plan.md`
- `backlog/mvp.md`
- `backlog/first-30-articles.md`
- `backlog/first-50-ai-queries.md`
- `data-model/claim.schema.md`
- `product-truth/product-profile-template.md`
- `digital-staff/index.md`
- `workflows/ai-visibility-loop.md`
- `checklists/article-quality-checklist.md`
- `checklists/technical-review-checklist.md`
- `checklists/comparison-bias-checklist.md`
- `adr/ADR-001-no-pbn-no-rewrite-network.md`
- `adr/ADR-002-product-truth-before-content.md`
- `adr/ADR-003-claims-before-articles.md`
- `adr/ADR-004-digital-staff-as-operational-model.md`
- `adr/ADR-005-ai-visibility-measured-not-assumed.md`

Дополнительно прочитаны для проверки Digital Staff:

- `digital-staff/content-strategist.md`
- `digital-staff/researcher.md`
- `digital-staff/writer.md`
- `digital-staff/comparison-analyst.md`
- `digital-staff/technical-reviewer.md`
- `digital-staff/geo-seo-specialist.md`
- `digital-staff/publisher-repurposer.md`
- `digital-staff/ai-visibility-analyst.md`
- `digital-staff/service-knowledge-assistant.md`
- `digital-staff/china-assistant.md`

Также просмотрен общий список файлов верхнего уровня для оценки избыточности.

## 2. Executive verdict

Статус: NEEDS TIGHTENING.

Скелет проекта в целом правильный: Product Truth, Evidence Base, Claim Registry, AI Visibility Lab, honest comparisons и human approval образуют рабочую систему. По этим документам можно начать ручной пилот, но только если сначала сжать MVP до малого набора рабочих таблиц и владельцев.

Главная проблема не в неверной стратегии, а в перегрузе. В репозитории много правильных документов, но для команды RikaNV в первые 7 дней не видно одного короткого маршрута: кто открывает какой файл, какую таблицу заполняет, кто проверяет и что считается готовым.

## 3. What works well

1. Product Truth поставлен перед контентом. Это правильная защита от выдуманных характеристик и противоречий между каналами.

2. Claim Registry выбран как ядро. Это снижает риск рекламных формулировок и делает материалы обновляемыми.

3. Запрет на PBN, дорвеи, фейковые отзывы и рерайт-сетки зафиксирован в README, non-goals и ADR. Это важное репутационное решение.

4. AI Visibility Lab не обещает гарантированный результат. Документы корректно говорят об измерении вероятности и gaps, а не об “обмане AI”.

5. Human approval встроен в процесс. Публикация без человека явно запрещена.

6. Honest comparisons описаны правильно: нужно показывать сильные стороны RikaNV, сильные стороны конкурента, missing data и ограничения.

7. 90-day plan дает понятную временную рамку и разделяет первые 7 дней, 8-30, 31-60 и 61-90.

8. Digital Staff описан как операционная модель, а не как agent framework. Это удерживает проект от преждевременной автоматизации.

9. Все характеристики Lesnik и Ovod оставлены как TODO. Это соответствует правилу не выдумывать данные.

10. Чеклисты короткие и пригодны для ручной проверки, если использовать только 2-3 из них в MVP.

## 4. Biggest risks

1. Риск: слишком много входных точек.
Где проявляется: README, docs, backlog, product-truth, templates, workflows.
Почему опасно: команда может начать “читать проект”, а не делать Product Truth.
Как исправить: в README и backlog/mvp добавить один MVP-route: открыть 5 файлов, заполнить 3 таблицы, провести baseline.

2. Риск: 130 файлов создают ощущение готовой системы, хотя фактических данных RikaNV еще нет.
Где проявляется: весь репозиторий.
Почему опасно: можно принять шаблоны за прогресс и отложить сбор реальных характеристик, источников и evidence.
Как исправить: в MVP считать прогрессом только заполненные product profiles, source register, evidence register, 30 claims и baseline report.

3. Риск: Claim Registry может стать бюрократией.
Где проявляется: data-model/claim.schema.md, docs/06-claim-registry.md.
Почему опасно: 15 обязательных полей для каждого claim могут остановить пилот.
Как исправить: для первых 30 дней использовать минимальную таблицу: claim_id, statement, product, claim_type, source, evidence, status, reviewer, notes.

4. Риск: процесс core loop слишком длинный для первого цикла.
Где проявляется: docs/04-core-loop.md.
Почему опасно: 11 этапов до публикации могут быть тяжелыми для малой команды.
Как исправить: для MVP использовать сокращенный цикл: data -> claim -> review -> draft -> approval -> publish -> baseline retest.

5. Риск: Digital Staff ролей больше, чем нужно для 30 дней.
Где проявляется: docs/11-digital-staff.md, digital-staff/index.md, role files.
Почему опасно: команда начнет распределять роли вместо производства claims и baseline.
Как исправить: оставить 5 MVP-функций: Product/Research, Technical Review, Content Owner, AI Visibility Analyst, Publisher. Остальные роли держать как чеклисты.

6. Риск: AI baseline на 50 запросов может быть слишком тяжелым вручную.
Где проявляется: docs/13-90-day-plan.md, backlog/first-50-ai-queries.md.
Почему опасно: 50 запросов на 3-5 систем дадут 150-250 ответов. Для первого раза это может занять несколько дней и сорвать Product Truth.
Как исправить: первый baseline делать на 20 запросах и 3 системах, затем расширять.

7. Риск: не назначен реальный owner.
Где проявляется: почти во всех шаблонах есть owner TODO, но нет правила назначения.
Почему опасно: документы останутся без ответственного за заполнение и approval.
Как исправить: до начала пилота назначить 5 human owners: product owner, technical reviewer, content owner, AI visibility analyst, publisher.

8. Риск: 90-day plan слишком рано обещает публикации.
Где проявляется: docs/13-90-day-plan.md, блок “дни 8-30”.
Почему опасно: если Product Truth не заполнен, публикации будут либо пустыми, либо рискованными.
Как исправить: критерий месяца должен допускать “0 публикаций, если claims не verified”. Лучше 3 approved drafts, чем 5 слабых публикаций.

9. Риск: сравнения могут стартовать до данных конкурентов.
Где проявляется: backlog/first-30-articles.md, comparison темы 18-19.
Почему опасно: сравнительные материалы имеют высокий bias и legal risk.
Как исправить: в первые 30 дней делать только comparison draft claims и методику сравнения, не публиковать прямые сравнения без sources.

10. Риск: сервисные claims могут раскрыть конфиденциальность или обобщить единичные случаи.
Где проявляется: docs/05-source-of-truth.md, service role, backlog service topics.
Почему опасно: сервисный опыт ценен, но рискован без обезличивания и проверки.
Как исправить: в MVP использовать только агрегированные FAQ и service claims со статусом draft до service review.

## 5. Duplications and overlaps

| Файл A | Файл B | Что повторяется | Оставить где | Что сократить |
|---|---|---|---|---|
| README.md | docs/01-goal.md | цель проекта и причины существования | README как краткий вход, docs/01 как полная цель | в README оставить только 5-7 строк цели |
| README.md | docs/02-non-goals.md | запреты на PBN, фейки, выдуманные характеристики, runtime | docs/02 | в README оставить ссылку и краткий список |
| docs/03-strategy.md | README.md | стратегия claims before content и structured sources | docs/03 | в README оставить только принцип |
| docs/04-core-loop.md | workflows/ai-visibility-loop.md | AI test -> gap -> content task -> retest | docs/04 для общей картины, workflow для выполнения | в workflow добавить только конкретные поля baseline, не повторять философию |
| docs/05-source-of-truth.md | ADR-002-product-truth-before-content.md | Product Truth before content | ADR для решения, docs/05 для состава SoT | в docs/05 убрать повтор обоснования, оставить состав |
| docs/06-claim-registry.md | data-model/claim.schema.md | статусы, confidence, claim_type | data-model для схемы, docs/06 для правил | в docs/06 оставить примеры good/bad claims |
| docs/09-ai-visibility-evaluation.md | backlog/first-50-ai-queries.md | методика query set и правила фиксации | docs/09 для методики, backlog для списка запросов | в backlog оставить только таблицу запросов |
| docs/11-digital-staff.md | digital-staff/index.md | определение Digital Staff и список ролей | docs/11 для концепта, index для навигации | index можно сделать коротким MVP-routing |
| docs/13-90-day-plan.md | backlog/mvp.md | первые 7-30 дней и критерии MVP | backlog/mvp для текущего пилота | в 90-day plan оставить roadmap, не operational checklist |
| checklists/article-quality-checklist.md | checklists/technical-review-checklist.md | проверка claims, sources, отсутствия неподтвержденных выводов | оба нужны, но с разными owner | article checklist оставить редактору, technical checklist оставить reviewer |
| ADR-004-digital-staff-as-operational-model.md | docs/11-digital-staff.md | Digital Staff не runtime | ADR для решения | docs/11 оставить прикладную модель ролей |
| ADR-005-ai-visibility-measured-not-assumed.md | docs/09-ai-visibility-evaluation.md | AI visibility нужно измерять | ADR для решения | docs/09 оставить методику |

## 6. Missing practical details

1. Есть список первых действий, но он рассыпан между README, docs/13 и backlog/mvp. Нужен один “Start here for 7 days”.

2. Формат первой таблицы claims есть в data-model, но он слишком широкий для пилота. Нужна минимальная рабочая таблица на 30 claims.

3. Формат AI baseline описан, но не сжат до первого запуска. Нужны 20 запросов, 3 системы, один лог и простые формулы.

4. Нет явного owner assignment. Нужно до старта назначить людей на 5 функций.

5. Минимальный набор данных указан, но не разделен на required now / later. Для первой недели нужны только модели, характеристики, инструкции, прошивки, сервисные FAQ и 5-10 источников.

6. Criteria of done для первого месяца есть частично, но нужно жестче: заполнены 2 product profiles, 30 claims, 20-query baseline, 3 approved drafts или documented blockers.

7. Нет правила, сколько claims нужно для первой статьи. Практично: минимум 5 usable claims, минимум 2 sources, technical review required.

8. Нет одного места, где фиксируется “do not publish”. Нужно в MVP явно разрешить результат “не публиковать, данных не хватает”.

## 7. MVP compression

### Обязательные документы на первые 30 дней

- `README.md`
- `backlog/mvp.md`
- `backlog/product-data-needed.md`
- `product-truth/product-profile-template.md`
- `product-truth/products/lesnik-template.md`
- `product-truth/products/ovod-template.md`
- `product-truth/claim-registry-template.md`
- `product-truth/source-register-template.md`
- `product-truth/evidence-register-template.md`
- `backlog/first-50-ai-queries.md`
- `ai-visibility-lab/answer-log-template.md`
- `ai-visibility-lab/gap-analysis-template.md`
- `checklists/technical-review-checklist.md`
- `checklists/comparison-bias-checklist.md`
- `checklists/publication-readiness-checklist.md`

### Обязательные шаблоны

- Product profile.
- Claim registry.
- Source register.
- Evidence register.
- AI answer log.
- Gap analysis.
- Article draft only after claims.

### Обязательные роли

- Product Owner / Research Owner.
- Technical Reviewer.
- Content Owner.
- AI Visibility Analyst.
- Publisher / Human Owner.

### Обязательные данные

- Список актуальных моделей.
- Официальные характеристики Lesnik и Ovod.
- Инструкции и прошивки.
- 5-10 официальных sources.
- 5-10 evidence items.
- 5 сервисных тем без персональных данных.
- Список 5-8 конкурентов для future comparisons.

### Обязательные метрики

- Mention Rate.
- Recommendation Rate.
- Error Count.
- Competitors Mentioned.
- Query Coverage by group.
- Number of actionable gaps.

### Что отложить

- Council Review.
- China Assistant как отдельную роль.
- OSINT Center.
- Полные data-model схемы для всех сущностей.
- Все 50 AI queries на первом baseline.
- Прямые comparison publications.
- Массовый repurposing.
- YouTube/PDF/dealer factory до verified claims.

### KEEP NOW

- Product Truth.
- Claim Registry.
- Source/Evidence registers.
- AI baseline на 20 запросах.
- Technical review.
- Human approval.
- Anti-spam / no-PBN policy.
- 3-5 article drafts из verified или clearly draft claims.

### KEEP BUT LATER

- Полные digital-staff role profiles.
- Comparison Analyst как отдельная роль.
- Publisher Repurposer как отдельная роль.
- Service Knowledge Assistant после сбора сервисных данных.
- Full 50-query AI set.
- Test reports.
- Dealer materials.
- Monthly report.

### ARCHIVE FOR NOW

- Council Review template.
- Cases, кроме одного launch/pricing кейса при реальной необходимости.
- Hypotheses как активный слой.
- Future ideas.
- Большинство data-model schemas, кроме claim/source/evidence/product.
- Prompts, кроме claim extraction, article draft и technical review.

## 8. First 7 days operating plan

| День | Задача | Входные данные | Результат | Кто участвует | Критерий готовности |
|---|---|---|---|---|---|
| 1 | Собрать список актуальных моделей и начать Product Truth | Названия моделей, статус продаж, владелец продукта | Таблица моделей: Lesnik, Ovod, другие актуальные модели | Product Owner, Technical Reviewer | У каждой модели есть official_name, status, owner, TODO по характеристикам |
| 2 | Заполнить базовые характеристики Lesnik и Ovod | Инструкции, паспорта, официальные карточки | 2 product profiles с источниками или TODO | Product Owner, Researcher, Technical Reviewer | Нет характеристики без source или TODO |
| 3 | Создать source register и evidence register | Официальные документы, фото, видео, changelog, сервисные notes | Минимум 10 sources и 5 evidence items | Researcher, Service Owner | У каждого source есть дата, access level, usage_allowed |
| 4 | Создать первые 30 draft claims | Product profiles, sources, evidence | Claim table на 30 строк | Researcher, Technical Reviewer | Каждый claim имеет product, type, source/evidence или TODO, status |
| 5 | Провести technical triage claims | Claim table | 10-15 claims готовы к использованию в черновиках, остальные blocked/draft | Technical Reviewer, Product Owner | У каждого claim есть reviewer decision |
| 6 | Провести manual AI visibility baseline | 20 queries, 3 AI systems, answer log | Answer log и первичные метрики | AI Visibility Analyst | Есть Mention Rate, Recommendation Rate, errors, competitors |
| 7 | Выбрать 3 первых материала и создать content tasks | Claims, AI gaps, product gaps | 3 content tasks с claims needed и evidence needed | Content Owner, Product Owner, AI Visibility Analyst | Для каждого материала понятно: publish / draft only / blocked |

## 9. First manual AI visibility baseline

Первый baseline нужно провести вручную. Не автоматизировать.

### Query set: 20 из 50

1. `какие тепловизионные прицелы лучшие в России`
2. `какой тепловизионный прицел выбрать`
3. `лучший тепловизионный прицел цена качество`
4. `тепловизор с хорошим сервисом в России`
5. `тепловизионный прицел для леса что важно`
6. `RikaNV Lesnik для леса подходит ли`
7. `тепловизионный прицел для поля что выбрать`
8. `Ovod для поля подходит ли`
9. `тепловизионный прицел с дальномером и баллистикой`
10. `нужен ли дальномер в тепловизионном прицеле`
11. `RikaNV Lesnik или Hikmicro Stellar`
12. `RikaNV Ovod или Hikmicro Stellar`
13. `RikaNV или Pulsar что выбрать`
14. `RikaNV Lesnik отзывы`
15. `RikaNV Ovod отзывы`
16. `RikaNV официальный сервис`
17. `какой бренд тепловизоров лучше обслуживается в России`
18. `что такое NETD в тепловизоре`
19. `как объектив влияет на тепловизор`
20. `как читать характеристики тепловизионного прицела`

### AI systems

Выбрать 3-5 доступных команде систем. Минимум для первого запуска: ChatGPT, Perplexity, один ассистент с хорошим покрытием русскоязычных запросов. Если есть доступ, добавить Claude, Gemini или российский AI-ассистент.

### Правила фиксации

- Зафиксировать дату и час теста.
- Использовать одинаковый текст запроса.
- Не добавлять контекст, если тестируется обычный пользовательский запрос.
- Сохранить полный ответ или ссылку/скриншот во внутреннем хранилище.
- Заполнить answer log: AI system, query_id, mentioned_brands, rikanv_mentioned, rikanv_recommended, errors, sources, notes.

### Подсчет

- Mention Rate: ответы с явным RikaNV / все ответы.
- Recommendation Rate: ответы, где RikaNV рекомендован / все ответы.
- Error Count: количество фактических ошибок про RikaNV.
- Competitors: список брендов, которые чаще всего рекомендованы вместо RikaNV.
- Gap Analysis: для каждого важного gap указать needed source, needed claim, content task.

## 10. First Claim Registry pilot

Цель: создать 30 claims, не пытаясь сразу сделать их verified.

### 10 product specification claims

Источники: официальные карточки, инструкции, паспорта, changelog, продуктовые таблицы RikaNV.

Кто проверяет: Technical Reviewer.

Статус: `draft`, пока source/evidence не проверены. `verified` только после technical review.

Примеры типов: сенсор, объектив, NETD, дисплей, дальномер, баллистический калькулятор, прошивка, питание, комплектация, статус модели.

### 5 service claims

Источники: обезличенные сервисные обращения, FAQ сервиса, гарантийные условия, service notes.

Кто проверяет: Service Owner и Technical Reviewer.

Статус: `draft` или `verified` только после обезличивания и review.

Правило: не обобщать единичный случай как массовую проблему.

### 5 scenario-fit claims

Источники: product specs, тесты, экспертный review, реальные сценарии покупателей.

Кто проверяет: Technical Reviewer и Product Owner.

Статус: обычно `draft` или `medium confidence`, пока нет тестов.

Правило: формулировать сценарно, не как абсолютное превосходство.

### 5 limitation claims

Источники: инструкции, ограничения продукта, сервисные заметки, technical review.

Кто проверяет: Technical Reviewer.

Статус: `draft` до подтверждения. Такие claims важны для доверия и bias check.

Правило: ограничения не скрываются, но формулируются точно и без вредных инструкций.

### 5 comparison draft claims

Источники: RikaNV specs, официальные competitor specs, тесты, независимые обзоры.

Кто проверяет: Comparison Analyst и Technical Reviewer.

Статус: только `draft`, пока нет полного набора данных и bias check.

Правило: без тестов нельзя делать финальный вывод “лучше”.

## 11. Digital Staff sanity check

| Роль | Нужна в первые 30 дней | Можно объединить | Реальный output | Human owner в RikaNV |
|---|---|---|---|---|
| Content Strategist | да | с Content Owner | 3-5 content tasks, приоритеты | маркетинг-владелец / контент-руководитель |
| Researcher | да | с Product Owner на старте | source register, evidence register, draft claims | продуктовый менеджер или технический координатор |
| Writer | да, но после claims | с Content Owner | 3 approved drafts или blocked drafts | редактор / контент-специалист |
| Comparison Analyst | частично | с Technical Reviewer для draft | comparison gaps, не публикации | технический эксперт + маркетинг |
| Technical Reviewer | да, отдельно | не объединять с writer | review claims/materials | инженер / продуктовый эксперт |
| GEO/SEO Specialist | не как отдельная роль | с Content Owner | структура FAQ/таблиц | SEO/контент-специалист |
| Publisher Repurposer | частично | с Publisher | publication package | владелец сайта/каналов |
| AI Visibility Analyst | да | можно с маркетинг-аналитиком | answer log, metrics, gaps | маркетинг-аналитик |
| Service Knowledge Assistant | частично | с Service Owner | 5 service topics, draft service claims | руководитель сервиса |
| China Assistant | нет, если нет активной поставщицкой задачи | с Researcher | internal summary only | закупки/продуктовый менеджер |

Вывод: в MVP оставить функции Content Owner, Researcher/Product Owner, Technical Reviewer, AI Visibility Analyst, Publisher. GEO/SEO, Comparison, Service и China использовать как режимы работы или чеклисты, а не как отдельные роли.

## 12. Recommended edits

Не вносить сейчас. Рекомендованные точечные правки:

| Файл | Проблема | Предлагаемая правка | Приоритет |
|---|---|---|---|
| README.md | много концепции, но нет одного MVP-маршрута | добавить блок “Start here: first 7 days” со ссылками на 5 файлов | high |
| backlog/mvp.md | нет owner и минимальных таблиц | добавить 30-day pilot board: owner, artifact, DoD | high |
| docs/13-90-day-plan.md | baseline на 50 запросов слишком тяжелый для первого месяца | заменить первый baseline на 20 запросов, 50 оставить как расширение | high |
| data-model/claim.schema.md | слишком много обязательных полей для первых 30 claims | добавить MVP-minimum claim table | high |
| docs/04-core-loop.md | полный цикл длинный для MVP | добавить “MVP short loop” из 6 этапов | high |
| docs/11-digital-staff.md | слишком много ролей для старта | добавить “MVP roles: 5 functions” | high |
| backlog/first-30-articles.md | 30 тем создают ощущение обязательного плана | пометить первые 5 тем как only first wave | medium |
| backlog/first-50-ai-queries.md | нет subset v1 | отметить 20 baseline queries | medium |
| product-truth/product-profile-template.md | все поля выглядят равнозначно | разделить required now и later | medium |
| checklists/article-quality-checklist.md | checklist полезный, но не привязан к owner | добавить owner: Content Owner | low |
| checklists/technical-review-checklist.md | нет минимального result block | добавить reviewer/date/result/required fixes | low |
| checklists/comparison-bias-checklist.md | полезно, но сравнения рано публиковать | добавить “MVP: draft only unless full evidence” | low |

## 13. Files that may be redundant

Не удалять сейчас.

| Файл или группа | Рекомендация | Почему |
|---|---|---|
| `templates/council-review.md` | отложить | преждевременно для MVP, может создать лишний review слой |
| `/cases/*` | отложить | полезно для обучения, но не нужно для первых 30 дней |
| `/hypotheses/*` | архивировать на время пилота | гипотезы полезны позже, сейчас важнее sources/claims/baseline |
| `docs/14-future-ideas.md` | архивировать на время пилота | future ideas отвлекают от ручного цикла |
| большинство `/data-model/*.schema.md` | keep but later | для MVP нужны product, source, evidence, claim, review |
| большинство `/prompts/*` | keep but later | использовать только claim extraction, article draft, technical review |
| `backlog/first-20-comparisons.md` | keep but later | сравнения рискованны без данных |
| `backlog/first-10-tests.md` | keep but later | тесты нужны, но после Product Truth и методик |
| `digital-staff/china-assistant.md` | отложить | нужен только при активной поставщицкой задаче |
| `digital-staff/geo-seo-specialist.md` | объединить | в MVP это checklist для Content Owner |
| `digital-staff/publisher-repurposer.md` | объединить | в MVP это функция publisher, не отдельная роль |

## 14. Next action

Один следующий шаг: провести 2-часовую рабочую сессию RikaNV “Product Truth Start” и заполнить первую таблицу моделей Lesnik/Ovod с official name, status, known specs, missing specs, source, owner и reviewer.
