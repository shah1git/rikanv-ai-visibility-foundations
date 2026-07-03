type Props = {
  onAcceptSafeRecommendations: () => void;
};

export default function RecommendationSummary({ onAcceptSafeRecommendations }: Props) {
  return (
    <section className="recommendation-panel">
      <div>
        <p className="section-kicker">Рекомендуемый безопасный сценарий</p>
        <h2>Система предлагает консервативный вариант</h2>
        <p>
          Этот вариант разрешает только следующий шаг подготовки. Он не является разрешением на публикацию.
        </p>
      </div>

      <ul className="recommendation-list">
        <li>не использовать полевые обещания без тестов;</li>
        <li>писать дальности только как официально заявленные характеристики;</li>
        <li>не использовать цены и наличие;</li>
        <li>не сравнивать с конкурентами;</li>
        <li>оставить публикацию закрытой.</li>
      </ul>

      <div className="primary-action-box">
        <button className="primary large-action" onClick={onAcceptSafeRecommendations} type="button">
          Принять безопасные рекомендации
        </button>
        <p>
          Вы разрешаете только следующий агентный шаг. Публикация по-прежнему запрещена.
        </p>
      </div>
    </section>
  );
}
