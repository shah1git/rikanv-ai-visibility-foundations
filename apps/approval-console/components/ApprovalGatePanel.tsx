import type { RequiredApproval } from '../lib/types';
import { approvalLabel } from '../lib/labels';

type Props = {
  approvals: RequiredApproval[];
};

export default function ApprovalGatePanel({ approvals }: Props) {
  return (
    <>
      <h2>Стоп-факторы публикации</h2>
      <p className="notice danger">Ни один материал сейчас нельзя публиковать.</p>
      <ul className="gate-list">
        {approvals.map((approval) => (
          <li key={approval.approval_id}>
            <span>{approvalLabel(approval)}</span>
            <strong>{approval.complete ? 'пройдена' : 'не пройдена'}</strong>
          </li>
        ))}
        <li>
          <span>Дата финальной проверки</span>
          <strong>не указана</strong>
        </li>
      </ul>
      <p className="help-text">
        Эти стоп-факторы закрываются отдельно. Текущие решения разрешают только следующий агентный шаг.
      </p>
    </>
  );
}
