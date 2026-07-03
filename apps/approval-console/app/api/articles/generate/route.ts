import { NextResponse } from 'next/server';
import { generateArticleFromPacket } from '../../../../lib/articleGenerator';
import { getLlmStatus } from '../../../../lib/llmClient';
import type { ArticleGenerationPacket } from '../../../../lib/types';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function isPacket(value: unknown): value is ArticleGenerationPacket {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const packet = value as Partial<ArticleGenerationPacket>;

  return (
    typeof packet.packet_id === 'string' &&
    typeof packet.catalog_url === 'string' &&
    typeof packet.schema_index_url === 'string' &&
    typeof packet.schema_url_template === 'string' &&
    typeof packet.writer_prompt === 'string' &&
    packet.final_publication_approval === false &&
    Boolean(packet.task) &&
    typeof packet.task?.product_name === 'string' &&
    packet.task.output_format === 'markdown'
  );
}

function statusForError(errorCode: string) {
  if (errorCode === 'LLM_NOT_CONFIGURED' || errorCode === 'LLM_MODEL_NOT_CONFIGURED') {
    return 503;
  }

  if (errorCode === 'LLM_PROVIDER_ERROR' || errorCode === 'LLM_EMPTY_RESPONSE') {
    return 502;
  }

  if (errorCode === 'SOURCE_HOST_NOT_ALLOWED' || errorCode === 'FINAL_APPROVAL_FORBIDDEN') {
    return 403;
  }

  return 400;
}

export async function GET() {
  return NextResponse.json({
    ok: true,
    llm: getLlmStatus(),
    publication_enabled: false,
  });
}

export async function POST(request: Request) {
  const payload = await request.json();

  if (
    payload &&
    typeof payload === 'object' &&
    (payload as Record<string, unknown>).final_publication_approval === true
  ) {
    return NextResponse.json(
      {
        ok: false,
        error_code: 'FINAL_APPROVAL_FORBIDDEN',
        message: 'Article generation cannot grant final publication approval.',
        publication_ready: false,
        final_publication_approval: false,
      },
      { status: 403 },
    );
  }

  if (!isPacket(payload)) {
    return NextResponse.json(
      {
        ok: false,
        error_code: 'INVALID_PACKET',
        message: 'Invalid generation packet or forbidden final publication approval.',
        publication_ready: false,
        final_publication_approval: false,
      },
      { status: 400 },
    );
  }

  const result = await generateArticleFromPacket(payload);

  if (!result.ok) {
    return NextResponse.json(result, { status: statusForError(result.error_code) });
  }

  return NextResponse.json(result);
}
