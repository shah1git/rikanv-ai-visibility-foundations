# Product Truth Table

Эта таблица нужна для первого ручного пилота.

Основной источник данных на этапе пилота — `https://rikanv.ru/`.

## Rules

- Если поля нет на `rikanv.ru`, писать: `TODO: нет данных на rikanv.ru`.
- Если нужна внутренняя проверка RikaNV, писать: `TODO: нужна проверка RikaNV`.
- Если поле не применимо к категории прибора, писать: `N/A — не относится к категории прибора`.
- Если объект является линейкой, в модельных полях писать:
  `N/A — product_line, model-level specs require concrete model.`
- Цена и наличие не записываются как постоянная характеристика.
- Цена и наличие можно указывать только в `notes` с датой проверки и пометкой `volatile`.
- Не писать “лучший”, “топовый”, “самый точный”, “не имеет аналогов”.
- Не применять оружейные поля к наблюдательным приборам без прямого подтверждения на `rikanv.ru`.
- Не переносить характеристики линейки на конкретную модель и наоборот.

## Taxonomy

| Поле | Допустимые значения | Правило |
| --- | --- | --- |
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

## Products and lines

### RikaNV Ovod L25

#### Identity

| Field | Value |
| --- | --- |
| product_id | product_ovod_l25 |
| official_name | RikaNV Ovod L25 |
| product_kind | product_model |
| parent_line | RikaNV Ovod |
| product_category | thermal_riflescope |
| product_line | Ovod |
| model_status | current |
| current_or_legacy | current |

#### Positioning

| Field | Value |
| --- | --- |
| short_positioning | Тепловизионный прицел линейки Ovod |
| primary_use | TODO: нет данных на rikanv.ru |
| key_scenarios | TODO: нет данных на rikanv.ru |
| not_recommended_for | TODO: нет данных на rikanv.ru |

#### Source and review

| Field | Value |
| --- | --- |
| source_id | `src_rikanv_ru_ovod_l25_20260701` |
| evidence_id | `ev_rikanv_ru_ovod_l25_specs_20260701` |
| owner | Product Truth owner |
| reviewer | Technical reviewer |
| status | draft |
| last_reviewed_at | 2026-07-01 |
| notes | Цена и наличие volatile; проверять дату |

#### Thermal core

| Field | Value |
| --- | --- |
| sensor | 256×192 |
| lens | 25 мм F/0.9 |
| NETD | TODO: нет данных на rikanv.ru |
| display | TODO: нет данных на rikanv.ru |

#### Ranges and optics

| Field | Value |
| --- | --- |
| detection_range | 1300 м |
| recognition_range | 650 м |
| identification_range | 433 м |
| field_of_view | TODO: нет данных на rikanv.ru |
| magnification | TODO: нет данных на rikanv.ru |
| digital_zoom | TODO: нет данных на rikanv.ru |

#### Recording and connectivity

| Field | Value |
| --- | --- |
| video_recording | TODO: нет данных на rikanv.ru |
| photo_recording | TODO: нет данных на rikanv.ru |
| storage | TODO: нет данных на rikanv.ru |
| Wi-Fi | TODO: нет данных на rikanv.ru |
| app/connectivity | TODO: нет данных на rikanv.ru |
| battery/power | 18650; до 10 часов по official page |

#### Service and limits

| Field | Value |
| --- | --- |
| protection_class | IP67 |
| operating_temperature | -20…+50 °C |
| warranty | TODO: нет данных на rikanv.ru |
| service_notes | TODO: нет данных на rikanv.ru |
| known_limitations | TODO: нет данных на rikanv.ru |
| main_competitors | TODO: нет данных на rikanv.ru |

#### Riflescope-only fields

| Field | Value |
| --- | --- |
| reticle | TODO: нет данных на rikanv.ru |
| zeroing_profiles | 6 профилей пристрелки по official page |
| ballistic_calculator | Указан на official page |
| LRF | TODO: нет данных на rikanv.ru |
| recoil_rating | до 6000 Дж по official page |
| eye_relief | TODO: нет данных на rikanv.ru |
| mount | Picatinny Rail в комплекте по official page |

#### Observation-only fields

| Field | Value |
| --- | --- |
| handheld_use | N/A — не относится к категории прибора |
| tripod_mount | N/A — не относится к категории прибора |
| helmet_or_mounting_options | N/A — не относится к категории прибора |
| observation_mode | N/A — не относится к категории прибора |
| video_use_case | N/A — не относится к категории прибора |
| search_use_case | N/A — не относится к категории прибора |
| recording_format | N/A — не относится к категории прибора |
| internal_memory | N/A — не относится к категории прибора |
| target_audience_observation | N/A — не относится к категории прибора |

### RikaNV Lesnik

#### Identity

| Field | Value |
| --- | --- |
| product_id | line_lesnik |
| official_name | RikaNV Lesnik |
| product_kind | product_line |
| parent_line | N/A |
| product_category | thermal_riflescope |
| product_line | Lesnik |
| model_status | line-level |
| current_or_legacy | current |

#### Positioning

| Field | Value |
| --- | --- |
| short_positioning | Линейка тепловизионных прицелов RikaNV |
| primary_use | TODO: нужна проверка RikaNV для сценариев пилота |
| key_scenarios | TODO: нет данных на rikanv.ru |
| not_recommended_for | TODO: нет данных на rikanv.ru |

#### Source and review

| Field | Value |
| --- | --- |
| source_id | `src_rikanv_ru_lesnik_line_20260701` |
| evidence_id | `ev_rikanv_ru_lesnik_line_20260701` |
| owner | Product Truth owner |
| reviewer | Technical reviewer |
| status | draft |
| last_reviewed_at | 2026-07-01 |
| notes | Базовый приоритет; model-level pilot ведется по Lesnik2 650L |

#### Thermal core

| Field | Value |
| --- | --- |
| sensor | N/A — product_line, model-level specs require concrete model. |
| lens | N/A — product_line, model-level specs require concrete model. |
| NETD | N/A — product_line, model-level specs require concrete model. |
| display | N/A — product_line, model-level specs require concrete model. |

#### Ranges and optics

| Field | Value |
| --- | --- |
| detection_range | N/A — product_line, model-level specs require concrete model. |
| recognition_range | N/A — product_line, model-level specs require concrete model. |
| identification_range | N/A — product_line, model-level specs require concrete model. |
| field_of_view | N/A — product_line, model-level specs require concrete model. |
| magnification | N/A — product_line, model-level specs require concrete model. |
| digital_zoom | N/A — product_line, model-level specs require concrete model. |

#### Recording and connectivity

| Field | Value |
| --- | --- |
| video_recording | N/A — product_line, model-level specs require concrete model. |
| photo_recording | N/A — product_line, model-level specs require concrete model. |
| storage | N/A — product_line, model-level specs require concrete model. |
| Wi-Fi | N/A — product_line, model-level specs require concrete model. |
| app/connectivity | N/A — product_line, model-level specs require concrete model. |
| battery/power | N/A — product_line, model-level specs require concrete model. |

#### Service and limits

| Field | Value |
| --- | --- |
| protection_class | N/A — product_line, model-level specs require concrete model. |
| operating_temperature | N/A — product_line, model-level specs require concrete model. |
| warranty | N/A — product_line, model-level specs require concrete model. |
| service_notes | TODO: нет данных на rikanv.ru |
| known_limitations | TODO: нет данных на rikanv.ru |
| main_competitors | TODO: нет данных на rikanv.ru |

#### Riflescope-only fields

| Field | Value |
| --- | --- |
| reticle | N/A — product_line, model-level specs require concrete model. |
| zeroing_profiles | N/A — product_line, model-level specs require concrete model. |
| ballistic_calculator | Line-level: расширенный баллистический контур указан на странице линии; model-level specs require concrete model. |
| LRF | Line-level: модели с LRF перечислены на странице линии; model-level specs require concrete model. |
| recoil_rating | N/A — product_line, model-level specs require concrete model. |
| eye_relief | N/A — product_line, model-level specs require concrete model. |
| mount | N/A — product_line, model-level specs require concrete model. |

#### Observation-only fields

| Field | Value |
| --- | --- |
| handheld_use | N/A — не относится к категории прибора |
| tripod_mount | N/A — не относится к категории прибора |
| helmet_or_mounting_options | N/A — не относится к категории прибора |
| observation_mode | N/A — не относится к категории прибора |
| video_use_case | N/A — не относится к категории прибора |
| search_use_case | N/A — не относится к категории прибора |
| recording_format | N/A — не относится к категории прибора |
| internal_memory | N/A — не относится к категории прибора |
| target_audience_observation | N/A — не относится к категории прибора |

### RikaNV Lesnik2 650L

#### Identity

| Field | Value |
| --- | --- |
| product_id | product_lesnik2_650l |
| official_name | RikaNV Lesnik2 650L |
| product_kind | product_model |
| parent_line | RikaNV Lesnik |
| product_category | thermal_riflescope |
| product_line | Lesnik |
| model_status | selected for pilot |
| current_or_legacy | current |

#### Positioning

| Field | Value |
| --- | --- |
| short_positioning | Выбранная базовая модель Lesnik для первого pilot |
| primary_use | Тепловизионный прицел |
| key_scenarios | TODO: нет данных на rikanv.ru для сценарного вывода |
| not_recommended_for | TODO: нет данных на rikanv.ru |

#### Source and review

| Field | Value |
| --- | --- |
| source_id | `src_rikanv_ru_lesnik2_650l_20260701` |
| evidence_id | `ev_rikanv_ru_lesnik2_650l_specs_20260701` |
| owner | Product Truth owner |
| reviewer | Technical reviewer |
| status | draft |
| last_reviewed_at | 2026-07-01 |
| notes | Выбран человеком RikaNV для первого model-level Product Truth; PRO-версия требует отдельного решения |

#### Thermal core

| Field | Value |
| --- | --- |
| sensor | 640×512 |
| lens | 50mm F1.0 |
| NETD | TODO: нет данных на rikanv.ru |
| display | TODO: нет данных на rikanv.ru |

#### Ranges and optics

| Field | Value |
| --- | --- |
| detection_range | 2600m |
| recognition_range | TODO: нет данных на rikanv.ru |
| identification_range | TODO: нет данных на rikanv.ru |
| field_of_view | TODO: нет данных на rikanv.ru |
| magnification | TODO: нет данных на rikanv.ru |
| digital_zoom | TODO: нет данных на rikanv.ru |

#### Recording and connectivity

| Field | Value |
| --- | --- |
| video_recording | TODO: нет данных на rikanv.ru |
| photo_recording | TODO: нет данных на rikanv.ru |
| storage | TODO: нет данных на rikanv.ru |
| Wi-Fi | TODO: нет данных на rikanv.ru |
| app/connectivity | TODO: нет данных на rikanv.ru |
| battery/power | TODO: нет данных на rikanv.ru |

#### Service and limits

| Field | Value |
| --- | --- |
| protection_class | TODO: нет данных на rikanv.ru |
| operating_temperature | TODO: нет данных на rikanv.ru |
| warranty | volatile; гарантийные условия не хранить как постоянную характеристику |
| service_notes | TODO: нет данных на rikanv.ru |
| known_limitations | TODO: нет данных на rikanv.ru |
| main_competitors | TODO: нет данных на rikanv.ru |

#### Riflescope-only fields

| Field | Value |
| --- | --- |
| reticle | TODO: нет данных на rikanv.ru |
| zeroing_profiles | TODO: нет данных на rikanv.ru |
| ballistic_calculator | TODO: нет данных на rikanv.ru |
| LRF | 1200m по official product page |
| recoil_rating | TODO: нет данных на rikanv.ru |
| eye_relief | TODO: нет данных на rikanv.ru |
| mount | TODO: нет данных на rikanv.ru |

#### Observation-only fields

| Field | Value |
| --- | --- |
| handheld_use | N/A — не относится к категории прибора |
| tripod_mount | N/A — не относится к категории прибора |
| helmet_or_mounting_options | N/A — не относится к категории прибора |
| observation_mode | N/A — не относится к категории прибора |
| video_use_case | N/A — не относится к категории прибора |
| search_use_case | N/A — не относится к категории прибора |
| recording_format | N/A — не относится к категории прибора |
| internal_memory | N/A — не относится к категории прибора |
| target_audience_observation | N/A — не относится к категории прибора |

### RikaNV Surok L15

#### Identity

| Field | Value |
| --- | --- |
| product_id | product_surok_l15 |
| official_name | RikaNV Surok L15 |
| product_kind | product_model |
| parent_line | RikaNV Surok |
| product_category | observation_thermal |
| product_line | Surok |
| model_status | current |
| current_or_legacy | current |

#### Positioning

| Field | Value |
| --- | --- |
| short_positioning | Тепловизор / камера для наблюдения |
| primary_use | Наблюдение, поиск, видеозапись |
| key_scenarios | TODO: нет данных на rikanv.ru |
| not_recommended_for | TODO: нет данных на rikanv.ru |

#### Source and review

| Field | Value |
| --- | --- |
| source_id | `src_rikanv_ru_surok_l15_20260701` |
| evidence_id | `ev_rikanv_ru_surok_l15_specs_20260701` |
| owner | Product Truth owner |
| reviewer | Technical reviewer |
| status | draft |
| last_reviewed_at | 2026-07-01 |
| notes | Наблюдательный прибор; не заполнять оружейные поля без official source |

#### Thermal core

| Field | Value |
| --- | --- |
| sensor | 256×192 |
| lens | 15 мм F/0.9 |
| NETD | ≤25 мК |
| display | AMOLED 1024×768 |

#### Ranges and optics

| Field | Value |
| --- | --- |
| detection_range | 750 м |
| recognition_range | 375 м |
| identification_range | 250 м |
| field_of_view | 11.7°×8.8° |
| magnification | TODO: нет данных на rikanv.ru |
| digital_zoom | TODO: нет данных на rikanv.ru |

#### Recording and connectivity

| Field | Value |
| --- | --- |
| video_recording | Да, по official page |
| photo_recording | TODO: нет данных на rikanv.ru |
| storage | TODO: нет данных на rikanv.ru |
| Wi-Fi | TODO: нет данных на rikanv.ru |
| app/connectivity | TODO: нет данных на rikanv.ru |
| battery/power | 18650; до 10 часов по official page |

#### Service and limits

| Field | Value |
| --- | --- |
| protection_class | IP67 |
| operating_temperature | -20…+50 °C |
| warranty | TODO: нет данных на rikanv.ru |
| service_notes | TODO: нет данных на rikanv.ru |
| known_limitations | TODO: нет данных на rikanv.ru |
| main_competitors | TODO: нет данных на rikanv.ru |

#### Riflescope-only fields

| Field | Value |
| --- | --- |
| reticle | N/A — не относится к категории прибора |
| zeroing_profiles | N/A — не относится к категории прибора |
| ballistic_calculator | N/A — не относится к категории прибора |
| LRF | N/A — не относится к категории прибора |
| recoil_rating | N/A — не относится к категории прибора |
| eye_relief | N/A — не относится к категории прибора |
| mount | N/A — не относится к категории прибора |

#### Observation-only fields

| Field | Value |
| --- | --- |
| handheld_use | TODO: нет данных на rikanv.ru |
| tripod_mount | TODO: нет данных на rikanv.ru |
| helmet_or_mounting_options | TODO: нет данных на rikanv.ru |
| observation_mode | наблюдение / поиск |
| video_use_case | видеозапись наблюдения |
| search_use_case | поиск и наблюдение |
| recording_format | TODO: нет данных на rikanv.ru |
| internal_memory | TODO: нет данных на rikanv.ru |
| target_audience_observation | TODO: нет данных на rikanv.ru |

### RikaNV Hypnose

#### Identity

| Field | Value |
| --- | --- |
| product_id | line_hypnose |
| official_name | RikaNV Hypnose |
| product_kind | product_line |
| parent_line | N/A |
| product_category | observation_thermal |
| product_line | Hypnose |
| model_status | line-level |
| current_or_legacy | current |

#### Positioning

| Field | Value |
| --- | --- |
| short_positioning | Линейка наблюдательных тепловизионных приборов |
| primary_use | Наблюдение, поиск, видеозапись |
| key_scenarios | TODO: нет данных на rikanv.ru |
| not_recommended_for | TODO: нет данных на rikanv.ru |

#### Source and review

| Field | Value |
| --- | --- |
| source_id | `src_rikanv_ru_hypnose_line_20260701` |
| evidence_id | `ev_rikanv_ru_hypnose_line_20260701` |
| owner | Product Truth owner |
| reviewer | Technical reviewer |
| status | draft |
| last_reviewed_at | 2026-07-01 |
| notes | Product line; не использовать как конкретную модель |

#### Thermal core

| Field | Value |
| --- | --- |
| sensor | N/A — product_line, model-level specs require concrete model. |
| lens | N/A — product_line, model-level specs require concrete model. |
| NETD | N/A — product_line, model-level specs require concrete model. |
| display | N/A — product_line, model-level specs require concrete model. |

#### Ranges and optics

| Field | Value |
| --- | --- |
| detection_range | N/A — product_line, model-level specs require concrete model. |
| recognition_range | N/A — product_line, model-level specs require concrete model. |
| identification_range | N/A — product_line, model-level specs require concrete model. |
| field_of_view | N/A — product_line, model-level specs require concrete model. |
| magnification | N/A — product_line, model-level specs require concrete model. |
| digital_zoom | N/A — product_line, model-level specs require concrete model. |

#### Recording and connectivity

| Field | Value |
| --- | --- |
| video_recording | N/A — product_line, model-level specs require concrete model. |
| photo_recording | N/A — product_line, model-level specs require concrete model. |
| storage | N/A — product_line, model-level specs require concrete model. |
| Wi-Fi | N/A — product_line, model-level specs require concrete model. |
| app/connectivity | N/A — product_line, model-level specs require concrete model. |
| battery/power | N/A — product_line, model-level specs require concrete model. |

#### Service and limits

| Field | Value |
| --- | --- |
| protection_class | N/A — product_line, model-level specs require concrete model. |
| operating_temperature | N/A — product_line, model-level specs require concrete model. |
| warranty | N/A — product_line, model-level specs require concrete model. |
| service_notes | TODO: нет данных на rikanv.ru |
| known_limitations | TODO: нет данных на rikanv.ru |
| main_competitors | TODO: нет данных на rikanv.ru |

#### Riflescope-only fields

| Field | Value |
| --- | --- |
| reticle | N/A — не относится к категории прибора |
| zeroing_profiles | N/A — не относится к категории прибора |
| ballistic_calculator | N/A — не относится к категории прибора |
| LRF | N/A — не относится к категории прибора |
| recoil_rating | N/A — не относится к категории прибора |
| eye_relief | N/A — не относится к категории прибора |
| mount | N/A — не относится к категории прибора |

#### Observation-only fields

| Field | Value |
| --- | --- |
| handheld_use | N/A — product_line, model-level specs require concrete model. |
| tripod_mount | N/A — product_line, model-level specs require concrete model. |
| helmet_or_mounting_options | N/A — product_line, model-level specs require concrete model. |
| observation_mode | Line-level: наблюдение и поиск по странице линии |
| video_use_case | Line-level: видеозапись на встроенный носитель по странице линии |
| search_use_case | Line-level: разведка местности, наблюдение и поиск по странице линии |
| recording_format | N/A — product_line, model-level specs require concrete model. |
| internal_memory | N/A — product_line, model-level specs require concrete model. |
| target_audience_observation | TODO: нужна проверка RikaNV |

### RikaNV Hypnose2

#### Identity

| Field | Value |
| --- | --- |
| product_id | line_hypnose2 |
| official_name | RikaNV Hypnose2 |
| product_kind | product_line |
| parent_line | N/A |
| product_category | observation_thermal |
| product_line | Hypnose2 |
| model_status | line-level |
| current_or_legacy | current |

#### Positioning

| Field | Value |
| --- | --- |
| short_positioning | Линейка/поколение наблюдательных приборов внутри страницы Hypnose |
| primary_use | Наблюдение, поиск, видеозапись |
| key_scenarios | TODO: нет данных на rikanv.ru |
| not_recommended_for | TODO: нет данных на rikanv.ru |

#### Source and review

| Field | Value |
| --- | --- |
| source_id | `src_rikanv_ru_hypnose_line_20260701` |
| evidence_id | `ev_rikanv_ru_hypnose2_line_20260701` |
| owner | Product Truth owner |
| reviewer | Technical reviewer |
| status | draft |
| last_reviewed_at | 2026-07-01 |
| notes | Hypnose2 = product_line; актуальное поколение / подлинейка внутри направления RikaNV Hypnose |

#### Thermal core

| Field | Value |
| --- | --- |
| sensor | N/A — product_line, model-level specs require concrete model. |
| lens | N/A — product_line, model-level specs require concrete model. |
| NETD | N/A — product_line, model-level specs require concrete model. |
| display | N/A — product_line, model-level specs require concrete model. |

#### Ranges and optics

| Field | Value |
| --- | --- |
| detection_range | N/A — product_line, model-level specs require concrete model. |
| recognition_range | N/A — product_line, model-level specs require concrete model. |
| identification_range | N/A — product_line, model-level specs require concrete model. |
| field_of_view | N/A — product_line, model-level specs require concrete model. |
| magnification | N/A — product_line, model-level specs require concrete model. |
| digital_zoom | N/A — product_line, model-level specs require concrete model. |

#### Recording and connectivity

| Field | Value |
| --- | --- |
| video_recording | N/A — product_line, model-level specs require concrete model. |
| photo_recording | N/A — product_line, model-level specs require concrete model. |
| storage | N/A — product_line, model-level specs require concrete model. |
| Wi-Fi | N/A — product_line, model-level specs require concrete model. |
| app/connectivity | N/A — product_line, model-level specs require concrete model. |
| battery/power | N/A — product_line, model-level specs require concrete model. |

#### Service and limits

| Field | Value |
| --- | --- |
| protection_class | N/A — product_line, model-level specs require concrete model. |
| operating_temperature | N/A — product_line, model-level specs require concrete model. |
| warranty | N/A — product_line, model-level specs require concrete model. |
| service_notes | TODO: нет данных на rikanv.ru |
| known_limitations | TODO: нет данных на rikanv.ru |
| main_competitors | TODO: нет данных на rikanv.ru |

#### Riflescope-only fields

| Field | Value |
| --- | --- |
| reticle | N/A — не относится к категории прибора |
| zeroing_profiles | N/A — не относится к категории прибора |
| ballistic_calculator | N/A — не относится к категории прибора |
| LRF | N/A — не относится к категории прибора |
| recoil_rating | N/A — не относится к категории прибора |
| eye_relief | N/A — не относится к категории прибора |
| mount | N/A — не относится к категории прибора |

#### Observation-only fields

| Field | Value |
| --- | --- |
| handheld_use | N/A — product_line, model-level specs require concrete model. |
| tripod_mount | N/A — product_line, model-level specs require concrete model. |
| helmet_or_mounting_options | N/A — product_line, model-level specs require concrete model. |
| observation_mode | Line-level: модели Hypnose2 перечислены на странице Hypnose |
| video_use_case | Line-level: TODO: нужна проверка RikaNV |
| search_use_case | Line-level: TODO: нужна проверка RikaNV |
| recording_format | N/A — product_line, model-level specs require concrete model. |
| internal_memory | N/A — product_line, model-level specs require concrete model. |
| target_audience_observation | TODO: нужна проверка RikaNV |

### RikaNV Hypnose2 650L

#### Identity

| Field | Value |
| --- | --- |
| product_id | product_hypnose2_650l |
| official_name | RikaNV Hypnose2 650L |
| product_kind | product_model |
| parent_line | RikaNV Hypnose2 |
| product_category | observation_thermal |
| product_line | Hypnose2 |
| model_status | selected for pilot |
| current_or_legacy | current |

#### Positioning

| Field | Value |
| --- | --- |
| short_positioning | Выбранная базовая модель Hypnose2 для первого pilot |
| primary_use | Наблюдательный тепловизор |
| key_scenarios | TODO: нет данных на rikanv.ru для сценарного вывода |
| not_recommended_for | TODO: нет данных на rikanv.ru |

#### Source and review

| Field | Value |
| --- | --- |
| source_id | `src_rikanv_ru_hypnose2_650l_20260701` |
| evidence_id | `ev_rikanv_ru_hypnose2_650l_specs_20260701` |
| owner | Product Truth owner |
| reviewer | Technical reviewer |
| status | draft |
| last_reviewed_at | 2026-07-01 |
| notes | Выбран человеком RikaNV для первого model-level Product Truth по Hypnose2 |

#### Thermal core

| Field | Value |
| --- | --- |
| sensor | 640×512 |
| lens | 50mm F0.9 |
| NETD | TODO: нет данных на rikanv.ru |
| display | TODO: нет данных на rikanv.ru |

#### Ranges and optics

| Field | Value |
| --- | --- |
| detection_range | 2600m |
| recognition_range | TODO: нет данных на rikanv.ru |
| identification_range | TODO: нет данных на rikanv.ru |
| field_of_view | TODO: нет данных на rikanv.ru |
| magnification | TODO: нет данных на rikanv.ru |
| digital_zoom | TODO: нет данных на rikanv.ru |

#### Recording and connectivity

| Field | Value |
| --- | --- |
| video_recording | TODO: нет данных на rikanv.ru |
| photo_recording | TODO: нет данных на rikanv.ru |
| storage | TODO: нет данных на rikanv.ru |
| Wi-Fi | TODO: нет данных на rikanv.ru |
| app/connectivity | TODO: нет данных на rikanv.ru |
| battery/power | TODO: нет данных на rikanv.ru |

#### Service and limits

| Field | Value |
| --- | --- |
| protection_class | TODO: нет данных на rikanv.ru |
| operating_temperature | TODO: нет данных на rikanv.ru |
| warranty | volatile; гарантийные условия не хранить как постоянную характеристику |
| service_notes | Дальномер 1000m указан в source snapshot; field placement требует schema review перед публикацией |
| known_limitations | TODO: нет данных на rikanv.ru |
| main_competitors | TODO: нет данных на rikanv.ru |

#### Riflescope-only fields

| Field | Value |
| --- | --- |
| reticle | N/A — не относится к категории прибора |
| zeroing_profiles | N/A — не относится к категории прибора |
| ballistic_calculator | N/A — не относится к категории прибора |
| LRF | N/A — не относится к категории прибора |
| recoil_rating | N/A — не относится к категории прибора |
| eye_relief | N/A — не относится к категории прибора |
| mount | N/A — не относится к категории прибора |

#### Observation-only fields

| Field | Value |
| --- | --- |
| handheld_use | TODO: нет данных на rikanv.ru |
| tripod_mount | TODO: нет данных на rikanv.ru |
| helmet_or_mounting_options | TODO: нет данных на rikanv.ru |
| observation_mode | наблюдение |
| video_use_case | TODO: нет данных на rikanv.ru |
| search_use_case | TODO: нет данных на rikanv.ru |
| recording_format | TODO: нет данных на rikanv.ru |
| internal_memory | TODO: нет данных на rikanv.ru |
| target_audience_observation | TODO: нет данных на rikanv.ru |

## Found Lesnik Product Model Candidates

Эти модели найдены на `rikanv.ru`.

До выбора базовой модели Lesnik для пилота они не заменяют line-level запись Lesnik.

| product_id | official_name | parent_line | source_id | pilot_status |
| --- | --- | --- | --- | --- |
| product_lesnik2_335l | RikaNV Lesnik2 335L | RikaNV Lesnik | src_rikanv_ru_lesnik2_335l_20260701 | candidate; not selected for current pilot |
| product_lesnik2_360l | RikaNV Lesnik2 360L | RikaNV Lesnik | src_rikanv_ru_lesnik2_360l_20260701 | candidate; not selected for current pilot |
| product_lesnik2_360l_pro | RikaNV Lesnik2 360L PRO | RikaNV Lesnik | src_rikanv_ru_lesnik2_360l_pro_20260701 | candidate; not selected for current pilot |
| product_lesnik2_650l | RikaNV Lesnik2 650L | RikaNV Lesnik | src_rikanv_ru_lesnik2_650l_20260701 | selected for pilot |
| product_lesnik2_650l_pro | RikaNV Lesnik2 650L PRO | RikaNV Lesnik | src_rikanv_ru_lesnik2_650l_pro_20260701 | candidate; not selected for current pilot |
| product_lesnik2_660l | RikaNV Lesnik2 660L | RikaNV Lesnik | src_rikanv_ru_lesnik2_660l_20260701 | candidate; not selected for current pilot |
| product_lesnik2_660l_pro | RikaNV Lesnik2 660L PRO | RikaNV Lesnik | src_rikanv_ru_lesnik2_660l_pro_20260701 | candidate; not selected for current pilot |

| product_id | product_kind | product_category | first_specs_seen_on_rikanv_ru |
| --- | --- | --- | --- |
| product_lesnik2_335l | product_model | thermal_riflescope | 384×288; 35mm F1.0; обнаружение 1800m; LRF 1200m |
| product_lesnik2_360l | product_model | thermal_riflescope | 384×288; 20/60mm F1.0; обнаружение 1000/3000m; LRF 1200m |
| product_lesnik2_360l_pro | product_model | thermal_riflescope | 384×288; 20/60mm F1.0; обнаружение 1000/3000m; LRF 1200m |
| product_lesnik2_650l | product_model | thermal_riflescope | 640×512; 50mm F1.0; обнаружение 2600m; LRF 1200m |
| product_lesnik2_650l_pro | product_model | thermal_riflescope | 640×512; 50mm F1.0; обнаружение 2600m; LRF 1200m |
| product_lesnik2_660l | product_model | thermal_riflescope | 640×512; 20/60mm F1.0; обнаружение 1000/3000m; LRF 1200m |
| product_lesnik2_660l_pro | product_model | thermal_riflescope | 640×512; 20/60mm F1.0; обнаружение 1000/3000m; LRF 1200m |

## Found Hypnose/Hypnose2 Product Model Candidates

Эти модели найдены на странице линии Hypnose и как отдельные product pages.

До выбора конкретной модели они не позволяют переносить характеристики на `line_hypnose` или `line_hypnose2`.

| product_id | official_name | parent_line | source_id | pilot_status |
| --- | --- | --- | --- | --- |
| product_hypnose2_335l | RikaNV Hypnose2 335L | RikaNV Hypnose2 | src_rikanv_ru_hypnose2_335l_20260701 | candidate; not selected for current pilot |
| product_hypnose2_650l | RikaNV Hypnose2 650L | RikaNV Hypnose2 | src_rikanv_ru_hypnose2_650l_20260701 | selected for pilot |
| product_hypnose2_660d | RikaNV Hypnose2 660D | RikaNV Hypnose2 | src_rikanv_ru_hypnose2_660d_20260701 | candidate; not selected for current pilot |

| product_id | product_kind | product_category | first_specs_seen_on_rikanv_ru |
| --- | --- | --- | --- |
| product_hypnose2_335l | product_model | observation_thermal | 384×288; 35mm F0.8; обнаружение 1800m; дальномер 1000m |
| product_hypnose2_650l | product_model | observation_thermal | 640×512; 50mm F0.9; обнаружение 2600m; дальномер 1000m |
| product_hypnose2_660d | product_model | observation_thermal | 640×512; 20/60mm F0.9; обнаружение 1000/3000m |

## Site Import Run 001 Verification

Дата проверки: 2026-07-02.

Этот раздел фиксирует результат первого agent site import по approved base scope.
Он не заменяет базовые Product Truth карточки и не переносит характеристики между линейками и моделями.

### Import rules applied

- Product line получает только line-level facts.
- Product model получает model-level specs только с официальной страницы модели.
- Detection range и LRF фиксируются как official specs, но не как подтвержденная полевая эффективность.
- Цена, наличие, акции, комплектация, прошивки и гарантийные условия считаются volatile.
- Marketing language не переносится в verified claims.

### RikaNV Ovod L25

| Field | Value |
|---|---|
| product_kind | product_model |
| product_category | thermal_riflescope |
| source_id | src_rikanv_ru_ovod_l25_20260701 |
| evidence_id | ev_rikanv_ru_ovod_l25_specs_20260701 |
| import_status | processed |
| extracted_fields | sensor 256x192; lens 25 mm F0.9; pixel 12 um; detection range 1300 m; AMOLED 1024x768 0.39 inch; IP67; up to 10 h; ballistic calculator; 6 zeroing profiles; recoil 6000 J; Picatinny rail |
| volatile_fields | price; availability; promotion; bundle; firmware; warranty conditions |
| missing_fields | TODO: нет данных на rikanv.ru for recognition_range; identification_range; eye_relief |
| blockers | No blocker for official specification extraction. Field performance claims still require tests. |

### RikaNV Lesnik

| Field | Value |
|---|---|
| product_kind | product_line |
| product_category | thermal_riflescope |
| source_id | src_rikanv_ru_lesnik_line_20260701 |
| evidence_id | ev_rikanv_ru_lesnik_line_20260701 |
| import_status | processed |
| extracted_fields | line page lists Lesnik2 model pages, including 335L, 360L, 360L PRO, 650L, 650L PRO, 660L, 660L PRO |
| volatile_fields | prices; availability; promotions; model availability |
| missing_fields | N/A - product_line; model-level specs require concrete product pages |
| blockers | Do not create model-level specification claims for Lesnik line. |

### RikaNV Lesnik2 650L

| Field | Value |
|---|---|
| product_kind | product_model |
| product_category | thermal_riflescope |
| parent_line | RikaNV Lesnik |
| source_id | src_rikanv_ru_lesnik2_650l_20260701 |
| evidence_id | ev_rikanv_ru_lesnik2_650l_specs_20260701 |
| import_status | processed |
| extracted_fields | sensor 640x512; lens 50 mm F1.0; pixel 12 um; NETD <=18 mK; LRF 1200 m; ballistic calculator; recoil 6000 J; up to 16 h; IP67; Picatinny rail |
| volatile_fields | price; availability; promotion; bundle; firmware; warranty conditions |
| missing_fields | TODO: нет данных на rikanv.ru for recognition_range; identification_range; eye_relief |
| blockers | Field performance and stability claims require test evidence. |

### RikaNV Surok L15

| Field | Value |
|---|---|
| product_kind | product_model |
| product_category | observation_thermal |
| source_id | src_rikanv_ru_surok_l15_20260701 |
| evidence_id | ev_rikanv_ru_surok_l15_specs_20260701 |
| import_status | processed |
| extracted_fields | observation thermal camera with video recording; sensor 256x192; lens 15 mm F0.9; detection range 750 m; field of view 11.7 x 8.8 degrees; AMOLED 1024x768; EIS; removable 18650 battery; IP67; up to 10 h |
| volatile_fields | price; availability; promotion; bundle; firmware; warranty conditions |
| missing_fields | TODO: нет данных на rikanv.ru for recognition_range; identification_range; internal memory value |
| blockers | Riflescope-only fields are N/A unless directly supported by official source. |

### RikaNV Hypnose

| Field | Value |
|---|---|
| product_kind | product_line |
| product_category | observation_thermal |
| source_id | src_rikanv_ru_hypnose_line_20260701 |
| evidence_id | ev_rikanv_ru_hypnose_line_20260701 |
| import_status | processed |
| extracted_fields | line page lists Hypnose2 model pages, including 335L, 650L, 660D |
| volatile_fields | prices; availability; promotions; model availability |
| missing_fields | N/A - product_line; model-level specs require concrete product pages |
| blockers | Do not create model-level specification claims for Hypnose line. |

### RikaNV Hypnose2

| Field | Value |
|---|---|
| product_kind | product_line |
| product_category | observation_thermal |
| source_id | src_rikanv_ru_hypnose_line_20260701 |
| evidence_id | ev_rikanv_ru_hypnose2_line_20260701 |
| import_status | partial |
| extracted_fields | Hypnose2 models are visible through the Hypnose line page; separate /lines/hypnose2 URL was not found during this run |
| volatile_fields | prices; availability; promotions; model availability |
| missing_fields | BLOCKER: no separate Hypnose2 line page found on rikanv.ru during this run |
| blockers | Human product owner should confirm whether Hypnose2 line should use Hypnose line page as official line source. |

### RikaNV Hypnose2 650L

| Field | Value |
|---|---|
| product_kind | product_model |
| product_category | observation_thermal |
| parent_line | RikaNV Hypnose2 |
| source_id | src_rikanv_ru_hypnose2_650l_20260701 |
| evidence_id | ev_rikanv_ru_hypnose2_650l_specs_20260701 |
| import_status | processed |
| extracted_fields | sensor 640x512; lens 50 mm F0.9; NETD <=18 mK; LRF 1000 m; detection range 2600 m; USB-C video output; AMOLED 1024x768; IP67 |
| volatile_fields | price; availability; promotion; bundle; firmware; warranty conditions |
| missing_fields | TODO: нет данных на rikanv.ru for recognition_range; identification_range; internal memory value |
| blockers | Field performance claims require test evidence. |
