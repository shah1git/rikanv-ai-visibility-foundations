# Approval Data Schema

## Purpose

`approval-data.json` is the read model imported by the Console for one agent run.

## Fields

| Field | Type | Required | Description |
|---|---|---|---|
| `run_id` | string | yes | Stable run identifier. |
| `run_status` | string | yes | Current run status such as `decision_applied`. |
| `stage` | string | yes | Workflow stage shown in the Console. |
| `materials` | array of material | yes | Materials included in the run. |
| `decisions` | array of decision | yes | Human decisions required or already answered. |
| `risks` | array | yes | Run-level and material-level risks. |
| `required_approvals` | array | yes | Approval gates still required. |
| `next_recommended_action` | string | yes | Recommended next step. |

## Notes

- This is not an audit log.
- GitHub artifacts remain the audit trail.
- `publication_ready` on materials must remain separate from workflow status.
