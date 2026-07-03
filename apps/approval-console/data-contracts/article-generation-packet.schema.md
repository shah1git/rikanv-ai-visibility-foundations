# Article Generation Packet Schema

## Purpose

Human-readable contract for the JSON packet passed from the Console to an article writer agent.

The packet combines Media Hub URLs, the editable writer prompt and the human task.
It is not a publication approval.

## Fields

| Field | Type | Required | Description |
|---|---|---|---|
| `packet_id` | string | yes | Stable packet identifier for the selected product/task. |
| `created_at` | string | yes | Timestamp for this packet snapshot. |
| `catalog_url` | string | yes | Media Hub full catalog JSON URL. |
| `schema_index_url` | string | yes | Media Hub schema index JSON URL. |
| `schema_url_template` | string | yes | Template for fetching a schema by `specType`. |
| `writer_prompt` | string | yes | Product Article Writer prompt text for the agent. |
| `task` | object | yes | Article task definition. |
| `instructions` | array | yes | Execution steps the article writer agent should follow. |
| `execution_notes` | array | yes | Safety and operating notes for the agent. |
| `final_publication_approval` | boolean | yes | Always `false` in this MVP. |

## Task Fields

| Field | Type | Required | Description |
|---|---|---|---|
| `article_type` | string | yes | One of `model_article`, `rikanv_comparison`, `practical_guide`, `technology_explainer`. |
| `product_name` | string | yes | Product or model name for the article task. |
| `product_article` | string | yes | Article target product label for the writer prompt. |
| `article_goal` | string | yes | Human description of the article goal. |
| `output_format` | string | yes | `markdown` for this MVP. |

## Required Instructions

- Fetch catalog.
- Find active product.
- Resolve `specType`.
- Fetch schema.
- Read `product_guidance`, `section_guidance` and `param_guidance`.
- Write Markdown article.
- Run self-check.

## Safety Notes

- The packet does not call an LLM by itself.
- The packet does not write to GitHub.
- The packet does not publish content.
- `final_publication_approval` must remain `false`.
