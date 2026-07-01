# RikaNV.ru Import Log

Дата проверки: 2026-07-01.

Разрешенный источник: `https://rikanv.ru/`.

Сторонние сайты, rikasale.ru, дилерские страницы, маркетплейсы и обзоры не использовались.

## Priority correction

- Lesnik restored to base priority.
- Hypnose treated as product_line.
- Hypnose2 treated as product_line.
- Model-level specs require concrete product pages.

## Human Product Decisions Update

Дата применения: 2026-07-01.

- Pilot owner: владелец проекта RikaNV AI Visibility / руководитель проекта.
- Product Truth owner: технический продуктовый ответственный RikaNV; временно владелец проекта + технический специалист по приборам.
- Technical reviewer: ведущий технический специалист / сервисный инженер RikaNV.
- Doctrine compliance owner: владелец проекта RikaNV AI Visibility.
- Publication owner: контент-ответственный / редактор RikaNV; final publication approval — владелец проекта.
- AI visibility owner: маркетолог-аналитик / контент-аналитик; если отдельного человека нет — контент-ответственный.
- Base Lesnik model for pilot: RikaNV Lesnik2 650L.
- Hypnose2 taxonomy: `product_line`, актуальное поколение / подлинейка внутри направления RikaNV Hypnose.
- Base Hypnose2 model for pilot: RikaNV Hypnose2 650L.

## Checked URLs

| URL | Result | Notes |
|---|---|---|
| https://rikanv.ru/catalog/teplovizionnye-pritsely/rikanv-ovod-l25 | 200 | Product page found |
| https://rikanv.ru/lines/lesnik | 200 | Line page found; 7 Lesnik2 model links found |
| https://rikanv.ru/catalog/teplovizory-nablyudeniya/rikanv-surok-l15 | 200 | Product page found |
| https://rikanv.ru/lines/hypnose | 200 | Line page found; Hypnose2 generation/models listed |
| https://rikanv.ru/lines/hypnose2 | 404 | Separate Hypnose2 line page not found |
| https://rikanv.ru/lines/hypnose-2 | 404 | Second attempt for separate Hypnose2 line page failed |
| https://rikanv.ru/lines/ovod | 200 | Line page found |
| https://rikanv.ru/lines/surok | 200 | Line page found |
| https://rikanv.ru/catalog/teplovizionnye-pritsely | 200 | Catalog page used only to confirm product links |
| https://rikanv.ru/catalog/teplovizory-nablyudeniya | 200 | Catalog page used only to confirm product links |

## Product line vs product model handling

| name | product_kind | product_category | concrete_model_found | model_specs_allowed | notes |
|---|---|---|---|---|---|
| RikaNV Ovod L25 | product_model | thermal_riflescope | yes | yes | Concrete product page found |
| RikaNV Lesnik | product_line | thermal_riflescope | yes | only for selected concrete model | Base priority; line page found; selected model: RikaNV Lesnik2 650L |
| RikaNV Surok L15 | product_model | observation_thermal | yes | yes | Concrete product page found |
| RikaNV Hypnose | product_line | observation_thermal | no separate Hypnose model selected | no for line; yes only for concrete model | Treat as product_line |
| RikaNV Hypnose2 | product_line | observation_thermal | yes | only for selected concrete model | Separate line page not found; selected model: RikaNV Hypnose2 650L |

## Lesnik concrete models found

| model | URL | result | notes |
|---|---|---|---|
| RikaNV Lesnik2 335L | https://rikanv.ru/catalog/teplovizionnye-pritsely/rikanv-lesnik2-335l | 200 | Candidate model |
| RikaNV Lesnik2 360L | https://rikanv.ru/catalog/teplovizionnye-pritsely/rikanv-lesnik2-360l | 200 | Candidate model |
| RikaNV Lesnik2 360L PRO | https://rikanv.ru/catalog/teplovizionnye-pritsely/rikanv-lesnik2-360l-pro | 200 | Candidate model |
| RikaNV Lesnik2 650L | https://rikanv.ru/catalog/teplovizionnye-pritsely/rikanv-lesnik2-650l | 200 | Selected base Lesnik model for pilot |
| RikaNV Lesnik2 650L PRO | https://rikanv.ru/catalog/teplovizionnye-pritsely/rikanv-lesnik2-650l-pro | 200 | Candidate model |
| RikaNV Lesnik2 660L | https://rikanv.ru/catalog/teplovizionnye-pritsely/rikanv-lesnik2-660l | 200 | Candidate model |
| RikaNV Lesnik2 660L PRO | https://rikanv.ru/catalog/teplovizionnye-pritsely/rikanv-lesnik2-660l-pro | 200 | Candidate model |

## Hypnose/Hypnose2 concrete models found

| model | URL | result | notes |
|---|---|---|---|
| RikaNV Hypnose2 335L | https://rikanv.ru/catalog/teplovizory-nablyudeniya/rikanv-hypnose2-335l | 200 | Concrete model page found |
| RikaNV Hypnose2 650L | https://rikanv.ru/catalog/teplovizory-nablyudeniya/rikanv-hypnose2-650l | 200 | Selected base Hypnose2 model for pilot |
| RikaNV Hypnose2 660D | https://rikanv.ru/catalog/teplovizory-nablyudeniya/rikanv-hypnose2-660d | 200 | Concrete model page found |

## Handling decisions

- Lesnik is not later. It remains base Product Truth priority.
- Lesnik line-level claims are allowed if directly supported by `/lines/lesnik`.
- Lesnik model-level claims for the first pilot use RikaNV Lesnik2 650L.
- Hypnose is `product_line`, not a concrete model.
- Hypnose2 is treated as `product_line`; separate line page was not found, but Hypnose2 models are listed on the official Hypnose line page.
- Hypnose2 model-level claims for the first pilot use RikaNV Hypnose2 650L.
- Hypnose/Hypnose2 model-level specs require concrete model pages.
- Marketing phrases from line pages are not converted into verified claims.
