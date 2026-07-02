---
status: draft_only
publication_ready: false
requires_technical_review: true
requires_doctrine_review: true
requires_human_publication_approval: true
source_policy: approved-for-draft safe claims only
volatile_data_used: false
competitor_comparison_used: false
field_performance_claims_used: false
---

# RikaNV Lesnik2 650L: черновик для оценки тепловизионного прицела

## Draft warning

Это cleaned draft_only материал после technical and doctrine pre-check.
Он не является publication-ready и не должен публиковаться без review.

Перед публикацией обязательны:

- human technical review;
- human doctrine compliance review;
- final human publication approval.

## Краткий статус

Lesnik остается line-level context, а Lesnik2 650L рассматривается только как конкретная модель.

Черновик использует только approved-for-draft safe claims.
Коммерческие данные, сравнения и unresolved human exceptions не используются.

## Что известно по safe claims

| Параметр | Нейтральная формулировка |
|---|---|
| Линейный контекст | RikaNV Lesnik описывается как линейка тепловизионных прицелов |
| Модель | Lesnik2 650L |
| Матрица | 640x512 |
| Объектив | 50 мм F1.0 |
| NETD | <=18 мК |
| Лазерный дальномер | на официальной странице указан заявленный лазерный дальномер 1200 м |

## Для каких задач можно рассматривать

Этот раздел остается предварительным и требует human review перед публикацией.

- может рассматриваться для дальнейшей оценки как выбранная модель внутри линейки Lesnik;
- подходит для технического review по матрице, объективу, NETD и официальному LRF spec;
- ориентирован на подготовку draft package без выводов о стойкости и полевой работе.

## Что нельзя утверждать без дополнительных данных

- нельзя переносить характеристики Lesnik2 650L на всю линейку Lesnik;
- нельзя использовать recoil rating без technical reviewer approval;
- нельзя трактовать LRF spec как подтвержденную полевую дальность измерения.

## Claims used

| Claim ID | Statement | Source | Evidence |
|---|---|---|---|
| `candidate-run001-lesnik-line-001` | RikaNV Lesnik описывается как продуктовая линейка RikaNV в категории тепловизионных прицелов. | `src_rikanv_ru_lesnik_line_20260701` | `ev_rikanv_ru_lesnik_line_20260701` |
| `candidate-run001-lesnik-line-002` | Официальная страница линейки Lesnik содержит ссылки на модели Lesnik2. | `src_rikanv_ru_lesnik_line_20260701` | `ev_rikanv_ru_lesnik_line_20260701` |
| `candidate-run001-lesnik2-650l-spec-001` | На официальной странице RikaNV Lesnik2 650L указана матрица 640x512. | `src_rikanv_ru_lesnik2_650l_20260701` | `ev_rikanv_ru_lesnik2_650l_specs_20260701` |
| `candidate-run001-lesnik2-650l-spec-002` | На официальной странице RikaNV Lesnik2 650L указан объектив 50 мм F1.0. | `src_rikanv_ru_lesnik2_650l_20260701` | `ev_rikanv_ru_lesnik2_650l_specs_20260701` |
| `candidate-run001-lesnik2-650l-spec-003` | На официальной странице RikaNV Lesnik2 650L указан NETD <=18 мК. | `src_rikanv_ru_lesnik2_650l_20260701` | `ev_rikanv_ru_lesnik2_650l_specs_20260701` |
| `candidate-run001-lesnik2-650l-spec-004` | На официальной странице RikaNV Lesnik2 650L указан заявленный лазерный дальномер 1200 м. | `src_rikanv_ru_lesnik2_650l_20260701` | `ev_rikanv_ru_lesnik2_650l_specs_20260701` |

## Claims intentionally not used

- candidate-run001-lesnik2-650l-spec-005: recoil rating requires technical approval

## Required reviews before publication

- human technical review;
- human doctrine compliance review;
- final human publication approval;
- Product Truth owner review if new Product Truth data is added later.

## Cleanup notes

- Separated line-level Lesnik context from model specs.
- Kept LRF wording as official spec.
- Kept recoil rating excluded.
- Preserved `draft_only` metadata and publication gate.
- Did not add claims outside approved-for-draft safe set.
- Did not add volatile commercial data or competitor comparisons.
