type Props = {
  configured: boolean | null;
  generating: boolean;
  message: string;
};

export default function ArticleGeneratorStatus({ configured, generating, message }: Props) {
  const badgeClass = configured ? 'badge ok' : 'badge warning';
  const label = configured === null ? 'LLM проверяется' : configured ? 'LLM настроен' : 'LLM не настроен';

  return (
    <div className="generator-status">
      <span className={badgeClass}>{label}</span>
      <span className="badge danger">Публикация запрещена</span>
      <span className="badge">{generating ? 'Генерация идет...' : message}</span>
    </div>
  );
}
