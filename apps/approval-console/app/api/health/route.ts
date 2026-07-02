
import { NextResponse } from 'next/server';
import { databaseMode } from '../../../lib/decisionStore';

export const runtime = 'nodejs';

export async function GET() {
  return NextResponse.json({
    ok: true,
    service: 'rikanv-approval-console',
    database_mode: databaseMode(),
    publication_enabled: false,
  });
}
