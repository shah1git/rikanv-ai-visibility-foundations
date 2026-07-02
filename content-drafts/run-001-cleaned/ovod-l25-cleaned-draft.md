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

# RikaNV Ovod L25: черновик для оценки тепловизионного прицела

## Draft warning

Это cleaned draft_only материал после technical and doctrine pre-check.
Он не является publication-ready и не должен публиковаться без review.

Перед публикацией обязательны:

- human technical review;
- human doctrine compliance review;
- final human publication approval.

## Краткий статус

Ovod L25 рассматривается как конкретная модель тепловизионного прицела RikaNV.

Черновик использует только approved-for-draft safe claims.
Коммерческие данные, сравнения и unresolved human exceptions не используются.

## Что известно по safe claims

| Параметр | Нейтральная формулировка |
|---|---|
| Категория | конкретная модель тепловизионного прицела |
| Матрица | 256x192 |
| Объектив | 25 мм F0.9 |
| Дальность обнаружения | на официальной странице указана заявленная дальность обнаружения 1300 м |

## Для каких задач можно рассматривать

Этот раздел остается предварительным и требует human review перед публикацией.

- может рассматриваться для дальнейшей оценки как конкретная модель линейки Ovod;
- подходит для технического сравнения внутри Product Truth после проверки дополнительных данных;
- ориентирован на пользователей, которым нужен source-backed обзор без коммерческих данных.

## Что нельзя утверждать без дополнительных данных

- нельзя утверждать, что заявленная дальность обнаружения является полевым результатом;
- нельзя использовать no-LRF limitation как публичный claim без human approval;
- нельзя делать вывод о пригодности для конкретного сценария без подтвержденного evidence.

## Claims used

| Claim ID | Statement | Source | Evidence |
|---|---|---|---|
| `candidate-run001-ovod-l25-spec-001` | RikaNV Ovod L25 указан как конкретная модель тепловизионного прицела RikaNV. | `src_rikanv_ru_ovod_l25_20260701` | `ev_rikanv_ru_ovod_l25_specs_20260701` |
| `candidate-run001-ovod-l25-spec-002` | На официальной странице RikaNV Ovod L25 указана матрица 256x192. | `src_rikanv_ru_ovod_l25_20260701` | `ev_rikanv_ru_ovod_l25_specs_20260701` |
| `candidate-run001-ovod-l25-spec-003` | На официальной странице RikaNV Ovod L25 указан объектив 25 мм F0.9. | `src_rikanv_ru_ovod_l25_20260701` | `ev_rikanv_ru_ovod_l25_specs_20260701` |
| `candidate-run001-ovod-l25-spec-004` | На официальной странице RikaNV Ovod L25 указана заявленная дальность обнаружения 1300 м. | `src_rikanv_ru_ovod_l25_20260701` | `ev_rikanv_ru_ovod_l25_specs_20260701` |

## Claims intentionally not used

- candidate-run001-ovod-l25-limit-001: public no-LRF wording requires human approval

## Required reviews before publication

- human technical review;
- human doctrine compliance review;
- final human publication approval;
- Product Truth owner review if new Product Truth data is added later.

## Cleanup notes

- Neutralized scenario-fit wording.
- Kept official detection wording.
- Kept no-LRF limitation outside public claims.
- Preserved `draft_only` metadata and publication gate.
- Did not add claims outside approved-for-draft safe set.
- Did not add volatile commercial data or competitor comparisons.
