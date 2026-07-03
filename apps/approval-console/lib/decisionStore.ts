import { databaseMode, getPool } from './db';
import type { HumanDecisionExport } from './types';

export { databaseMode };

export async function saveHumanDecisions(payload: HumanDecisionExport) {
  if (payload.final_publication_approval !== false) {
    throw new Error('MVP never accepts final_publication_approval=true');
  }

  const db = getPool();

  if (!db) {
    return { saved: false, mode: 'export_only' as const };
  }

  await db.query(`
    create table if not exists approval_console_human_decisions (
      id bigserial primary key,
      run_id text not null,
      decision_scope text not null,
      final_publication_approval boolean not null default false,
      approver_name text,
      approver_role text,
      payload jsonb not null,
      created_at timestamptz not null default now()
    )
  `);

  await db.query(`
    create table if not exists approval_console_audit_events (
      id bigserial primary key,
      run_id text not null,
      event_type text not null,
      payload jsonb not null,
      created_at timestamptz not null default now()
    )
  `);

  const client = await db.connect();

  try {
    await client.query('begin');
    const insert = await client.query(
      `insert into approval_console_human_decisions
        (run_id, decision_scope, final_publication_approval, approver_name, approver_role, payload)
       values ($1, $2, false, $3, $4, $5)
       returning id`,
      [
        payload.run_id,
        payload.decision_scope,
        payload.approver.name,
        payload.approver.role,
        JSON.stringify(payload),
      ],
    );

    await client.query(
      `insert into approval_console_audit_events (run_id, event_type, payload)
       values ($1, $2, $3)`,
      [
        payload.run_id,
        'human_decisions_saved_for_next_agent_run',
        JSON.stringify({ decision_record_id: insert.rows[0].id }),
      ],
    );
    await client.query('commit');
    return { saved: true, mode: 'postgres' as const, id: insert.rows[0].id };
  } catch (error) {
    await client.query('rollback');
    throw error;
  } finally {
    client.release();
  }
}
