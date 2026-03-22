## Description

A Serial Number Template defines a SmartFormat template string used to generate human-readable serial numbers for [[MES/Item|Items]] as they are created in production. Templates are associated with [[MES/Item Specification|Item Specifications]] and can reference dynamic values such as order numbers and per-item sequence counters to produce unique identifiers.

## Properties

| **Property Name** | **Property Type** | **Nullable** | **Description**                                                                                                          |
| ----------------- | ----------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------ |
| **id**            | `Guid`            | `false`      | The unique identifier of the Serial Number Template.                                                                     |
| **name**          | `string`          | `false`      | The human-readable name of the Serial Number Template.                                                                   |
| **description**   | `string`          | `true`       | An optional description of the Serial Number Template.                                                                   |
| **template**      | `string`          | `false`      | The SmartFormat template string used to generate serial numbers. May reference dynamic tokens such as order and item counters. |
| **isActive**      | `bool`            | `false`      | Whether the Serial Number Template is currently active and available for use.                                            |
| **createdAt**     | `DateTime`        | `false`      | The date and time the Serial Number Template was created.                                                                |
| **updatedAt**     | `DateTime`        | `false`      | The date and time the Serial Number Template was last updated.                                                           |
| **createdById**   | `Guid`            | `false`      | The unique identifier of the user who created the Serial Number Template.                                                |
| **updatedById**   | `Guid`            | `false`      | The unique identifier of the user who last updated the Serial Number Template.                                           |
