# Site Ingest to Claims

## Goal

Агент автоматически превращает страницы `rikanv.ru` в Product Truth, Sources,
Evidence and Claims.

## Inputs

- URLs.
- Allowed source policy.
- Product taxonomy.
- RikaNV Doctrine.
- Current Product Truth.
- Existing Source Register.
- Existing Evidence Register.
- Existing Claim Registry.

## Steps

1. Fetch page.
2. Identify `product_or_line`.
3. Classify `product_kind`.
4. Classify `product_category`.
5. Extract specs.
6. Extract functional descriptions.
7. Create sources.
8. Create evidence.
9. Create claims.
10. Assign tier.
11. Assign status.
12. Flag risks.
13. Produce import report.

## Outputs

- Product Truth update.
- Source records.
- Evidence records.
- Claims.
- Risk report.
- TODO fields.
- Import blockers.

## Human Involvement

Only:

- resolve taxonomy ambiguity;
- approve publication;
- resolve blocked claims;
- provide additional sources when evidence is missing.

## Rules

- Use `rikanv.ru` as primary public source for the first import.
- Do not use rikasale.ru or third-party sites without explicit permission.
- Do not copy marketing language into verified claims.
- Do not transfer model specs to product lines.
- Do not transfer line-level claims to product models.
- Official product pages can verify model-level specification claims.
- Official line pages can verify only line-level claims.
