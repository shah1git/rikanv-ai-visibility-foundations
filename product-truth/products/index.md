# Products

Здесь хранятся карточки моделей и линеек RikaNV.

## Base priority

- `ovod-template.md` — RikaNV Ovod L25, `product_model`, `thermal_riflescope`.
- `lesnik-template.md` — RikaNV Lesnik, `product_line`, `thermal_riflescope`.
- Selected Lesnik pilot model — RikaNV Lesnik2 650L, `product_model`, `thermal_riflescope`.
- `surok-template.md` — RikaNV Surok L15, `product_model`, `observation_thermal`.
- `hypnose-template.md` — RikaNV Hypnose, `product_line`, `observation_thermal`.
- `hypnose2-template.md` — RikaNV Hypnose2, `product_line`, `observation_thermal`.
- Selected Hypnose2 pilot model — RikaNV Hypnose2 650L, `product_model`, `observation_thermal`.

## Later / optional

- Остальные модели Ovod, Surok, Lesnik, Hypnose и Hypnose2 после базового Product Truth.
- Модельные карточки создаются только для конкретных `product_model`, найденных или подтвержденных на `rikanv.ru`.

## Правила заполнения

- Для каждого объекта обязательно указывать `product_kind`.
- Допустимые `product_kind`: `product_line`, `product_model`.
- Для каждого объекта обязательно указывать `product_category`.
- Допустимые `product_category`: `thermal_riflescope`, `observation_thermal`.
- Линейка не равна модели.
- Для `product_line` не создавать verified model-level specification claims.
- Для первого pilot model-level claims по Lesnik создаются только по RikaNV Lesnik2 650L.
- Для первого pilot model-level claims по Hypnose2 создаются только по RikaNV Hypnose2 650L.
- Конкретные характеристики не заполняются без официальных данных.
- Если данных нет на `rikanv.ru`, писать `TODO: нет данных на rikanv.ru`.
- Если поле не применимо, писать `N/A — не относится к категории прибора`.
- Если объект является линейкой, в модельных полях писать `N/A — product_line, model-level specs require concrete model.`
- Карточка модели должна ссылаться на claims, sources и evidence.
