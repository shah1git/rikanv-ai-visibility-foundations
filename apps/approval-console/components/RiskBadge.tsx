import type { Material } from '../lib/types';
import { riskLabel } from '../lib/labels';

type Props = {
  level: Material['risk_level'];
  label?: string;
};

export function riskBadgeClass(level: Material['risk_level']) {
  if (level === 'low') {
    return 'badge ok';
  }

  if (level === 'blocker' || level === 'high') {
    return 'badge danger';
  }

  return 'badge warning';
}

export default function RiskBadge({ level, label }: Props) {
  return <span className={riskBadgeClass(level)}>{label ?? `Риск: ${riskLabel(level)}`}</span>;
}
