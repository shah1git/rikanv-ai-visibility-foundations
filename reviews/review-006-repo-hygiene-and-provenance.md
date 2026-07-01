# Review 006: Repo Hygiene and Provenance

## 1. Scope

Проверены ключевые рабочие файлы пилота, навигация, product truth, source/evidence/claim связка, review-история и привязка к RikaNV Doctrine.

Изменены:

- `README.md`
- `START-HERE.md`
- `pilot-30-days/product-truth-table.md`
- `pilot-30-days/claim-registry-pilot-table.md`

Созданы:

- `reviews/index.md`
- `doctrine/rikanv-doctrine-source-map.md`
- `pilot-30-days/source-snapshot.md`
- `reviews/review-006-repo-hygiene-and-provenance.md`

## 2. Markdown hygiene

Исправлено:

- README приведен к роли верхнего индекса, а не второго START-HERE.
- Абсолютные локальные ссылки в START-HERE заменены на относительные.
- `product-truth-table.md` разбит на тематические таблицы:
  - identity;
  - positioning;
  - source/review;
  - model specs;
  - riflescope-only fields;
  - observation-only fields;
  - candidate model pages.
- Сверхширокие строки в Product Truth сокращены без удаления полей.
- В Claim Registry уточнены notes для product_line claims, чтобы line-level/TODO статус был виден в таблице.

Не менялось:

- продуктовая таксономия;
- приоритет Product Truth;
- состав claims;
- значения характеристик, уже внесенные из `rikanv.ru`;
- content tasks.

## 3. README / START-HERE alignment

Несогласованность до правки:

- README не указывал `START-HERE.md` как главный вход.
- README описывал старт через общий backlog, а не через 30-дневный ручной пилот.
- Первые 7 дней в README были сфокусированы на старом Lesnik/Ovod scope.
- В README не было явного правила `product_line != product_model`.
- Doctrine compliance был не виден как обязательный publication gate.

Исправлено:

- README ссылается на `START-HERE.md` как главный вход.
- Базовый scope синхронизирован:
  - RikaNV Ovod L25;
  - RikaNV Lesnik;
  - RikaNV Surok L15;
  - RikaNV Hypnose;
  - RikaNV Hypnose2.
- Добавлено правило line/model separation.
- Добавлена короткая связка с RikaNV Doctrine.
- Сохранен главный тезис: сначала Product Truth + Evidence + Claim Registry, потом Content Factory.

## 4. Doctrine provenance

Status: SOURCE VERIFIED; SOURCE MAP CREATED.

Источник доктрины доступен:

- repository: `https://github.com/shah1git/rikanv-doctrine`
- commit: `8be4e7c455811b31f9145518c31dd0b770d2d132`
- date checked: 2026-07-01

Создан файл:

- `doctrine/rikanv-doctrine-source-map.md`

Нужен human review, чтобы назначить doctrine compliance owner и решить, какие doctrine rules blocking на уровне draft, а какие blocking только перед публикацией.

## 5. Cross-reference audit

| check | result | notes |
|---|---|---|
| source_id references | pass | Missing `source_id` между Product Truth / Claim Registry и Source Register не обнаружены |
| evidence_id references | pass | Missing `evidence_id` между Product Truth / Claim Registry и Evidence Register не обнаружены |
| verified claims | pass | Verified claims без `source_id` и `evidence_id` не обнаружены |
| line/model separation | pass | Lesnik, Hypnose и Hypnose2 ведутся как `product_line`; candidate models вынесены отдельно |
| category separation | pass | `thermal_riflescope` и `observation_thermal` разделены; observation rows не используют riflescope fields как specs |
| product_line notes | pass | Product_line claims имеют `line-level`, `verified line-level`, `line-level TODO` или аналогичное пояснение |
| Lesnik base priority | pass | Lesnik остается base priority; фраза "Lesnik оставлен в later" встречается только как negative success criterion |
| Hypnose/Hypnose2 line handling | pass | Hypnose и Hypnose2 не описаны как concrete `product_model`; найденные Hypnose2 модели остаются candidate product_model |
| AI baseline category coverage | pass | Query set покрывает прицелы, наблюдательные тепловизоры и Hypnose/Hypnose2 |
| Doctrine provenance | pass with human follow-up | Source verified, но owner doctrine compliance еще не назначен |

## 6. Data risks

Значения, внесенные с `rikanv.ru`:

- Ovod L25: часть model-level specs из official product page.
- Surok L15: часть model-level specs из official product page.
- Lesnik: line page и candidate Lesnik2 model pages.
- Hypnose: line page.
- Hypnose2: candidate model pages, найденные через Hypnose line page.

Требуют human confirmation:

- базовая модель Lesnik для Product Truth pilot;
- статус Hypnose2 как отдельной line page, если такая страница должна существовать;
- выбор конкретной Hypnose2 модели, если она войдет в следующий model-level pilot;
- warranty/service fields;
- scenario-fit claims;
- service/safety claims;
- doctrine compliance owner;
- technical reviewer;
- publication owner.

Volatile:

- цены;
- наличие;
- акции;
- сроки поставки;
- любые коммерческие условия.

Нельзя использовать в контенте как подтвержденные claims:

- claims со статусом `draft`;
- scenario-fit claims без evidence;
- service claims без approval;
- comparison claims без test/bias check;
- superiority claims;
- line-level specs как model-level specs;
- AI baseline answers как source of truth.

## 7. Files changed

- `README.md`
- `START-HERE.md`
- `pilot-30-days/product-truth-table.md`
- `pilot-30-days/claim-registry-pilot-table.md`

## 8. New files created

- `reviews/index.md`
- `doctrine/rikanv-doctrine-source-map.md`
- `pilot-30-days/source-snapshot.md`
- `reviews/review-006-repo-hygiene-and-provenance.md`

## 9. Verdict

READY FOR HUMAN PRODUCT DECISIONS.

Репозиторий теперь пригоден для ручной работы: главный вход понятен, Product Truth scope согласован, source/evidence/claim связка проверена, Doctrine provenance зафиксирован. Следующий блок зависит не от документации, а от продуктовых решений и владельцев.

## 10. Next human decisions

- Выбрать базовую модель Lesnik.
- Уточнить статус Hypnose2.
- Выбрать модель Hypnose2 для пилота, если Hypnose2 нужен на model-level этапе.
- Назначить doctrine compliance owner.
- Назначить technical reviewer.
- Назначить publication owner.
