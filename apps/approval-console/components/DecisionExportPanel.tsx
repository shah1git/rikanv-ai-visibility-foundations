type Props = {
  approverName: string;
  comments: string;
  saveMessage: string;
  onApproverNameChange: (value: string) => void;
  onCommentsChange: (value: string) => void;
  onSave: () => void;
  onExport: () => void;
};

export default function DecisionExportPanel({
  approverName,
  comments,
  saveMessage,
  onApproverNameChange,
  onCommentsChange,
  onSave,
  onExport,
}: Props) {
  return (
    <>
      <label htmlFor="approver-name">Approver name for next-agent-run export</label>
      <input
        id="approver-name"
        value={approverName}
        onChange={(event) => onApproverNameChange(event.target.value)}
        placeholder="TODO: RikaNV approver"
      />

      <label htmlFor="global-comments">Comments</label>
      <textarea
        id="global-comments"
        value={comments}
        onChange={(event) => onCommentsChange(event.target.value)}
      />

      <div className="actions">
        <button className="primary" onClick={onSave} type="button">
          Save decisions
        </button>
        <button onClick={onExport} type="button">
          Export JSON
        </button>
        <button disabled type="button">
          Publish disabled
        </button>
      </div>

      {saveMessage ? <p className="notice">{saveMessage}</p> : null}
    </>
  );
}
