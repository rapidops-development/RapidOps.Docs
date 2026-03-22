## Description

A Material Consumption Event records the consumption of inventory at a specific [[Inventory/Location|Location]]. It can represent the consumption of a bulk material linked to an [[Inventory/Item Specification|Item Specification]], or a serialised [[Inventory/Item|Item]]. The event may optionally be associated with a [[Bill Of Material Entry]] and a parent [[Inventory/Item|Item]] that the consumed material was used to build.

## Properties

| **Property Name**         | **Property Type**        | **Nullable** | **Description**                                                                                                                  |
| ------------------------- | ------------------------ | ------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| **id**                    | `Guid`                   | `false`      | The unique identifier of the Material Consumption Event.                                                                         |
| **locationId**            | `Guid`                   | `false`      | The unique identifier of the [[Inventory/Location|Location]] where the consumption occurred.                                     |
| **location**              | `Location`               | `true`       | The [[Inventory/Location|Location]] where the consumption occurred.                                                              |
| **parentItemId**          | `Guid?`                  | `true`       | The unique identifier of the parent [[Inventory/Item|Item]] that was built using the consumed material.                          |
| **parentItem**            | `Item`                   | `true`       | The parent [[Inventory/Item|Item]] that was built using the consumed material.                                                   |
| **consumedQuantity**      | `double`                 | `false`      | The quantity of the material or item that was consumed.                                                                          |
| **billOfMaterialEntryId** | `Guid?`                  | `true`       | The unique identifier of the [[Bill Of Material Entry]] associated with this consumption, if applicable.                         |
| **billOfMaterialEntry**   | `BillOfMaterialEntry`    | `true`       | The [[Bill Of Material Entry]] associated with this consumption, if applicable.                                                  |
| **consumedItemId**        | `Guid?`                  | `true`       | The unique identifier of the serialised [[Inventory/Item|Item]] that was consumed, if applicable.                                |
| **consumedItem**          | `Item`                   | `true`       | The serialised [[Inventory/Item|Item]] that was consumed, if applicable.                                                         |
| **itemSpecificationId**   | `Guid?`                  | `true`       | The unique identifier of the [[Inventory/Item Specification|Item Specification]] of the material consumed, if applicable.        |
| **createdBy**             | `Guid`                   | `false`      | The unique identifier of the user who recorded the Material Consumption Event.                                                   |
| **createdAt**             | `DateTime`               | `false`      | The date and time the Material Consumption Event was created.                                                                    |
| **attributes**            | `JsonDocument`           | `true`       | A flexible JSON object for storing additional user-defined attributes of the Material Consumption Event.                         |
