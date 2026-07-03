# Prompts

Промпты предназначены для agent-first работы с import, Product Truth, claims,
review и content drafts. Они не являются runtime и не требуют выбора SDK или
фреймворка.

## Правила использования

- В промпт передаются только разрешенные sources, evidence и claims.
- Модель не должна добавлять факты.
- Все gaps помечаются как `TODO: нужны данные RikaNV`.
- Вывод AI не является human approval.
- `rikanv.ru` является primary public source для первого agent import.
- Final publication approval всегда остается за человеком.

## Список

- site import agent;
- product truth extraction;
- research brief;
- claim extraction;
- agent claim review;
- doctrine review;
- article draft;
- product article writer (статьи из публичных JSON Media Hub: каталог + спек-схемы);
- comparison draft;
- technical review;
- bias check;
- GEO content optimizer;
- repurpose content;
- AI answer test;
- service article;
- product profile update.
