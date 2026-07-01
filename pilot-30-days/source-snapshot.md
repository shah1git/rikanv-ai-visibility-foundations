# Source Snapshot

Дата снимка: 2026-07-01.

Цель файла — коротко зафиксировать, какие официальные источники `rikanv.ru` использованы в первом пилоте и какие поля из них перенесены в Product Truth / Evidence / Claim Registry.

Правила:

- Не копировать длинные тексты страниц.
- Не переносить маркетинговые формулировки в claims.
- Не считать price/availability постоянными характеристиками.
- Не считать line page подтверждением model-level specs.
- Не использовать AI-ответы как source of truth.

## Base official sources

### `src_rikanv_ru_ovod_l25_20260701`

- URL: `https://rikanv.ru/catalog/teplovizionnye-pritsely/rikanv-ovod-l25`
- status: found
- date_checked: 2026-07-01
- product_or_line: RikaNV Ovod L25
- product_kind: `product_model`
- category: `thermal_riflescope`
- extracted_fields:
  - product page exists;
  - sensor: `256×192`;
  - lens: `25 мм F/0.9`;
  - detection/recognition/identification: `1300 м / 650 м / 433 м`;
  - battery/power: `18650; до 10 часов`;
  - protection_class: `IP67`;
  - operating_temperature: `-20…+50 °C`;
  - riflescope fields: ballistic calculator, 6 zeroing profiles, recoil rating, Picatinny Rail.
- volatile_fields: price, availability.
- not_verified_by_this_source:
  - superiority over competitors;
  - field effectiveness;
  - scenario-fit claims;
  - service promises;
  - independent comparison claims.

### `src_rikanv_ru_lesnik_line_20260701`

- URL: `https://rikanv.ru/lines/lesnik`
- status: found
- date_checked: 2026-07-01
- product_or_line: RikaNV Lesnik
- product_kind: `product_line`
- category: `thermal_riflescope`
- extracted_fields:
  - line page exists;
  - Lesnik stays base Product Truth priority;
  - Lesnik2 candidate model links found;
  - line-level facts only.
- pilot_selection: selected concrete model is RikaNV Lesnik2 650L by human product decision.
- volatile_fields: price, availability.
- not_verified_by_this_source:
  - model-level specs for the whole line;
  - scenario-fit claims for a concrete model;
  - comparison claims.

### `src_rikanv_ru_surok_l15_20260701`

- URL: `https://rikanv.ru/catalog/teplovizory-nablyudeniya/rikanv-surok-l15`
- status: found
- date_checked: 2026-07-01
- product_or_line: RikaNV Surok L15
- product_kind: `product_model`
- category: `observation_thermal`
- extracted_fields:
  - product page exists;
  - sensor: `256×192`;
  - lens: `15 мм F/0.9`;
  - NETD: `≤25 мК`;
  - display: `AMOLED 1024×768`;
  - detection/recognition/identification: `750 м / 375 м / 250 м`;
  - field_of_view: `11.7°×8.8°`;
  - video_recording: indicated on official page;
  - battery/power: `18650; до 10 часов`;
  - protection_class: `IP67`;
  - operating_temperature: `-20…+50 °C`.
- volatile_fields: price, availability.
- not_verified_by_this_source:
  - riflescope-specific fields;
  - superiority over competitors;
  - field effectiveness;
  - independent comparison claims.

### `src_rikanv_ru_hypnose_line_20260701`

- URL: `https://rikanv.ru/lines/hypnose`
- status: found
- date_checked: 2026-07-01
- product_or_line: RikaNV Hypnose / RikaNV Hypnose2
- product_kind: `product_line`
- category: `observation_thermal`
- extracted_fields:
  - Hypnose line page exists;
  - Hypnose treated as `product_line`;
  - Hypnose2 models are listed on the Hypnose line page;
  - line-level observation context is available;
  - concrete Hypnose2 candidate model pages were found.
- pilot_selection: selected concrete Hypnose2 model is RikaNV Hypnose2 650L by human product decision.
- volatile_fields: price, availability.
- not_verified_by_this_source:
  - Hypnose as a concrete `product_model`;
  - Hypnose2 as a concrete `product_model`;
  - model-level specs for the whole Hypnose or Hypnose2 line;
  - separate Hypnose2 line page.

### `src_rikanv_ru_ovod_line_20260701`

- URL: `https://rikanv.ru/lines/ovod`
- status: found
- date_checked: 2026-07-01
- product_or_line: RikaNV Ovod
- product_kind: `product_line`
- category: `thermal_riflescope`
- extracted_fields:
  - Ovod line page exists;
  - line-level context for Ovod is available;
  - product line can support line-level claims.
- volatile_fields: price, availability.
- not_verified_by_this_source:
  - Ovod L25 specs beyond the concrete product page;
  - superiority claims;
  - final comparisons.

### `src_rikanv_ru_surok_line_20260701`

- URL: `https://rikanv.ru/lines/surok`
- status: found
- date_checked: 2026-07-01
- product_or_line: RikaNV Surok
- product_kind: `product_line`
- category: `observation_thermal`
- extracted_fields:
  - Surok line page exists;
  - line-level context for Surok is available;
  - product line can support line-level claims.
- volatile_fields: price, availability.
- not_verified_by_this_source:
  - Surok L15 specs beyond the concrete product page;
  - riflescope-specific claims;
  - superiority claims;
  - final comparisons.

### `src_rikanv_ru_hypnose2_line_20260701`

- URL: `https://rikanv.ru/lines/hypnose2` and `https://rikanv.ru/lines/hypnose-2`
- status: failed
- date_checked: 2026-07-01
- product_or_line: RikaNV Hypnose2
- product_kind: `product_line`
- category: `observation_thermal`
- extracted_fields: none.
- volatile_fields: none.
- not_verified_by_this_source:
  - separate Hypnose2 line page;
  - Hypnose2 line-level status outside `/lines/hypnose`;
  - any model-level specs.

## Lesnik candidate model pages

### `src_rikanv_ru_lesnik2_335l_20260701`

- URL: `https://rikanv.ru/catalog/teplovizionnye-pritsely/rikanv-lesnik2-335l`
- status: found
- date_checked: 2026-07-01
- product_or_line: RikaNV Lesnik2 335L
- product_kind: `product_model`
- category: `thermal_riflescope`
- extracted_fields: `384×288`; `35mm F1.0`; detection `1800m`; LRF `1200m`.
- volatile_fields: price, availability.
- not_verified_by_this_source: selection as base Lesnik model; scenario-fit; final comparison.

### `src_rikanv_ru_lesnik2_360l_20260701`

- URL: `https://rikanv.ru/catalog/teplovizionnye-pritsely/rikanv-lesnik2-360l`
- status: found
- date_checked: 2026-07-01
- product_or_line: RikaNV Lesnik2 360L
- product_kind: `product_model`
- category: `thermal_riflescope`
- extracted_fields: `384×288`; `20/60mm F1.0`; detection `1000/3000m`; LRF `1200m`.
- volatile_fields: price, availability.
- not_verified_by_this_source: selection as base Lesnik model; scenario-fit; final comparison.

### `src_rikanv_ru_lesnik2_360l_pro_20260701`

- URL: `https://rikanv.ru/catalog/teplovizionnye-pritsely/rikanv-lesnik2-360l-pro`
- status: found
- date_checked: 2026-07-01
- product_or_line: RikaNV Lesnik2 360L PRO
- product_kind: `product_model`
- category: `thermal_riflescope`
- extracted_fields: `384×288`; `20/60mm F1.0`; detection `1000/3000m`; LRF `1200m`.
- volatile_fields: price, availability.
- not_verified_by_this_source: selection as base Lesnik model; scenario-fit; final comparison.

### `src_rikanv_ru_lesnik2_650l_20260701`

- URL: `https://rikanv.ru/catalog/teplovizionnye-pritsely/rikanv-lesnik2-650l`
- status: found
- date_checked: 2026-07-01
- product_or_line: RikaNV Lesnik2 650L
- product_kind: `product_model`
- category: `thermal_riflescope`
- extracted_fields: `640×512`; `50mm F1.0`; detection `2600m`; LRF `1200m`.
- pilot_selection: selected base Lesnik model for first model-level Product Truth.
- volatile_fields: price, availability.
- not_verified_by_this_source: scenario-fit; service claims; real field distance; stability of zero; final comparison.

### `src_rikanv_ru_lesnik2_650l_pro_20260701`

- URL: `https://rikanv.ru/catalog/teplovizionnye-pritsely/rikanv-lesnik2-650l-pro`
- status: found
- date_checked: 2026-07-01
- product_or_line: RikaNV Lesnik2 650L PRO
- product_kind: `product_model`
- category: `thermal_riflescope`
- extracted_fields: `640×512`; `50mm F1.0`; detection `2600m`; LRF `1200m`.
- volatile_fields: price, availability.
- not_verified_by_this_source: selection as base Lesnik model; scenario-fit; final comparison.

### `src_rikanv_ru_lesnik2_660l_20260701`

- URL: `https://rikanv.ru/catalog/teplovizionnye-pritsely/rikanv-lesnik2-660l`
- status: found
- date_checked: 2026-07-01
- product_or_line: RikaNV Lesnik2 660L
- product_kind: `product_model`
- category: `thermal_riflescope`
- extracted_fields: `640×512`; `20/60mm F1.0`; detection `1000/3000m`; LRF `1200m`.
- volatile_fields: price, availability.
- not_verified_by_this_source: selection as base Lesnik model; scenario-fit; final comparison.

### `src_rikanv_ru_lesnik2_660l_pro_20260701`

- URL: `https://rikanv.ru/catalog/teplovizionnye-pritsely/rikanv-lesnik2-660l-pro`
- status: found
- date_checked: 2026-07-01
- product_or_line: RikaNV Lesnik2 660L PRO
- product_kind: `product_model`
- category: `thermal_riflescope`
- extracted_fields: `640×512`; `20/60mm F1.0`; detection `1000/3000m`; LRF `1200m`.
- volatile_fields: price, availability.
- not_verified_by_this_source: selection as base Lesnik model; scenario-fit; final comparison.

## Hypnose2 candidate model pages

### `src_rikanv_ru_hypnose2_335l_20260701`

- URL: `https://rikanv.ru/catalog/teplovizory-nablyudeniya/rikanv-hypnose2-335l`
- status: found
- date_checked: 2026-07-01
- product_or_line: RikaNV Hypnose2 335L
- product_kind: `product_model`
- category: `observation_thermal`
- extracted_fields: `384×288`; `35mm F0.8`; detection `1800m`; rangefinder `1000m`.
- volatile_fields: price, availability.
- not_verified_by_this_source: selected Hypnose2 pilot model; line-level specs for Hypnose2; final comparison.

### `src_rikanv_ru_hypnose2_650l_20260701`

- URL: `https://rikanv.ru/catalog/teplovizory-nablyudeniya/rikanv-hypnose2-650l`
- status: found
- date_checked: 2026-07-01
- product_or_line: RikaNV Hypnose2 650L
- product_kind: `product_model`
- category: `observation_thermal`
- extracted_fields: `640×512`; `50mm F0.9`; detection `2600m`; rangefinder `1000m`.
- pilot_selection: selected base Hypnose2 model for first model-level Product Truth.
- volatile_fields: price, availability.
- not_verified_by_this_source: line-level specs for all Hypnose2; scenario-fit; service claims; real field distance; final comparison.

### `src_rikanv_ru_hypnose2_660d_20260701`

- URL: `https://rikanv.ru/catalog/teplovizory-nablyudeniya/rikanv-hypnose2-660d`
- status: found
- date_checked: 2026-07-01
- product_or_line: RikaNV Hypnose2 660D
- product_kind: `product_model`
- category: `observation_thermal`
- extracted_fields: `640×512`; `20/60mm F0.9`; detection `1000/3000m`.
- volatile_fields: price, availability.
- not_verified_by_this_source: selected Hypnose2 pilot model; line-level specs for Hypnose2; final comparison.
