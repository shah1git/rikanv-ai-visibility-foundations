# Review 027: Approval Console MVP Design

## 1. Why This Was Needed

The project has reached a point where humans should not validate work by reading GitHub Markdown directly.

Agent outputs, risks, decisions and approval gates need a human-facing control plane.

## 2. What Was Created

- `apps/approval-console/README.md`.
- `apps/approval-console/design.md`.
- data contract schema Markdown files.
- wireframe Markdown files.
- `apps/approval-console/sample-data/approval-data.run-001.sample.json`.

## 3. Console Role in the Project

RikaNV AI Console is the frontend and human control plane for the agent-first workflow.

It presents:

- decision queue;
- material preview;
- risk dashboard;
- approval gates;
- import/export data for human decisions.

## 4. What GitHub Remains Responsible For

- artifact store;
- audit trail;
- source of truth for agent outputs;
- review history;
- raw Markdown and JSON artifacts.

## 5. MVP Scope

- No login.
- No database.
- No GitHub write integration.
- Static/local `approval-data.json` input.
- Exported `human-decisions.json` output.
- Decision queue and final approval gate screens.

## 6. Not in MVP

- production runtime;
- framework selection;
- package manager setup;
- CMS behavior;
- chat interface;
- agent runtime;
- automatic publishing.

## 7. Risks

- Console could be mistaken for source of truth unless GitHub artifact role remains explicit.
- `approve_for_next_agent_run` could be confused with publication approval.
- Sample JSON can drift from artifacts unless regenerated from real runs later.
- A future implementation could accidentally bypass final approval if gates are weak.

## 8. Verdict

READY_FOR_APPROVAL_CONSOLE_MVP_IMPLEMENTATION

## 9. Next Step

Choose implementation approach for a static/local Approval Console MVP without changing approval gates.
