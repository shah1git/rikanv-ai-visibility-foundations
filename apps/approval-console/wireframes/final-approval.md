# Wireframe: Final Approval

## Purpose

Provide a hard final publication gate.

## Layout

```text
+----------------------------------------------------------+
| Final Approval                                           |
+----------------------------------------------------------+
| [ ] Technical approval                                   |
| [ ] Doctrine approval                                    |
| [ ] Final owner approval                                 |
| [ ] Publication channel selected                         |
| [ ] Date of last review added                            |
+----------------------------------------------------------+
| Channel: [select]                                        |
| Approver: [required]                                     |
| Date: [required]                                         |
|                                                          |
| [Publish] disabled until all gates pass                  |
+----------------------------------------------------------+
```

## Rules

- Publish button is disabled until every gate is complete.
- `approve_for_next_agent_run` does not enable publication.
- `publication_ready` becomes true only after final approval.
