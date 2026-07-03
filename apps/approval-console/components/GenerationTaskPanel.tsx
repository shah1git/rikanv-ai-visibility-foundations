import type { ArticleGenerationTask } from '../lib/types';

type Props = {
  products: string[];
  task: ArticleGenerationTask;
  onChange: (patch: Partial<ArticleGenerationTask>) => void;
};

export default function GenerationTaskPanel({ products, task, onChange }: Props) {
  function updateProduct(productName: string) {
    onChange({
      product_name: productName,
      product_article: productName,
    });
  }

  return (
    <section className="generator-card">
      <div className="section-heading compact">
        <p className="section-kicker">Постановка задачи</p>
        <h3>Что должен написать агент</h3>
        <p>Сформируйте задачу. Консоль только собирает пакет и не вызывает модель.</p>
      </div>

      <div className="generator-form-grid">
        <div>
          <label className="field-label" htmlFor="article-type">Тип статьи</label>
          <select
            id="article-type"
            value={task.article_type}
            onChange={(event) =>
              onChange({ article_type: event.target.value as ArticleGenerationTask['article_type'] })
            }
          >
            <option value="model_article">Обзор модели</option>
            <option value="rikanv_comparison">Сравнение RikaNV</option>
            <option value="practical_guide">Практическое руководство</option>
            <option value="technology_explainer">Разбор технологии</option>
          </select>
        </div>

        <div>
          <label className="field-label" htmlFor="product-name">Товар</label>
          <select
            id="product-name"
            value={task.product_name}
            onChange={(event) => updateProduct(event.target.value)}
          >
            {products.map((product) => (
              <option key={product} value={product}>{product}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="field-label" htmlFor="output-format">Формат результата</label>
          <select
            id="output-format"
            value={task.output_format}
            onChange={(event) =>
              onChange({ output_format: event.target.value as ArticleGenerationTask['output_format'] })
            }
          >
            <option value="markdown">Markdown</option>
          </select>
        </div>
      </div>

      <label className="field-label" htmlFor="article-goal">Цель статьи</label>
      <textarea
        id="article-goal"
        value={task.article_goal}
        onChange={(event) => onChange({ article_goal: event.target.value })}
      />
    </section>
  );
}
