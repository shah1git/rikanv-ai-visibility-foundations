# AI Visibility Hypotheses

| hypothesis_id | Гипотеза | Статус | Как проверить | Какие данные нужны | Что подтвердит | Что опровергнет |
|---|---|---|---|---|---|---|
| aih-001 | AI чаще упоминает бренды, у которых есть структурированные сравнения | draft | сравнить Mention Rate по темам до/после сравнений | query logs, comparison pages | рост упоминаний в comparison queries | нет изменений после индексации и времени |
| aih-002 | AI чаще ошибается по брендам, у которых нет канонических страниц моделей | draft | измерить Error Rate до/после product pages | answer logs, product profiles | снижение ошибок по характеристикам | ошибки остаются на том же уровне |
| aih-003 | FAQ и таблицы повышают вероятность корректного ответа | draft | добавить FAQ/table blocks и сравнить Source Attribution Quality | published pages, answer logs | AI цитирует или пересказывает точнее | ответы не меняются |
| aih-004 | Внешние независимые обзоры усиливают доверие | draft | сравнить Citation Quality после появления независимых обзоров | обзорные sources, answer logs | AI чаще ссылается на качественные внешние sources | внешние обзоры не влияют |
| aih-005 | Сервисные материалы помогают RikaNV появляться в запросах про обслуживание в России | draft | проверить service query group | service pages, answer logs | рост Mention Rate в service queries | RikaNV не появляется в service intent |
