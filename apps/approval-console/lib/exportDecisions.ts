import type { ApprovalData, DecisionAnswer, HumanDecisionExport } from './types';

export function buildHumanDecisionExport(
  data: ApprovalData,
  answers: Record<string, DecisionAnswer>,
  approverName: string,
  comments: string,
): HumanDecisionExport {
  return {
    run_id: data.run_id,
    decision_scope: 'next_agent_run',
    final_publication_approval: false,
    approver: {
      name: approverName || 'TODO: RikaNV approver',
      role: 'human reviewer',
    },
    decisions: Object.values(answers),
    comments,
    created_at: new Date().toISOString(),
  };
}
