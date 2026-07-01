# Digital Role Schema

## Назначение

`digital-role` описывает операционную цифровую роль, а не личность и не обязательно отдельного агента.

## Обязательные поля

| Поле | Описание |
|---|---|
| role_id | идентификатор |
| role_name | название |
| mission | миссия |
| responsibilities | обязанности |
| inputs | входы |
| outputs | выходы |
| permissions | права |
| restrictions | ограничения |
| quality_gates | проверки качества |
| kpis | KPI |
| escalation_rules | правила эскалации |

## Опциональные поля

- tools;
- example_tasks;
- failure_modes;
- prompt_reference;
- checklist_reference.

## Связи

- `content-task`;
- `review`;
- `article`;
- `ai-answer`.

## Пример

| Поле | Значение |
|---|---|
| role_id | `role-writer` |
| role_name | `Writer` |
| mission | `готовить черновики на основе claims` |
| restrictions | `не придумывать факты, не утверждать и не публиковать` |

## Типичные ошибки

- Описывать роль как фантазийную личность.
- Давать одной роли право писать, проверять и публиковать.
- Не фиксировать escalation rules.

## Статус MVP

required
