# Review 031: Caddy Console Route 001

## 1. Scope

Enable `console.rikanv.ru` for Approval Console MVP through Caddy with basic auth and noindex headers.

This review records only deployment routing and access-control work.
Approval Console application code, product data and publication gates were not changed.

## 2. Inputs

- `AGENTS.md`
- `START-HERE.md`
- `docs/00-agent-operating-rules.md`
- `apps/approval-console/README.md`
- `apps/approval-console/deploy/README.md`
- `apps/approval-console/deploy/Caddyfile.console.rikanv.ru.example`
- `apps/approval-console/deploy/docker-compose.approval-console.yml`
- `apps/approval-console/db/001_init.sql`
- `reviews/review-028-approval-console-mvp-implementation.md`
- `reviews/review-029-repo-text-integrity-guardrail.md`
- `reviews/review-030-vps-deployment-review-001.md`

## 3. Local .env

| Item | Status |
|---|---|
| local `.env` created | yes |
| path | `apps/approval-console/.env` |
| committed | no |
| git ignored | yes |
| basic auth user | `admin` |
| plaintext password written only to ignored local `.env` | yes |
| plaintext password committed | no |

The plaintext password is not included in this review.

## 4. Caddy Changes

| Item | Status |
|---|---|
| Caddyfile path | `/etc/caddy/Caddyfile` |
| backup path | `/etc/caddy/Caddyfile.backup.20260703-131032` |
| route added | `console.rikanv.ru` |
| reverse proxy target | `127.0.0.1:3010` |
| basic auth enabled | yes |
| basic auth user | `admin` |
| bcrypt hash configured | yes |
| plaintext password stored in Caddyfile | no |
| noindex header enabled | yes |

The full bcrypt hash is not included in this review.

## 5. Validation Results

| Check | Result | Notes |
|---|---|---|
| local health before Caddy | pass | `http://127.0.0.1:3010/api/health` returned HTTP 200. |
| local main page before Caddy | pass | `http://127.0.0.1:3010/` returned HTTP 200. |
| publish endpoint absent locally | pass | `/api/publish` returned HTTP 404. |
| `final_publication_approval=true` rejected locally | pass | Local POST returned HTTP 400. |
| local `.env` exists and is ignored | pass | `git check-ignore` matches app `.gitignore`. |
| Caddyfile backup created | pass | Backup path recorded above. |
| plaintext password not present in Caddyfile | pass | Checked after route installation. |
| Caddy validate | pass | `/etc/caddy/Caddyfile` validated before reload. |
| Caddy reload | pass | `systemctl reload caddy` completed successfully. |
| Caddy active | pass | `systemctl is-active caddy` returned active. |
| HTTPS without auth returns 401 | pass | `https://console.rikanv.ru` returned HTTP 401. |
| HTTPS with auth returns 200/30x | pass | Authenticated HEAD returned HTTP 200. |
| health through `console.rikanv.ru` | pass | Authenticated health returned JSON with `database_mode=export_only`. |
| noindex header | pass | `X-Robots-Tag: noindex, nofollow, noarchive` present. |
| publish endpoint absent through HTTPS | pass | Authenticated `/api/publish` returned HTTP 404. |
| `final_publication_approval=true` rejected through HTTPS | pass | Authenticated POST returned HTTP 400. |
| secrets not committed | pass | `.env` is ignored and not staged. |

## 6. Security Notes

- Basic auth enabled.
- Noindex header enabled.
- No public registration exists.
- No publication endpoint exists.
- Final approval gate preserved.
- Plaintext password not stored in repo.
- Caddyfile contains bcrypt hash only.
- Local `.env` should be rotated after first login.
- Replace the default password with a stronger password after first successful access.

## 7. Files Created or Changed

Repo files:

- `reviews/review-031-caddy-console-route-001.md`
- `reviews/index.md`

System/local files:

- `apps/approval-console/.env` created or updated locally.
- `/etc/caddy/Caddyfile` changed.
- Caddyfile backup created at `/etc/caddy/Caddyfile.backup.20260703-131032`.

## 8. Files Not Changed

- Claims not changed.
- Product Truth not changed.
- Source/evidence not changed.
- Drafts not changed.
- Human decisions not changed.
- Product taxonomy not changed.
- Approval Console app code not changed.

## 9. Verdict

CONSOLE_RIKANV_RU_LIVE_WITH_BASIC_AUTH

## 10. Next Step

Log in once through `https://console.rikanv.ru`, then rotate the default password manually and update the local `.env` and Caddy bcrypt hash.
