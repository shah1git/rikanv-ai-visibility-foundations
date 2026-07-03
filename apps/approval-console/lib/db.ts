import { Pool } from 'pg';

let pool: Pool | null = null;

export function getPool(): Pool | null {
  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    return null;
  }

  if (!pool) {
    pool = new Pool({ connectionString: databaseUrl });
  }

  return pool;
}

export function databaseMode(): 'postgres' | 'export_only' {
  return process.env.DATABASE_URL ? 'postgres' : 'export_only';
}
