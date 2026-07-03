'use client';

import { useMemo, useState } from 'react';
import type { ApprovalData, DecisionAnswer } from '../lib/types';
import { buildHumanDecisionExport } from '../lib/exportDecisions';
import { databaseModeLabel, statusLabel } from '../lib/labels';
import ApprovalGatePanel from './ApprovalGatePanel';
import DecisionCard from './DecisionCard';
import DecisionExportPanel from './DecisionExportPanel';
import MaterialCard from './MaterialCard';

type Props = {
  data: ApprovalData;
  databaseMode: 'postgres' | 'export_only';
};

function makeInitialAnswers(data: ApprovalData): Record<string, DecisionAnswer> {
  return Object.fromEntries(
    data.decisions.map((decision) => [
      decision.decision_id,
      {
        decision_id: decision.decision_id,
        selected_option: decision.selected_option ?? decision.default_safe_action,
        comment: '',
      },
    ]),
  );
}

export default function ApprovalConsole({ data, databaseMode }: Props) {
  const [answers, setAnswers] = useState(() => makeInitialAnswers(data));
  const [approverName, setApproverName] = useState('');
  const [comments, setComments] = useState('');
  const [selectedMaterialId, setSelectedMaterialId] = useState(data.materials[0]?.material_id ?? '');
  const [saveMessage, setSaveMessage] = useState('');
  const [copyMessage, setCopyMessage] = useState('');

  const selectedMaterial = useMemo(
    () => data.materials.find((material) => material.material_id === selectedMaterialId) ?? data.materials[0],
    [data.materials, selectedMaterialId],
  );

  const exportPayload = useMemo(
    () => buildHumanDecisionExport(data, answers, approverName, comments),
    [answers, approverName, comments, data],
  );

  const jsonText = useMemo(() => JSON.stringify(exportPayload, null, 2), [exportPayload]);
  const answeredCount = Object.values(answers).filter((answer) => answer.selected_option).length;
  const publicationReadyCount = data.materials.filter((material) => material.publication_ready).length;
  const blockerCount = data.risks.filter((risk) => risk.level === 'blocker').length;

  function updateAnswer(decisionId: string, patch: Partial<DecisionAnswer>) {
    setAnswers((current) => ({
      ...current,
      [decisionId]: {
        ...current[decisionId],
        ...patch,
      },
    }));
  }

  function downloadDecisions() {
    const blob = new Blob([jsonText], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = `human-decisions.${data.run_id}.json`;
    anchor.click();
    URL.revokeObjectURL(url);
  }

  async function copyDecisions() {
    await navigator.clipboard.writeText(jsonText);
    setCopyMessage('JSON скопирован. Его можно передать агенту для следующего шага.');
  }

  async function saveDecisions() {
    setSaveMessage('Сохраняю решения...');
    const response = await fetch('/api/decisions', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: jsonText,
    });
    const result = await response.json();

    if (!response.ok || !result.ok) {
      setSaveMessage(`Не удалось сохранить: ${result.error ?? 'неизвестная ошибка'}`);
      return;
    }

    setSaveMessage(
      result.saved
        ? `Решения сохранены в PostgreSQL как запись ${result.id}. Публикация не разрешена.`
        : 'PostgreSQL недоступен. Скачайте JSON и передайте агенту вручную.',
    );
  }

  return (
    <main className="console-shell">
      <header className="topbar">
        <div className="brand">
          <h1>RikaNV AI Console</h1>
          <p>Панель решений для агентного процесса RikaNV.</p>
        </div>
        <div className="badge-row">
          <span className="badge">Запуск: {data.run_id}</span>
          <span className="badge warning">Этап: {statusLabel(data.run_status)}</span>
          <span className="badge danger">Публикация закрыта</span>
          <span className="badge">Режим хранения: {databaseModeLabel(databaseMode)}</span>
        </div>
      </header>

      <section className="hero-panel">
        <div>
          <h2>Что делать сейчас</h2>
          <ol>
            <li>Посмотрите список решений ниже.</li>
            <li>Для каждого решения выберите вариант.</li>
            <li>При необходимости оставьте комментарий.</li>
            <li>Нажмите “Сохранить решения” или “Скачать JSON”.</li>
            <li>Передайте JSON агенту для следующего шага.</li>
            <li>Это НЕ разрешение на публикацию.</li>
          </ol>
        </div>
        <p className="notice danger">
          Материалы не готовы к публикации. Консоль не публикует материалы; здесь вы разрешаете только
          следующий агентный шаг. Финальная публикация будет отдельным решением.
        </p>
      </section>

      <section className="approval-levels">
        <h2>Важно: это не публикация</h2>
        <div className="level-grid">
          <div>
            <h3>1. Разрешить следующий агентный шаг</h3>
            <p>Агент может продолжить подготовку материала: cleanup, package prep или следующий review.</p>
          </div>
          <div>
            <h3>2. Разрешить публикацию</h3>
            <p>Материал можно публиковать от имени RikaNV только после отдельного финального approval.</p>
          </div>
        </div>
        <div className="badge-row">
          <span className="badge ok">Текущий уровень: решения для следующего агентного шага</span>
          <span className="badge danger">Финальная публикация: закрыта</span>
        </div>
      </section>

      <section className="main-grid">
        <div>
          <div className="stats">
            <div className="stat">
              <strong>{data.materials.length}</strong>
              <span>материала</span>
            </div>
            <div className="stat">
              <strong>{answeredCount}/{data.decisions.length}</strong>
              <span>решений заполнено</span>
            </div>
            <div className="stat">
              <strong>{blockerCount}</strong>
              <span>блокер риска</span>
            </div>
            <div className="stat danger-stat">
              <strong>{publicationReadyCount}</strong>
              <span>готово к публикации</span>
            </div>
          </div>

          <section className="card">
            <h2>Материалы</h2>
            <p>
              Этот материал можно передать на следующий агентный шаг, но нельзя публиковать без технической
              проверки, проверки по доктрине и финального разрешения человека.
            </p>
            <div className="material-grid">
              {data.materials.map((material) => (
                <MaterialCard
                  key={material.material_id}
                  material={material}
                  selected={material.material_id === selectedMaterialId}
                  onSelect={setSelectedMaterialId}
                />
              ))}
            </div>
          </section>

          <section className="card" style={{ marginTop: 18 }}>
            <h2>Предпросмотр выбранного материала</h2>
            {selectedMaterial ? (
              <div className="preview-layout">
                <div className="preview-box">
                  <h3>{selectedMaterial.product}</h3>
                  <p>Название: {selectedMaterial.title}</p>
                  <p>Статус: {statusLabel(selectedMaterial.status)}</p>
                  <p>material_id: <code>{selectedMaterial.material_id}</code></p>
                  <p>Артефакт: <code>{selectedMaterial.preview_path}</code></p>
                  <p className="notice danger">Публикация запрещена до финального approval.</p>
                </div>
                <div className="risk-panel">
                  <h3>Claims / sources / risks</h3>
                  <p>Claims used: {selectedMaterial.claims_used.length}</p>
                  <p>Sources used: {selectedMaterial.sources_used.length}</p>
                  <p>Открытые решения: {selectedMaterial.open_decisions.length || 'нет'}</p>
                  <p>Можно публиковать сейчас: Нет</p>
                </div>
              </div>
            ) : null}
          </section>
        </div>

        <aside>
          <section className="card">
            <h2>Очередь решений</h2>
            <p className="help-text">
              Нужно решение по каждому пункту. Выбор здесь разрешает только следующий агентный шаг.
            </p>
            {data.decisions.map((decision) => (
              <DecisionCard
                key={decision.decision_id}
                decision={decision}
                answer={answers[decision.decision_id]}
                onChange={updateAnswer}
              />
            ))}
          </section>

          <section className="card" style={{ marginTop: 18 }}>
            <ApprovalGatePanel approvals={data.required_approvals} />
          </section>

          <section className="card" style={{ marginTop: 18 }}>
            <DecisionExportPanel
              approverName={approverName}
              comments={comments}
              copyMessage={copyMessage}
              databaseMode={databaseMode}
              jsonText={jsonText}
              saveMessage={saveMessage}
              onApproverNameChange={setApproverName}
              onCommentsChange={setComments}
              onCopy={copyDecisions}
              onSave={saveDecisions}
              onDownload={downloadDecisions}
            />
          </section>
        </aside>
      </section>

      <section className="footer-panel">
        <div className="card">
          <h2>Граница системы</h2>
          <p>Консоль читает подготовленные данные, сохраняет решения или экспортирует JSON.</p>
          <p>Она не пишет в GitHub, не создает publication-ready контент и не публикует материалы.</p>
        </div>
      </section>
    </main>
  );
}
