# Review 029: Repo Text Integrity Guardrail

## 1. Why This Was Needed

Approval Console MVP introduced frontend and deploy-config files after the repository had only a Markdown-oriented guardrail.
External raw GitHub checks showed that Markdown-only validation was not enough for frontend/config text files.

## 2. What Was Changed

- Validation tool expanded from Markdown integrity to repo text integrity.
- `AGENTS.md` updated with frontend/config formatting rules.
- Agent operating rules updated with frontend/config formatting guidance.
- Approval Console files reformatted and split into readable modules.
- Review 028 formatting remains readable and within the new validation scope.

## 3. Files Reformatted

- `apps/approval-console/README.md`
- `apps/approval-console/deploy/README.md`
- `apps/approval-console/deploy/Caddyfile.console.rikanv.ru.example`
- `apps/approval-console/package.json`
- `apps/approval-console/app/api/decisions/route.ts`
- `apps/approval-console/app/page.tsx`
- `apps/approval-console/app/layout.tsx`
- `apps/approval-console/app/globals.css`
- `apps/approval-console/lib/types.ts`
- `apps/approval-console/lib/sampleData.ts`
- `apps/approval-console/lib/exportDecisions.ts`
- `apps/approval-console/lib/db.ts`
- `apps/approval-console/lib/decisionStore.ts`
- `apps/approval-console/components/ApprovalConsole.tsx`
- `apps/approval-console/components/MaterialCard.tsx`
- `apps/approval-console/components/DecisionCard.tsx`
- `apps/approval-console/components/RiskBadge.tsx`
- `apps/approval-console/components/ApprovalGatePanel.tsx`
- `apps/approval-console/components/DecisionExportPanel.tsx`
- `apps/approval-console/Dockerfile`
- `apps/approval-console/.env.example`
- `apps/approval-console/db/001_init.sql`
- `reviews/review-028-approval-console-mvp-implementation.md`

## 4. New Validation Scope

The existing `tools/validate-markdown-integrity.py` command now checks repo text integrity for:

- Markdown;
- TypeScript;
- TSX;
- JavaScript;
- CSS;
- JSON;
- YAML;
- SQL;
- Dockerfile snippets;
- Caddyfile snippets;
- `*.example` text files.

It ignores generated or heavy directories such as `.git`, `node_modules`, `.next`, `dist`, `build` and `coverage`.
It parses lockfiles as JSON but does not apply strict line-length rules to `package-lock.json`.

## 5. Safety Checks

- No claims changed.
- Product Truth not changed.
- Source/evidence registers not changed.
- Human decisions not changed.
- Drafts not changed.
- Product taxonomy not changed.
- Final approval gate preserved.
- API still rejects `final_publication_approval=true`.

## 6. Validation Results

| Check | Result | Notes |
|---|---|---|
| repo text integrity | pass | Run before commit. |
| git diff --check | pass | Run before commit. |
| npm typecheck | pass | Approval Console app. |
| npm build | pass | Approval Console app. |
| docker build | pass | `rikanv-approval-console:format-check`. |
| JSON validation | pass | `package.json` and sample approval data. |
| remote validation | pending | To be run after push by exact commit hash. |

## 7. Verdict

READY_FOR_VPS_DEPLOYMENT_REVIEW

## 8. Next Step

Run post-push remote repo text integrity validation before any VPS deployment work.
