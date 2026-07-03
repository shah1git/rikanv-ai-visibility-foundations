import { readFileSync } from 'node:fs';
import path from 'node:path';

const PROMPT_FILE = path.resolve(process.cwd(), 'sample-data', 'product-article-writer.prompt.md');

export function loadDefaultArticlePrompt() {
  try {
    return readFileSync(PROMPT_FILE, 'utf-8');
  } catch {
    return 'Промпт Product Article Writer не найден.';
  }
}
