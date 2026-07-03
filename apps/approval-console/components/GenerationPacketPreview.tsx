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
    <section className="generator-card packet-preview">
      <div className="section-heading compact">
        <p className="section-kicker">Пакет генерации</p>
        <h3>Article Generation Packet</h3>
        <p>Этот пакет нужен агенту-писателю. Он не публикует статью.</p>
      </div>

      <div className="badge-row">
        <span className="badge">Product Article Writer</span>
        <span className="badge danger">Публикация запрещена</span>
        <span className="badge">LLM не вызывается</span>
      </div>

      <div className="button-row">
        <button className="primary" type="button" onClick={onCopy}>
          Скопировать пакет
        </button>
        <button type="button" onClick={onDownload}>
          Скачать пакет
        </button>
      </div>
      {copyMessage ? <p className="ok-notice inline-notice">{copyMessage}</p> : null}

      <pre className="json-preview">{jsonText}</pre>
    </section>
  );
}
