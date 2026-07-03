# Article Generation Settings Schema

## Purpose

Human-readable contract for the settings used by the Article Generator panel.

The settings define where the article writer agent should fetch Media Hub data and which Product Article Writer prompt it should use.

## Fields

| Field | Type | Required | Description |
|---|---|---|---|
| `catalog_url` | string | yes | URL of the Media Hub full catalog JSON. |
| `schema_index_url` | string | yes | URL of the Media Hub schema index JSON. |
| `schema_url_template` | string | yes | URL template for resolving a schema by `specType`. |
| `writer_prompt` | string | yes | Editable Product Article Writer prompt text. |
| `prompt_version` | string | yes | Prompt source or version reference. |
| `updated_at` | string | yes | ISO-like timestamp for the settings snapshot. |
| `updated_by` | string | yes | Actor that last prepared the settings. |
| `notes` | string | no | Human-readable notes for the packet author. |

## Safety Notes

- These settings do not publish anything.
- These settings do not call an LLM.
- The Console stores no secrets in this contract.
- The default prompt source is `repo:prompts/product-article-writer.prompt.md`.
