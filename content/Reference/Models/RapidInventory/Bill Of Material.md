## Description

A Bill of Material defines the list of materials and components required to produce one unit of an [[Item Specification]]. Each Bill of Material can have a variant tag to support multiple configurations, and is linked to a set of [[Bill Of Material Entry|Bill Of Material Entries]] that specify individual components and their required quantities.

## Properties

| **Property Name**         | **Property Type**    | **Nullable** | **Description**                                                                                         |
| ------------------------- | -------------------- | ------------ | ------------------------------------------------------------------------------------------------------- |
| **id**                    | `Guid`               | `false`      | The unique identifier of the Bill of Material.                                                          |
| **name**                  | `string`             | `false`      | The human-readable name of the Bill of Material.                                                        |
| **itemSpecificationId**   | `Guid`               | `false`      | The unique identifier of the [[Item Specification]] that this Bill of Material is defined for.          |
| **itemSpecification**     | `ItemSpecification`  | `true`       | The [[Item Specification]] that this Bill of Material is defined for.                                   |
| **variantTag**            | `string`             | `false`      | A tag that identifies the variant of the Bill of Material, allowing multiple configurations per Item Specification. |
| **isActive**              | `bool`               | `false`      | Whether this Bill of Material is currently active and available for use in production.                  |
| **createdBy**             | `Guid`               | `false`      | The unique identifier of the user who created the Bill of Material.                                     |
| **updatedBy**             | `Guid`               | `false`      | The unique identifier of the user who last updated the Bill of Material.                                |
| **createdAt**             | `DateTime`           | `false`      | The date and time the Bill of Material was created.                                                     |
| **updatedAt**             | `DateTime`           | `false`      | The date and time the Bill of Material was last updated.                                                |
| **attributes**            | `JsonDocument`       | `true`       | A flexible JSON object for storing additional user-defined attributes of the Bill of Material.          |
