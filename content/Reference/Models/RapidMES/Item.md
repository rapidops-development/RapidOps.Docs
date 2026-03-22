## Description

An Item represents a physical serialised unit being produced against an [[MES/Order|Order]]. Each Item is assigned a unique serial number generated from its [[MES/Item Specification|Item Specification]]'s [[Serial Number Template]], and progresses through the steps of its [[Bill Of Process]]. Items may be arranged in a parent-child hierarchy to represent assemblies and their sub-components.

## Properties

| **Property Name**         | **Property Type** | **Nullable** | **Description**                                                                                                    |
| ------------------------- | ----------------- | ------------ | ------------------------------------------------------------------------------------------------------------------ |
| **id**                    | `Guid`            | `false`      | The unique identifier of the Item.                                                                                 |
| **orderId**               | `Guid`            | `false`      | The unique identifier of the [[MES/Order|Order]] that this Item belongs to.                                        |
| **itemSpecificationId**   | `Guid`            | `false`      | The unique identifier of the [[MES/Item Specification|Item Specification]] this Item is an instance of.           |
| **billOfProcessId**       | `Guid`            | `false`      | The unique identifier of the [[Bill Of Process]] that defines the production steps for this Item.                  |
| **parentItemId**          | `Guid`            | `false`      | The unique identifier of the parent Item in an assembly hierarchy.                                                 |
| **serialNumber**          | `string`          | `false`      | The unique human-readable serial number assigned to this Item, generated from the Item Specification's Serial Number Template. |
| **itemNumber**            | `int`             | `false`      | A unique sequential number assigned to this Item, used as an input when generating its serial number.             |
| **isComplete**            | `bool`            | `false`      | Whether the Item has completed all required process steps in its Bill of Process.                                  |
| **createdAt**             | `DateTime`        | `false`      | The date and time the Item was created.                                                                            |
| **updatedAt**             | `DateTime`        | `false`      | The date and time the Item was last updated.                                                                       |
| **createdById**           | `Guid`            | `false`      | The unique identifier of the user who created the Item.                                                            |
| **updatedById**           | `Guid`            | `false`      | The unique identifier of the user who last updated the Item.                                                       |
| **subItems**              | `List<Item>`      | `false`      | A collection of child Items in the assembly hierarchy. Not persisted to the database.                              |
