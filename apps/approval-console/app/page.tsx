import ApprovalConsole from '../components/ApprovalConsole';
import { getApprovalData } from '../lib/sampleData';
import { databaseMode } from '../lib/decisionStore';
import { loadDefaultArticlePrompt } from '../lib/defaultArticlePrompt';
import { loadMaterialPreviews } from '../lib/loadMaterialPreviews';
import type { ApprovalData } from '../lib/types';

function assertFinalApprovalGateClosed(data: ApprovalData) {
  if (data.final_publication_approval !== false) {
    throw new Error('Approval Console MVP requires final_publication_approval=false');
  }
}

function assertMaterialsAreNotPublicationReady(data: ApprovalData) {
  const readyMaterials = data.materials.filter((material) => material.publication_ready);

  if (readyMaterials.length > 0) {
    const names = readyMaterials.map((material) => material.material_id).join(', ');
    throw new Error(`Approval Console MVP cannot load publication-ready materials: ${names}`);
  }
}

function assertDecisionScopeIsLimited(data: ApprovalData) {
  const invalidDecision = data.decisions.find((decision) => !decision.requires_final_approval);

  if (invalidDecision) {
    throw new Error(`Decision ${invalidDecision.decision_id} must keep final approval required`);
  }
}

function assertRequiredGatesRemainOpen(data: ApprovalData) {
  const completedApprovals = data.required_approvals.filter((approval) => approval.complete);

  if (completedApprovals.length > 0) {
    const names = completedApprovals.map((approval) => approval.approval_id).join(', ');
    throw new Error(`Approval gates must remain open in MVP sample data: ${names}`);
  }
}

function loadSafeApprovalData() {
  const data = getApprovalData();

  assertFinalApprovalGateClosed(data);
  assertMaterialsAreNotPublicationReady(data);
  assertDecisionScopeIsLimited(data);
  assertRequiredGatesRemainOpen(data);

  return data;
}

function addMaterialPreviews(data: ApprovalData): ApprovalData {
  const previews = loadMaterialPreviews(data.materials);

  return {
    ...data,
    materials: data.materials.map((material) => ({
      ...material,
      preview_error: previews[material.material_id]?.error,
      preview_file_name: previews[material.material_id]?.fileName,
      preview_found: previews[material.material_id]?.found ?? false,
      preview_markdown: previews[material.material_id]?.markdown,
    })),
  };
}

export default function Home() {
  const data = addMaterialPreviews(loadSafeApprovalData());
  const mode = databaseMode();
  const defaultArticlePrompt = loadDefaultArticlePrompt();

  return (
    <ApprovalConsole
      data={data}
      databaseMode={mode}
      defaultArticlePrompt={defaultArticlePrompt}
    />
  );
}
