
-- Approval Console MVP tables.
-- Run manually against the existing PostgreSQL database selected for the Console.
-- Do not store production secrets in this repository.

create table if not exists approval_console_human_decisions (
  id bigserial primary key,
  run_id text not null,
  decision_scope text not null,
  final_publication_approval boolean not null default false,
  approver_name text,
  approver_role text,
  payload jsonb not null,
  created_at timestamptz not null default now(),
  constraint approval_console_no_publication_approval
    check (final_publication_approval = false)
);

create table if not exists approval_console_audit_events (
  id bigserial primary key,
  run_id text not null,
  event_type text not null,
  payload jsonb not null,
  created_at timestamptz not null default now()
);

create index if not exists approval_console_human_decisions_run_id_idx
  on approval_console_human_decisions (run_id);

create index if not exists approval_console_audit_events_run_id_idx
  on approval_console_audit_events (run_id);
