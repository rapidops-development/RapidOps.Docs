## Description

A Material Consumption Entry records the quantity of a specific material — as defined by a [[Bill Of Material Entry]] — that was consumed by a task during a production process. It links task execution records to the materials they used, providing a detailed audit trail of material usage.

## Properties

| **Property Name**         | **Property Type**        | **Nullable** | **Description**                                                                                                 |
| ------------------------- | ------------------------ | ------------ | --------------------------------------------------------------------------------------------------------------- |
| **id**                    | `Guid`                   | `false`      | The unique identifier of the Material Consumption Entry.                                                        |
| **taskEntryId**           | `Guid`                   | `false`      | The unique identifier of the task entry that consumed the material.                                             |
| **billOfMaterialEntryId** | `Guid`                   | `false`      | The unique identifier of the [[Bill Of Material Entry]] that specifies the material that was consumed.          |
| **billOfMaterialEntry**   | `BillOfMaterialEntry`    | `true`       | The [[Bill Of Material Entry]] that specifies the material that was consumed.                                   |
| **consumedQuantity**      | `double`                 | `false`      | The quantity of the material that was consumed.                                                                 |
| **createdBy**             | `Guid`                   | `false`      | The unique identifier of the user who created the Material Consumption Entry.                                   |
| **attributes**            | `JsonDocument`           | `true`       | A flexible JSON object for storing additional user-defined attributes of the Material Consumption Entry.        |
