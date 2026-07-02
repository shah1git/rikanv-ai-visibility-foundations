# Decision Schema

## Purpose

A decision is one structured human choice shown in the Decision Queue.

## Fields

| Field | Type | Required | Description |
|---|---|---|---|
| `decision_id` | string | yes | Stable decision identifier, for example `HRD-001`. |
| `topic` | string | yes | Short topic label. |
| `priority` | string | yes | `P0 blocker`, `P1 high`, `P2 medium` or `P3 low`. |
| `material_ids` | array | yes | Related material IDs. |
| `issue` | string | yes | What must be decided. |
| `agent_recommendation` | string | yes | Agent recommendation. |
| `options` | array | yes | Human-selectable options. |
| `default_safe_action` | string | yes | Safe action if no decision is made. |
| `risk_if_approved` | string | yes | Main risk if approved. |
| `risk_if_rejected` | string | yes | Main impact if rejected. |
| `requires_final_approval` | boolean | yes | Whether publication approval is still required. |

## Rules

- Every decision must have a default safe action.
- Decision approval for next agent run must not bypass final publication approval.
