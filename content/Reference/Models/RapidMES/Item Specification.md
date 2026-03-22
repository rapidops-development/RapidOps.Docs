## Description

An Item Specification is the blueprint for a type of item that can be produced within the MES. It describes what will be manufactured, including its name, units, and pricing. An Item Specification may optionally be linked to a [[Serial Number Template]] that controls how serial numbers are generated for produced items.

## Properties

| **Property Name**           | **Property Type** | **Nullable** | **Description**                                                                                                                            |
| --------------------------- | ----------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **id**                      | `Guid`            | `false`      | The unique identifier of the Item Specification.                                                                                           |
| **createdAt**               | `DateTime`        | `false`      | The date and time the Item Specification was created.                                                                                      |
| **updatedAt**               | `DateTime`        | `false`      | The date and time the Item Specification was last updated.                                                                                 |
| **createdById**             | `Guid`            | `false`      | The unique identifier of the user who created the Item Specification.                                                                      |
| **updatedById**             | `Guid`            | `false`      | The unique identifier of the user who last updated the Item Specification.                                                                 |
| **versionTag**              | `string`          | `false`      | A version tag for the Item Specification, used to distinguish revisions.                                                                   |
| **isReleased**              | `bool`            | `false`      | Whether the Item Specification has been released and is available for use in production.                                                   |
| **name**                    | `string`          | `false`      | The human-readable name of the Item Specification.                                                                                         |
| **description**             | `string`          | `true`       | An optional description of the Item Specification.                                                                                         |
| **units**                   | `string`          | `true`       | The unit of measure for the item (e.g. kg, litres, each).                                                                                 |
| **isFractional**            | `bool`            | `false`      | Whether the item can be divided into fractional quantities. Used for materials such as powders or liquids.                                 |
| **price**                   | `double?`         | `true`       | The price of the item per unit.                                                                                                            |
| **attributes**              | `JsonDocument`    | `true`       | A flexible JSON object for storing additional user-defined attributes of the Item Specification.                                           |
| **serialNumberTemplateId**  | `Guid?`           | `true`       | The unique identifier of the [[Serial Number Template]] used to generate serial numbers for items of this specification. If null, a default template is used. |
