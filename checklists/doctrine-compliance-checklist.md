# Doctrine Compliance Checklist

Проверка проводится перед публикацией Product Truth, claims, статей, FAQ, сравнений и AI Visibility материалов.

Источник: `https://github.com/shah1git/rikanv-doctrine`.

## Product Truth

- [ ] У продукта указана категория: `thermal_riflescope` или `observation_thermal`.
- [ ] Ovod L25 не смешан с наблюдательными приборами.
- [ ] Surok L15 и Hypnose не описаны как прицелы.
- [ ] Поля прицелов не заполнены для Surok L15/Hypnose без official source.
- [ ] Все характеристики взяты из `rikanv.ru` или отмечены как `TODO: нет данных на rikanv.ru`.
- [ ] Цены и наличие отмечены как volatile, если используются.

## Claims

- [ ] Каждый claim имеет source_id и evidence_id или явно остается draft.
- [ ] `verified` стоит только там, где source прямо подтверждает statement.
- [ ] Official product page не используется как доказательство превосходства.
- [ ] Сценарные claims не опубликованы как verified без review.
- [ ] Comparative claims не опубликованы без тестов, competitor sources, bias check и human approval.
- [ ] Нет claims “лучший”, “не имеет аналогов”, “превосходит конкурентов”, “самый надежный”, “самый точный”.

## Content

- [ ] Текст не использует маркетинговые эпитеты и давление.
- [ ] Нет фейковой срочности, дефицита, рейтингов, звезд и фейковых отзывов.
- [ ] Нет кальки с английских маркетинговых шаблонов.
- [ ] Нет формулировок “теперь честно”, “реальные характеристики”, “наконец-то качество”.
- [ ] Каждый факт можно указать в Product Truth, Claim Registry или official source.
- [ ] Surok/Hypnose описаны как наблюдательные приборы.
- [ ] Ovod L25 описан как тепловизионный прицел.

## AI Visibility

- [ ] Baseline покрывает прицелы и наблюдательные тепловизоры.
- [ ] Category errors фиксируются отдельно.
- [ ] AI-ответ не считается источником истины.
- [ ] Ошибки AI превращаются в Product Truth или content gaps.

## Digital Staff

- [ ] Writer не является technical reviewer своего материала.
- [ ] Publisher не публикует без human approval.
- [ ] Doctrine compliance reviewer назначен.
- [ ] Любой недостающий факт помечен как TODO, а не додуман.

## Result

- [ ] pass
- [ ] needs revision
- [ ] blocked

Reviewer: TODO

Date: TODO

Notes: TODO
