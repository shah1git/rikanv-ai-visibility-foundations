import type { Material } from '../lib/types';
import { blockerLabel, statusLabel } from '../lib/labels';
import { renderSimpleMarkdown } from '../lib/simpleMarkdown';
import RiskBadge from './RiskBadge';

type Props = {
  material: Material;
};

export default function MaterialPreview({ material }: Props) {
  const previewMarkdown =
    material.preview_markdown ??
    [
      '# Предпросмотр не найден',
      '',
      `Артефакт: ${material.preview_path}`,
      '',
      'Предпросмотр не был загружен. Откройте исходный artifact path только как fallback.',
    ].join('\n');

  return (
    <section className="material-preview">
      <div className="preview-header">
        <div>
          <p className="section-kicker">Предпросмотр материала</p>
          <h2>{material.product}</h2>
          <p>
            Это текст, который агент подготовил. Сейчас вы не редактируете его вручную.
            Вы только принимаете решения выше, а агент сам применит их в следующем шаге.
          </p>
          <div className="anchor-row">
            <a href="#decisions">К решениям</a>
            <a href="#materials">К списку материалов</a>
            <a href="#export">К экспорту JSON</a>
          </div>
        </div>
        <div className="preview-badges">
          <span className="badge">Статус: {statusLabel(material.status)}</span>
          <span className="badge danger">Публикация запрещена</span>
          <RiskBadge level={material.risk_level} />
        </div>
      </div>

      <div className="preview-layout">
        <article className="preview-document">
          <div className="preview-document-head">
            <h3>Текст материала</h3>
            <p className="notice danger">
              Это предпросмотр агентского материала. Он не является публикацией.
            </p>
          </div>
          <div className="markdown-body">{renderSimpleMarkdown(previewMarkdown)}</div>
        </article>

        <aside className="preview-side">
          <h3>Что важно помнить</h3>
          <dl>
            <div>
              <dt>Источник артефакта</dt>
              <dd><code>{material.preview_path}</code></dd>
            </div>
            <div>
              <dt>Публикация</dt>
              <dd>запрещена</dd>
            </div>
            <div>
              <dt>Фактов в тексте</dt>
              <dd>{material.claims_used.length}</dd>
            </div>
            <div>
              <dt>Источников использовано</dt>
              <dd>{material.sources_used.length}</dd>
            </div>
            <div>
              <dt>Открытые решения</dt>
              <dd>{material.open_decisions.length || 'нет'}</dd>
            </div>
            <div>
              <dt>Можно публиковать</dt>
              <dd>Нет</dd>
            </div>
          </dl>

          <h4>Что нужно для публикации</h4>
          <ul>
            {material.blockers.map((blocker) => (
              <li key={blocker}>{blockerLabel(blocker)}</li>
            ))}
          </ul>

          <h4>Что нельзя публиковать без отдельного разрешения</h4>
          <ul>
            <li>полевые обещания без тестов;</li>
            <li>цены, наличие и комплектацию;</li>
            <li>сравнения с конкурентами;</li>
            <li>материал без финального разрешения на публикацию.</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
