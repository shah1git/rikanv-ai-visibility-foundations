# Human Decisions Schema

## Purpose

`human-decisions.json` is exported by the Console and then consumed by the next agent run.

## Fields

| Field | Type | Required | Description |
|---|---|---|---|
| `run_id` | string | yes | Run being answered. |
| `decision_scope` | string | yes | `next_agent_run` or `publication`. |
| `final_publication_approval` | boolean | yes | True only when final publication is explicitly approved. |
| `approver` | object | yes | Human approver identity and role. |
| `decisions` | array | yes | Decision answers keyed by decision ID. |
| `comments` | string | no | General reviewer notes. |
| `created_at` | string | yes | ISO timestamp of the export. |

## Rules

- `approve_for_next_agent_run` must not be treated as publication approval.
- `final_publication_approval: true` requires all final gates to be complete.
