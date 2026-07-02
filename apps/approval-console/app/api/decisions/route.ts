
import { NextResponse } from 'next/server';
import { saveHumanDecisions } from '../../../lib/decisionStore';
import type { HumanDecisionExport } from '../../../lib/types';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function isPayload(value: unknown): value is HumanDecisionExport {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const payload = value as Partial<HumanDecisionExport>;
  return (
    typeof payload.run_id === 'string' &&
    payload.decision_scope === 'next_agent_run' &&
    payload.final_publication_approval === false &&
    Array.isArray(payload.decisions) &&
    typeof payload.created_at === 'string'
  );
}

export async function POST(request: Request) {
  const payload = await request.json();

  if (!isPayload(payload)) {
    return NextResponse.json(
      { ok: false, error: 'Invalid decision payload or forbidden publication approval.' },
      { status: 400 },
    );
  }

  try {
    const result = await saveHumanDecisions(payload);
    return NextResponse.json({ ok: true, ...result });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : 'Unknown database error',
      },
      { status: 500 },
    );
  }
}
