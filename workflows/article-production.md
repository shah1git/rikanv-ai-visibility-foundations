# Article Production Workflow

## Цель

Провести материал от agent import до публикации без неподтвержденных фактов.

Этот workflow больше не начинается с ручного написания статьи. Content Draft
Agent пишет черновик только после Product Truth extraction, claim extraction и
agent claim review.

## Шаги

1. Site Import Agent импортирует разрешенные страницы `rikanv.ru`.
2. Product Truth Agent извлекает Product Truth.
3. Claim Extraction Agent создает claims.
4. Evidence Linker Agent связывает source/evidence.
5. Agent Claim Review выставляет tiers, risk flags и review statuses.
6. Human Owner смотрит только exceptions.
7. Content Draft Agent готовит draft из approved-for-draft claims.
8. GEO/SEO Agent улучшает структуру.
9. Technical Consistency Agent и Doctrine Review Agent делают pre-check.
10. Human Owner утверждает публикацию.
11. Publisher Repurposer готовит версию для канала.
12. После публикации ссылка добавляется в реестр.

## Артефакты

- Content task.
- Source snapshot.
- Product Truth extraction.
- Claims used.
- Sources used.
- Agent Claim Review Board.
- Draft article.
- Review.
- Published URL or reference.

## Ошибки

- Начать писать без claims.
- Скрыть TODO.
- Считать agent review финальным approval.
- Опубликовать без human approval.
