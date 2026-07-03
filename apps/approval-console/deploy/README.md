# Approval Console Deployment Notes

## Target

- Domain: `console.rikanv.ru`.
- Reverse proxy: Caddy.
- App container port: `3000`.
- Selected localhost host port: `127.0.0.1:3010`.
- Database: existing Docker PostgreSQL via `DATABASE_URL`.
- MVP auth: Caddy basic auth recommended.

## Port Selection Proof

The selected host port was checked on this VPS before implementation.

Commands used:

```bash
ss -ltnH
python - <<'PY'
import socket
for port in range(3010, 3100):
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        try:
            s.bind(("127.0.0.1", port))
        except OSError:
            continue
        print(port)
        break
PY
```

Result:

```text
Selected host port: 127.0.0.1:3010
Container port: 3000
```

If `127.0.0.1:3010` becomes occupied before deployment, choose another free localhost port and update:

- `apps/approval-console/deploy/docker-compose.approval-console.snippet.yml`;
- `apps/approval-console/deploy/Caddyfile.console.rikanv.ru.example`.

## SQL Init File

Use the actual SQL file:

```text
apps/approval-console/db/001_init.sql
```

This file creates decision and audit tables only.
It does not create or modify the existing Docker PostgreSQL service.

## Docker Compose File

Use for controlled VPS test deploy:

```text
apps/approval-console/deploy/docker-compose.approval-console.yml
```

Reference snippet retained for review:

```text
apps/approval-console/deploy/docker-compose.approval-console.snippet.yml
```

Review Docker network names on the VPS before applying any DB-enabled configuration.

## Caddy Snippet

Use:

```text
apps/approval-console/deploy/Caddyfile.console.rikanv.ru.example
```

Do not overwrite the live Caddyfile without review.
Generate a real Caddy basic auth hash on the VPS.
