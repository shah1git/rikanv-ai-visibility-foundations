type Props = {
  approverName: string;
  comments: string;
  copyMessage: string;
  databaseMode: 'postgres' | 'export_only';
  jsonText: string;
  remainingCount: number;
  saveMessage: string;
  totalDecisions: number;
  onApproverNameChange: (value: string) => void;
  onCommentsChange: (value: string) => void;
  onCopy: () => void;
  onSave: () => void;
  onDownload: () => void;
};

export default function DecisionExportPanel({
  approverName,
  comments,
  copyMessage,
  databaseMode,
  jsonText,
  remainingCount,
  saveMessage,
  totalDecisions,
  onApproverNameChange,
  onCommentsChange,
  onCopy,
  onSave,
  onDownload,
}: Props) {
  return (
    <>
      <h2>Файл решений для агента</h2>
      <p className="notice">
        После выбора вариантов скачайте или скопируйте JSON. Этот файл нужен агенту для следующего шага.
        Он не разрешает публикацию.
      </p>

      <p className={remainingCount === 0 ? 'notice ok-notice' : 'notice warning'}>
        {remainingCount === 0
          ? `Все решения заполнены: ${totalDecisions}/${totalDecisions}.`
          : `Осталось решений: ${remainingCount}. Можно принять безопасные рекомендации одной кнопкой.`}
      </p>

      {databaseMode === 'export_only' ? (
        <p className="notice warning">
          Сохранение в PostgreSQL недоступно. Можно скачать JSON и передать агенту вручную.
        </p>
      ) : null}

      <label htmlFor="approver-name">Кто заполняет решения</label>
      <input
        id="approver-name"
        value={approverName}
        onChange={(event) => onApproverNameChange(event.target.value)}
        placeholder="Например: владелец проекта RikaNV"
      />

      <label htmlFor="global-comments">Общий комментарий</label>
      <textarea
        id="global-comments"
        placeholder="Что агенту важно учесть на следующем шаге"
        value={comments}
        onChange={(event) => onCommentsChange(event.target.value)}
      />

      <details className="json-details">
        <summary>Показать технический JSON</summary>
        <p>
          В JSON всегда остается <code>final_publication_approval: false</code>.
        </p>
        <div className="json-preview" aria-label="Предпросмотр JSON">
          <pre>{jsonText}</pre>
        </div>
      </details>

      <div className="actions">
        <button className="primary" onClick={onSave} type="button">
          Сохранить решения
        </button>
        <button onClick={onCopy} type="button">
          Скопировать JSON
        </button>
        <button onClick={onDownload} type="button">
          Скачать JSON
        </button>
      </div>

      {copyMessage ? <p className="notice">{copyMessage}</p> : null}
      {saveMessage ? <p className="notice">{saveMessage}</p> : null}
    </>
  );
}
