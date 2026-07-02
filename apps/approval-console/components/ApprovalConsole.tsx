
'use client';

import { useMemo, useState } from 'react';
import type { ApprovalData, DecisionAnswer, HumanDecisionExport, Material } from '../lib/types';

type Props = {
  data: ApprovalData;
  databaseMode: 'postgres' | 'export_only';
};

function riskBadge(level: Material['risk_level']) {
  if (level === 'low') return 'badge ok';
  if (level === 'blocker' || level === 'high') return 'badge danger';
  return 'badge warning';
}

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

function buildExport(
  data: ApprovalData,
  answers: Record<string, DecisionAnswer>,
  approverName: string,
  comments: string,
): HumanDecisionExport {
  return {
    run_id: data.run_id,
    decision_scope: 'next_agent_run',
    final_publication_approval: false,
    approver: {
      name: approverName || 'TODO: RikaNV approver',
      role: 'human reviewer',
    },
    decisions: Object.values(answers),
    comments,
    created_at: new Date().toISOString(),
  };
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
    const payload = buildExport(data, answers, approverName, comments);
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
    const payload = buildExport(data, answers, approverName, comments);
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
            <div className="stat"><strong>{data.materials.length}</strong><span>materials</span></div>
            <div className="stat"><strong>{data.decisions.length}</strong><span>decisions</span></div>
            <div className="stat"><strong>{blockerCount}</strong><span>blocker risks</span></div>
            <div className="stat"><strong>{publicationReadyCount}</strong><span>publication ready</span></div>
          </div>

          <section className="card">
            <h2>Run Dashboard</h2>
            <p>{data.next_recommended_action}</p>
            <div className="material-grid">
              {data.materials.map((material) => (
                <button
                  className="material-card"
                  key={material.material_id}
                  onClick={() => setSelectedMaterialId(material.material_id)}
                  type="button"
                >
                  <h3>{material.product}</h3>
                  <div className="badge-row">
                    <span className="badge">{material.status}</span>
                    <span className={riskBadge(material.risk_level)}>risk: {material.risk_level}</span>
                  </div>
                  <div className="meta-list">
                    <span>Claims: {material.claims_used.length}</span>
                    <span>Sources: {material.sources_used.length}</span>
                    <span>Publication ready: {String(material.publication_ready)}</span>
                  </div>
                </button>
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
                  <p>Preview artifact: <code>{selectedMaterial.preview_path}</code></p>
                  <p className="notice danger">This Console does not publish materials.</p>
                </div>
                <div className="risk-panel">
                  <h3>Claims / Sources / Risks</h3>
                  <p>Claims used: {selectedMaterial.claims_used.length}</p>
                  <p>Sources used: {selectedMaterial.sources_used.length}</p>
                  <ul>
                    {selectedMaterial.blockers.map((blocker) => <li key={blocker}>{blocker}</li>)}
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
              <div className="decision-card" key={decision.decision_id}>
                <div className="decision-head">
                  <div>
                    <div className="decision-title">{decision.decision_id}: {decision.topic}</div>
                    <p>{decision.issue}</p>
                  </div>
                  <span className={decision.priority.includes('P0') ? 'badge danger' : 'badge warning'}>
                    {decision.priority}
                  </span>
                </div>
                <p><strong>Agent recommendation:</strong> {decision.agent_recommendation}</p>
                <label htmlFor={`${decision.decision_id}-option`}>Selected option</label>
                <select
                  id={`${decision.decision_id}-option`}
                  value={answers[decision.decision_id]?.selected_option ?? ''}
                  onChange={(event) => updateAnswer(decision.decision_id, { selected_option: event.target.value })}
                >
                  {decision.options.map((option) => <option key={option} value={option}>{option}</option>)}
                </select>
                <label htmlFor={`${decision.decision_id}-comment`}>Comment</label>
                <textarea
                  id={`${decision.decision_id}-comment`}
                  value={answers[decision.decision_id]?.comment ?? ''}
                  onChange={(event) => updateAnswer(decision.decision_id, { comment: event.target.value })}
                />
              </div>
            ))}
          </section>

          <section className="card" style={{ marginTop: 18 }}>
            <h2>Final Approval Gate</h2>
            <p className="notice danger">Final publication approval is disabled in MVP.</p>
            {data.required_approvals.map((approval) => (
              <p key={approval.approval_id}>□ {approval.label}: {approval.complete ? 'complete' : 'open'}</p>
            ))}
            <label htmlFor="approver-name">Approver name for next-agent-run export</label>
            <input
              id="approver-name"
              value={approverName}
              onChange={(event) => setApproverName(event.target.value)}
              placeholder="TODO: RikaNV approver"
            />
            <label htmlFor="global-comments">Comments</label>
            <textarea
              id="global-comments"
              value={comments}
              onChange={(event) => setComments(event.target.value)}
            />
            <div className="actions">
              <button className="primary" onClick={saveDecisions} type="button">Save decisions</button>
              <button onClick={downloadDecisions} type="button">Export JSON</button>
              <button disabled type="button">Publish disabled</button>
            </div>
            {saveMessage ? <p className="notice">{saveMessage}</p> : null}
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
