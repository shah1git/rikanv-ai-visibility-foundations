# 30-Day Definition of Done

## Минимальный успех

Через 30 дней пилот считается успешным, если выполнены условия ниже.

- Заполнен Product Truth по Ovod L25 хотя бы на 70%.
- Заполнен Product Truth по Lesnik:
  - line-level минимум на 70%;
  - model-level по RikaNV Lesnik2 650L минимум на 70%.
- Заполнен Product Truth по Surok L15 хотя бы на 70%.
- Заполнен line-level Product Truth по Hypnose и Hypnose2.
- Заполнен Product Truth по RikaNV Hypnose2 650L минимум на 70%.
- У каждого объекта указан `product_kind` и `product_category`.
- Прицелы и наблюдательные тепловизоры не смешаны.
- Agent site import обработал официальные страницы `rikanv.ru` по выбранным продуктам и линейкам.
- Product Truth создан или обновлен агентом на основе source snapshot.
- Создано 30 claims, из них минимум 10 `verified` или `verified line-level`.
- Agent Claim Review проставил tiers, agent_review_status и risk flags.
- Человек проверил только exceptions, а не все 30 claims вручную.
- Проведен baseline по 20 запросам минимум в 3 AI-системах.
- Baseline покрывает прицелы и наблюдательные приборы.
- Baseline фиксирует ошибки смешения `product_line` и `product_model`.
- Создан gap analysis.
- Подготовлены 5 priority content tasks:
  1. Ovod L25.
  2. Lesnik2 650L.
  3. Surok L15.
  4. Hypnose2 650L.
- Подготовлен line-level content task по Hypnose/Hypnose2.
- Content Draft Agent подготовил минимум 4 drafts:
  1. Ovod L25.
  2. Lesnik2 650L.
  3. Surok L15.
  4. Hypnose2 650L.
- Минимум 2 drafts прошли technical / doctrine pre-check.
- Минимум 2 drafts прошли human approval или получили конкретные required changes.
- Минимум 1-2 материала опубликованы или готовы к публикации.
- Назначены owners.
- Составлен отчет по результатам пилота.

## Owners must be assigned

| Роль | Owner |
|---|---|
| Pilot owner | Владелец проекта RikaNV AI Visibility / руководитель проекта |
| Product Truth owner | Технический продуктовый ответственный RikaNV; временно владелец проекта + технический специалист по приборам |
| Technical reviewer | Ведущий технический специалист / сервисный инженер RikaNV |
| Doctrine compliance owner | Владелец проекта RikaNV AI Visibility |
| Publication owner | Контент-ответственный / редактор RikaNV; final approval — владелец проекта |
| AI visibility owner | Маркетолог-аналитик / контент-аналитик; если отдельного человека нет — контент-ответственный |

## Если Doctrine недоступна

- Публикация может быть отложена.
- Пилот считается частично завершенным.
- Blocker должен быть описан в `reviews/blocker-rikanv-doctrine-access.md`.
- Материалы могут быть подготовлены как draft, но не должны уходить в публикацию без doctrine review.

## Что НЕ считается успехом

- Hypnose/Hypnose2 описаны как конкретные модели без подтверждения.
- Lesnik оставлен в later.
- Specs Lesnik2 650L перенесены на всю линейку Lesnik.
- Specs Hypnose2 650L перенесены на всю линейку Hypnose2.
- Claims без source/evidence опубликованы.
- Line-level claims смешаны с model-level specs.
- Материалы опубликованы без doctrine compliance review.
- Заполнить много шаблонов без реальных данных RikaNV.
- Написать статьи вручную или агентом без claims.
- Применить оружейные поля к Surok L15, Hypnose или Hypnose2 без official source.
- Опубликовать сравнение с конкурентом без данных и bias check.
- Провести AI baseline без сохранения ответов.
- Считать упоминание RikaNV в одном AI-ответе доказательством результата.
- Получить 30 draft claims без источников и считать их verified.
- Создать runtime или agent framework вместо проверки agent-first операционного процесса.
- Считать agent review финальным publication approval.

## Что может остановить пилот

- Нет доступа к официальным страницам `rikanv.ru`.
- Нет технического reviewer.
- Нет doctrine compliance reviewer.
- Нет человека, который может дать human approval.
- Сервисные данные нельзя использовать даже в обезличенном виде.
- Сравнительные темы требуют данных, которых нет.
- Команда пытается начать с публикаций, а не с Product Truth.
- Команда пытается вручную переписывать весь сайт вместо agent import.
- Команда хочет публиковать claims о надежности, влажности, тумане, дожде, стабильности СТП или реальной полевой дальности без тестов.

## Какие решения принять после 30 дней

- Продолжать пилот еще на 30 дней или переходить к регулярному процессу.
- Оставить Lesnik2 650L базовой моделью Lesnik или оформить отдельное решение о переходе на PRO-версию.
- Оставить Hypnose2 650L базовой моделью Hypnose2 или выбрать другую модель для следующего этапа.
- Какие claims перевести в verified, disputed, outdated или rejected.
- Какие материалы публиковать, какие оставить в draft.
- Какие AI gaps закрывать следующими.
- Расширять baseline с 20 до 50 запросов или нет.
- Нужны ли первые тестовые отчеты.
- Какие роли можно оставить объединенными, а какие выделить отдельно.
- Есть ли смысл начинать ограниченную автоматизацию.

## Итоговый отчет пилота

В конце 30 дней подготовить короткий отчет:

- Что было сделано.
- Какие данные подтвердились.
- Какие данные отсутствуют.
- Какие claims verified.
- Какие materials готовы.
- Какой baseline AI visibility получен.
- Какие конкуренты чаще всего упоминались.
- Какие ошибки AI найдены.
- Были ли ошибки смешения категорий.
- Были ли ошибки смешения `product_line` и `product_model`.
- Какие следующие 5 задач.
