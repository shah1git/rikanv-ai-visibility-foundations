# Combined Pre-Check Action List Run 001

## Purpose

Список точечных правок, которые нужно внести в drafts перед publication package.

## Actions

| Action ID | Draft | Priority | Source | Issue | Required change | Owner | Blocks publication? |
|---|---|---|---|---|---|---|---|
| A-001 | All drafts | P0 blocker | both | Drafts are not publication-ready. | Keep draft_only status until all reviews and final human approval are complete. | Human Owner | yes |
| A-002 | All drafts | P1 high | both | Scenario-fit evidence is missing. | Keep “кому может подойти” cautious or replace with evidence-backed scenario claims. | Content Draft Agent | yes |
| A-003 | All drafts | P1 high | technical | Range and LRF values can be misread as field performance. | Preserve official-spec wording and avoid field guarantees. | Technical Reviewer | yes |
| A-004 | Ovod L25 | P1 high | both | No-LRF limitation is excluded and unresolved. | Do not add limitation unless human approves public wording. | Human Owner | yes |
| A-005 | Lesnik2 650L | P1 high | technical | Recoil rating is excluded and unresolved. | Technical reviewer decides whether and how to use recoil rating. | Technical Reviewer | yes |
| A-006 | Lesnik2 650L | P2 medium | technical | Line-level Lesnik context appears in model draft. | Keep Lesnik facts as line context only, not model-level specs. | Content Draft Agent | yes |
| A-007 | Hypnose2 650L | P1 high | both | Hypnose2 line-source issue remains unresolved. | Clarify whether Hypnose page can support Hypnose2 line context. | Human Owner | yes |
| A-008 | All drafts | P2 medium | both | TODOs are visible in draft body. | Keep TODOs internal or resolve them before publication package. | Content Draft Agent | yes |
| A-009 | All drafts | P2 medium | doctrine | Final approval is absent. | Run human publication approval after cleanup and reviews. | Human Owner | yes |

## Suggested next run

Следующий агентный шаг: Content Draft Cleanup Run 001.
Запускать его нужно только после review of this action list.
