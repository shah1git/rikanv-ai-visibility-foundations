# Review 034: Approval Console UX Rescue 001

## 1. Why This Was Needed

The user opened the Console and did not understand what to do.
The interface showed too much internal agent workflow and required the user to interpret technical artifacts.

## 2. UX Problems Found

- Too much technical language.
- Unclear questions.
- Unclear answer options.
- JSON too prominent.
- No obvious primary action.
- Material preview existed but did not explain the workflow.
- User could not tell what to do next.

## 3. What Was Changed

- Guided workflow.
- “Что делать сейчас”.
- Safe recommendations button.
- Humanized decision cards.
- Technical details collapsed.
- Clearer material cards.
- Clearer preview explanation.
- Simpler export panel.

## 4. What Was Not Changed

- Claims.
- Product Truth.
- Source/evidence.
- Drafts.
- Sample JSON.
- Human decisions.
- Product taxonomy.
- Final publication approval behavior.
- Caddy route.
- Database mode.

## 5. Safety Checks

| Check | Result | Notes |
|---|---|---|
| no publish button | pass | UI has no publication button. |
| `final_publication_approval` remains false | pass | Export builder still hardcodes false. |
| API rejects `final_publication_approval=true` | pass | API safety behavior is unchanged. |
| safe recommendations do not approve publication | pass | Copy states this only allows the next step. |
| JSON export is next-agent-run only | pass | Export panel states the file is for the next step. |
| protected artifacts unchanged | pass | Claims, Product Truth, source/evidence and drafts were not changed. |

## 6. How to Test

1. Open `https://console.rikanv.ru`.
2. Login.
3. Confirm “Что делать сейчас” explains the flow.
4. Click “Принять безопасные рекомендации”.
5. Confirm all decisions become answered.
6. Open material preview.
7. Confirm preview explains that user should not edit manually.
8. Export JSON.
9. Confirm JSON has `final_publication_approval=false`.

## 7. Files Changed

- `apps/approval-console/components/ApprovalConsole.tsx`
- `apps/approval-console/components/GuidedWorkflow.tsx`
- `apps/approval-console/components/HumanQuestionCard.tsx`
- `apps/approval-console/components/RecommendationSummary.tsx`
- `apps/approval-console/components/ExpertDetails.tsx`
- `apps/approval-console/components/MaterialCard.tsx`
- `apps/approval-console/components/MaterialPreview.tsx`
- `apps/approval-console/components/DecisionExportPanel.tsx`
- `apps/approval-console/components/ApprovalGatePanel.tsx`
- `apps/approval-console/app/globals.css`
- `apps/approval-console/lib/humanizeDecisions.ts`
- `apps/approval-console/README.md`
- `reviews/index.md`

## 8. Verdict

READY_FOR_SECOND_HUMAN_UI_SMOKE_TEST

## 9. Next Step

Run a second human smoke test and check whether the reviewer can complete the safe recommendation flow without reading technical details.
