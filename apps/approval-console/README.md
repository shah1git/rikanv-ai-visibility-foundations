# RikaNV AI Console

## Purpose

RikaNV AI Console is the frontend and human control plane for the agent-first system.

It gives humans a structured place to approve decisions, review risks and control publication gates.

GitHub remains the artifact store, audit trail and source of truth for agent outputs.
The Console reads prepared artifacts and turns them into a decision workflow.

## What It Is

- decision queue;
- material preview;
- risk dashboard;
- approval interface;
- export/import layer for human decisions.

## What It Is Not

- not GitHub UI;
- not a CMS;
- not a chat;
- not an agent runtime;
- not a publishing system;
- not a replacement for source/evidence artifacts.

## Core Principle

Humans should not read all Markdown files.
Humans should make structured decisions.

The Console should present only:

- what changed;
- what is risky;
- what decision is required;
- what happens if a decision is approved or rejected;
- which publication gates remain closed.

## MVP Implementation

This is a deployable MVP for `console.rikanv.ru`.

- Locally it runs as a Next.js app.
- In Docker it runs as a service behind Caddy.
- It reads sample approval data from `sample-data/approval-data.run-001.sample.json`.
- It shows Run 001, four materials, decision queue, risks and approval gates.
- It lets humans choose decisions for the next agent run.
- It saves decisions in PostgreSQL when `DATABASE_URL` is set.
- If `DATABASE_URL` is absent, it works in export-only mode.
- It exports `human-decisions.json` from the browser.
- It does not write to GitHub.
- It does not publish.
- It never sets `final_publication_approval=true` in this MVP.
- It does not remove approval gates.

## Deployment Target

- Domain: `console.rikanv.ru`.
- Reverse proxy: Caddy.
- App container port: `3000`.
- Host binding: choose a free localhost port automatically.
- Suggested port range: `127.0.0.1:3010-3099`.
- Codex must check which ports are already in use before choosing.
- Database: existing Docker PostgreSQL.
- Auth for MVP: Caddy basic auth recommended.
- Search indexing: disabled / noindex.

## Selected Localhost Port

Checked on this VPS with `ss -ltnH` and a Python bind probe across `127.0.0.1:3010-3099`.

```text
Selected host port: 127.0.0.1:3010
Container port: 3000
```

If this port becomes occupied before deployment, choose a new free port and update both deployment snippets.


## Local Development

```bash
cd apps/approval-console
npm install
npm run dev
```

The local app binds to `127.0.0.1` by default.

## Docker Build

```bash
cd apps/approval-console
docker build -t rikanv-approval-console:001 .
docker run --rm --env-file .env -p 127.0.0.1:3010:3000 rikanv-approval-console:001
```

Do not put real secrets in `.env` in the repository.
Use `.env.example` as a template only.

## Deployment Snippets

- Docker Compose snippet: `deploy/docker-compose.approval-console.snippet.yml`.
- Caddy snippet: `deploy/Caddyfile.console.rikanv.ru.example`.
- PostgreSQL migration: `apps/approval-console/db/001_init.sql`.

The snippets are not intended to overwrite the live VPS configuration automatically.


## Russian UX Pass

The visible interface is translated for Russian-speaking business users.

- The user works with a decision queue, not raw Markdown files.
- The Console explains what to do now before showing the cards.
- The Console separates next-agent approval from publication approval.
- There is no publication action in the MVP.
- Final publication approval is unavailable in the MVP.

Main workflow:

1. Open the Console.
2. Choose decision options.
3. Add comments if needed.
4. Save or download JSON.
5. Pass JSON to the agent for the next step.

## Publication Boundary

The Console has no publication API and no real publish button.

The visible publish control is disabled until all gates pass, and this MVP still keeps final publication approval closed.
