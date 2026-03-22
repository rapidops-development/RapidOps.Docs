## Description
Items represent a physical serialised object that is an instance of an [[Item Specification]].

RapidOps tracks Items through factory processes until they are completed. Items can also be consumed in the build process of other Items.
## Properties

| **Property Name**       | **Property Type** | **Nullable** | **Description**                                                               |
| ----------------------- | ----------------- | ------------ | ----------------------------------------------------------------------------- |
| **id**                  | `Guid`            | `false`      | The unique identifier of the Item.                                            |
| **orderId**             | `Guid`            | `false`      | The unique identifier of the Order that the Item belongs to.                  |
| **itemSpecificationId** | `Guid`            | `false`      | The unique identifier of the ItemSpecification that the Item is based on.     |
| **billOfProcessId**     | `Guid`            | `false`      | The unique identifier of the Bill of Process used to produce the Item.        |
| **parentItemId**        | `Guid`            | `false`      | The unique identifier of the parent Item.                                     |
| **serialNumber**        | `string`          | `false`      | The human-readable unique identifier (e.g., printed on labels).               |
| **itemNumber**          | `int`             | `false`      | A unique integer used to track sequential item numbers for serial generation. |
| **isComplete**          | `bool`            | `false`      | Indicates whether the Item production is complete.                            |
| **createdAt**           | `DateTime`        | `false`      | The date and time the Item was created.                                       |
| **updatedAt**           | `DateTime`        | `false`      | The date and time the Item was last updated.                                  |
| **createdById**         | `Guid`            | `false`      | The user who created the Item.                                                |
| **updatedById**         | `Guid`            | `false`      | The user who last updated the Item.                                           |
| **subItems**            | `List<Item>`      | `false`      | A collection of child items for tree structures.                              |