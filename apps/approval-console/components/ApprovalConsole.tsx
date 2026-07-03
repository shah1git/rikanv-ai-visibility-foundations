'use client';

import { useMemo, useState } from 'react';
import type { ApprovalData, DecisionAnswer } from '../lib/types';
import { buildHumanDecisionExport } from '../lib/exportDecisions';
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

  const selectedMaterial = useMemo(
    () => data.materials.find((material) => material.material_id === selectedMaterialId) ?? data.materials[0],
    [data.materials, selectedMaterialId],
  );

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
    const payload = buildHumanDecisionExport(data, answers, approverName, comments);
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = `human-decisions.${data.run_id}.json`;
    anchor.click();
    URL.revokeObjectURL(url);
  }

  async function saveDecisions() {
    setSaveMessage('Saving decisions...');
    const payload = buildHumanDecisionExport(data, answers, approverName, comments);
    const response = await fetch('/api/decisions', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const result = await response.json();

    if (!response.ok || !result.ok) {
      setSaveMessage(`Save failed: ${result.error ?? 'unknown error'}`);
      return;
    }

    setSaveMessage(
      result.saved
        ? `Saved to PostgreSQL as record ${result.id}. Publication approval remains false.`
        : 'DATABASE_URL not set. Export-only mode active; use Download JSON.',
    );
  }

  return (
    <main className="console-shell">
      <header className="topbar">
        <div className="brand">
          <h1>RikaNV AI Console</h1>
          <p>Human control plane for agent-first approval workflows.</p>
        </div>
        <div className="badge-row">
          <span className="badge">{data.run_id}</span>
          <span className="badge warning">{data.run_status}</span>
          <span className="badge danger">publication_ready: false</span>
          <span className="badge">DB: {databaseMode}</span>
        </div>
      </header>

      <section className="main-grid">
        <div>
          <div className="stats">
            <div className="stat">
              <strong>{data.materials.length}</strong>
              <span>materials</span>
            </div>
            <div className="stat">
              <strong>{data.decisions.length}</strong>
              <span>decisions</span>
            </div>
            <div className="stat">
              <strong>{blockerCount}</strong>
              <span>blocker risks</span>
            </div>
            <div className="stat">
              <strong>{publicationReadyCount}</strong>
              <span>publication ready</span>
            </div>
          </div>

          <section className="card">
            <h2>Run Dashboard</h2>
            <p>{data.next_recommended_action}</p>
            <div className="material-grid">
              {data.materials.map((material) => (
                <MaterialCard
                  key={material.material_id}
                  material={material}
                  onSelect={setSelectedMaterialId}
                />
              ))}
            </div>
          </section>

          <section className="card" style={{ marginTop: 18 }}>
            <h2>Material Preview</h2>
            {selectedMaterial ? (
              <div className="preview-layout">
                <div className="preview-box">
                  <h3>{selectedMaterial.title}</h3>
                  <p>Product: {selectedMaterial.product}</p>
                  <p>Status: {selectedMaterial.status}</p>
                  <p>
                    Preview artifact: <code>{selectedMaterial.preview_path}</code>
                  </p>
                  <p className="notice danger">This Console does not publish materials.</p>
                </div>
                <div className="risk-panel">
                  <h3>Claims / Sources / Risks</h3>
                  <p>Claims used: {selectedMaterial.claims_used.length}</p>
                  <p>Sources used: {selectedMaterial.sources_used.length}</p>
                  <ul>
                    {selectedMaterial.blockers.map((blocker) => (
                      <li key={blocker}>{blocker}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : null}
          </section>
        </div>

        <aside>
          <section className="card">
            <h2>Decision Queue</h2>
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
            <DecisionExportPanel
              approverName={approverName}
              comments={comments}
              saveMessage={saveMessage}
              onApproverNameChange={setApproverName}
              onCommentsChange={setComments}
              onSave={saveDecisions}
              onExport={downloadDecisions}
            />
          </section>
        </aside>
      </section>

      <section className="footer-panel">
        <div className="card">
          <h2>System Boundary</h2>
          <p>This MVP reads local approval data, saves optional PostgreSQL decision records and exports JSON.</p>
          <p>It does not write to GitHub, create publication-ready content or publish anything.</p>
        </div>
      </section>
    </main>
  );
}
