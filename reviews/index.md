# Reviews Index

Этот файл фиксирует историю операционных ревью и планов проекта.

## Current Review Files

| File | Type | Purpose | Status |
|:---|:---|:---|:---|
| [action-plan-001.md](action-plan-001.md) | action plan | Первый 30-дневный план пилота | historical |
| [review-001-spine.md](review-001-spine.md) | review | Spine Review | completed |
| [review-005-product-priority-and-line-correction.md](review-005-product-priority-and-line-correction.md) | review | Product priority and line correction | completed |
| [review-006-repo-hygiene-and-provenance.md](review-006-repo-hygiene-and-provenance.md) | review | Repo hygiene and provenance | completed |
| [review-007-human-product-decisions-applied.md](review-007-human-product-decisions-applied.md) | review | Human product decisions applied | completed |
| [review-008-markdown-render-fix.md](review-008-markdown-render-fix.md) | review | Markdown Render Fix | superseded |
| [review-009-real-markdown-linebreak-fix.md](review-009-real-markdown-linebreak-fix.md) | review | Real Markdown Linebreak Fix | completed |
| [review-010-remote-verified-markdown-repair.md](review-010-remote-verified-markdown-repair.md) | review | Remote-Verified Markdown Repair | completed |
| [review-011-claim-review-prep.md](review-011-claim-review-prep.md) | review | Claim Review Preparation | created |
| [review-012-claim-review-markdown-fix.md](review-012-claim-review-markdown-fix.md) | review | Claim Review Markdown Fix | completed |
| [review-013-agent-first-pivot.md](review-013-agent-first-pivot.md) | review | Agent-First Pivot | completed |
| [review-014-agent-first-consistency-patch.md](review-014-agent-first-consistency-patch.md) | review | Agent-First Consistency Patch | completed |
| [review-015-agent-first-markdown-and-wording-repair.md](review-015-agent-first-markdown-and-wording-repair.md) | review | Agent-First Markdown and Wording Repair | completed |
| [review-016-heredoc-markdown-repair.md](review-016-heredoc-markdown-repair.md) | review | Heredoc Markdown Repair | completed |
| [review-018-systemic-markdown-guardrails.md](review-018-systemic-markdown-guardrails.md) | review | Systemic Markdown Guardrails | completed |

## Numbering Note

`review-002`, `review-003` и `review-004` отсутствуют в текущем репозитории.
Они не считаются потерянными обязательными документами.

## Review 014 Entry

- file: [review-014-agent-first-consistency-patch.md](review-014-agent-first-consistency-patch.md)
- Theme: Agent-First Consistency Patch
- Status: completed
- Purpose: remove remaining manual-first contradictions from entry-point and operating docs.

## Review 015 Entry

- file: [review-015-agent-first-markdown-and-wording-repair.md](review-015-agent-first-markdown-and-wording-repair.md)
- Theme: Agent-First Markdown and Wording Repair
- Status: completed
- Purpose: make agent-first pivot files GitHub-readable and fix residual wording before Site Import Agent.

## Review 016 Entry

- file: [review-016-heredoc-markdown-repair.md](review-016-heredoc-markdown-repair.md)
- Theme: Heredoc Markdown Repair
- Status: completed
- Purpose: rewrite key agent-first files with explicit newline characters after external raw validation reported compression.

## Review 018 Entry

- file: [review-018-systemic-markdown-guardrails.md](review-018-systemic-markdown-guardrails.md)
- Theme: Systemic Markdown Guardrails
- Status: completed
- Purpose: add repo-level agent rules and Markdown integrity validation so compressed Markdown regressions do not repeat.

- review-019-site-import-run-001.md
  Theme: Site Import Run 001
  Status: created
  Purpose: first agent import from rikanv.ru base scope.

- review-020-agent-claim-review-run-001.md
  Theme: Agent Claim Review Run 001
  Status: created
  Purpose: review candidate claims from Site Import Run 001 and split draft-ready claims from human exceptions.

- review-021-safe-exception-resolution-run-001.md
  Theme: Safe Exception Resolution Run 001
  Status: created
  Purpose: resolve human exceptions with safe defaults and prepare draft-safe claim set.

- review-022-content-draft-run-001.md
  Theme: Content Draft Run 001
  Status: created
  Purpose: create four draft_only materials from approved-for-draft safe claims.

- review-023-technical-doctrine-precheck-run-001.md
  Theme: Technical and Doctrine Pre-Check Run 001
  Status: created
  Purpose: check draft_only materials before cleanup and publication package.

- review-024-content-draft-cleanup-run-001.md
  Theme: Content Draft Cleanup Run 001
  Status: created
  Purpose: create cleaned draft_only versions after technical and doctrine pre-check.

- review-025-human-review-package-run-001.md
  Theme: Human Review Package Run 001
  Status: created
  Purpose: convert cleaned draft review into structured human decisions.

- review-026-human-decisions-apply-run-001.md
  Theme: Human Decisions Apply Run 001
  Status: created
  Purpose: apply human HRD decisions to cleaned drafts and prepare package candidates without publication approval.

- review-027-approval-console-mvp-design.md
  Theme: Approval Console MVP Design
  Status: created
  Purpose: define human-facing UI and data contracts for approval workflow.

- review-028-approval-console-mvp-implementation.md
  Theme: Approval Console MVP Implementation
  Status: created
  Purpose: implement deployable Next.js approval console MVP for VPS/Docker/Caddy.
| [review-029-repo-text-integrity-guardrail.md](review-029-repo-text-integrity-guardrail.md) | Repo Text Integrity Guardrail | created | Expand formatting guardrails to frontend, config and deployment files after Approval Console MVP. |
| [review-030-vps-deployment-review-001.md](review-030-vps-deployment-review-001.md) | VPS Deployment Review 001 | created | Deploy/test Approval Console MVP on VPS without removing publication approval gates. |
| [review-031-caddy-console-route-001.md](review-031-caddy-console-route-001.md) | Caddy Console Route 001 | created | Enable console.rikanv.ru route with basic auth and noindex headers. |
| [review-032-approval-console-russian-ux-pass-001.md](review-032-approval-console-russian-ux-pass-001.md) | Approval Console Russian UX Pass 001 | created | Make console understandable for Russian-speaking human approval workflow. |
| [review-033-approval-console-material-preview-001.md](review-033-approval-console-material-preview-001.md) | Approval Console Material Preview 001 | created | Show actual draft material text in the console instead of only preview_path metadata. |
