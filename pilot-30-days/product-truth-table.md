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

Identity and classification:

- `product_id`
- `official_name`
- `product_kind`
- `parent_line`
- `product_category`
- `product_line`
- `model_status`
- `current_or_legacy`

Positioning:

- `short_positioning`
- `primary_use`
- `key_scenarios`
- `not_recommended_for`

Model-level specs:

- `sensor`
- `lens`
- `NETD`
- `display`
- `detection_range`
- `recognition_range`
- `identification_range`
- `field_of_view`
- `magnification`
- `digital_zoom`
- `video_recording`
- `photo_recording`
- `storage`
- `Wi-Fi`
- `app/connectivity`
- `battery/power`
- `protection_class`
- `operating_temperature`
- `warranty`

Review and provenance:

- `service_notes`
- `known_limitations`
- `main_competitors`
- `source_id`
- `evidence_id`
- `owner`
- `reviewer`
- `status`
- `last_reviewed_at`
- `notes`

## Base Scope: Identity

| product_id | official_name | product_kind | parent_line | product_category | product_line | model_status | current_or_legacy |
|---|---|---|---|---|---|---|---|
| product_ovod_l25 | RikaNV Ovod L25 | product_model | RikaNV Ovod | thermal_riflescope | Ovod | current | current |
| line_lesnik | RikaNV Lesnik | product_line | N/A | thermal_riflescope | Lesnik | line-level | current |
| product_lesnik2_650l | RikaNV Lesnik2 650L | product_model | RikaNV Lesnik | thermal_riflescope | Lesnik | selected for pilot | current |
| product_surok_l15 | RikaNV Surok L15 | product_model | RikaNV Surok | observation_thermal | Surok | current | current |
| line_hypnose | RikaNV Hypnose | product_line | N/A | observation_thermal | Hypnose | line-level | current |
| line_hypnose2 | RikaNV Hypnose2 | product_line | N/A | observation_thermal | Hypnose2 | line-level | current |
| product_hypnose2_650l | RikaNV Hypnose2 650L | product_model | RikaNV Hypnose2 | observation_thermal | Hypnose2 | selected for pilot | current |

## Base Scope: Positioning

| product_id | short_positioning | primary_use | key_scenarios | not_recommended_for |
|---|---|---|---|---|
| product_ovod_l25 | Тепловизионный прицел линейки Ovod | TODO: нет данных на rikanv.ru | TODO: нет данных на rikanv.ru | TODO: нет данных на rikanv.ru |
| line_lesnik | Линейка тепловизионных прицелов RikaNV | TODO: нужна проверка RikaNV для сценариев пилота | TODO: нет данных на rikanv.ru | TODO: нет данных на rikanv.ru |
| product_lesnik2_650l | Выбранная базовая модель Lesnik для первого pilot | Тепловизионный прицел | TODO: нет данных на rikanv.ru для сценарного вывода | TODO: нет данных на rikanv.ru |
| product_surok_l15 | Тепловизор / камера для наблюдения | Наблюдение, поиск, видеозапись | TODO: нет данных на rikanv.ru | TODO: нет данных на rikanv.ru |
| line_hypnose | Линейка наблюдательных тепловизионных приборов | Наблюдение, поиск, видеозапись | TODO: нет данных на rikanv.ru | TODO: нет данных на rikanv.ru |
| line_hypnose2 | Линейка/поколение наблюдательных приборов внутри страницы Hypnose | Наблюдение, поиск, видеозапись | TODO: нет данных на rikanv.ru | TODO: нет данных на rikanv.ru |
| product_hypnose2_650l | Выбранная базовая модель Hypnose2 для первого pilot | Наблюдательный тепловизор | TODO: нет данных на rikanv.ru для сценарного вывода | TODO: нет данных на rikanv.ru |

## Base Scope: Source And Review

### `product_ovod_l25`

| Field | Value |
|---|---|
| source_id | `src_rikanv_ru_ovod_l25_20260701` |
| evidence_id | `ev_rikanv_ru_ovod_l25_specs_20260701` |
| owner | Product Truth owner |
| reviewer | Technical reviewer |
| status | draft |
| last_reviewed_at | 2026-07-01 |
| notes | Цена и наличие volatile; проверять дату |

### `line_lesnik`

| Field | Value |
|---|---|
| source_id | `src_rikanv_ru_lesnik_line_20260701` |
| evidence_id | `ev_rikanv_ru_lesnik_line_20260701` |
| owner | Product Truth owner |
| reviewer | Technical reviewer |
| status | draft |
| last_reviewed_at | 2026-07-01 |
| notes | Базовый приоритет; model-level pilot ведется по Lesnik2 650L |

### `product_lesnik2_650l`

| Field | Value |
|---|---|
| source_id | `src_rikanv_ru_lesnik2_650l_20260701` |
| evidence_id | `ev_rikanv_ru_lesnik2_650l_specs_20260701` |
| owner | Product Truth owner |
| reviewer | Technical reviewer |
| status | draft |
| last_reviewed_at | 2026-07-01 |
| notes | Выбран человеком RikaNV для первого model-level Product Truth; PRO-версия требует отдельного решения |

### `product_surok_l15`

| Field | Value |
|---|---|
| source_id | `src_rikanv_ru_surok_l15_20260701` |
| evidence_id | `ev_rikanv_ru_surok_l15_specs_20260701` |
| owner | Product Truth owner |
| reviewer | Technical reviewer |
| status | draft |
| last_reviewed_at | 2026-07-01 |
| notes | Наблюдательный прибор; не заполнять оружейные поля без official source |

### `line_hypnose`

| Field | Value |
|---|---|
| source_id | `src_rikanv_ru_hypnose_line_20260701` |
| evidence_id | `ev_rikanv_ru_hypnose_line_20260701` |
| owner | Product Truth owner |
| reviewer | Technical reviewer |
| status | draft |
| last_reviewed_at | 2026-07-01 |
| notes | Product line; не использовать как конкретную модель |

### `line_hypnose2`

| Field | Value |
|---|---|
| source_id | `src_rikanv_ru_hypnose_line_20260701` |
| evidence_id | `ev_rikanv_ru_hypnose2_line_20260701` |
| owner | Product Truth owner |
| reviewer | Technical reviewer |
| status | draft |
| last_reviewed_at | 2026-07-01 |
| notes | Hypnose2 = product_line; актуальное поколение / подлинейка внутри направления RikaNV Hypnose |

### `product_hypnose2_650l`

| Field | Value |
|---|---|
| source_id | `src_rikanv_ru_hypnose2_650l_20260701` |
| evidence_id | `ev_rikanv_ru_hypnose2_650l_specs_20260701` |
| owner | Product Truth owner |
| reviewer | Technical reviewer |
| status | draft |
| last_reviewed_at | 2026-07-01 |
| notes | Выбран человеком RikaNV для первого model-level Product Truth по Hypnose2 |

## Product Line Defaults

Для `product_line` все model-level spec поля получают значение:

`N/A — product_line, model-level specs require concrete model.`

Это правило применяется к:

- `line_lesnik`
- `line_hypnose`
- `line_hypnose2`

Исключение: line-level claims могут фиксировать категорию, назначение, список моделей или общую структуру линейки, если это прямо подтверждено official line page.

## Model Specs: Thermal Core

| product_id | sensor | lens | NETD | display |
|---|---|---|---|---|
| product_ovod_l25 | 256×192 | 25 мм F/0.9 | TODO: нет данных на rikanv.ru | TODO: нет данных на rikanv.ru |
| product_lesnik2_650l | 640×512 | 50mm F1.0 | TODO: нет данных на rikanv.ru | TODO: нет данных на rikanv.ru |
| product_surok_l15 | 256×192 | 15 мм F/0.9 | ≤25 мК | AMOLED 1024×768 |
| product_hypnose2_650l | 640×512 | 50mm F0.9 | TODO: нет данных на rikanv.ru | TODO: нет данных на rikanv.ru |

## Model Specs: Ranges And Optics

| product_id | detection_range | recognition_range | identification_range | field_of_view | magnification | digital_zoom |
|---|---|---|---|---|---|---|
| product_ovod_l25 | 1300 м | 650 м | 433 м | TODO: нет данных на rikanv.ru | TODO: нет данных на rikanv.ru | TODO: нет данных на rikanv.ru |
| product_lesnik2_650l | 2600m | TODO: нет данных на rikanv.ru | TODO: нет данных на rikanv.ru | TODO: нет данных на rikanv.ru | TODO: нет данных на rikanv.ru | TODO: нет данных на rikanv.ru |
| product_surok_l15 | 750 м | 375 м | 250 м | 11.7°×8.8° | TODO: нет данных на rikanv.ru | TODO: нет данных на rikanv.ru |
| product_hypnose2_650l | 2600m | TODO: нет данных на rikanv.ru | TODO: нет данных на rikanv.ru | TODO: нет данных на rikanv.ru | TODO: нет данных на rikanv.ru | TODO: нет данных на rikanv.ru |

## Model Specs: Recording And Connectivity

| product_id | video_recording | photo_recording | storage | Wi-Fi | app/connectivity | battery/power |
|---|---|---|---|---|---|---|
| product_ovod_l25 | TODO: нет данных на rikanv.ru | TODO: нет данных на rikanv.ru | TODO: нет данных на rikanv.ru | TODO: нет данных на rikanv.ru | TODO: нет данных на rikanv.ru | 18650; до 10 часов по official page |
| product_lesnik2_650l | TODO: нет данных на rikanv.ru | TODO: нет данных на rikanv.ru | TODO: нет данных на rikanv.ru | TODO: нет данных на rikanv.ru | TODO: нет данных на rikanv.ru | TODO: нет данных на rikanv.ru |
| product_surok_l15 | Да, по official page | TODO: нет данных на rikanv.ru | TODO: нет данных на rikanv.ru | TODO: нет данных на rikanv.ru | TODO: нет данных на rikanv.ru | 18650; до 10 часов по official page |
| product_hypnose2_650l | TODO: нет данных на rikanv.ru | TODO: нет данных на rikanv.ru | TODO: нет данных на rikanv.ru | TODO: нет данных на rikanv.ru | TODO: нет данных на rikanv.ru | TODO: нет данных на rikanv.ru |

## Model Specs: Service And Limits

### `product_ovod_l25`

| Field | Value |
|---|---|
| protection_class | IP67 |
| operating_temperature | -20…+50 °C |
| warranty | TODO: нет данных на rikanv.ru |
| service_notes | TODO: нет данных на rikanv.ru |
| known_limitations | TODO: нет данных на rikanv.ru |
| main_competitors | TODO: нет данных на rikanv.ru |

### `product_lesnik2_650l`

| Field | Value |
|---|---|
| protection_class | TODO: нет данных на rikanv.ru |
| operating_temperature | TODO: нет данных на rikanv.ru |
| warranty | volatile; гарантийные условия не хранить как постоянную характеристику |
| service_notes | TODO: нет данных на rikanv.ru |
| known_limitations | TODO: нет данных на rikanv.ru |
| main_competitors | TODO: нет данных на rikanv.ru |

### `product_surok_l15`

| Field | Value |
|---|---|
| protection_class | IP67 |
| operating_temperature | -20…+50 °C |
| warranty | TODO: нет данных на rikanv.ru |
| service_notes | TODO: нет данных на rikanv.ru |
| known_limitations | TODO: нет данных на rikanv.ru |
| main_competitors | TODO: нет данных на rikanv.ru |

### `product_hypnose2_650l`

| Field | Value |
|---|---|
| protection_class | TODO: нет данных на rikanv.ru |
| operating_temperature | TODO: нет данных на rikanv.ru |
| warranty | volatile; гарантийные условия не хранить как постоянную характеристику |
| service_notes | Дальномер 1000m указан в source snapshot; field placement требует schema review перед публикацией |
| known_limitations | TODO: нет данных на rikanv.ru |
| main_competitors | TODO: нет данных на rikanv.ru |

## Riflescope-Only Fields

Для `observation_thermal` эти поля получают значение:

`N/A — не относится к категории прибора`

| product_id | reticle | zeroing_profiles | ballistic_calculator | LRF |
|---|---|---|---|---|
| product_ovod_l25 | TODO: нет данных на rikanv.ru | 6 профилей пристрелки по official page | Указан на official page | TODO: нет данных на rikanv.ru |
| product_lesnik2_650l | TODO: нет данных на rikanv.ru | TODO: нет данных на rikanv.ru | TODO: нет данных на rikanv.ru | 1200m по official product page |

| product_id | recoil_rating | eye_relief | mount |
|---|---|---|---|
| product_ovod_l25 | до 6000 Дж по official page | TODO: нет данных на rikanv.ru | Picatinny Rail в комплекте по official page |
| product_lesnik2_650l | TODO: нет данных на rikanv.ru | TODO: нет данных на rikanv.ru | TODO: нет данных на rikanv.ru |

Line-level notes for `line_lesnik`:

| field | value |
|---|---|
| reticle | N/A — product_line, model-level specs require concrete model. |
| zeroing_profiles | N/A — product_line, model-level specs require concrete model. |
| ballistic_calculator | Line-level: расширенный баллистический контур указан на странице линии; model-level specs require concrete model. |
| LRF | Line-level: модели с LRF перечислены на странице линии; model-level specs require concrete model. |
| recoil_rating | N/A — product_line, model-level specs require concrete model. |
| eye_relief | N/A — product_line, model-level specs require concrete model. |
| mount | N/A — product_line, model-level specs require concrete model. |

## Observation-Only Fields

Для `thermal_riflescope` эти поля получают значение:

`N/A — не относится к категории прибора`

| product_id | handheld_use | tripod_mount | helmet_or_mounting_options |
|---|---|---|---|
| product_surok_l15 | TODO: нет данных на rikanv.ru | TODO: нет данных на rikanv.ru | TODO: нет данных на rikanv.ru |
| product_hypnose2_650l | TODO: нет данных на rikanv.ru | TODO: нет данных на rikanv.ru | TODO: нет данных на rikanv.ru |

| product_id | observation_mode | video_use_case | search_use_case |
|---|---|---|---|
| product_surok_l15 | наблюдение / поиск | видеозапись наблюдения | поиск и наблюдение |
| product_hypnose2_650l | наблюдение | TODO: нет данных на rikanv.ru | TODO: нет данных на rikanv.ru |

Line-level observation notes:

| product_id | field | value |
|---|---|---|
| line_hypnose | handheld_use | N/A — product_line, model-level specs require concrete model. |
| line_hypnose | tripod_mount | N/A — product_line, model-level specs require concrete model. |
| line_hypnose | helmet_or_mounting_options | N/A — product_line, model-level specs require concrete model. |
| line_hypnose | observation_mode | Line-level: наблюдение и поиск по странице линии |
| line_hypnose | video_use_case | Line-level: видеозапись на встроенный носитель по странице линии |
| line_hypnose | search_use_case | Line-level: разведка местности, наблюдение и поиск по странице линии |
| line_hypnose2 | handheld_use | N/A — product_line, model-level specs require concrete model. |
| line_hypnose2 | tripod_mount | N/A — product_line, model-level specs require concrete model. |
| line_hypnose2 | helmet_or_mounting_options | N/A — product_line, model-level specs require concrete model. |
| line_hypnose2 | observation_mode | Line-level: модели Hypnose2 перечислены на странице Hypnose |
| line_hypnose2 | video_use_case | Line-level: TODO: нужна проверка RikaNV |
| line_hypnose2 | search_use_case | Line-level: TODO: нужна проверка RikaNV |

| product_id | search_use_case | recording_format | internal_memory | target_audience_observation |
|---|---|---|---|---|
| product_surok_l15 | поиск и наблюдение | TODO: нет данных на rikanv.ru | TODO: нет данных на rikanv.ru | TODO: нет данных на rikanv.ru |
| product_hypnose2_650l | TODO: нет данных на rikanv.ru | TODO: нет данных на rikanv.ru | TODO: нет данных на rikanv.ru | TODO: нет данных на rikanv.ru |
| line_hypnose | see line-level observation notes | N/A — product_line, model-level specs require concrete model. | N/A — product_line, model-level specs require concrete model. | TODO: нужна проверка RikaNV |
| line_hypnose2 | see line-level observation notes | N/A — product_line, model-level specs require concrete model. | N/A — product_line, model-level specs require concrete model. | TODO: нужна проверка RikaNV |

## Found Lesnik Product Model Candidates

Эти модели найдены на `rikanv.ru`. До выбора базовой модели Lesnik для пилота они не заменяют line-level запись Lesnik.

| product_id | official_name | parent_line | source_id | pilot_status |
|---|---|---|---|---|
| product_lesnik2_335l | RikaNV Lesnik2 335L | RikaNV Lesnik | src_rikanv_ru_lesnik2_335l_20260701 | candidate; not selected for current pilot |
| product_lesnik2_360l | RikaNV Lesnik2 360L | RikaNV Lesnik | src_rikanv_ru_lesnik2_360l_20260701 | candidate; not selected for current pilot |
| product_lesnik2_360l_pro | RikaNV Lesnik2 360L PRO | RikaNV Lesnik | src_rikanv_ru_lesnik2_360l_pro_20260701 | candidate; not selected for current pilot |
| product_lesnik2_650l | RikaNV Lesnik2 650L | RikaNV Lesnik | src_rikanv_ru_lesnik2_650l_20260701 | selected for pilot |
| product_lesnik2_650l_pro | RikaNV Lesnik2 650L PRO | RikaNV Lesnik | src_rikanv_ru_lesnik2_650l_pro_20260701 | candidate; not selected for current pilot |
| product_lesnik2_660l | RikaNV Lesnik2 660L | RikaNV Lesnik | src_rikanv_ru_lesnik2_660l_20260701 | candidate; not selected for current pilot |
| product_lesnik2_660l_pro | RikaNV Lesnik2 660L PRO | RikaNV Lesnik | src_rikanv_ru_lesnik2_660l_pro_20260701 | candidate; not selected for current pilot |

| product_id | product_kind | product_category | first_specs_seen_on_rikanv_ru |
|---|---|---|---|
| product_lesnik2_335l | product_model | thermal_riflescope | 384×288; 35mm F1.0; обнаружение 1800m; LRF 1200m |
| product_lesnik2_360l | product_model | thermal_riflescope | 384×288; 20/60mm F1.0; обнаружение 1000/3000m; LRF 1200m |
| product_lesnik2_360l_pro | product_model | thermal_riflescope | 384×288; 20/60mm F1.0; обнаружение 1000/3000m; LRF 1200m |
| product_lesnik2_650l | product_model | thermal_riflescope | 640×512; 50mm F1.0; обнаружение 2600m; LRF 1200m |
| product_lesnik2_650l_pro | product_model | thermal_riflescope | 640×512; 50mm F1.0; обнаружение 2600m; LRF 1200m |
| product_lesnik2_660l | product_model | thermal_riflescope | 640×512; 20/60mm F1.0; обнаружение 1000/3000m; LRF 1200m |
| product_lesnik2_660l_pro | product_model | thermal_riflescope | 640×512; 20/60mm F1.0; обнаружение 1000/3000m; LRF 1200m |

## Found Hypnose/Hypnose2 Product Model Candidates

Эти модели найдены на странице линии Hypnose и как отдельные product pages. До выбора конкретной модели они не позволяют переносить характеристики на `line_hypnose` или `line_hypnose2`.

| product_id | official_name | parent_line | source_id | pilot_status |
|---|---|---|---|---|
| product_hypnose2_335l | RikaNV Hypnose2 335L | RikaNV Hypnose2 | src_rikanv_ru_hypnose2_335l_20260701 | candidate; not selected for current pilot |
| product_hypnose2_650l | RikaNV Hypnose2 650L | RikaNV Hypnose2 | src_rikanv_ru_hypnose2_650l_20260701 | selected for pilot |
| product_hypnose2_660d | RikaNV Hypnose2 660D | RikaNV Hypnose2 | src_rikanv_ru_hypnose2_660d_20260701 | candidate; not selected for current pilot |

| product_id | product_kind | product_category | first_specs_seen_on_rikanv_ru |
|---|---|---|---|
| product_hypnose2_335l | product_model | observation_thermal | 384×288; 35mm F0.8; обнаружение 1800m; дальномер 1000m |
| product_hypnose2_650l | product_model | observation_thermal | 640×512; 50mm F0.9; обнаружение 2600m; дальномер 1000m |
| product_hypnose2_660d | product_model | observation_thermal | 640×512; 20/60mm F0.9; обнаружение 1000/3000m |

## Rules

- `official_name` должен совпадать с официальным названием RikaNV на `rikanv.ru`.
- `product_kind` и `product_category` обязательны.
- `source_id` должен ссылаться на Source Register.
- `evidence_id` должен ссылаться на Evidence Register.
- `status` использовать как `draft`, пока данные не проверены.
- Не писать “лучший”, “топовый”, “самый точный”, “не имеет аналогов”.
- Не применять оружейные поля к наблюдательным приборам без прямого подтверждения на `rikanv.ru`.
- Не переносить характеристики линейки на конкретную модель и наоборот.
