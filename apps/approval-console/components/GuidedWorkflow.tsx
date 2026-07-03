type Props = {
  answeredCount: number;
  materialCount: number;
  totalDecisions: number;
};

export default function GuidedWorkflow({ answeredCount, materialCount, totalDecisions }: Props) {
  const remaining = Math.max(totalDecisions - answeredCount, 0);

  return (
    <section className="guided-hero">
      <div className="guided-copy">
        <p className="section-kicker">Что делать сейчас</p>
        <h1>RikaNV AI Console</h1>
        <p className="guided-subtitle">
          Система подготовила материалы. Вам нужно подтвердить безопасный сценарий для следующего шага.
        </p>
        <div className="publication-lock">
          <strong>Публикация сейчас запрещена</strong>
          <span>
            Эта консоль не публикует материалы. Она только собирает решения, чтобы агенты могли подготовить
            следующий пакет.
          </span>
        </div>
      </div>

      <div className="workflow-steps" aria-label="Что нужно сделать">
        <div>
          <span>1</span>
          <strong>Проверьте рекомендации системы</strong>
          <p>Сначала посмотрите безопасный сценарий ниже.</p>
        </div>
        <div>
          <span>2</span>
          <strong>Оставьте рекомендации или измените пункты</strong>
          <p>Можно принять все одной кнопкой или раскрыть отдельные вопросы.</p>
        </div>
        <div>
          <span>3</span>
          <strong>Сохраните решения</strong>
          <p>Полученный файл нужен агенту для следующего шага.</p>
        </div>
      </div>

      <div className="guided-status">
        <span>{materialCount} материала подготовлено</span>
        <span>{remaining === 0 ? 'Все решения заполнены' : `Осталось решений: ${remaining}`}</span>
        <span>Публикация: закрыта</span>
      </div>
    </section>
  );
}
