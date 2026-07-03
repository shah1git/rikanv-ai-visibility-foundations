'use client';

import { useMemo, useState } from 'react';
import { articleGenerationDefaults, defaultArticleGoal } from '../lib/articleGenerationDefaults';
import { buildGenerationPacket } from '../lib/buildGenerationPacket';
import type { ArticleGenerationSettings, ArticleGenerationTask } from '../lib/types';
import GenerationPacketPreview from './GenerationPacketPreview';
import GenerationTaskPanel from './GenerationTaskPanel';
import PromptSettingsEditor from './PromptSettingsEditor';
import SourceSettingsPanel from './SourceSettingsPanel';

type Props = {
  defaultPrompt: string;
};

function makeDefaultSettings(defaultPrompt: string): ArticleGenerationSettings {
  return {
    catalog_url: articleGenerationDefaults.catalogUrl,
    schema_index_url: articleGenerationDefaults.schemaIndexUrl,
    schema_url_template: articleGenerationDefaults.schemaUrlTemplate,
    writer_prompt: defaultPrompt,
    prompt_version: articleGenerationDefaults.promptVersion,
    updated_at: '2026-07-03T00:00:00.000Z',
    updated_by: 'console-mvp',
    notes: 'Default article generation settings.',
  };
}

function makeDefaultTask(): ArticleGenerationTask {
  const productName = articleGenerationDefaults.defaultProducts[0];

  return {
    article_type: articleGenerationDefaults.defaultArticleType,
    product_name: productName,
    product_article: productName,
    article_goal: defaultArticleGoal,
    output_format: articleGenerationDefaults.defaultOutputFormat,
  };
}

export default function ArticleGeneratorPanel({ defaultPrompt }: Props) {
  const [settings, setSettings] = useState(() => makeDefaultSettings(defaultPrompt));
  const [task, setTask] = useState(() => makeDefaultTask());
  const [copyMessage, setCopyMessage] = useState('');

  const packet = useMemo(() => buildGenerationPacket(settings, task), [settings, task]);

  function updateSettings(patch: Partial<ArticleGenerationSettings>) {
    setSettings((current) => ({
      ...current,
      ...patch,
    }));
  }

  function updateTask(patch: Partial<ArticleGenerationTask>) {
    setTask((current) => ({
      ...current,
      ...patch,
    }));
  }

  async function copyPacket() {
    await navigator.clipboard.writeText(JSON.stringify(packet, null, 2));
    setCopyMessage('Пакет скопирован. Его можно передать агенту-писателю.');
  }

  function downloadPacket() {
    const blob = new Blob([JSON.stringify(packet, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = `${packet.packet_id}.json`;
    anchor.click();
    URL.revokeObjectURL(url);
  }

  return (
    <section className="article-generator-shell">
      <div className="generator-hero">
        <div>
          <p className="section-kicker">Генерация статей</p>
          <h2>Соберите пакет для агента-писателя</h2>
          <p>
            Этот модуль собирает настройки Media Hub, Product Article Writer prompt и постановку задачи.
            Он не вызывает модель, не публикует статью и не меняет approval gates.
          </p>
        </div>
        <div className="publication-lock">
          <strong>Что произойдет дальше</strong>
          <span>Вы скачаете или скопируете JSON-пакет и передадите его агенту для написания Markdown-статьи.</span>
        </div>
      </div>

      <div className="generator-grid">
        <div className="generator-stack">
          <SourceSettingsPanel
            settings={settings}
            onChange={updateSettings}
          />
          <GenerationTaskPanel
            products={articleGenerationDefaults.defaultProducts}
            task={task}
            onChange={updateTask}
          />
          <PromptSettingsEditor
            defaultPrompt={defaultPrompt}
            prompt={settings.writer_prompt}
            promptVersion={settings.prompt_version}
            onChange={(writerPrompt) => updateSettings({ writer_prompt: writerPrompt })}
          />
        </div>

        <GenerationPacketPreview
          copyMessage={copyMessage}
          packet={packet}
          onCopy={copyPacket}
          onDownload={downloadPacket}
        />
      </div>
    </section>
  );
}
