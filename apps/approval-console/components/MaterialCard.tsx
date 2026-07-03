import type { Material } from '../lib/types';
import RiskBadge from './RiskBadge';

type Props = {
  material: Material;
  onSelect: (materialId: string) => void;
};

export default function MaterialCard({ material, onSelect }: Props) {
  return (
    <button
      className="material-card"
      onClick={() => onSelect(material.material_id)}
      type="button"
    >
      <h3>{material.product}</h3>
      <div className="badge-row">
        <span className="badge">{material.status}</span>
        <RiskBadge level={material.risk_level} />
      </div>
      <div className="meta-list">
        <span>Claims: {material.claims_used.length}</span>
        <span>Sources: {material.sources_used.length}</span>
        <span>Publication ready: {String(material.publication_ready)}</span>
      </div>
    </button>
  );
}
