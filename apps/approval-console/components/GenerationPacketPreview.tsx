import type { ArticleGenerationPacket } from '../lib/types';

type Props = {
  packet: ArticleGenerationPacket;
  onCopy: () => void;
  onDownload: () => void;
  copyMessage: string;
};

export default function GenerationPacketPreview({ packet, onCopy, onDownload, copyMessage }: Props) {
  const jsonText = JSON.stringify(packet, null, 2);

  return (
    <details className="generator-card packet-preview">
      <summary>Технические детали: generation packet JSON</summary>
      <div className="section-heading compact">
        <p className="section-kicker">Отладка</p>
        <h3>Article Generation Packet</h3>
        <p>Этот JSON нужен агентам и отладке. Главный результат для пользователя — Markdown-статья.</p>
      </div>

      <div className="badge-row">
        <span className="badge">Product Article Writer</span>
        <span className="badge danger">Публикация запрещена</span>
        <span className="badge">Технические детали</span>
      </div>

      <div className="button-row">
        <button type="button" onClick={onCopy}>
          Скопировать пакет
        </button>
        <button type="button" onClick={onDownload}>
          Скачать пакет
        </button>
      </div>
      {copyMessage ? <p className="ok-notice inline-notice">{copyMessage}</p> : null}

      <pre className="json-preview">{jsonText}</pre>
    </details>
  );
}
