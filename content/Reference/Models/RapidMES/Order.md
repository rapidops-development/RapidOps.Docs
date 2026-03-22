## Description

An Order is a request to produce a specified quantity of an [[MES/Item Specification|Item Specification]] using a designated [[Bill Of Process]]. Each Order is assigned a unique auto-generated order number and produces individual [[MES/Item|Items]] that are tracked through the manufacturing process. Orders can be activated or deactivated to control production flow.

## Properties

| **Property Name**       | **Property Type** | **Nullable** | **Description**                                                                                      |
| ----------------------- | ----------------- | ------------ | ---------------------------------------------------------------------------------------------------- |
| **id**                  | `Guid`            | `false`      | The unique identifier of the Order.                                                                  |
| **orderNumber**         | `ulong`           | `false`      | A unique auto-generated sequential number assigned to the Order for human-readable identification.   |
| **createdAt**           | `DateTime`        | `false`      | The date and time the Order was created.                                                             |
| **updatedAt**           | `DateTime`        | `false`      | The date and time the Order was last updated.                                                        |
| **createdById**         | `Guid`            | `false`      | The unique identifier of the user who created the Order.                                             |
| **updatedById**         | `Guid`            | `false`      | The unique identifier of the user who last updated the Order.                                        |
| **itemSpecificationId** | `Guid`            | `false`      | The unique identifier of the [[MES/Item Specification|Item Specification]] to be produced.           |
| **billOfProcessId**     | `Guid`            | `false`      | The unique identifier of the [[Bill Of Process]] that defines the production steps for this Order.   |
| **isActive**            | `bool`            | `false`      | Whether the Order is currently active and open for production.                                       |
| **itemQuantity**        | `double`          | `false`      | The total quantity of items to be produced for this Order. Supports fractional quantities.           |
| **attributes**          | `JsonDocument`    | `true`       | A flexible JSON object for storing additional user-defined attributes of the Order.                  |
