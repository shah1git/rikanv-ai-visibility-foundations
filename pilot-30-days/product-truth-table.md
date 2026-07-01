# Product Truth Table

Эта таблица нужна для первого ручного пилота. Основной источник данных на этапе пилота — `https://rikanv.ru/`.

Если поля нет на `rikanv.ru`, писать: `TODO: нет данных на rikanv.ru`.

Если нужна внутренняя проверка RikaNV, писать: `TODO: нужна проверка RikaNV`.

Если поле не применимо к категории прибора, писать: `N/A — не относится к категории прибора`.

Если объект является линейкой, в модельных полях писать: `N/A — product_line, model-level specs require concrete model.`

Цена и наличие не записываются как постоянная характеристика. Их можно указывать только в `notes` с датой проверки и пометкой `volatile`.

## Taxonomy

| Поле | Допустимые значения | Правило |
|---|---|---|
| product_kind | `product_line`, `product_model` | Линейка не равна конкретной модели |
| product_category | `thermal_riflescope`, `observation_thermal` | Прицелы и наблюдательные приборы не смешивать |

## Required fields

`product_id`, `official_name`, `product_kind`, `parent_line`, `product_category`, `product_line`, `model_status`, `current_or_legacy`, `short_positioning`, `primary_use`, `key_scenarios`, `not_recommended_for`, `sensor`, `lens`, `NETD`, `display`, `detection_range`, `recognition_range`, `identification_range`, `field_of_view`, `magnification`, `digital_zoom`, `video_recording`, `photo_recording`, `storage`, `Wi-Fi`, `app/connectivity`, `battery/power`, `protection_class`, `operating_temperature`, `warranty`, `service_notes`, `known_limitations`, `main_competitors`, `source_id`, `evidence_id`, `owner`, `reviewer`, `status`, `last_reviewed_at`, `notes`.

## Base Product Truth scope

| product_id | official_name | product_kind | parent_line | product_category | product_line | model_status | current_or_legacy | short_positioning | primary_use | source_id | evidence_id | owner | reviewer | status | last_reviewed_at | notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| product_ovod_l25 | RikaNV Ovod L25 | product_model | RikaNV Ovod | thermal_riflescope | Ovod | current | current | Тепловизионный прицел линейки Ovod | TODO: нет данных на rikanv.ru | src_rikanv_ru_ovod_l25_20260701 | ev_rikanv_ru_ovod_l25_specs_20260701 | TODO | TODO | draft | 2026-07-01 | Цена и наличие volatile; проверять дату |
| line_lesnik | RikaNV Lesnik | product_line | N/A | thermal_riflescope | Lesnik | line-level | current | Линейка тепловизионных прицелов RikaNV | TODO: нужна проверка RikaNV для сценариев пилота | src_rikanv_ru_lesnik_line_20260701 | ev_rikanv_ru_lesnik_line_20260701 | TODO | TODO | draft | 2026-07-01 | Базовый приоритет; нужна конкретная модель Lesnik для model-level claims |
| product_surok_l15 | RikaNV Surok L15 | product_model | RikaNV Surok | observation_thermal | Surok | current | current | Тепловизор / камера для наблюдения | Наблюдение, поиск, видеозапись | src_rikanv_ru_surok_l15_20260701 | ev_rikanv_ru_surok_l15_specs_20260701 | TODO | TODO | draft | 2026-07-01 | Наблюдательный прибор; не заполнять оружейные поля без official source |
| line_hypnose | RikaNV Hypnose | product_line | N/A | observation_thermal | Hypnose | line-level | current | Линейка наблюдательных тепловизионных приборов | Наблюдение, поиск, видеозапись | src_rikanv_ru_hypnose_line_20260701 | ev_rikanv_ru_hypnose_line_20260701 | TODO | TODO | draft | 2026-07-01 | Product line; не использовать как конкретную модель |
| line_hypnose2 | RikaNV Hypnose2 | product_line | N/A | observation_thermal | Hypnose2 | line-level | current | Линейка/поколение наблюдательных приборов внутри страницы Hypnose | Наблюдение, поиск, видеозапись | src_rikanv_ru_hypnose_line_20260701 | ev_rikanv_ru_hypnose2_line_20260701 | TODO | TODO | draft | 2026-07-01 | Отдельная страница `/lines/hypnose2` не найдена; модели Hypnose2 перечислены на странице `/lines/hypnose` |

## Model-level specs for base model rows

| product_id | sensor | lens | NETD | display | detection_range | recognition_range | identification_range | field_of_view | magnification | digital_zoom | video_recording | photo_recording | storage | Wi-Fi | app/connectivity | battery/power | protection_class | operating_temperature | warranty |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| product_ovod_l25 | 256×192 | 25 мм F/0.9 | TODO: нет данных на rikanv.ru | TODO: нет данных на rikanv.ru | 1300 м | 650 м | 433 м | TODO: нет данных на rikanv.ru | TODO: нет данных на rikanv.ru | TODO: нет данных на rikanv.ru | TODO: нет данных на rikanv.ru | TODO: нет данных на rikanv.ru | TODO: нет данных на rikanv.ru | TODO: нет данных на rikanv.ru | TODO: нет данных на rikanv.ru | 18650; до 10 часов по official page | IP67 | -20…+50 °C | TODO: нет данных на rikanv.ru |
| line_lesnik | N/A — product_line, model-level specs require concrete model. | N/A — product_line, model-level specs require concrete model. | N/A — product_line, model-level specs require concrete model. | N/A — product_line, model-level specs require concrete model. | N/A — product_line, model-level specs require concrete model. | N/A — product_line, model-level specs require concrete model. | N/A — product_line, model-level specs require concrete model. | N/A — product_line, model-level specs require concrete model. | N/A — product_line, model-level specs require concrete model. | N/A — product_line, model-level specs require concrete model. | N/A — product_line, model-level specs require concrete model. | N/A — product_line, model-level specs require concrete model. | N/A — product_line, model-level specs require concrete model. | N/A — product_line, model-level specs require concrete model. | N/A — product_line, model-level specs require concrete model. | N/A — product_line, model-level specs require concrete model. | N/A — product_line, model-level specs require concrete model. | N/A — product_line, model-level specs require concrete model. | N/A — product_line, model-level specs require concrete model. |
| product_surok_l15 | 256×192 | 15 мм F/0.9 | ≤25 мК | AMOLED 1024×768 | 750 м | 375 м | 250 м | 11.7°×8.8° | TODO: нет данных на rikanv.ru | TODO: нет данных на rikanv.ru | Да, по official page | TODO: нет данных на rikanv.ru | TODO: нет данных на rikanv.ru | TODO: нет данных на rikanv.ru | TODO: нет данных на rikanv.ru | 18650; до 10 часов по official page | IP67 | -20…+50 °C | TODO: нет данных на rikanv.ru |
| line_hypnose | N/A — product_line, model-level specs require concrete model. | N/A — product_line, model-level specs require concrete model. | N/A — product_line, model-level specs require concrete model. | N/A — product_line, model-level specs require concrete model. | N/A — product_line, model-level specs require concrete model. | N/A — product_line, model-level specs require concrete model. | N/A — product_line, model-level specs require concrete model. | N/A — product_line, model-level specs require concrete model. | N/A — product_line, model-level specs require concrete model. | N/A — product_line, model-level specs require concrete model. | N/A — product_line, model-level specs require concrete model. | N/A — product_line, model-level specs require concrete model. | N/A — product_line, model-level specs require concrete model. | N/A — product_line, model-level specs require concrete model. | N/A — product_line, model-level specs require concrete model. | N/A — product_line, model-level specs require concrete model. | N/A — product_line, model-level specs require concrete model. | N/A — product_line, model-level specs require concrete model. | N/A — product_line, model-level specs require concrete model. |
| line_hypnose2 | N/A — product_line, model-level specs require concrete model. | N/A — product_line, model-level specs require concrete model. | N/A — product_line, model-level specs require concrete model. | N/A — product_line, model-level specs require concrete model. | N/A — product_line, model-level specs require concrete model. | N/A — product_line, model-level specs require concrete model. | N/A — product_line, model-level specs require concrete model. | N/A — product_line, model-level specs require concrete model. | N/A — product_line, model-level specs require concrete model. | N/A — product_line, model-level specs require concrete model. | N/A — product_line, model-level specs require concrete model. | N/A — product_line, model-level specs require concrete model. | N/A — product_line, model-level specs require concrete model. | N/A — product_line, model-level specs require concrete model. | N/A — product_line, model-level specs require concrete model. | N/A — product_line, model-level specs require concrete model. | N/A — product_line, model-level specs require concrete model. | N/A — product_line, model-level specs require concrete model. | N/A — product_line, model-level specs require concrete model. |

## Riflescope-only fields

| product_id | reticle | zeroing_profiles | ballistic_calculator | LRF | recoil_rating | eye_relief | mount |
|---|---|---|---|---|---|---|---|
| product_ovod_l25 | TODO: нет данных на rikanv.ru | 6 профилей пристрелки по official page | Указан на official page | TODO: нет данных на rikanv.ru | до 6000 Дж по official page | TODO: нет данных на rikanv.ru | Picatinny Rail в комплекте по official page |
| line_lesnik | N/A — product_line, model-level specs require concrete model. | N/A — product_line, model-level specs require concrete model. | Line-level: расширенный баллистический контур указан на странице линии; model-level specs require concrete model. | Line-level: модели с LRF перечислены на странице линии; model-level specs require concrete model. | N/A — product_line, model-level specs require concrete model. | N/A — product_line, model-level specs require concrete model. | N/A — product_line, model-level specs require concrete model. |
| product_surok_l15 | N/A — не относится к категории прибора | N/A — не относится к категории прибора | N/A — не относится к категории прибора | N/A — не относится к категории прибора | N/A — не относится к категории прибора | N/A — не относится к категории прибора | N/A — не относится к категории прибора |
| line_hypnose | N/A — не относится к категории прибора | N/A — не относится к категории прибора | N/A — не относится к категории прибора | N/A — не относится к категории прибора | N/A — не относится к категории прибора | N/A — не относится к категории прибора | N/A — не относится к категории прибора |
| line_hypnose2 | N/A — не относится к категории прибора | N/A — не относится к категории прибора | N/A — не относится к категории прибора | N/A — не относится к категории прибора | N/A — не относится к категории прибора | N/A — не относится к категории прибора | N/A — не относится к категории прибора |

## Observation-only fields

| product_id | handheld_use | tripod_mount | helmet_or_mounting_options | observation_mode | video_use_case | search_use_case | recording_format | internal_memory | target_audience_observation |
|---|---|---|---|---|---|---|---|---|---|
| product_ovod_l25 | N/A — не относится к категории прибора | N/A — не относится к категории прибора | N/A — не относится к категории прибора | N/A — не относится к категории прибора | N/A — не относится к категории прибора | N/A — не относится к категории прибора | N/A — не относится к категории прибора | N/A — не относится к категории прибора | N/A — не относится к категории прибора |
| line_lesnik | N/A — не относится к категории прибора | N/A — не относится к категории прибора | N/A — не относится к категории прибора | N/A — не относится к категории прибора | N/A — не относится к категории прибора | N/A — не относится к категории прибора | N/A — не относится к категории прибора | N/A — не относится к категории прибора | N/A — не относится к категории прибора |
| product_surok_l15 | TODO: нет данных на rikanv.ru | TODO: нет данных на rikanv.ru | TODO: нет данных на rikanv.ru | наблюдение / поиск | видеозапись наблюдения | поиск и наблюдение | TODO: нет данных на rikanv.ru | TODO: нет данных на rikanv.ru | TODO: нет данных на rikanv.ru |
| line_hypnose | N/A — product_line, model-level specs require concrete model. | N/A — product_line, model-level specs require concrete model. | N/A — product_line, model-level specs require concrete model. | Line-level: наблюдение и поиск по странице линии | Line-level: видеозапись на встроенный носитель по странице линии | Line-level: разведка местности, наблюдение и поиск по странице линии | N/A — product_line, model-level specs require concrete model. | N/A — product_line, model-level specs require concrete model. | TODO: нужна проверка RikaNV |
| line_hypnose2 | N/A — product_line, model-level specs require concrete model. | N/A — product_line, model-level specs require concrete model. | N/A — product_line, model-level specs require concrete model. | Line-level: модели Hypnose2 перечислены на странице Hypnose | Line-level: TODO: нужна проверка RikaNV | Line-level: TODO: нужна проверка RikaNV | N/A — product_line, model-level specs require concrete model. | N/A — product_line, model-level specs require concrete model. | TODO: нужна проверка RikaNV |

## Found Lesnik product_model candidates on rikanv.ru

Эти модели найдены на `rikanv.ru`. До выбора базовой модели Lesnik для пилота они не заменяют line-level запись Lesnik.

| product_id | official_name | product_kind | parent_line | product_category | source_id | first_specs_seen_on_rikanv_ru | pilot_status |
|---|---|---|---|---|---|---|---|
| product_lesnik2_335l | RikaNV Lesnik2 335L | product_model | RikaNV Lesnik | thermal_riflescope | src_rikanv_ru_lesnik2_335l_20260701 | 384×288; 35mm F1.0; обнаружение 1800m; LRF 1200m | candidate; TODO: выбрать базовую модель Lesnik |
| product_lesnik2_360l | RikaNV Lesnik2 360L | product_model | RikaNV Lesnik | thermal_riflescope | src_rikanv_ru_lesnik2_360l_20260701 | 384×288; 20/60mm F1.0; обнаружение 1000/3000m; LRF 1200m | candidate; TODO: выбрать базовую модель Lesnik |
| product_lesnik2_360l_pro | RikaNV Lesnik2 360L PRO | product_model | RikaNV Lesnik | thermal_riflescope | src_rikanv_ru_lesnik2_360l_pro_20260701 | 384×288; 20/60mm F1.0; обнаружение 1000/3000m; LRF 1200m | candidate; TODO: выбрать базовую модель Lesnik |
| product_lesnik2_650l | RikaNV Lesnik2 650L | product_model | RikaNV Lesnik | thermal_riflescope | src_rikanv_ru_lesnik2_650l_20260701 | 640×512; 50mm F1.0; обнаружение 2600m; LRF 1200m | candidate; TODO: выбрать базовую модель Lesnik |
| product_lesnik2_650l_pro | RikaNV Lesnik2 650L PRO | product_model | RikaNV Lesnik | thermal_riflescope | src_rikanv_ru_lesnik2_650l_pro_20260701 | 640×512; 50mm F1.0; обнаружение 2600m; LRF 1200m | candidate; TODO: выбрать базовую модель Lesnik |
| product_lesnik2_660l | RikaNV Lesnik2 660L | product_model | RikaNV Lesnik | thermal_riflescope | src_rikanv_ru_lesnik2_660l_20260701 | 640×512; 20/60mm F1.0; обнаружение 1000/3000m; LRF 1200m | candidate; TODO: выбрать базовую модель Lesnik |
| product_lesnik2_660l_pro | RikaNV Lesnik2 660L PRO | product_model | RikaNV Lesnik | thermal_riflescope | src_rikanv_ru_lesnik2_660l_pro_20260701 | 640×512; 20/60mm F1.0; обнаружение 1000/3000m; LRF 1200m | candidate; TODO: выбрать базовую модель Lesnik |

## Found Hypnose/Hypnose2 product_model candidates on rikanv.ru

Эти модели найдены на странице линии Hypnose и как отдельные product pages. До выбора конкретной модели они не позволяют переносить характеристики на `line_hypnose` или `line_hypnose2`.

| product_id | official_name | product_kind | parent_line | product_category | source_id | first_specs_seen_on_rikanv_ru | pilot_status |
|---|---|---|---|---|---|---|---|
| product_hypnose2_335l | RikaNV Hypnose2 335L | product_model | RikaNV Hypnose2 | observation_thermal | src_rikanv_ru_hypnose2_335l_20260701 | 384×288; 35mm F0.8; обнаружение 1800m; дальномер 1000m | candidate; TODO: выбрать модель для model-level claims |
| product_hypnose2_650l | RikaNV Hypnose2 650L | product_model | RikaNV Hypnose2 | observation_thermal | src_rikanv_ru_hypnose2_650l_20260701 | 640×512; 50mm F0.9; обнаружение 2600m; дальномер 1000m | candidate; TODO: выбрать модель для model-level claims |
| product_hypnose2_660d | RikaNV Hypnose2 660D | product_model | RikaNV Hypnose2 | observation_thermal | src_rikanv_ru_hypnose2_660d_20260701 | 640×512; 20/60mm F0.9; обнаружение 1000/3000m | candidate; TODO: выбрать модель для model-level claims |

## Rules

- `official_name` должен совпадать с официальным названием RikaNV на `rikanv.ru`.
- `product_kind` и `product_category` обязательны.
- `source_id` должен ссылаться на Source Register.
- `evidence_id` должен ссылаться на Evidence Register.
- `status` использовать как `draft`, пока данные не проверены.
- Не писать “лучший”, “топовый”, “самый точный”, “не имеет аналогов”.
- Не применять оружейные поля к наблюдательным приборам без прямого подтверждения на `rikanv.ru`.
- Не переносить характеристики линейки на конкретную модель и наоборот.
