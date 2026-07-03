# Review 037: Article Generator Real Generation 001

## 1. Why This Was Needed

The Article Generator UI only exposed a generation packet JSON.

That was useful for agents and debugging, but not useful enough for a human user.
The expected workflow is to choose a product, click “Сгенерировать статью”, see the generated Markdown and then copy or download it.

## 2. What Was Added

- Server-side article generation endpoint.
- Media Hub client for catalog and schema JSON.
- Product lookup in the Media Hub catalog.
- OpenAI-compatible LLM client.
- Prompt assembly using Product Article Writer prompt, product JSON and schema guidance.
- Main UI action “Сгенерировать статью”.
- Article generation status panel.
- Markdown result preview with copy/download controls.
- Technical generation packet details moved into a collapsed block.

## 3. Source Policy

The generator uses configured Media Hub URLs only.

Allowed source host:

- `media.rikanv.ru`

The generator does not use:

- `rikanv.ru` pages;
- `rikasale.ru`;
- third-party sites;
- Claim Registry;
- Product Truth tables.

## 4. LLM Configuration

The generator uses an OpenAI-compatible chat completions API when configured through environment variables:

- `ARTICLE_LLM_PROVIDER`
- `ARTICLE_LLM_BASE_URL`
- `ARTICLE_LLM_API_KEY`
- `ARTICLE_LLM_MODEL`
- `ARTICLE_LLM_TIMEOUT_MS`

If API key or model is missing, the UI remains available and generation returns a clear not-configured message.

## 5. Safety Checks

| Check | Result | Notes |
|---|---|---|
| no publication endpoint | pass | Only article generation API was added. |
| no publish button | pass | UI action is generation, not publication. |
| `final_publication_approval` remains false | pass | API rejects true and response keeps false. |
| source host restricted | pass | API rejects non-`media.rikanv.ru` URLs. |
| API key not exposed | pass | LLM env is read server-side only. |
| protected artifacts unchanged | pass | Claims, Product Truth, source/evidence, drafts and human decisions were not changed. |

## 6. Files Created

- `apps/approval-console/app/api/articles/generate/route.ts`
- `apps/approval-console/components/ArticleGenerationResult.tsx`
- `apps/approval-console/components/ArticleGeneratorStatus.tsx`
- `apps/approval-console/lib/articleGenerator.ts`
- `apps/approval-console/lib/mediaHubClient.ts`
- `apps/approval-console/lib/llmClient.ts`
- `apps/approval-console/lib/promptAssembly.ts`

## 7. Files Changed

- `apps/approval-console/.env.example`
- `apps/approval-console/README.md`
- `apps/approval-console/design.md`
- `apps/approval-console/app/globals.css`
- `apps/approval-console/components/ArticleGeneratorPanel.tsx`
- `apps/approval-console/components/GenerationPacketPreview.tsx`
- `apps/approval-console/components/GenerationTaskPanel.tsx`
- `apps/approval-console/components/SourceSettingsPanel.tsx`
- `apps/approval-console/lib/buildGenerationPacket.ts`
- `apps/approval-console/lib/types.ts`
- `reviews/index.md`

## 8. Verdict

READY_FOR_LLM_ENV_CONFIGURATION

## 9. Next Step

Configure `ARTICLE_LLM_API_KEY` and `ARTICLE_LLM_MODEL` in the ignored local `.env`, then generate a test article from the Console.
