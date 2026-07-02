# Decision Dashboard Run 001

## Summary

- Cleaned drafts prepared: 4.
- Publication-ready drafts: 0.
- Required decisions: 7.
- Recommended safe path: keep risky items excluded and move only after human answers.

No draft can be published now.
All drafts remain `draft_only` and require technical, doctrine and final human approval.

## Draft readiness matrix

| Draft | Current status | Can proceed to next cleanup? | Can publish now? | Main blockers |
|---|---|---|---|---|
| Ovod L25 | cleaned_draft_only | Yes, after HRD-001 and HRD-004 are answered | No | no-LRF wording; scenario evidence; human reviews |
| Lesnik2 650L | cleaned_draft_only | Yes, after HRD-002 and HRD-004 are answered | No | recoil rating; scenario evidence; human reviews |
| Surok L15 | cleaned_draft_only | Yes, after HRD-004 and HRD-005 are answered | No | scenario evidence; human reviews |
| Hypnose2 650L | cleaned_draft_only | Yes, after HRD-003 and HRD-004 are answered | No | line-source clarification; field evidence; human reviews |

## Required decisions

| Decision ID | Topic | Priority | Agent recommendation | Human decision needed |
|---|---|---|---|---|
| HRD-001 | Ovod L25 no-LRF limitation wording | P1 high | Exclude from first publication package, or allow only neutral wording after approval. | Choose if and how this limitation can be used. |
| HRD-002 | Lesnik2 650L recoil rating usage | P1 high | Exclude until technical reviewer approves. | Decide whether recoil rating may appear in text or tables. |
| HRD-003 | Hypnose2 line-source clarification | P1 high | Do not use Hypnose2 line context unless relation/source is confirmed. | Decide whether Hypnose page can support Hypnose2 context. |
| HRD-004 | Official detection/LRF wording policy | P0 blocker | Use only official-spec wording. | Approve the standard wording formula for ranges. |
| HRD-005 | Field-performance claims policy | P0 blocker | Do not use without field tests or approved methodology. | Confirm field-performance claims remain excluded. |
| HRD-006 | Volatile commercial data policy | P1 high | Exclude from first publication package. | Decide whether any commercial data can be used later. |
| HRD-007 | Move cleaned drafts to publication package after next cleanup | P0 blocker | Allow only after HRD-001 to HRD-006 are answered. | Decide if the next run may prepare package candidates. |

## Agent recommended path

- Exclude no-LRF limitation from public text unless owner approves.
- Exclude recoil rating until technical reviewer confirms.
- Keep Hypnose2 context model-level only unless line-source is approved.
- Use official detection/LRF only as official specifications.
- Do not use field-performance claims without tests.
- Keep volatile commercial fields out of the first publication package.
- Do not remove `draft_only` metadata until final human approval is complete.
