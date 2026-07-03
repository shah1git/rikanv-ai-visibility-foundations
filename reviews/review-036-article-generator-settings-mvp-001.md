# Review 036: Article Generator Settings MVP 001

## 1. Why This Was Needed

The primary article generation flow shifted to Media Hub JSON plus the Product Article Writer prompt.

The Console needed a module that lets a human configure source URLs, inspect or edit the writer prompt and assemble a generation packet for an article writer agent.

## 2. What Was Added

- Source settings for Media Hub catalog URL, schema index URL and schema URL template.
- Editable Product Article Writer prompt in the UI.
- Generation task form for article type, product, article goal and output format.
- Article Generation Packet preview and copy/download controls.
- Data contracts for settings and generation packets.
- Sample settings JSON and sample packet JSON.
- Bundled copy of the Product Article Writer prompt inside the app.

## 3. New Primary Flow

```text
catalog URL
+ schema URL
+ writer prompt
+ product task
→ generation packet
→ article writer agent
→ Markdown article
→ approval workflow
```

## 4. What Was Not Implemented

- No LLM call.
- No publication.
- No GitHub write integration.
- No database persistence for prompt settings yet.
- No final approval change.
- No changes to the Product Article Writer prompt source file.

## 5. Safety Checks

| Check | Result | Notes |
|---|---|---|
| `final_publication_approval` remains false | pass | Generation packets hardcode false. |
| no publishing endpoint | pass | No publication API or UI action was added. |
| no claims/Product Truth changes | pass | Protected artifacts were not changed. |
| no source/evidence changes | pass | Registers were not changed. |
| no external source beyond configured URLs | pass | The Console stores URLs in packet JSON and does not fetch them in MVP. |
| prompt editable but not auto-published | pass | Edited prompt only affects exported packet JSON. |

## 6. Files Created

- `apps/approval-console/components/ArticleGeneratorPanel.tsx`
- `apps/approval-console/components/PromptSettingsEditor.tsx`
- `apps/approval-console/components/SourceSettingsPanel.tsx`
- `apps/approval-console/components/GenerationTaskPanel.tsx`
- `apps/approval-console/components/GenerationPacketPreview.tsx`
- `apps/approval-console/lib/defaultArticlePrompt.ts`
- `apps/approval-console/lib/articleGenerationDefaults.ts`
- `apps/approval-console/lib/buildGenerationPacket.ts`
- `apps/approval-console/data-contracts/article-generation-settings.schema.md`
- `apps/approval-console/data-contracts/article-generation-packet.schema.md`
- `apps/approval-console/sample-data/product-article-writer.prompt.md`
- `apps/approval-console/sample-data/article-generation-settings.sample.json`
- `apps/approval-console/sample-data/article-generation-packet.run-001.sample.json`

## 7. Files Changed

- `apps/approval-console/app/page.tsx`
- `apps/approval-console/components/ApprovalConsole.tsx`
- `apps/approval-console/app/globals.css`
- `apps/approval-console/lib/types.ts`
- `apps/approval-console/README.md`
- `apps/approval-console/design.md`
- `reviews/index.md`

## 8. Verdict

READY_FOR_ARTICLE_GENERATION_PACKET_TEST

## 9. Next Step

Open the Console, create a packet for `RikaNV Ovod L25`, copy or download JSON and pass it to the article writer agent.
