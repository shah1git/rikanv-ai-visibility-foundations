
import approvalData from '../sample-data/approval-data.run-001.sample.json';
import type { ApprovalData } from './types';

export function getApprovalData(): ApprovalData {
  return approvalData as ApprovalData;
}
