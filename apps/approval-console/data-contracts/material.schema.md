# Material Schema

## Purpose

A material is one draft or package candidate shown in the Console.

## Fields

| Field | Type | Required | Description |
|---|---|---|---|
| `material_id` | string | yes | Stable material identifier. |
| `title` | string | yes | Human-facing title. |
| `product` | string | yes | Product or line represented by the material. |
| `status` | string | yes | Workflow status. |
| `publication_ready` | boolean | yes | Final publication readiness flag. |
| `risk_level` | string | yes | `low`, `medium`, `high` or `blocker`. |
| `claims_used` | array | yes | Claim IDs used in the material. |
| `sources_used` | array | yes | Source/evidence IDs used in the material. |
| `open_decisions` | array | yes | Decision IDs still affecting this material. |
| `blockers` | array | yes | Open publication blockers. |
| `preview_path` | string | yes | Path to the Markdown preview artifact. |

## Rules

- `status` does not imply publication readiness.
- `publication_ready` must be false unless final approval is complete.
