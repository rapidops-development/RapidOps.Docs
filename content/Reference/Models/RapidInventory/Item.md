## Description

An Item represents a physical serialised instance of an [[Inventory/Item Specification|Item Specification]] that is tracked through the inventory system. Items are associated with a specific order and carry a unique serial number. They may be arranged in a parent-child hierarchy to represent assemblies and their sub-components.

## Properties

| **Property Name**         | **Property Type**    | **Nullable** | **Description**                                                                                             |
| ------------------------- | -------------------- | ------------ | ----------------------------------------------------------------------------------------------------------- |
| **id**                    | `Guid`               | `false`      | The unique identifier of the Item.                                                                          |
| **orderId**               | `Guid`               | `false`      | The unique identifier of the Order that the Item belongs to.                                                |
| **itemSpecificationId**   | `Guid`               | `false`      | The unique identifier of the [[Inventory/Item Specification|Item Specification]] this Item is an instance of. |
| **itemSpecification**     | `ItemSpecification`  | `true`       | The [[Inventory/Item Specification|Item Specification]] this Item is an instance of.                        |
| **parentItemId**          | `Guid?`              | `true`       | The unique identifier of the parent Item, used when this Item is a sub-component in an assembly.            |
| **parentItem**            | `Item`               | `true`       | The parent [[Inventory/Item|Item]] in an assembly hierarchy.                                                |
| **serialNumber**          | `string`             | `false`      | The unique human-readable serial number assigned to this Item.                                              |
| **isComplete**            | `bool`               | `false`      | Whether the Item has been fully completed and processed.                                                     |
| **createdAt**             | `DateTime`           | `false`      | The date and time the Item was created.                                                                     |
| **updatedAt**             | `DateTime`           | `false`      | The date and time the Item was last updated.                                                                |
| **createdById**           | `Guid`               | `false`      | The unique identifier of the user who created the Item.                                                     |
| **updatedById**           | `Guid`               | `false`      | The unique identifier of the user who last updated the Item.                                                |
| **subItems**              | `List<Item>`         | `false`      | A collection of child Items in the assembly hierarchy. Not persisted to the database.                       |
