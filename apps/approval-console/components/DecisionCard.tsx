import type { Decision, DecisionAnswer } from '../lib/types';
import {
  agentRecommendation,
  defaultActionLabel,
  decisionIssue,
  decisionTopic,
  materialLabel,
  optionLabel,
  priorityLabel,
  rawCodeLabel,
} from '../lib/labels';

type Props = {
  decision: Decision;
  answer?: DecisionAnswer;
  onChange: (decisionId: string, patch: Partial<DecisionAnswer>) => void;
};

function optionLetter(index: number) {
  return String.fromCharCode(65 + index);
}

export default function DecisionCard({ decision, answer, onChange }: Props) {
  const priorityClass = decision.priority.includes('P0') ? 'badge danger' : 'badge warning';
  const selectedOption = answer?.selected_option ?? '';
  const isFilled = selectedOption.length > 0;

  return (
    <article className="decision-card">
      <div className="decision-head">
        <div>
          <div className="decision-kicker">ID решения: {decision.decision_id}</div>
          <h3 className="decision-title">{decisionTopic(decision)}</h3>
        </div>
        <div className="decision-status-stack">
          <span className={priorityClass}>{priorityLabel(decision.priority)}</span>
          <span className={isFilled ? 'badge ok' : 'badge danger'}>
            {isFilled ? 'Решение заполнено' : 'Требуется выбор'}
          </span>
        </div>
      </div>

      <div className="decision-body-grid">
        <div>
          <p>
            <strong>К каким материалам относится:</strong>{' '}
            {decision.material_ids.map(materialLabel).join(', ')}
          </p>
          <p>
            <strong>В чем вопрос:</strong> {decisionIssue(decision)}
          </p>
          <p>
            <strong>Рекомендация агента:</strong> {agentRecommendation(decision)}
          </p>
          <p>
            <strong>Безопасное действие по умолчанию:</strong>{' '}
            {defaultActionLabel(decision.default_safe_action)}
          </p>
          <p className="help-text">
            Если сомневаетесь, выбирайте безопасный вариант или оставьте комментарий для агента.
          </p>
        </div>

        <div className="decision-options" role="radiogroup" aria-label={`Варианты для ${decision.decision_id}`}>
          {decision.options.map((option, index) => (
            <label className="option-row" key={option}>
              <input
                checked={selectedOption === option}
                name={`${decision.decision_id}-option`}
                onChange={() => onChange(decision.decision_id, { selected_option: option })}
                type="radio"
                value={option}
              />
              <span>
                <strong>{optionLetter(index)}. {optionLabel(option)}</strong>
                <small>{rawCodeLabel(option)}</small>
              </span>
            </label>
          ))}
        </div>
      </div>

      <label className="field-label" htmlFor={`${decision.decision_id}-comment`}>
        Комментарий для агента
      </label>
      <textarea
        id={`${decision.decision_id}-comment`}
        placeholder="Например: использовать только после технической проверки"
        value={answer?.comment ?? ''}
        onChange={(event) => onChange(decision.decision_id, { comment: event.target.value })}
      />
    </article>
  );
}
