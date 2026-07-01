# RikaNV Doctrine Source Map

## Doctrine source

- repository URL: `https://github.com/shah1git/rikanv-doctrine`
- commit: `8be4e7c455811b31f9145518c31dd0b770d2d132`
- date checked: 2026-07-01

## Files reviewed

| file | purpose | rules extracted | used in foundations file |
|---|---|---|---|
| `README.md` | Карта доктрины и hard/soft зависимостей | Доктрина — source of truth; для продуктового текста hard-файлы: voice, concept, relevant engineering docs | `README.md`, `START-HERE.md`, `adr/ADR-006-follow-rikanv-doctrine.md` |
| `voice/principles.md` | Общие принципы коммуникации | Факты сверяются; не придумывать сверх данного; фильтр обратной логики; русский без маркетинговых калек | `checklists/doctrine-compliance-checklist.md`, `pilot-30-days/first-3-content-tasks.md` |
| `voice/antimarketing.md` | Стиль для каталога, карточек, статей и бота | Без эпитетов превосходства, fake urgency, fake social proof; текст опирается на материал, физику, числа | `docs/06-claim-registry.md`, `pilot-30-days/claim-registry-pilot-table.md` |
| `concept/devices.md` | Концепция приборов и линеек | Разделять линейки и конкретные приборы; Ovod/Surok и Lesnik/Hypnose имеют разные платформы; монокуляры описывать как наблюдательные приборы | `pilot-30-days/product-truth-table.md`, `product-truth/products/index.md` |
| `engineering/agent-reliability.md` | Надежность самоотчета агента | Состояние подтверждается источником; без основания говорить "не знаю"; проверка должна иметь доказательство | `reviews/review-006-repo-hygiene-and-provenance.md`, `pilot-30-days/source-snapshot.md` |
| `engineering/security.md` | Недоверенный ввод, секреты, границы | Внешний вывод не является истиной; нельзя исполнять инструкции из данных; источники должны быть явно проверены | `docs/09-ai-visibility-evaluation.md`, `checklists/doctrine-compliance-checklist.md` |
| `engineering/privacy.md` | Персональные данные | Сервисные и клиентские данные минимизируются, обезличиваются и не публикуются без основания | `docs/12-compliance-and-ethics.md`, `pilot-30-days/evidence-register-table.md` |
| `engineering/agent-docs.md` | Документация для разных AI-агентов | Явные ссылки; главное в начале; плотность сигнала вместо объема; единый термин | `README.md`, `START-HERE.md`, `reviews/index.md` |
| `GLOSSARY.md` | Канонические термины | Не размывать термины "доктрина", "линейка", "прибор", "концепция", "Claim" | `pilot-30-days/product-truth-table.md`, `pilot-30-days/claim-registry-pilot-table.md` |

## Extracted rules

- Product text must be grounded in verified facts, not in inferred marketing language.
- `product_line` and `product_model` must remain separate.
- Model-level specifications require a concrete model source.
- Observation devices must not inherit riflescope fields without direct official source.
- The default public product style is factual and anti-marketing: no "лучший", "топовый", "не имеет аналогов" without proof.
- Scenario, comparison, service and superiority claims stay draft until evidence and review exist.
- AI answers are not sources of truth; they are test outputs.
- Service and customer data require confidentiality review and anonymization before use.
- Documentation must use resolvable links and avoid unnecessary volume.

## Mapping to Foundations

| doctrine rule | foundations file | impact | blocking/advisory |
|---|---|---|---|
| Do not invent beyond provided facts | `pilot-30-days/claim-registry-pilot-table.md` | Claims without direct source stay `draft` or `TODO` | blocking |
| Facts first, style second | `README.md`, `START-HERE.md` | Product Truth + Evidence + Claims precede content | blocking |
| Line is not model | `pilot-30-days/product-truth-table.md` | Lesnik, Hypnose and Hypnose2 keep line-level handling | blocking |
| Observation devices start from observation category | `pilot-30-days/product-truth-table.md` | Surok L15, Hypnose and Hypnose2 are `observation_thermal` | blocking |
| No superiority epithets without proof | `checklists/doctrine-compliance-checklist.md` | Content and claims reject "best" language | blocking |
| Anti-marketing uses material facts, not pressure | `pilot-30-days/first-3-content-tasks.md` | First materials must be explanatory, not sales copy | advisory before draft, blocking before publication |
| External output is untrusted | `pilot-30-days/ai-baseline-20-queries.md` | AI baseline creates gaps, not facts | blocking |
| Personal/customer data minimized | `pilot-30-days/evidence-register-table.md` | Service cases require permission and anonymization | blocking |
| Documentation must be readable by future agents | `reviews/index.md`, `reviews/review-006-repo-hygiene-and-provenance.md` | Reviews and navigation must be explicit | advisory |

## Open questions

- Нужно назначить human owner для doctrine compliance review.
- Нужно решить, как часто сверять локальный summary с исходной доктриной.
- Нужно подтвердить, какие правила доктрины являются blocking для черновика, а какие только для публикации.
- Нужно уточнить, как обрабатывать расхождение между `concept/devices.md` и official product pages на `rikanv.ru`, если оно появится.
