import type { Material } from '../lib/types';
import { blockerLabel, statusLabel } from '../lib/labels';
import RiskBadge from './RiskBadge';

type Props = {
  material: Material;
  selected: boolean;
  onSelect: (materialId: string) => void;
};

export default function MaterialCard({ material, selected, onSelect }: Props) {
  const canMoveNext = material.open_decisions.length === 0;

  return (
    <button
      className={`material-card ${selected ? 'selected' : ''}`}
      onClick={() => onSelect(material.material_id)}
      type="button"
    >
      <div className="material-card-header">
        <h3>{material.product}</h3>
        <span className="badge danger">Публикация запрещена</span>
      </div>

      <p className="material-title">Материал подготовлен системой.</p>

      <div className="badge-row">
        <span className="badge">Статус: {statusLabel(material.status)}</span>
        <RiskBadge level={material.risk_level} />
      </div>

      <div className="meta-list">
        <span>Можно двигать дальше: {canMoveNext ? 'Да, с ограничениями' : 'Нет'}</span>
        <span>Можно публиковать: нет</span>
        <span>Открытые решения: {material.open_decisions.length || 'нет'}</span>
        <span>Фактов в тексте: {material.claims_used.length}</span>
        <span>Источников: {material.sources_used.length}</span>
      </div>

      <div className="material-requirements">
        <strong>Что нужно для публикации:</strong>
        <ul>
          {material.blockers.map((blocker) => (
            <li key={blocker}>{blockerLabel(blocker)}</li>
          ))}
        </ul>
      </div>

      <span className="open-preview-hint">Посмотреть текст</span>
    </button>
  );
}
