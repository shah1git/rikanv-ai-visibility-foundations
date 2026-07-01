# Comparison Production Workflow

## Цель

Подготовить честное сравнение RikaNV с конкурентом или классом устройств.

В agent-first модели сравнение может быть подготовлено как draft, но claims о
превосходстве, конкурентные выводы и публикация требуют явного human approval.

## Шаги

1. Content Strategist формулирует цель сравнения.
2. Comparison Analyst Agent проверяет, сопоставимы ли модели.
3. Site Import / Research Agent собирает только разрешенные sources.
4. Missing data фиксируется явно.
5. Claim Extraction Agent создает comparative draft claims только там, где есть evidence.
6. Evidence Linker Agent связывает source/evidence.
7. Agent Claim Review помечает competitor claims как high-risk.
8. Готовится таблица характеристик.
9. Формулируются сценарные выводы только как draft.
10. Technical Consistency Agent и Bias Check Agent проверяют параметры и честность.
11. Human Owner утверждает или блокирует публикацию.

## Обязательные блоки

- Что известно.
- Каких данных нет.
- Где RikaNV сильнее.
- Где конкурент может быть сильнее.
- Ограничения сравнения.
- Вывод по сценариям, а не абсолютный победитель.

## Ошибки

- Делать победителя без тестов.
- Скрывать сильные стороны конкурента.
- Сравнивать разные классы без пояснения.
- Публиковать agent-generated comparison без human approval.
