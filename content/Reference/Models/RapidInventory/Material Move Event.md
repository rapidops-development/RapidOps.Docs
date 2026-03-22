## Description

A Material Move Event records the transfer of a quantity of an [[Inventory/Item Specification|Item Specification]] from one [[Inventory/Location|Location]] to another. Every move is persisted as an immutable event, providing a complete audit trail of all stock movements across the facility.

## Properties

| **Property Name**          | **Property Type**    | **Nullable** | **Description**                                                                                                     |
| -------------------------- | -------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------- |
| **id**                     | `Guid`               | `false`      | The unique identifier of the Material Move Event.                                                                   |
| **itemSpecificationId**    | `Guid`               | `false`      | The unique identifier of the [[Inventory/Item Specification|Item Specification]] that was moved.                    |
| **itemSpecification**      | `ItemSpecification`  | `true`       | The [[Inventory/Item Specification|Item Specification]] that was moved.                                             |
| **movedQuantity**          | `double`             | `false`      | The quantity of the Item Specification that was moved.                                                              |
| **sourceLocationId**       | `Guid`               | `false`      | The unique identifier of the [[Inventory/Location|Location]] from which the material was moved.                     |
| **sourceLocation**         | `Location`           | `true`       | The [[Inventory/Location|Location]] from which the material was moved.                                              |
| **destinationLocationId**  | `Guid`               | `false`      | The unique identifier of the [[Inventory/Location|Location]] to which the material was moved.                       |
| **destinationLocation**    | `Location`           | `true`       | The [[Inventory/Location|Location]] to which the material was moved.                                                |
| **createdBy**              | `Guid`               | `false`      | The unique identifier of the user who recorded the Material Move Event.                                             |
| **createdAt**              | `DateTime`           | `false`      | The date and time the Material Move Event was created.                                                              |
| **attributes**             | `JsonDocument`       | `true`       | A flexible JSON object for storing additional user-defined attributes of the Material Move Event.                   |
