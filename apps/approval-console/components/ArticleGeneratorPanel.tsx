'use client';

import { useEffect, useMemo, useState } from 'react';
import { articleGenerationDefaults, defaultArticleGoal } from '../lib/articleGenerationDefaults';
import { buildGenerationPacket } from '../lib/buildGenerationPacket';
import type {
  ArticleGenerationResponse,
  ArticleGenerationSettings,
  ArticleGenerationTask,
} from '../lib/types';
import ArticleGenerationResult from './ArticleGenerationResult';
import ArticleGeneratorStatus from './ArticleGeneratorStatus';
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
  const [packetCopyMessage, setPacketCopyMessage] = useState('');
  const [articleCopyMessage, setArticleCopyMessage] = useState('');
  const [generationMessage, setGenerationMessage] = useState('Готово к генерации');
  const [generationResult, setGenerationResult] = useState<ArticleGenerationResponse | null>(null);
  const [generating, setGenerating] = useState(false);
  const [llmConfigured, setLlmConfigured] = useState<boolean | null>(null);

  const packet = useMemo(() => buildGenerationPacket(settings, task), [settings, task]);

  useEffect(() => {
    let mounted = true;

    fetch('/api/articles/generate')
      .then((response) => response.json())
      .then((payload) => {
        if (mounted) {
          setLlmConfigured(Boolean(payload?.llm?.configured));
        }
      })
      .catch(() => {
        if (mounted) {
          setLlmConfigured(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, []);

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
    setPacketCopyMessage('Пакет скопирован. Его можно передать агенту-писателю.');
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

  async function generateArticle() {
    setGenerating(true);
    setGenerationMessage('Генерация идет...');
    setGenerationResult(null);

    try {
      const response = await fetch('/api/articles/generate', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(packet),
      });
      const result = (await response.json()) as ArticleGenerationResponse;

      setGenerationResult(result);

      if (result.ok) {
        setLlmConfigured(true);
        setGenerationMessage('Статья готова');
      } else {
        if (result.error_code === 'LLM_NOT_CONFIGURED' || result.error_code === 'LLM_MODEL_NOT_CONFIGURED') {
          setLlmConfigured(false);
        }
        setGenerationMessage(result.message);
      }
    } catch (error) {
      setGenerationResult({
        ok: false,
        error_code: 'ARTICLE_GENERATION_REQUEST_FAILED',
        message: error instanceof Error ? error.message : 'Не удалось выполнить запрос генерации.',
        publication_ready: false,
        final_publication_approval: false,
      });
      setGenerationMessage('Ошибка генерации');
    } finally {
      setGenerating(false);
    }
  }

  async function copyArticle() {
    if (!generationResult?.ok) {
      return;
    }

    await navigator.clipboard.writeText(generationResult.article_markdown);
    setArticleCopyMessage('Markdown статьи скопирован.');
  }

  function downloadArticle() {
    if (!generationResult?.ok) {
      return;
    }

    const blob = new Blob([generationResult.article_markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = `${packet.packet_id}.md`;
    anchor.click();
    URL.revokeObjectURL(url);
  }

  return (
    <section className="article-generator-shell">
      <div className="generator-hero">
        <div>
          <p className="section-kicker">Генерация статей</p>
          <h2>Сгенерируйте Markdown-статью</h2>
          <p>
            Выберите товар, проверьте Media Hub источники и нажмите “Сгенерировать статью”.
            Консоль покажет готовый Markdown, но не публикует его.
          </p>
        </div>
        <div className="publication-lock">
          <strong>Публикация закрыта</strong>
          <span>Итоговый текст нужно отдельно проверить и утвердить перед публикацией.</span>
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

        <div className="generator-stack">
          <section className="generator-card primary-generation-card">
            <div className="section-heading compact">
              <p className="section-kicker">Основное действие</p>
              <h3>Сгенерировать статью</h3>
              <p>
                Backend скачает Media Hub catalog/schema, найдет товар, соберет prompt и вызовет настроенный LLM.
              </p>
            </div>
            <ArticleGeneratorStatus
              configured={llmConfigured}
              generating={generating}
              message={generationMessage}
            />
            <button
              className="primary large-action"
              disabled={generating}
              type="button"
              onClick={generateArticle}
            >
              {generating ? 'Генерация идет...' : 'Сгенерировать статью'}
            </button>
            <p className="muted-note">
              Если LLM не настроен, задайте `ARTICLE_LLM_API_KEY` и `ARTICLE_LLM_MODEL` в `.env`.
            </p>
          </section>

          <ArticleGenerationResult
            copyMessage={articleCopyMessage}
            result={generationResult}
            onCopy={copyArticle}
            onDownload={downloadArticle}
          />

          <GenerationPacketPreview
            copyMessage={packetCopyMessage}
            packet={packet}
            onCopy={copyPacket}
            onDownload={downloadPacket}
          />
        </div>
      </div>
    </section>
  );
}
