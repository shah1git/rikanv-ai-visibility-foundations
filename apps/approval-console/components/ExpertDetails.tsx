import type { ApprovalData, DecisionAnswer } from '../lib/types';
import { materialLabel } from '../lib/labels';

type Props = {
  answers: Record<string, DecisionAnswer>;
  data: ApprovalData;
  jsonText: string;
};

export default function ExpertDetails({ answers, data, jsonText }: Props) {
  return (
    <details className="expert-details">
      <summary>Технические детали</summary>
      <p>
        Этот блок нужен агенту или техническому reviewer. Обычному пользователю не нужно разбираться
        в этих идентификаторах.
      </p>

      <h3>Решения и технические ID</h3>
      <div className="markdown-table-wrap">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Материалы</th>
              <th>Выбранное значение</th>
            </tr>
          </thead>
          <tbody>
            {data.decisions.map((decision) => (
              <tr key={decision.decision_id}>
                <td>{decision.decision_id}</td>
                <td>{decision.material_ids.map(materialLabel).join(', ')}</td>
                <td>{answers[decision.decision_id]?.selected_option || 'не выбрано'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3>Материалы</h3>
      <div className="markdown-table-wrap">
        <table>
          <thead>
            <tr>
              <th>material_id</th>
              <th>Материал</th>
              <th>Фактов</th>
              <th>Источников</th>
            </tr>
          </thead>
          <tbody>
            {data.materials.map((material) => (
              <tr key={material.material_id}>
                <td>{material.material_id}</td>
                <td>{material.product}</td>
                <td>{material.claims_used.length}</td>
                <td>{material.sources_used.length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3>JSON preview</h3>
      <div className="json-preview">
        <pre>{jsonText}</pre>
      </div>
    </details>
  );
}
