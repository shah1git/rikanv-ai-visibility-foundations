# RikaNV AI Console Design

## 1. Product Goal

Create a human-facing control plane for RikaNV AI Visibility workflows.

The Console should let RikaNV reviewers handle decisions, risks and publication gates without navigating raw GitHub Markdown.

## 2. User Roles

- Owner: controls scope, escalation and final publication direction.
- Technical Reviewer: checks technical facts, limitations and product consistency.
- Doctrine Reviewer: checks doctrine compliance and publication safety.
- Content Owner: checks editorial readiness and channel fit.
- AI Visibility Analyst: checks baseline, retest and answer gaps.

## 3. Core UX Principle

Decision queue, not document browsing.

The user should see decisions, risks and gates first.
Markdown artifacts remain available as references, but they should not be the primary interface.

## 4. Main Screens

- Runs: list agent runs and their status.
- Run Dashboard: summarize one run, materials, decisions, risks and next action.
- Decision Queue: present decisions that need human input.
- Material Preview: show draft preview with claims, sources and risks.
- Final Approval: hard gate before publication.
- AI Visibility later: baseline and retest views after publication workflow matures.

## 5. Status Model

Material statuses:

- draft;
- cleaned_draft;
- decision_applied;
- pre_publication_package;
- ready_for_human_approval;
- approved_for_publication;
- published.

Separate flag:

- `publication_ready: boolean`.

A material can move through workflow statuses while `publication_ready` remains `false`.

## 6. Approval Levels

### approve_for_next_agent_run

Allows agents to continue processing, cleanup or package preparation.
It does not approve publication.

### approve_for_publication

Final human approval to publish a material through a selected channel.
It requires technical approval, doctrine approval and final owner approval.

## 7. Data Flow

```text
GitHub artifacts
→ approval-data.json
→ Console
→ human-decisions.json
→ Agent applies decisions
→ new artifacts
```

GitHub remains the audit trail.
The Console is a decision interface over exported data.

## 8. MVP Scope

- No login.
- No database.
- No GitHub write integration.
- Local/static `approval-data.json` in.
- Export `human-decisions.json` out.
- Human-readable material previews.
- Decision queue for HRD-style decisions.
- Final approval screen with disabled publish action until gates pass.

## 9. Later Scope

- GitHub App integration;
- PostgreSQL;
- user roles;
- audit timeline;
- AI Visibility dashboard;
- publication channel integration.
