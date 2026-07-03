import type { ArticleGenerationTask } from './types';

export const articleGenerationDefaults = {
  catalogUrl: 'https://media.rikanv.ru/snapshots/rikanv-full.json',
  schemaIndexUrl: 'https://media.rikanv.ru/snapshots/spec-schemas.json',
  schemaUrlTemplate: 'https://media.rikanv.ru/snapshots/spec-schemas/{specType}.json',
  defaultArticleType: 'model_article' as ArticleGenerationTask['article_type'],
  defaultOutputFormat: 'markdown' as ArticleGenerationTask['output_format'],
  defaultProducts: [
    'RikaNV Ovod L25',
    'RikaNV Lesnik2 650L',
    'RikaNV Surok L15',
    'RikaNV Hypnose2 650L',
  ],
  promptVersion: 'repo:prompts/product-article-writer.prompt.md',
};

export const defaultArticleGoal =
  'Подготовить инженерную Markdown-статью о выбранной модели на основе Media Hub catalog JSON и spec schema guidance.';
