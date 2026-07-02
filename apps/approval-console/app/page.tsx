
import ApprovalConsole from '../components/ApprovalConsole';
import { getApprovalData } from '../lib/data';
import { databaseMode } from '../lib/decisionStore';

export default function Home() {
  return <ApprovalConsole data={getApprovalData()} databaseMode={databaseMode()} />;
}
