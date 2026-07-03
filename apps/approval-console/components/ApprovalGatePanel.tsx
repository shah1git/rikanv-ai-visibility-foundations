import type { RequiredApproval } from '../lib/types';

type Props = {
  approvals: RequiredApproval[];
};

export default function ApprovalGatePanel({ approvals }: Props) {
  return (
    <>
      <h2>Final Approval Gate</h2>
      <p className="notice danger">Final publication approval is disabled in MVP.</p>
      {approvals.map((approval) => (
        <p key={approval.approval_id}>
          □ {approval.label}: {approval.complete ? 'complete' : 'open'}
        </p>
      ))}
    </>
  );
}
