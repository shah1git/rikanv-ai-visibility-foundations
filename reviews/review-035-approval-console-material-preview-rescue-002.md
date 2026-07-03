# Review 035: Approval Console Material Preview Rescue 002

## 1. Why This Was Needed

The user opened the Console and did not see the actual material texts.
The interface could still look like metadata and artifact paths instead of a readable material preview.

## 2. Root Cause

Facts found during review:

- `apps/approval-console/Dockerfile` did not explicitly copy `sample-data` into the runner stage.
- The current container did contain preview files, likely through Next output tracing, but this was implicit and not a reliable deployment contract.
- `loadMaterialPreviews.ts` returned only markdown strings, so the UI could not show whether the preview was really found.
- `MaterialPreview` did not show a visible “loaded / not found” status.
- Preview placement was available, but the UI did not make the loaded material text status obvious enough.

## 3. What Was Changed

- Dockerfile now explicitly copies `sample-data` into the runner image.
- Preview loader now returns markdown plus `found`, `fileName` and `error` metadata.
- Material records now carry preview status fields.
- Material cards show whether text is loaded.
- MaterialPreview now shows “Текст материала загружен” or “Текст материала не найден”.
- Simple Markdown renderer now supports fenced code blocks in addition to headings, lists, tables and paragraphs.

## 4. Safety Checks

| Check | Result | Notes |
|---|---|---|
| preview files present in container | pass | `/app/sample-data/material-previews/*.md` exists after rebuild. |
| preview text visible in HTTPS page | pass | HTTPS HTML contains preview text phrases. |
| no arbitrary file read | pass | Loader uses a fixed material-to-file allowlist. |
| no external fetch | pass | Preview reads local bundled files only. |
| no publication button | pass | UI has no publication action. |
| `final_publication_approval` remains false | pass | Export behavior is unchanged. |
| API rejects `final_publication_approval=true` | pass | API returns HTTP 400 for forbidden payload. |
| protected artifacts unchanged | pass | Claims, Product Truth, source/evidence, human decisions and drafts were not changed. |

## 5. How to Test

1. Open `https://console.rikanv.ru`.
2. Login.
3. Click Ovod L25.
4. Confirm “Текст материала загружен”.
5. Confirm full text is visible.
6. Repeat for Lesnik2 650L, Surok L15, Hypnose2 650L.
7. Confirm no Publish button.

## 6. Files Changed

- `apps/approval-console/Dockerfile`
- `apps/approval-console/app/page.tsx`
- `apps/approval-console/components/MaterialPreview.tsx`
- `apps/approval-console/components/MaterialCard.tsx`
- `apps/approval-console/app/globals.css`
- `apps/approval-console/lib/loadMaterialPreviews.ts`
- `apps/approval-console/lib/simpleMarkdown.tsx`
- `apps/approval-console/lib/types.ts`
- `apps/approval-console/README.md`
- `reviews/index.md`

## 7. Verdict

READY_FOR_HUMAN_UI_SMOKE_TEST

## 8. Next Step

Open the live Console and confirm each material card shows “Текст материала загружен” and readable material text.
