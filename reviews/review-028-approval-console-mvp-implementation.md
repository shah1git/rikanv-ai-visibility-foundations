# Review 028: Approval Console MVP Implementation

## 1. Scope

Implemented the first deployable RikaNV AI Console MVP inside `apps/approval-console`.

The implementation is a frontend and human control plane only.
It does not publish, does not write to GitHub and does not remove approval gates.

## 2. What Was Created

- Next.js + TypeScript app inside `apps/approval-console`.
- Decision queue for Run 001.
- Material cards and material preview panel.
- Final approval gate with disabled publish control.
- Human decisions JSON export.
- Optional PostgreSQL decision persistence through `DATABASE_URL`.
- Dockerfile for app container port `3000`.
- Docker Compose and Caddy snippets for `console.rikanv.ru`.
- PostgreSQL migration SQL at `apps/approval-console/db/001_init.sql` for decision and audit tables.

## 3. Deployment Decisions

| Item | Decision |
|---|---|
| Domain | `console.rikanv.ru` |
| Reverse proxy | Caddy |
| App container port | `3000` |
| Selected host port | `127.0.0.1:3010` |
| Port check method | `ss -ltnH` plus Python bind probe over `127.0.0.1:3010-3099` |
| If port becomes occupied | update Docker Compose and Caddy snippets before deployment |
| Database | existing Docker PostgreSQL through `DATABASE_URL` |
| MVP auth | Caddy basic auth recommended |
| Search indexing | disabled through noindex headers and metadata |

## 4. Persistence Model

- If `DATABASE_URL` is set, decisions are saved to PostgreSQL.
- If `DATABASE_URL` is absent, the app remains usable in export-only mode.
- `final_publication_approval=true` is rejected by the API.
- Database tables include a check constraint keeping final publication approval false.

## 5. What Was Not Changed

- Existing claims were not changed.
- Product Truth was not changed.
- Source/evidence registers were not changed.
- Drafts were not changed.
- Human decision form was not changed.
- Product taxonomy was not changed.
- No root `package.json` was created.

## 6. Safety Constraints

- No production publishing.
- No GitHub write integration.
- No public registration.
- No publication API.
- No external API calls.
- No secrets committed.
- No live Caddyfile overwritten.
- No existing Docker PostgreSQL modified.

## 7. Validation

- Markdown validation must pass.
- `git diff --check` must pass.
- Sample JSON must remain valid.
- TypeScript typecheck must pass.
- Next.js build should pass before deployment.

## 8. Risks

- Caddy basic auth must be configured outside this repository.
- `DATABASE_URL` must be supplied securely on the VPS.
- Docker networking must match the existing PostgreSQL container/network.
- The selected host port should be rechecked before deployment if the VPS changes.
- Final approval must remain a human gate.

## 9. Verdict

READY_FOR_VPS_DEPLOYMENT_REVIEW

## 10. Next Step

Review deployment snippets, set secure environment variables on the VPS and run the container behind Caddy.
