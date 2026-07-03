
export type ApprovalData = {
  run_id: string;
  run_status: string;
  stage: string;
  final_publication_approval: false;
  materials: Material[];
  decisions: Decision[];
  risks: Risk[];
  required_approvals: RequiredApproval[];
  next_recommended_action: string;
};

export type Material = {
  material_id: string;
  title: string;
  product: string;
  status: string;
  publication_ready: boolean;
  risk_level: 'low' | 'medium' | 'high' | 'blocker';
  claims_used: string[];
  sources_used: string[];
  open_decisions: string[];
  blockers: string[];
  preview_path: string;
  preview_markdown?: string;
  preview_found?: boolean;
  preview_file_name?: string;
  preview_error?: string;
};

export type Decision = {
  decision_id: string;
  topic: string;
  priority: string;
  material_ids: string[];
  issue: string;
  agent_recommendation: string;
  options: string[];
  selected_option?: string;
  default_safe_action: string;
  risk_if_approved: string;
  risk_if_rejected: string;
  requires_final_approval: boolean;
};

export type Risk = {
  risk_id: string;
  level: 'low' | 'medium' | 'high' | 'blocker';
  summary: string;
  material_ids: string[];
};

export type RequiredApproval = {
  approval_id: string;
  label: string;
  complete: boolean;
};

export type DecisionAnswer = {
  decision_id: string;
  selected_option: string;
  comment?: string;
};

export type HumanDecisionExport = {
  run_id: string;
  decision_scope: 'next_agent_run';
  final_publication_approval: false;
  approver: {
    name: string;
    role: string;
  };
  decisions: DecisionAnswer[];
  comments: string;
  created_at: string;
};
