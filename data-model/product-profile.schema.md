# Product Profile Schema

## Назначение

`product-profile` хранит расширенную карточку продукта: характеристики, ограничения, сценарии, claims, тесты, сервисные заметки и материалы.

## Обязательные поля

| Поле | Описание |
|---|---|
| profile_id | идентификатор профиля |
| product_id | связь с product |
| official_name | официальное название |
| status | статус профиля |
| specifications | таблица характеристик |
| confirmed_claim_ids | подтвержденные claims |
| limitations | ограничения |
| last_reviewed_at | дата проверки |
| reviewer | reviewer |

## Опциональные поля

- target_users;
- not_for;
- competitors_for_comparison;
- test_report_ids;
- service_notes;
- firmware_history;
- buyer_materials;
- dealer_materials;
- open_questions.

## Связи

- `product`;
- `claim`;
- `source`;
- `evidence`;
- `test-report`;
- `comparison`.

## Пример

| Раздел | Значение |
|---|---|
| profile_id | `profile-lesnik-todo` |
| product_id | `product-lesnik-todo` |
| official_name | `RikaNV Lesnik TODO: нужны данные RikaNV` |
| specifications | `все значения TODO до получения официальных данных` |
| status | `draft` |

## Типичные ошибки

- Заполнять характеристики из памяти.
- Не обновлять профиль после прошивки или изменения комплектации.
- Публиковать неподтвержденные claims.

## Статус MVP

required
