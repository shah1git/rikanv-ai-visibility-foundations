import type {
  ArticleGenerationPacket,
  ArticleGenerationSettings,
  ArticleGenerationTask,
} from './types';

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9а-яё]+/gi, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 64);
}

export function buildGenerationPacket(
  settings: ArticleGenerationSettings,
  task: ArticleGenerationTask,
): ArticleGenerationPacket {
  const productSlug = slugify(task.product_name || 'product');

  return {
    packet_id: `article-generation-${productSlug}`,
    created_at: settings.updated_at || '2026-07-03T00:00:00.000Z',
    catalog_url: settings.catalog_url,
    schema_index_url: settings.schema_index_url,
    schema_url_template: settings.schema_url_template,
    writer_prompt: settings.writer_prompt,
    task: {
      ...task,
      product_article: task.product_article || task.product_name,
    },
    instructions: [
      'fetch catalog',
      'find active product',
      'resolve specType',
      'fetch schema',
      'read product_guidance / section_guidance / param_guidance',
      'write Markdown article',
      'run self-check',
    ],
    execution_notes: [
      'This packet is input for the article writer agent.',
      'The packet itself does not call an LLM.',
      'The Console MVP does not publish anything.',
      'Final publication approval remains closed.',
    ],
    final_publication_approval: false,
  };
}
