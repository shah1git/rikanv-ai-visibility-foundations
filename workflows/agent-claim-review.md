# Agent Claim Review

## Goal

Классифицировать claims до human review, чтобы человек смотрел только
исключения, а не все 30 claims вручную.

## Inputs

- Claim Registry.
- Source Register.
- Evidence Register.
- Product Truth.
- RikaNV Doctrine.
- Publication restrictions.

## Claim Tiers

### Tier A

Official specifications from `rikanv.ru`. Allowed for agent-generated drafts
when source/evidence are linked and wording stays official-spec only.

### Tier B

Functional descriptions and line-level claims from `rikanv.ru`. Allowed after
agent doctrine/technical pre-check.

### Tier C

Scenario-fit, performance and field claims. Needs evidence or human review.

### Tier D

Competitor comparisons, confidential, volatile or legal-sensitive claims.
Blocked until explicit human approval.

## Review Statuses

- `auto_approved_for_draft`
- `human_review_required`
- `needs_evidence`
- `needs_rewording`
- `blocked_for_publication`
- `rejected`

## Steps

1. Check source_id.
2. Check evidence_id.
3. Check product_kind and product_category.
4. Check line/model separation.
5. Check official source scope.
6. Assign claim tier.
7. Assign agent_review_status.
8. Add risk flags.
9. Produce exception list for humans.

## Human Exceptions

Human review is required for:

- blocked claims;
- high-risk rewording;
- competitor comparison;
- performance claims beyond official specification wording;
- confidential or volatile claims;
- line/model ambiguity;
- doctrine risk.

## Outputs

- Agent Claim Review Board.
- Human exception list.
- Required evidence list.
- Rewording recommendations.
- Publication blockers.
