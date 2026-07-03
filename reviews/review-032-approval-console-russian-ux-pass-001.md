# Review 032: Approval Console Russian UX Pass 001

## 1. Why This Was Needed

The user logged into the Console, but the interface was not clear enough for a Russian-speaking business reviewer.
The UI needed to guide the person through decisions without requiring Markdown reading.

## 2. What Was Changed

- Russian UI labels.
- “Что делать сейчас” block.
- Clearer decision cards with question, recommendation, safe default and radio options.
- Clearer material cards with next-agent readiness and publication prohibition.
- Approval level explanation.
- Export panel clarification for next-agent-run JSON.
- Publication gates warning.

## 3. What Was Not Changed

- Claims.
- Product Truth.
- Source/evidence.
- Drafts.
- Human decisions.
- Product taxonomy.
- Final publication approval behavior.
- API safety.

## 4. Safety Checks

| Check | Result | Notes |
|---|---|---|
| no Publish button | pass | UI has no publication button. |
| `final_publication_approval` remains false | pass | Export builder still writes false. |
| API rejects `final_publication_approval=true` | pass | Safety check retained. |
| materials show publication forbidden | pass | Material cards and preview show publication is forbidden. |
| export JSON is next-agent-run only | pass | Export panel states this explicitly. |
| DB save does not imply publication | pass | Save message says publication is not approved. |

## 5. How to Test

1. Open `https://console.rikanv.ru`.
2. Login with basic auth.
3. Check “Что делать сейчас”.
4. Select decision options.
5. Add comments.
6. Copy/download JSON.
7. Confirm JSON has `final_publication_approval=false`.

## 6. Files Changed

- `apps/approval-console/app/layout.tsx`
- `apps/approval-console/app/globals.css`
- `apps/approval-console/components/ApprovalConsole.tsx`
- `apps/approval-console/components/DecisionCard.tsx`
- `apps/approval-console/components/MaterialCard.tsx`
- `apps/approval-console/components/ApprovalGatePanel.tsx`
- `apps/approval-console/components/DecisionExportPanel.tsx`
- `apps/approval-console/components/RiskBadge.tsx`
- `apps/approval-console/lib/labels.ts`
- `apps/approval-console/README.md`
- `reviews/index.md`

## 7. Verdict

READY_FOR_HUMAN_UI_SMOKE_TEST

## 8. Next Step

Run a human smoke test in the live Console and confirm the reviewer can complete the decision workflow.
