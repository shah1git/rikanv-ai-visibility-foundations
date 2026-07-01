# Day 1: Agent Site Import Start

## Goal

Запустить первый agent site import по базовому scope и получить source snapshot,
Product Truth extraction draft, candidate evidence и candidate claims.

Day 1 не является сессией переноса характеристик человеком. Человек утверждает
scope, allowed source policy, owners и exceptions.

## Inputs

- Allowed URLs на `rikanv.ru`.
- Product taxonomy:
  - `product_line`;
  - `product_model`;
  - `thermal_riflescope`;
  - `observation_thermal`.
- RikaNV Doctrine.
- Current Product Truth.
- Current Source Register.
- Current Evidence Register.
- Current Claim Registry.
- Publication restrictions.

## Base Scope

- RikaNV Ovod L25.
- RikaNV Lesnik.
- RikaNV Lesnik2 650L.
- RikaNV Surok L15.
- RikaNV Hypnose.
- RikaNV Hypnose2.
- RikaNV Hypnose2 650L.

## Human Decisions Before Run

- Подтвердить product scope.
- Подтвердить allowed source policy: primary public source is `rikanv.ru`.
- Подтвердить, что rikasale.ru, дилерские сайты, маркетплейсы и сторонние
  обзоры не используются без отдельного разрешения.
- Подтвердить owners:
  - Pilot owner;
  - Product Truth owner;
  - Technical reviewer;
  - Doctrine compliance owner;
  - Publication owner;
  - AI visibility owner.
- Подтвердить publication restrictions.
- Подтвердить, что final publication approval остается за человеком.

## Agent Run

Site Import Agent:

1. Fetch pages.
2. Discover missing pages only within `rikanv.ru`.
3. Classify `product_line` / `product_model`.
4. Classify `thermal_riflescope` / `observation_thermal`.
5. Extract visible fields.
6. Mark unavailable fields as `TODO: нет данных на rikanv.ru`.
7. Create source snapshot.
8. Create candidate source records.
9. Create candidate evidence records.
10. Create candidate claims.
11. Flag blockers.
12. Produce import report.

## Human Review After Run

Человек смотрит только:

- taxonomy ambiguity;
- blocked claims;
- missing source;
- suspicious marketing text;
- volatile fields;
- confidential / legal-sensitive fields;
- performance claims that could be confused with field performance;
- line/model confusion;
- category confusion.

## Expected Outputs

- Source snapshot по базовому scope.
- Product Truth extraction draft.
- Candidate source records.
- Candidate evidence records.
- Candidate claims.
- Blocker list.
- Human exception list.
- Next action list.

## Definition of Done

- Agent processed the approved base scope.
- No external domains were used.
- Product taxonomy is preserved.
- Line-level and model-level data are separated.
- Candidate claims are linked to source/evidence or marked TODO.
- Suspicious marketing text is flagged.
- Volatile fields are flagged.
- Human exceptions are listed.
- No publication happens on Day 1.
