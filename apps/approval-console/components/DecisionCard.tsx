import type { Decision, DecisionAnswer } from '../lib/types';

type Props = {
  decision: Decision;
  answer?: DecisionAnswer;
  onChange: (decisionId: string, patch: Partial<DecisionAnswer>) => void;
};

export default function DecisionCard({ decision, answer, onChange }: Props) {
  const priorityClass = decision.priority.includes('P0') ? 'badge danger' : 'badge warning';

  return (
    <div className="decision-card">
      <div className="decision-head">
        <div>
          <div className="decision-title">
            {decision.decision_id}: {decision.topic}
          </div>
          <p>{decision.issue}</p>
        </div>
        <span className={priorityClass}>{decision.priority}</span>
      </div>

      <p>
        <strong>Agent recommendation:</strong> {decision.agent_recommendation}
      </p>

      <label htmlFor={`${decision.decision_id}-option`}>Selected option</label>
      <select
        id={`${decision.decision_id}-option`}
        value={answer?.selected_option ?? ''}
        onChange={(event) => onChange(decision.decision_id, { selected_option: event.target.value })}
      >
        {decision.options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <label htmlFor={`${decision.decision_id}-comment`}>Comment</label>
      <textarea
        id={`${decision.decision_id}-comment`}
        value={answer?.comment ?? ''}
        onChange={(event) => onChange(decision.decision_id, { comment: event.target.value })}
      />
    </div>
  );
}
