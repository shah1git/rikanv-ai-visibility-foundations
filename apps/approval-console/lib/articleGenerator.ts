import { buildArticleWriterMessages } from './promptAssembly';
import { assertLlmConfigured, callArticleLlm, LlmError } from './llmClient';
import {
  fetchJson,
  fetchSchema,
  findProduct,
  MediaHubError,
  resolveSchemaUrl,
} from './mediaHubClient';
import type { ArticleGenerationPacket, ArticleGenerationResponse } from './types';

function isMediaHubUrl(value: string) {
  try {
    return new URL(value).hostname === 'media.rikanv.ru';
  } catch {
    return false;
  }
}

function validatePacket(packet: ArticleGenerationPacket) {
  if (packet.final_publication_approval !== false) {
    throw new MediaHubError('FINAL_APPROVAL_FORBIDDEN', 'Generation packet must keep final approval false.');
  }

  if (!packet.catalog_url || !packet.schema_url_template) {
    throw new MediaHubError('INVALID_PACKET', 'Generation packet is missing catalog or schema URL.');
  }

  if (!packet.writer_prompt) {
    throw new MediaHubError('INVALID_PACKET', 'Generation packet is missing writer prompt.');
  }

  if (!packet.task?.product_name) {
    throw new MediaHubError('INVALID_PACKET', 'Generation task is missing product_name.');
  }

  if (packet.task.output_format !== 'markdown') {
    throw new MediaHubError('INVALID_PACKET', 'Only markdown output is supported.');
  }

  if (!isMediaHubUrl(packet.catalog_url) || !isMediaHubUrl(packet.schema_index_url)) {
    throw new MediaHubError('SOURCE_HOST_NOT_ALLOWED', 'Only media.rikanv.ru source URLs are allowed.');
  }
}

function errorResponse(error: unknown): ArticleGenerationResponse {
  if (error instanceof LlmError) {
    return {
      ok: false,
      error_code: error.code,
      message: error.message,
      publication_ready: false,
      final_publication_approval: false,
    };
  }

  if (error instanceof MediaHubError) {
    return {
      ok: false,
      error_code: error.code,
      message: error.message,
      publication_ready: false,
      final_publication_approval: false,
    };
  }

  return {
    ok: false,
    error_code: 'ARTICLE_GENERATION_FAILED',
    message: error instanceof Error ? error.message : 'Article generation failed.',
    publication_ready: false,
    final_publication_approval: false,
  };
}

export async function generateArticleFromPacket(packet: ArticleGenerationPacket): Promise<ArticleGenerationResponse> {
  try {
    validatePacket(packet);
    assertLlmConfigured();

    await fetchJson(packet.schema_index_url);

    const catalog = await fetchJson(packet.catalog_url);
    const product = findProduct(catalog, packet.task.product_name);
    const specType = product.specType;
    const schemaUrl = resolveSchemaUrl(packet.schema_url_template, specType ?? '');

    if (!isMediaHubUrl(schemaUrl)) {
      throw new MediaHubError('SOURCE_HOST_NOT_ALLOWED', 'Only media.rikanv.ru schema URLs are allowed.');
    }

    const schema = await fetchSchema(schemaUrl);
    const messages = buildArticleWriterMessages({
      catalogUrl: packet.catalog_url,
      product,
      schema,
      schemaUrl,
      task: packet.task,
      writerPrompt: packet.writer_prompt,
    });
    const articleMarkdown = await callArticleLlm(messages);

    return {
      ok: true,
      article_markdown: articleMarkdown,
      product_match: {
        name: product.name ?? packet.task.product_name,
        article: product.article,
      },
      spec_type: specType ?? '',
      schema_url: schemaUrl,
      warnings: [],
      publication_ready: false,
      final_publication_approval: false,
    };
  } catch (error) {
    return errorResponse(error);
  }
}
