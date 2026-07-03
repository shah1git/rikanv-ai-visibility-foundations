import type { ArticleGenerationSettings } from '../lib/types';

type Props = {
  settings: ArticleGenerationSettings;
  onChange: (patch: Partial<ArticleGenerationSettings>) => void;
};

export default function SourceSettingsPanel({ settings, onChange }: Props) {
  return (
    <section className="generator-card">
      <div className="section-heading compact">
        <p className="section-kicker">Источники Media Hub</p>
        <h3>Настройки источников</h3>
        <p>Эти URL попадут в пакет для агента-писателя. Консоль не скачивает каталог в этом MVP.</p>
      </div>

      <label className="field-label" htmlFor="catalog-url">URL каталога товаров</label>
      <input
        id="catalog-url"
        type="url"
        value={settings.catalog_url}
        onChange={(event) => onChange({ catalog_url: event.target.value })}
      />

      <label className="field-label" htmlFor="schema-index-url">URL индекса схем</label>
      <input
        id="schema-index-url"
        type="url"
        value={settings.schema_index_url}
        onChange={(event) => onChange({ schema_index_url: event.target.value })}
      />

      <label className="field-label" htmlFor="schema-url-template">Шаблон URL схемы</label>
      <input
        id="schema-url-template"
        type="url"
        value={settings.schema_url_template}
        onChange={(event) => onChange({ schema_url_template: event.target.value })}
      />
    </section>
  );
}
