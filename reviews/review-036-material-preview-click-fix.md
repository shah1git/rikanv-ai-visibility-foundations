# Review 036: Material Preview Click Fix

## 1. Why This Was Needed

The live Console showed material cards and preview metadata, but clicking “Посмотреть текст” did not visibly move the user to the material text.

The texts existed in the app and in the Docker container.
The issue was interaction and layout: selecting a material only changed state, while the preview block was lower on the page after the decision queue.

## 2. What Was Changed

- Material card selection now scrolls to the preview block.
- The material preview block now appears immediately after material cards.
- The preview section has scroll margin for the sticky header.
- The preview section border is slightly emphasized.

## 3. What Was Not Changed

- Claims were not changed.
- Product Truth was not changed.
- Source and evidence registers were not changed.
- Draft artifacts were not changed.
- Human decisions were not changed.
- Product taxonomy was not changed.
- Caddy configuration was not changed.
- Database mode was not changed.
- Publication behavior was not changed.

## 4. Safety Checks

| Check | Result | Notes |
|---|---|---|
| no publication button | pass | No publish action was added. |
| final publication approval remains false | pass | Export and API behavior are unchanged. |
| preview text remains bundled | pass | Material text still loads from bundled preview files. |
| protected artifacts unchanged | pass | Claims, Product Truth, source/evidence, drafts and human decisions were not changed. |

## 5. How to Test

1. Open `https://console.rikanv.ru`.
2. Login.
3. Click “Посмотреть текст” on a material card.
4. Confirm the page scrolls to “Текст выбранного материала”.
5. Confirm “Текст материала загружен” is visible.
6. Repeat for all four materials.

## 6. Files Changed

- `apps/approval-console/components/ApprovalConsole.tsx`
- `apps/approval-console/app/globals.css`
- `reviews/index.md`

## 7. Verdict

READY_FOR_HUMAN_UI_SMOKE_TEST

## 8. Next Step

Retest “Посмотреть текст” in the live Console.
