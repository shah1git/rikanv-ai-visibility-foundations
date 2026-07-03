'use client';

import { useMemo, useState } from 'react';
import type { ApprovalData, DecisionAnswer } from '../lib/types';
import { buildHumanDecisionExport } from '../lib/exportDecisions';
import { humanizeDecisions, safeRecommendationAnswers } from '../lib/humanizeDecisions';
import ApprovalGatePanel from './ApprovalGatePanel';
import DecisionExportPanel from './DecisionExportPanel';
import ExpertDetails from './ExpertDetails';
import GuidedWorkflow from './GuidedWorkflow';
import HumanQuestionCard from './HumanQuestionCard';
import MaterialCard from './MaterialCard';
import MaterialPreview from './MaterialPreview';
import RecommendationSummary from './RecommendationSummary';

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
        selected_option: '',
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
  const [workflowMessage, setWorkflowMessage] = useState('');

  const selectedMaterial = useMemo(
    () => data.materials.find((material) => material.material_id === selectedMaterialId) ?? data.materials[0],
    [data.materials, selectedMaterialId],
  );

  const humanDecisions = useMemo(() => humanizeDecisions(data.decisions), [data.decisions]);

  const exportPayload = useMemo(
    () => buildHumanDecisionExport(data, answers, approverName, comments),
    [answers, approverName, comments, data],
  );

  const jsonText = useMemo(() => JSON.stringify(exportPayload, null, 2), [exportPayload]);
  const answeredCount = Object.values(answers).filter((answer) => answer.selected_option).length;
  const remainingCount = Math.max(data.decisions.length - answeredCount, 0);

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

  function acceptSafeRecommendations() {
    setAnswers(safeRecommendationAnswers(data.decisions));
    setWorkflowMessage(
      'Безопасные рекомендации выбраны. Это разрешает только следующий агентный шаг; публикация по-прежнему запрещена.',
    );
  }

  return (
    <main className="console-shell">
      <header className="topbar">
        <div className="brand">
          <h1>RikaNV AI Console</h1>
          <p>Панель подтверждения безопасного следующего шага.</p>
        </div>
        <div className="badge-row">
          <span className="badge danger">Публикация запрещена</span>
          <span className="badge">Следующий шаг: подготовка пакета</span>
        </div>
      </header>

      <GuidedWorkflow
        answeredCount={answeredCount}
        materialCount={data.materials.length}
        totalDecisions={data.decisions.length}
      />

      <RecommendationSummary onAcceptSafeRecommendations={acceptSafeRecommendations} />
      {workflowMessage ? <p className="workflow-message">{workflowMessage}</p> : null}

      <section className="workflow-section" id="materials">
        <div className="section-heading">
          <p className="section-kicker">Материалы</p>
          <h2>Что подготовила система</h2>
          <p>
            Выберите карточку, чтобы посмотреть текст. Материалы подготовлены для review и не готовы к публикации.
          </p>
        </div>
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

      <section className="workflow-section" id="decisions">
        <div className="section-heading">
          <p className="section-kicker">Что нужно подтвердить</p>
          <h2>Ответьте на вопросы обычным языком</h2>
          <p>
            Если сомневаетесь, нажмите “Принять безопасные рекомендации” выше. Отдельные пункты можно изменить.
          </p>
        </div>
        <div className="question-list">
          {humanDecisions.map((humanDecision, index) => (
            <HumanQuestionCard
              answer={answers[humanDecision.decision.decision_id]}
              humanDecision={humanDecision}
              index={index}
              key={humanDecision.decision.decision_id}
              onChange={updateAnswer}
              total={humanDecisions.length}
            />
          ))}
        </div>
      </section>

      <section className="workflow-section preview-card" id="preview">
        {selectedMaterial ? <MaterialPreview material={selectedMaterial} /> : null}
      </section>

      <section className="workflow-section export-section" id="export">
        <div className="export-grid">
          <div className="card">
            <DecisionExportPanel
              approverName={approverName}
              comments={comments}
              copyMessage={copyMessage}
              databaseMode={databaseMode}
              jsonText={jsonText}
              remainingCount={remainingCount}
              saveMessage={saveMessage}
              totalDecisions={data.decisions.length}
              onApproverNameChange={setApproverName}
              onCommentsChange={setComments}
              onCopy={copyDecisions}
              onSave={saveDecisions}
              onDownload={downloadDecisions}
            />
          </div>
          <div className="card">
            <ApprovalGatePanel approvals={data.required_approvals} />
          </div>
        </div>
        <ExpertDetails
          answers={answers}
          data={data}
          jsonText={jsonText}
        />
      </section>
    </main>
  );
}
