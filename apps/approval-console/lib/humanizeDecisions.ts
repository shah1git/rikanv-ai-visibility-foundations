import type { Decision } from './types';

export type HumanOption = {
  label: string;
  value: string;
  note: string;
};

export type HumanDecision = {
  decision: Decision;
  humanTitle: string;
  humanQuestion: string;
  recommendation: string;
  whyItMatters: string;
  safeDefault: string;
  recommendedValue: string;
  options: HumanOption[];
};

const HUMAN_DECISIONS: Record<string, Omit<HumanDecision, 'decision'>> = {
  'HRD-001': {
    humanTitle: 'Писать ли, что у Ovod L25 нет встроенного дальномера?',
    humanQuestion: 'Можно ли явно указать, что у Ovod L25 нет встроенного LRF?',
    recommendation: 'Да, но только нейтрально: как характеристику модели, без сравнения с конкурентами.',
    whyItMatters: 'Если написать это как недостаток или сравнение, материал станет маркетинговым спором.',
    safeDefault: 'Использовать нейтральную формулировку или исключить из первого материала.',
    recommendedValue: 'allow neutral wording',
    options: [
      {
        label: 'Не упоминать в первом материале',
        value: 'exclude',
        note: 'Самый осторожный вариант.',
      },
      {
        label: 'Упоминать нейтрально',
        value: 'allow neutral wording',
        note: 'Рекомендуемый безопасный вариант.',
      },
      {
        label: 'Упоминать явно со ссылкой на источник',
        value: 'allow explicit factual wording',
        note: 'Можно, если формулировка не звучит как сравнение.',
      },
      {
        label: 'Запретить полностью',
        value: 'reject',
        note: 'Не использовать этот факт в материалах.',
      },
    ],
  },
  'HRD-002': {
    humanTitle: 'Указывать ли стойкость Lesnik2 650L к отдаче?',
    humanQuestion: 'Можно ли использовать recoil rating в материале?',
    recommendation: 'Не использовать как готовое обещание до технического подтверждения.',
    whyItMatters: 'Эта характеристика может быть прочитана как гарантия практического применения.',
    safeDefault: 'Отправить на техническое подтверждение перед публикацией.',
    recommendedValue: 'allow after technical confirmation',
    options: [
      {
        label: 'Не использовать',
        value: 'exclude',
        note: 'Убрать из первого материала.',
      },
      {
        label: 'Отправить на техническое подтверждение',
        value: 'allow after technical confirmation',
        note: 'Рекомендуемый безопасный вариант.',
      },
      {
        label: 'Использовать только как официальную характеристику после проверки',
        value: 'internal only',
        note: 'Оставить в работе, но не как публикационную гарантию.',
      },
      {
        label: 'Запретить полностью',
        value: 'reject',
        note: 'Не использовать эту характеристику.',
      },
    ],
  },
  'HRD-003': {
    humanTitle: 'Как объяснять Hypnose и Hypnose2?',
    humanQuestion: 'Можно ли писать, что Hypnose - первое поколение, а Hypnose2 - второе?',
    recommendation: 'Можно, но не переносить характеристики между поколениями или моделями.',
    whyItMatters: 'Линейка и модель должны оставаться разными сущностями.',
    safeDefault: 'Объяснять поколение только как контекст, без переноса характеристик.',
    recommendedValue: 'allow generation context',
    options: [
      {
        label: 'Не объяснять поколение',
        value: 'do not use',
        note: 'Оставить только факты конкретной модели.',
      },
      {
        label: 'Объяснять как первое/второе поколение',
        value: 'allow generation context',
        note: 'Рекомендуемый безопасный вариант.',
      },
      {
        label: 'Объяснять только после уточнения',
        value: 'require separate source',
        note: 'Попросить дополнительное подтверждение.',
      },
      {
        label: 'Запретить формулировку',
        value: 'model facts only',
        note: 'Использовать только факты Hypnose2 650L.',
      },
    ],
  },
  'HRD-004': {
    humanTitle: 'Как писать про дальность обнаружения и дальномер?',
    humanQuestion: 'Можно ли использовать дальности из официальных характеристик?',
    recommendation: 'Да, но только как заявленные официальные характеристики, не как полевую гарантию.',
    whyItMatters: 'Дальность из характеристик не должна звучать как обещание результата в реальных условиях.',
    safeDefault: 'Писать только как официальную характеристику.',
    recommendedValue: 'official-spec only',
    options: [
      {
        label: 'Писать только как официальную характеристику',
        value: 'official-spec only',
        note: 'Рекомендуемый безопасный вариант.',
      },
      {
        label: 'Не писать дальности',
        value: 'remove ranges',
        note: 'Самый осторожный вариант.',
      },
      {
        label: 'Отправить на техническую проверку',
        value: 'stronger wording with tests',
        note: 'Использовать сильнее только при наличии тестов.',
      },
    ],
  },
  'HRD-005': {
    humanTitle: 'Можно ли писать полевые обещания?',
    humanQuestion: 'Можно ли утверждать, что прибор реально показывает результат в поле без тестов?',
    recommendation: 'Нет. Без полевых тестов такие формулировки нельзя использовать.',
    whyItMatters: 'Полевые обещания без evidence создают риск недостоверной публикации.',
    safeDefault: 'Исключить все полевые обещания.',
    recommendedValue: 'exclude',
    options: [
      {
        label: 'Исключить все полевые обещания',
        value: 'exclude',
        note: 'Рекомендуемый безопасный вариант.',
      },
      {
        label: 'Оставить TODO для будущих тестов',
        value: 'internal only',
        note: 'Не публиковать, только отметить для работы.',
      },
      {
        label: 'Разрешить только после тестов',
        value: 'allow with tests',
        note: 'Потребуется отдельное evidence.',
      },
    ],
  },
  'HRD-006': {
    humanTitle: 'Использовать ли цены, наличие и комплектацию?',
    humanQuestion: 'Можно ли включать volatile commercial data в первый материал?',
    recommendation: 'Нет. Цены, наличие и комплектация могут устареть.',
    whyItMatters: 'Коммерческие данные быстро меняются и могут сделать материал недостоверным.',
    safeDefault: 'Исключить из первого материала.',
    recommendedValue: 'exclude',
    options: [
      {
        label: 'Исключить из первого материала',
        value: 'exclude',
        note: 'Рекомендуемый безопасный вариант.',
      },
      {
        label: 'Оставить TODO',
        value: 'channel-specific later',
        note: 'Вернуться к этому для отдельного канала.',
      },
      {
        label: 'Использовать только после отдельного approval',
        value: 'dated owner-approved only',
        note: 'Только с датой и владельцем решения.',
      },
    ],
  },
  'HRD-007': {
    humanTitle: 'Можно ли передать материалы агенту на следующий шаг?',
    humanQuestion: 'Разрешить агенту подготовить следующий пакет на основе безопасных решений?',
    recommendation: 'Да, если все рискованные пункты закрыты безопасными вариантами.',
    whyItMatters: 'Это разрешает только подготовку следующего пакета, не публикацию.',
    safeDefault: 'Разрешить следующий агентный шаг при закрытых P0/P1 рисках.',
    recommendedValue: 'no unresolved P0/P1',
    options: [
      {
        label: 'Разрешить следующий агентный шаг',
        value: 'no unresolved P0/P1',
        note: 'Рекомендуемый безопасный вариант.',
      },
      {
        label: 'Разрешить только после полной проверки',
        value: 'all decisions answered',
        note: 'Более осторожный вариант.',
      },
      {
        label: 'Остановить процесс',
        value: 'stop until full review',
        note: 'Не передавать агенту дальше.',
      },
    ],
  },
};

export function humanizeDecision(decision: Decision): HumanDecision {
  const human = HUMAN_DECISIONS[decision.decision_id];

  if (!human) {
    return {
      decision,
      humanTitle: decision.topic,
      humanQuestion: decision.issue,
      recommendation: decision.agent_recommendation,
      whyItMatters: decision.risk_if_approved,
      safeDefault: decision.default_safe_action,
      recommendedValue: decision.default_safe_action,
      options: decision.options.map((option) => ({
        label: option,
        value: option,
        note: 'Технический вариант из исходных данных.',
      })),
    };
  }

  return {
    ...human,
    decision,
  };
}

export function humanizeDecisions(decisions: Decision[]) {
  return decisions.map(humanizeDecision);
}

export function safeRecommendationAnswers(decisions: Decision[]) {
  return Object.fromEntries(
    humanizeDecisions(decisions).map((humanDecision) => [
      humanDecision.decision.decision_id,
      {
        decision_id: humanDecision.decision.decision_id,
        selected_option: humanDecision.recommendedValue,
        comment: '',
      },
    ]),
  );
}
