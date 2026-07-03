import type { DecisionAnswer } from '../lib/types';
import type { HumanDecision } from '../lib/humanizeDecisions';

type Props = {
  answer?: DecisionAnswer;
  humanDecision: HumanDecision;
  index: number;
  total: number;
  onChange: (decisionId: string, patch: Partial<DecisionAnswer>) => void;
};

export default function HumanQuestionCard({ answer, humanDecision, index, total, onChange }: Props) {
  const selectedOption = answer?.selected_option ?? '';
  const isFilled = selectedOption.length > 0;
  const decisionId = humanDecision.decision.decision_id;

  return (
    <article className="human-question-card">
      <div className="human-question-head">
        <div>
          <p className="question-count">Вопрос {index + 1} из {total}</p>
          <h3>{humanDecision.humanTitle}</h3>
        </div>
        <span className={isFilled ? 'badge ok' : 'badge danger'}>
          {isFilled ? 'Решение выбрано' : 'Нужно решение'}
        </span>
      </div>

      <div className="question-body">
        <p>
          <strong>Вопрос:</strong> {humanDecision.humanQuestion}
        </p>
        <p>
          <strong>Рекомендация системы:</strong> {humanDecision.recommendation}
        </p>
        <p>
          <strong>Почему это важно:</strong> {humanDecision.whyItMatters}
        </p>
        <p className="safe-default">
          <strong>Безопасный вариант:</strong> {humanDecision.safeDefault}
        </p>
      </div>

      <div className="human-options" role="radiogroup" aria-label={humanDecision.humanTitle}>
        {humanDecision.options.map((option) => (
          <label
            className={`human-option ${selectedOption === option.value ? 'selected' : ''}`}
            key={`${decisionId}-${option.value}`}
          >
            <input
              checked={selectedOption === option.value}
              name={`${decisionId}-human-option`}
              onChange={() => onChange(decisionId, { selected_option: option.value })}
              type="radio"
              value={option.value}
            />
            <span>
              <strong>{option.label}</strong>
              <small>{option.note}</small>
            </span>
          </label>
        ))}
      </div>

      <label className="field-label" htmlFor={`${decisionId}-comment`}>
        Комментарий, если нужно
      </label>
      <textarea
        id={`${decisionId}-comment`}
        placeholder="Например: оставить как рекомендует система"
        value={answer?.comment ?? ''}
        onChange={(event) => onChange(decisionId, { comment: event.target.value })}
      />
    </article>
  );
}
