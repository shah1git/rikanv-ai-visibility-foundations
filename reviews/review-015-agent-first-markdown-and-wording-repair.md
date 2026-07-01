# Review 015: Agent-First Markdown and Wording Repair

## 1. Why This Was Needed

Agent-first pivot был внесен по смыслу, но новые и измененные файлы требовали
дополнительной проверки Markdown rendering.

Также README содержал wording, который мог выглядеть как нерешенный выбор
Lesnik/Hypnose2, хотя решения уже приняты:

- Lesnik2 650L остается выбранной моделью Lesnik для пилота.
- Hypnose2 650L остается выбранной моделью Hypnose2 для пилота.
- Hypnose2 остается `product_line`.

## 2. Files Fixed

- `README.md`
- `START-HERE.md`
- `prompts/site-import-agent.prompt.md`
- `reviews/index.md`
- `reviews/review-014-agent-first-consistency-patch.md`

## 3. Formatting Checks

| Check | Result | Notes |
|:---|:---|:---|
| git diff --check | pass | No whitespace errors before commit. |
| no lines >300 chars except URLs | pass | Checked allowed files. |
| no glued headings | pass | Checked key agent-first files. |
| no glued tables | pass | Checked START-HERE and review tables. |
| START-HERE tables readable | pass | Owners and First 7 Days remain Markdown tables. |
| review-014 table readable | pass | Contradictions Fixed table remains valid Markdown. |

## 4. Wording Fixes

| File | Old issue | New wording |
|:---|:---|:---|
| `README.md` | Lesnik wording looked like model choice was still open | Подтверждение актуальности выбранной модели Lesnik2 650L для пилота |
| `README.md` | Hypnose2 wording looked like model choice was still open | Подтверждение актуальности выбранной модели Hypnose2 650L для пилота |
| `README.md` | Public use of official data was implicit | Подтверждение публичной пригодности данных с `rikanv.ru` |

## 5. What Was Not Changed

- 30 claims.
- Product taxonomy.
- Selected products.
- Source/evidence IDs.
- Human approval.
- RikaNV Doctrine.
- Anti-PBN policy.

## 6. Verdict

READY FOR AGENT SITE IMPORT

## 7. Next Step

Run Site Import Agent on the approved `rikanv.ru` base scope.
