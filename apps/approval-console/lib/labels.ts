import type { Decision, Material, RequiredApproval } from './types';

const MATERIAL_LABELS: Record<string, string> = {
  'mat-ovod-l25': 'RikaNV Ovod L25',
  'mat-lesnik2-650l': 'RikaNV Lesnik2 650L',
  'mat-surok-l15': 'RikaNV Surok L15',
  'mat-hypnose2-650l': 'RikaNV Hypnose2 650L',
};

const STATUS_LABELS: Record<string, string> = {
  draft: 'черновик',
  cleaned_draft: 'очищенный черновик',
  decision_applied: 'решения применены',
  pre_publication_package: 'кандидат в пакет публикации',
  ready_for_human_approval: 'готово к человеческому согласованию',
  approved_for_publication: 'одобрено к публикации',
  published: 'опубликовано',
  publication_package_prep_candidate: 'кандидат на подготовку пакета публикации',
};

const RISK_LABELS: Record<Material['risk_level'], string> = {
  low: 'низкий',
  medium: 'средний',
  high: 'высокий',
  blocker: 'блокер',
};

const PRIORITY_LABELS: Record<string, string> = {
  'P0 blocker': 'P0: блокер',
  'P1 high': 'P1: высокий приоритет',
  'P2 medium': 'P2: средний приоритет',
  'P3 low': 'P3: низкий приоритет',
};

const APPROVAL_LABELS: Record<string, string> = {
  'technical-review': 'Техническая проверка',
  'doctrine-review': 'Проверка по доктрине',
  'final-owner-approval': 'Финальное разрешение на публикацию',
  'publication-channel': 'Канал публикации',
};

const BLOCKER_LABELS: Record<string, string> = {
  'technical review required': 'нужна техническая проверка',
  'doctrine review required': 'нужна проверка по доктрине',
  'final human publication approval required': 'нужно финальное разрешение человека на публикацию',
};

const DECISION_TOPICS: Record<string, string> = {
  'HRD-001': 'Формулировка про отсутствие встроенного LRF у Ovod L25',
  'HRD-002': 'Использование recoil rating для Lesnik2 650L',
  'HRD-003': 'Связь Hypnose и Hypnose2 как поколений линейки',
  'HRD-004': 'Как писать про официальные дальности обнаружения и LRF',
  'HRD-005': 'Полевые claims без полевых тестов',
  'HRD-006': 'Коммерческие данные, которые быстро устаревают',
  'HRD-007': 'Можно ли передать материалы на следующий агентный шаг',
};

const DECISION_ISSUES: Record<string, string> = {
  'HRD-001': 'Можно ли использовать нейтральный факт про отсутствие встроенного дальномера, если он связан с источником.',
  'HRD-002': 'Можно ли готовить recoil rating как техническую характеристику, не превращая его в гарантию практического применения.',
  'HRD-003': 'Можно ли писать, что Hypnose и Hypnose2 относятся к первому и второму поколению, не смешивая характеристики линий и моделей.',
  'HRD-004': 'Как безопасно формулировать официальные значения дальности, чтобы они не выглядели как обещание результата в поле.',
  'HRD-005': 'Можно ли использовать заявления о реальной полевой работе без отдельной методики и тестов.',
  'HRD-006': 'Можно ли добавлять цены, наличие, комплектацию и другие данные, которые быстро меняются.',
  'HRD-007': 'Можно ли запустить следующий агентный шаг для материалов, где нет открытых P0/P1 блокеров.',
};

const AGENT_RECOMMENDATIONS: Record<string, string> = {
  'HRD-001': 'Использовать только нейтральную формулировку с опорой на source/evidence.',
  'HRD-002': 'Оставить как gated technical statement до подтверждения техническим reviewer.',
  'HRD-003': 'Разрешить контекст поколений, но не переносить характеристики между линейкой и моделью.',
  'HRD-004': 'Использовать только формулу “на официальной странице указана заявленная дальность...”.',
  'HRD-005': 'Не использовать field-performance claims без полевых тестов.',
  'HRD-006': 'Исключить volatile commercial data из первого пакета.',
  'HRD-007': 'Продолжать только как limited package candidates; это не публикационное разрешение.',
};

const OPTION_LABELS: Record<string, string> = {
  exclude: 'исключить из первого пакета',
  'allow neutral wording': 'разрешить нейтральную формулировку',
  'allow explicit factual wording': 'разрешить явную фактическую формулировку',
  reject: 'отклонить использование',
  'allow after technical confirmation': 'разрешить после технического подтверждения',
  'internal only': 'оставить только для внутренней работы',
  'do not use': 'не использовать',
  'allow generation context': 'разрешить контекст поколений',
  'require separate source': 'требовать отдельный источник',
  'model facts only': 'использовать только факты конкретной модели',
  'official-spec only': 'только формулировка официальной характеристики',
  'stronger wording with tests': 'усиленная формулировка только при наличии тестов',
  'remove ranges': 'убрать дальности из текста',
  'allow with tests': 'разрешить только при наличии тестов',
  'dated owner-approved only': 'только датированные данные с approval владельца',
  'channel-specific later': 'отложить для отдельного канала',
  'all decisions answered': 'все решения заполнены',
  'no unresolved P0/P1': 'нет нерешенных P0/P1 блокеров',
  'stop until full review': 'остановить до полной проверки',
};

const DEFAULT_ACTION_LABELS: Record<string, string> = {
  'exclude until approved': 'исключить, пока нет явного approval',
  'hold until technical reviewer confirms': 'держать до подтверждения техническим reviewer',
  'model facts only': 'использовать только факты конкретной модели',
  'official-spec only': 'оставить только wording официальной характеристики',
  exclude: 'исключить',
  'hold until decisions answered': 'не двигать дальше, пока решения не заполнены',
};

export function materialLabel(materialId: string) {
  return MATERIAL_LABELS[materialId] ?? materialId;
}

export function statusLabel(status: string) {
  return STATUS_LABELS[status] ?? status;
}

export function riskLabel(level: Material['risk_level']) {
  return RISK_LABELS[level] ?? level;
}

export function priorityLabel(priority: string) {
  return PRIORITY_LABELS[priority] ?? priority;
}

export function approvalLabel(approval: RequiredApproval) {
  return APPROVAL_LABELS[approval.approval_id] ?? approval.label;
}

export function blockerLabel(blocker: string) {
  return BLOCKER_LABELS[blocker] ?? blocker;
}

export function decisionTopic(decision: Decision) {
  return DECISION_TOPICS[decision.decision_id] ?? decision.topic;
}

export function decisionIssue(decision: Decision) {
  return DECISION_ISSUES[decision.decision_id] ?? decision.issue;
}

export function agentRecommendation(decision: Decision) {
  return AGENT_RECOMMENDATIONS[decision.decision_id] ?? decision.agent_recommendation;
}

export function optionLabel(option: string) {
  return OPTION_LABELS[option] ?? option;
}

export function defaultActionLabel(action: string) {
  return DEFAULT_ACTION_LABELS[action] ?? action;
}

export function databaseModeLabel(mode: 'postgres' | 'export_only') {
  return mode === 'postgres' ? 'PostgreSQL включен' : 'без базы, только JSON';
}

export function rawCodeLabel(value: string) {
  return `технический код: ${value}`;
}
