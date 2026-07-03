type Props = {
  defaultPrompt: string;
  prompt: string;
  promptVersion: string;
  onChange: (prompt: string) => void;
};

export default function PromptSettingsEditor({ defaultPrompt, prompt, promptVersion, onChange }: Props) {
  return (
    <section className="generator-card">
      <div className="section-heading compact">
        <p className="section-kicker">Product Article Writer</p>
        <h3>Промпт агента-писателя</h3>
        <p>Изменение промпта влияет на то, как агент пишет статьи.</p>
      </div>

      <div className="prompt-meta">
        <span>Источник по умолчанию: {promptVersion}</span>
        <button type="button" onClick={() => onChange(defaultPrompt)}>
          Сбросить к промпту из репозитория
        </button>
      </div>

      <textarea
        className="prompt-editor"
        aria-label="Текст Product Article Writer prompt"
        value={prompt}
        onChange={(event) => onChange(event.target.value)}
      />
    </section>
  );
}
