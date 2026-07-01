# Редакционный процесс

Редакционный процесс нужен, чтобы контент был полезным, проверяемым и безопасным для бренда.

После agent-first pivot редакционный процесс начинается не с ручной идеи статьи,
а с agent site import, Product Truth extraction и Claim Registry. Редактор
управляет задачами и утверждением, но не переносит характеристики вручную.

## 1. Trigger

Источник задачи:
- AI visibility gap;
- вопрос покупателя;
- сервисное обращение;
- дилерский запрос;
- новая прошивка;
- тест;
- появление конкурента;
- сезонный сценарий.

Trigger не становится задачей, пока агент не может связать его с Product Truth,
claims, sources и ожидаемым форматом.

## 2. Agent Site Import

Site Import Agent импортирует разрешенные страницы `rikanv.ru`, фиксирует дату
проверки и создает source snapshot.

## 3. Product Truth Extraction

Product Truth Agent извлекает product_line/product_model, product_category,
характеристики, line-level сведения и TODO.

## 4. Claim Extraction And Evidence Linking

Claim Extraction Agent создает claims, а Evidence Linker Agent связывает каждый
claim с source_id/evidence_id или помечает gap.

## 5. Agent Claim Review

Agent Claim Review классифицирует claims по tier, risk flags и review status.
Человек получает только exceptions.

## 6. Content Task

Content task фиксирует:
- тему;
- аудиторию;
- формат;
- цель;
- предполагаемые claims;
- нужные sources и evidence;
- риск предвзятости;
- reviewer;
- канал публикации.

## 7. Draft Generation

Content Draft Agent готовит материал на основе claims, sources и шаблона
формата. Все пробелы помечаются как `TODO: нужны данные RikaNV`.

## 8. Technical / Doctrine Pre-Check

Technical Consistency Agent и Doctrine Review Agent проверяют draft до human
approval:

- характеристики;
- терминологию;
- таблицы;
- выводы;
- ограничения;
- соответствие sources.
- соответствие doctrine.

## 9. Bias Check

Обязателен для сравнений, buyer guides и материалов с конкурентами.

Проверяется:
- нет ли рекламных натяжек;
- указаны ли слабые места RikaNV;
- честно ли описан конкурент;
- нет ли абсолютного победителя без тестов.

## 10. Human Exception Review

Человек смотрит не все claims вручную, а только:

- blocked_for_publication;
- human_review_required;
- needs_rewording with high risk;
- competitor comparison;
- performance claims;
- confidential or volatile claims.

## 11. Human Publication Approval

Человек утверждает публикацию. Digital Staff и агенты не имеют права публиковать
материал самостоятельно.

## 12. Publication

Материал публикуется с датой, источниками, внутренними ссылками и статусом review.

## 13. Update After New Evidence

После новых тестов, прошивок, цен, наличия или сервисных данных материал обновляется. Устаревшие claims переводятся в `outdated`.
