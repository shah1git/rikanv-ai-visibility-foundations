import type { ArticleGenerationTask } from './types';
import type { LlmMessage } from './llmClient';
import type { MediaHubProduct } from './mediaHubClient';

function relevantSchemaExcerpt(schemaPayload: unknown, product: MediaHubProduct) {
  if (!schemaPayload || typeof schemaPayload !== 'object') {
    return schemaPayload;
  }

  const payload = schemaPayload as Record<string, unknown>;
  const schema = payload.schema as Record<string, unknown> | undefined;
  const sections = Array.isArray(schema?.sections) ? schema.sections : [];
  const specKeys = new Set(Object.keys(product.specs ?? {}));

  return {
    generatedAt: payload.generatedAt,
    specType: payload.specType,
    schema: {
      label: schema?.label,
      product_guidance: schema?.product_guidance,
      sections: sections.map((section) => {
        const sectionRecord = section as Record<string, unknown>;
        const params = Array.isArray(sectionRecord.params) ? sectionRecord.params : [];

        return {
          label: sectionRecord.label,
          section_guidance: sectionRecord.section_guidance,
          params: params.filter((param) => {
            const paramRecord = param as Record<string, unknown>;
            return typeof paramRecord.id === 'string' && specKeys.has(paramRecord.id);
          }),
        };
      }),
    },
  };
}

export function buildArticleWriterMessages(input: {
  catalogUrl: string;
  product: MediaHubProduct;
  schema: unknown;
  schemaUrl: string;
  task: ArticleGenerationTask;
  writerPrompt: string;
}): LlmMessage[] {
  const productJson = JSON.stringify(input.product, null, 2);
  const schemaJson = JSON.stringify(relevantSchemaExcerpt(input.schema, input.product), null, 2);

  return [
    {
      role: 'system',
      content: input.writerPrompt,
    },
    {
      role: 'user',
      content: [
        'Напиши Markdown-статью по задаче ниже.',
        '',
        `Товар: ${input.task.product_name}`,
        `Тип статьи: ${input.task.article_type}`,
        `Цель статьи: ${input.task.article_goal}`,
        `Формат результата: ${input.task.output_format}`,
        `Источник каталога: ${input.catalogUrl}`,
        `Источник схемы: ${input.schemaUrl}`,
        '',
        'Product JSON из Media Hub:',
        '```json',
        productJson,
        '```',
        '',
        'Relevant schema guidance JSON:',
        '```json',
        schemaJson,
        '```',
        '',
        'Используй только данные из Product JSON и schema guidance.',
        'Не используй Claim Registry, Product Truth tables, rikanv.ru pages или сторонние сайты.',
        'Выведи только Markdown-статью. Без пояснений, без служебных метаданных.',
      ].join('\n'),
    },
  ];
}
