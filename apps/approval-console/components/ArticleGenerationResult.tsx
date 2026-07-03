import type { ArticleGenerationResponse } from '../lib/types';
import { renderSimpleMarkdown } from '../lib/simpleMarkdown';

type Props = {
  copyMessage: string;
  result: ArticleGenerationResponse | null;
  onCopy: () => void;
  onDownload: () => void;
};

export default function ArticleGenerationResult({ copyMessage, result, onCopy, onDownload }: Props) {
  if (!result) {
    return (
      <section className="generator-card article-result">
        <p className="section-kicker">Результат</p>
        <h3>Готовая статья появится здесь</h3>
        <p>
          Выберите товар, проверьте prompt и нажмите “Сгенерировать статью”.
          Генерация не публикует статью.
        </p>
      </section>
    );
  }

  if (!result.ok) {
    return (
      <section className="generator-card article-result">
        <p className="section-kicker">Результат</p>
        <h3>Статья не сгенерирована</h3>
        <p className="notice danger">{result.message}</p>
        <p>
          Если LLM не настроен, задайте `ARTICLE_LLM_API_KEY` и `ARTICLE_LLM_MODEL` в локальном `.env`,
          затем перезапустите контейнер.
        </p>
      </section>
    );
  }

  return (
    <section className="generator-card article-result">
      <div className="section-heading compact">
        <p className="section-kicker">Готовая статья</p>
        <h3>Markdown-статья сгенерирована</h3>
        <p>Текст не опубликован. Перед публикацией нужны review и final human approval.</p>
      </div>

      <div className="badge-row">
        <span className="badge ok">Статья готова</span>
        <span className="badge">specType: {result.spec_type}</span>
        <span className="badge danger">publication_ready: false</span>
      </div>

      <dl className="result-meta">
        <div>
          <dt>Найденный товар</dt>
          <dd>{result.product_match.name}</dd>
        </div>
        <div>
          <dt>Schema URL</dt>
          <dd><code>{result.schema_url}</code></dd>
        </div>
      </dl>

      {result.warnings.length ? (
        <ul className="warning-list">
          {result.warnings.map((warning) => (
            <li key={warning}>{warning}</li>
          ))}
        </ul>
      ) : null}

      <div className="button-row">
        <button className="primary" type="button" onClick={onCopy}>
          Скопировать статью
        </button>
        <button type="button" onClick={onDownload}>
          Скачать Markdown
        </button>
      </div>
      {copyMessage ? <p className="ok-notice inline-notice">{copyMessage}</p> : null}

      <div className="article-markdown-preview">
        {renderSimpleMarkdown(result.article_markdown)}
      </div>

      <details className="json-details">
        <summary>Raw Markdown</summary>
        <pre className="markdown-raw">{result.article_markdown}</pre>
      </details>
    </section>
  );
}
