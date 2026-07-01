# Digital Staff

Digital Staff — это набор регламентированных цифровых ролей, каждая из которых имеет миссию, входы, выходы, права, ограничения, KPI и правила эскалации человеку.

После agent-first pivot Digital Staff является базовой операционной моделью
пилота, а не будущей абстракцией. Это все еще не выбор runtime, сервиса или
agent framework: роль описывает работу, входы, выходы и quality gates.

Цифровой сотрудник не является личностью. В MVP это Markdown-профиль, промпт,
чеклист и место роли в процессе. Позже роль может быть автоматизирована, если
качество процесса доказано.

## Зачем нужен Digital Staff

Digital Staff помогает:
- не смешивать исследование, написание, review и публикацию;
- фиксировать ответственность;
- снижать риск неподтвержденных claims;
- ускорять подготовку черновиков;
- регулярно измерять AI visibility;
- превращать сервисные знания в полезные материалы.

## Agent-first роли пилота

1. Site Import Agent — читает разрешенные страницы `rikanv.ru` и создает source snapshots.
2. Product Truth Agent — извлекает product_line/product_model, категории и характеристики.
3. Claim Extraction Agent — делает claims из официальных описаний и evidence.
4. Evidence Linker Agent — привязывает source/evidence к каждому claim.
5. Doctrine Review Agent — проверяет соответствие RikaNV Doctrine.
6. Technical Consistency Agent — проверяет техническую связность до human review.
7. Content Draft Agent — пишет черновики только из claims.
8. GEO/SEO Agent — делает материал понятным для поиска, людей и AI.
9. Publisher/Repurposer Agent — готовит версии для каналов, но не публикует без approval.
10. AI Visibility Analyst Agent — проверяет ответы AI и создает gap analysis.

## Human-approved правило

Агент может импортировать, извлекать, связывать, проверять, писать draft и
готовить версии для каналов.

Агент не может:

- финально утверждать спорный claim;
- утверждать публикацию;
- публиковать материал;
- скрывать TODO;
- превращать marketing language в verified claim.

## Главное правило разделения обязанностей

Ни одна цифровая роль не может одновременно:
- писать материал;
- технически проверять этот же материал;
- утверждать его;
- публиковать.

## Роли MVP

- Content Strategist — утверждает приоритеты и связывает задачи с AI visibility gaps.
- Site Import / Researcher — импортирует разрешенные источники и ведет source/evidence.
- Product Truth Agent — обновляет Product Truth из источников.
- Claim Extraction Agent — создает claims из официальных описаний.
- Evidence Linker Agent — проверяет source/evidence coverage.
- Writer / Content Draft Agent — пишет черновики строго по claims.
- Comparison Analyst — готовит честные сравнения и фиксирует ограничения.
- Technical Consistency Agent / Technical Reviewer — проверяет технические утверждения.
- Doctrine Review Agent — проводит doctrine pre-review.
- GEO/SEO Specialist — делает структуру понятной для поиска и AI.
- Publisher Repurposer — адаптирует approved материалы под каналы.
- AI Visibility Analyst Agent — измеряет ответы AI и готовит gap analysis.
- Service Knowledge Assistant — превращает сервисный опыт в FAQ и troubleshooting.
- China Assistant — структурирует переписку с поставщиками без публикации конфиденциального.

## Human Approval

Human approval обязателен:
- перед публикацией;
- перед сравнением с конкурентом;
- для технических claims;
- для юридически чувствительных формулировок;
- для материалов на основе внутренней или поставщицкой информации.
