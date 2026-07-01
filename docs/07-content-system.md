# Content Factory

Content Factory производит материалы из Product Truth, Evidence Base и Claim Registry. Ее задача — не “делать больше текстов”, а выпускать полезные форматы для разных аудиторий без потери точности.

В agent-first модели Content Factory не начинается с ручного написания статьи.
Сначала агенты импортируют разрешенные источники, извлекают Product Truth,
создают claims, связывают evidence и готовят draft. Человек утверждает
исключения и публикацию.

Writer Agent не пишет “из головы”. Он получает approved-for-draft claims,
source/evidence, Product Truth, target audience и content task. Если claim
отсутствует, в черновике остается TODO.

## Форматы

- Статьи для выбора и объяснения технических параметров.
- FAQ для частых вопросов.
- Сравнения RikaNV с конкурентами.
- Тестовые отчеты.
- Сервисные материалы и troubleshooting.
- Видео-сценарии для YouTube.
- Telegram-посты.
- VK и Дзен-публикации.
- Дилерские материалы.
- PDF-инструкции и buyer guides.

## Content Atom

Content Atom — это один фактовый пакет, который можно превратить в несколько форматов.

Пример состава:
- 3-7 verified claims;
- список sources;
- список evidence;
- таблица характеристик;
- ограничения;
- FAQ;
- сценарии применения;
- reviewer;
- дата обновления.

Из одного Content Atom можно сделать статью, FAQ, короткий пост, видео-сценарий, дилерскую карточку и обновление product profile.

В agent-first pipeline Content Atom создается агентами из:

- Product Truth extraction;
- linked claims;
- source/evidence records;
- doctrine and technical pre-check notes;
- human exception decisions.

Content Atom не становится publication-ready без final human approval.

## Требования к материалам

Каждый значимый материал должен содержать:
- цель;
- аудиторию;
- claims used;
- sources used;
- дату обновления;
- блок ограничений;
- при необходимости блок “кому подходит / кому не подходит”;
- technical review status;
- bias check status для сравнений.

## Agent-first производство

Минимальный порядок:

1. Site Import Agent создает source snapshot.
2. Product Truth Agent обновляет Product Truth.
3. Claim Extraction Agent создает claims.
4. Evidence Linker Agent связывает sources/evidence.
5. Agent Claim Review выставляет tier и review status.
6. Content Draft Agent готовит черновик только из approved-for-draft claims.
7. Technical Consistency Agent и Doctrine Review Agent делают pre-check.
8. Human Owner утверждает публикацию.
9. Publisher/Repurposer Agent готовит версии для каналов.

## Что остается за человеком

- Утвердить продуктовые приоритеты.
- Разобрать exceptions: blocked, high-risk, performance, competitor, volatile.
- Дать дополнительные источники, если evidence недостаточно.
- Утвердить публикацию.

## Что нельзя делать

- Придумывать характеристики.
- Делать абсолютные выводы без данных.
- Переписывать один материал под разные площадки без новой функции.
- Публиковать сравнение без указания ограничений.
- Скрывать, что материал связан с брендом RikaNV.
- Публиковать agent-generated draft без human approval.
