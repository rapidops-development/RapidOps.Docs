## Description

An Item Specification is a blueprint for a type of item or material managed within inventory. It defines the characteristics and metadata for items that can be stocked, consumed, or moved. Item Specifications can optionally support fractional quantities for materials such as powders or liquids that can be measured in non-integer amounts.

## Properties

| **Property Name**     | **Property Type** | **Nullable** | **Description**                                                                                                   |
| --------------------- | ----------------- | ------------ | ----------------------------------------------------------------------------------------------------------------- |
| **id**                | `Guid`            | `false`      | The unique identifier of the Item Specification.                                                                  |
| **createdAt**         | `DateTime`        | `false`      | The date and time the Item Specification was created.                                                             |
| **updatedAt**         | `DateTime`        | `false`      | The date and time the Item Specification was last updated.                                                        |
| **createdById**       | `Guid`            | `false`      | The unique identifier of the user who created the Item Specification.                                             |
| **updatedById**       | `Guid`            | `false`      | The unique identifier of the user who last updated the Item Specification.                                        |
| **versionTag**        | `string`          | `false`      | A version tag for the Item Specification, used to distinguish revisions.                                          |
| **isReleased**        | `bool`            | `false`      | Whether the Item Specification has been released and is available for use.                                        |
| **name**              | `string`          | `false`      | The human-readable name of the Item Specification.                                                                |
| **description**       | `string`          | `true`       | An optional description of the Item Specification.                                                                |
| **units**             | `string`          | `true`       | The unit of measure for the item (e.g. kg, litres, each).                                                        |
| **isFractional**      | `bool`            | `false`      | Whether the item can be divided into fractional quantities. Used for materials like powders or liquids.           |
| **price**             | `double?`         | `true`       | The price of the item per unit.                                                                                   |
| **attributes**        | `JsonDocument`    | `true`       | A flexible JSON object for storing additional user-defined attributes of the Item Specification.                  |
