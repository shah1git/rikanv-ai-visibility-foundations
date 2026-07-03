# Review 033: Approval Console Material Preview 001

## 1. Why This Was Needed

The Console showed only metadata and `preview_path` for the selected material.
The human reviewer could not read the actual agent-prepared text without opening Markdown artifacts outside the UI.

## 2. What Was Implemented

- Bundled material preview Markdown files.
- Server-side preview loader with a fixed material allowlist.
- `MaterialPreview` component.
- Simple Markdown renderer for headings, lists, tables and paragraphs.
- UI replacement for the old metadata-only preview block.

## 3. What Was Not Changed

- Claims.
- Product Truth.
- Source/evidence.
- Human decisions.
- Product taxonomy.
- Publication approval behavior.
- Caddy route.
- Database mode.

## 4. Safety Checks

| Check | Result | Notes |
|---|---|---|
| no publication button | pass | UI still has no publish control. |
| `final_publication_approval` remains false | pass | Export builder and sample data remain false. |
| preview materials marked draft_only | pass | Bundled preview files preserve draft metadata. |
| preview materials not publication-ready | pass | Bundled preview files preserve `publication_ready: false`. |
| no external fetch | pass | Preview loader reads local bundled files only. |
| no arbitrary file read | pass | Preview loader uses a fixed material-to-file allowlist. |
| no source/evidence changes | pass | Registers and source/evidence artifacts were not changed. |

## 5. How to Test

1. Open `https://console.rikanv.ru`.
2. Login.
3. Click each material card.
4. Confirm text appears in “Предпросмотр материала”.
5. Confirm warning says publication is forbidden.
6. Confirm no Publish button exists.

## 6. Files Created

- `apps/approval-console/components/MaterialPreview.tsx`
- `apps/approval-console/lib/loadMaterialPreviews.ts`
- `apps/approval-console/lib/simpleMarkdown.tsx`
- `apps/approval-console/sample-data/material-previews/ovod-l25.md`
- `apps/approval-console/sample-data/material-previews/lesnik2-650l.md`
- `apps/approval-console/sample-data/material-previews/surok-l15.md`
- `apps/approval-console/sample-data/material-previews/hypnose2-650l.md`

## 7. Files Changed

- `apps/approval-console/app/page.tsx`
- `apps/approval-console/components/ApprovalConsole.tsx`
- `apps/approval-console/components/MaterialCard.tsx`
- `apps/approval-console/app/globals.css`
- `apps/approval-console/lib/types.ts`
- `apps/approval-console/README.md`
- `reviews/index.md`

## 8. Verdict

READY_FOR_HUMAN_UI_SMOKE_TEST

## 9. Next Step

Run a human smoke test in the live Console and confirm each material card opens readable draft text.
