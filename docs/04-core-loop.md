# Основной цикл

Проект работает по модели agent-first, human-approved.

Агенты выполняют основную операционную работу: импорт, извлечение Product Truth,
создание claims, evidence linking, предварительный review и подготовку
черновиков. Человек участвует как владелец решений, reviewer исключений и
final publication approver.

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

## 1. Agent Site Import

Цель: получить структурированный snapshot разрешенных источников, прежде всего
официальных страниц `rikanv.ru`.

Входы: URL, allowed source policy, product taxonomy, текущий Product Truth.

Выходы: source snapshot, source records, список недоступных страниц, TODO.

Ответственная роль: Site Import Agent.

Где нужен человек: если источник спорный, закрытый, не относится к `rikanv.ru`
или требует разрешения.

Типовые ошибки: брать данные с дилерских сайтов без разрешения, не фиксировать
дату проверки, переносить маркетинговые эпитеты как факты.

## 2. Product Truth Extraction

Цель: извлечь product_kind, product_category, модельные характеристики,
line-level сведения и ограничения.

Входы: source snapshot, product taxonomy, current Product Truth.

Выходы: Product Truth update, TODO-поля, ambiguous fields.

Ответственная роль: Product Truth Agent.

Где нужен человек: при неоднозначности line/model, выборе базовой модели или
спорной категории.

Типовые ошибки: переносить характеристики модели на линейку, применять
оружейные поля к наблюдательным приборам, заполнять отсутствующие данные из
памяти.

## 3. Claim Extraction

Цель: превратить проверяемые фрагменты Product Truth и источников в claims.

Входы: Product Truth, source snapshot, evidence candidates.

Выходы: draft/verified claims, rejected candidates, open questions.

Ответственная роль: Claim Extraction Agent.

Где нужен человек: для спорных, рискованных, сравнительных и publish-sensitive
claims.

Типовые ошибки: усиливать формулировку, превращать marketing language в
verified claim, делать scenario_fit claim без evidence.

## 4. Evidence Linking

Цель: связать каждый claim с source_id и evidence_id или явно отметить gap.

Входы: claims, source records, evidence records.

Выходы: linked claims, evidence gaps, source gaps.

Ответственная роль: Evidence Linker Agent.

Где нужен человек: если evidence internal, confidential, volatile или требует
разрешения на публикацию.

Типовые ошибки: считать страницу линейки подтверждением model-level specs,
использовать official product page как доказательство полевой эффективности.

## 5. Agent Claim Review

Цель: классифицировать claims по tier, risk flags и agent_review_status.

Входы: linked claims, doctrine, source policy, Product Truth.

Выходы: Agent Claim Review Board, список exceptions для человека.

Ответственные роли: Agent Claim Review, Doctrine Review Agent, Technical
Consistency Agent.

Где нужен человек: только для exceptions.

Типовые ошибки: считать `verified` автоматическим разрешением на публикацию,
не отделять draft-ready claim от publication-ready claim.

## 6. Human Exception Review

Цель: не проверять все claims вручную, а рассмотреть только рискованные случаи.

Человек смотрит claims:

- `blocked_for_publication`;
- `human_review_required`;
- `needs_rewording` с высоким риском;
- competitor comparison;
- performance claims;
- confidential claims;
- volatile claims;
- claims с line/model ambiguity.

Выходы: human_decision, required_action, blockers.

Ответственная роль: Human Owner с участием technical reviewer и doctrine
compliance owner.

Типовые ошибки: превращать сессию в ручное переписывание всех данных, пропускать
final publication approval.

## 7. Content Draft Generation

Цель: подготовить черновик материала только из claims, Product Truth и sources.

Входы: approved-for-draft claims, content task, audience, format.

Выходы: draft, FAQ, таблицы, TODO, claims used, sources used.

Ответственная роль: Content Draft Agent.

Где нужен человек: для спорной тональности, коммерческих акцентов и перед
публикацией.

Типовые ошибки: писать “из головы”, скрывать TODO, добавлять неподтвержденные
выводы для связности.

## 8. Technical / Doctrine Pre-Check

Цель: до человеческого approval найти технические, doctrinal, category и
line/model ошибки.

Входы: draft, claims, sources, Product Truth, doctrine checklist.

Выходы: pre-check report, required edits, blocked fragments.

Ответственные роли: Technical Consistency Agent и Doctrine Review Agent.

Где нужен человек: если pre-check нашел спорный или high-risk issue.

Типовые ошибки: считать pre-check финальным approval, не эскалировать
performance claims.

## 9. Human Publication Approval

Цель: финально разрешить или запретить публикацию материала.

Входы: draft, pre-check report, claims used, sources used, doctrine notes.

Выходы: approved, needs revision или rejected.

Ответственная роль: Human Owner / Publication Owner.

Где нужен человек: всегда перед публикацией.

Типовые ошибки: публиковать draft после agent review без человеческого решения.

## 10. Publication

Цель: выпустить approved материал в подходящем канале.

Входы: approved material, channel requirements, metadata, publication notes.

Выходы: опубликованная страница, пост, видео-сценарий, PDF или дилерский
материал.

Ответственная роль: Publisher / Repurposer Agent, но только после human approval.

Типовые ошибки: публиковать разные версии с противоречивыми claims, не
фиксировать дату обновления.

## 11. AI Visibility Retest

Цель: проверить, изменились ли AI-ответы после публикаций и обновления
информационной среды.

Входы: опубликованные материалы, прежний query set, answer log.

Выходы: обновленные метрики, новые gaps, следующие content tasks.

Ответственная роль: AI Visibility Analyst Agent.

Где нужен человек: интерпретация результата и приоритизация следующего цикла.

Типовые ошибки: ждать гарантированного попадания в AI-ответы, менять методику и
сравнивать несопоставимые данные.
