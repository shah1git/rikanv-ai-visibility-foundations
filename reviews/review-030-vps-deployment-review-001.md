# Review 030: VPS Deployment Review 001

## 1. Scope

Controlled VPS test deploy for Approval Console MVP.

The deployment review checked repository sync, guardrails, build, Docker Compose,
container startup, local health, publication safety and Caddy readiness.

## 2. Inputs

- `AGENTS.md`
- `START-HERE.md`
- `docs/00-agent-operating-rules.md`
- `apps/approval-console/README.md`
- `apps/approval-console/deploy/README.md`
- `apps/approval-console/deploy/docker-compose.approval-console.yml`
- `apps/approval-console/deploy/Caddyfile.console.rikanv.ru.example`
- `apps/approval-console/db/001_init.sql`
- `reviews/review-028-approval-console-mvp-implementation.md`
- `reviews/review-029-repo-text-integrity-guardrail.md`

## 3. Environment

| Item | Value |
|---|---|
| Host | VPS `/opt/foundations` |
| Docker | available |
| PostgreSQL mode | export-only, `DATABASE_URL` not configured |
| Caddy status | installed and running, config valid, console route not applied |
| Domain | `console.rikanv.ru` |
| Selected host port | `127.0.0.1:3010` |
| App container port | `3000` |
| Container name | `approval-console` |

## 4. Validation Results

| Check | Result | Notes |
|---|---|---|
| repo sync | pass | `git pull --ff-only origin main`, already up to date at `a844e87` before deploy review. |
| repo text integrity | pass | `python tools/validate-markdown-integrity.py`. |
| git diff check | pass | `git diff --check`. |
| npm install | pass | Completed; npm audit reports 2 moderate issues, no force fix applied. |
| npm typecheck | pass | `npm run typecheck`. |
| npm build | pass | `npm run build`. |
| port 3010 check | pass | `ss` showed no listener; Python bind probe returned free. |
| env file | pass | `.env` created outside Git with `DATABASE_URL` unset. |
| DB setup | skipped | `DATABASE_URL` not configured; SQL init not applied. |
| Docker build | pass | `docker build -t rikanv-approval-console:latest .`. |
| docker compose config | pass | `docker compose -f deploy/docker-compose.approval-console.yml config`. |
| container started | pass | `approval-console` running on `127.0.0.1:3010->3000`. |
| local health check | pass | `GET /api/health` returned HTTP 200 and `database_mode=export_only`. |
| main page check | pass | `HEAD /` returned HTTP 200. |
| publish endpoint absent | pass | `GET /api/publish` returned HTTP 404. |
| final approval safety | pass | `final_publication_approval=true` POST returned HTTP 400. |
| Caddy installed | pass | `caddy version` returns v2.11.2. |
| Caddy config validation | pass | Existing `/etc/caddy/Caddyfile` validates. |
| Caddy route for console | not applied | No `console.rikanv.ru` route found in `/etc/caddy`; no Caddyfile was changed. |
| external domain check | fail until Caddy configured | HTTPS currently fails before proxying because Caddy route/certificate is not applied. |

## 5. Deployment Mode

export_only_no_db

The app is running locally behind `127.0.0.1:3010` without DB persistence.
Decision export remains available in the browser.

## 6. Security Notes

- Caddy basic auth is recommended before real internal use.
- Caddy route must include `X-Robots-Tag: noindex, nofollow, noarchive`.
- App responses currently include noindex headers.
- No public registration exists.
- No publication API exists.
- Final publication approval remains disabled in MVP.
- Secrets were not committed.
- `.env` is ignored by Git.

## 7. Files Created or Changed

- Created `apps/approval-console/deploy/docker-compose.approval-console.yml` for controlled VPS test deploy.
- Updated `apps/approval-console/deploy/README.md` to reference the controlled deploy compose file.
- Created `reviews/review-030-vps-deployment-review-001.md`.
- Updated `reviews/index.md`.

## 8. Files Not Changed

- Claims not changed.
- Product Truth not changed.
- Source/evidence registers not changed.
- Drafts not changed.
- Product taxonomy not changed.
- Human decisions not changed.
- Final publication approval behavior not changed.

## 9. Verdict

APP_RUNNING_LOCALLY_NEEDS_CADDY

## 10. Next Step

Apply the reviewed Caddy route for `console.rikanv.ru` with basic auth, then reload Caddy and verify HTTPS access.
