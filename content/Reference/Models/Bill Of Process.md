## Description

A Bill of Process defines the sequence of manufacturing steps required to produce an [[Item Specification]]. It contains a list of [[Bill Of Process Entry|Bill Of Process Entries]] that describe individual process steps and their dependencies. A Bill of Process must be released before it can be used in production orders.

## Properties

| **Property Name**         | **Property Type** | **Nullable** | **Description**                                                                                          |
| ------------------------- | ----------------- | ------------ | -------------------------------------------------------------------------------------------------------- |
| **id**                    | `Guid`            | `false`      | The unique identifier of the Bill of Process.                                                            |
| **itemSpecificationId**   | `Guid`            | `false`      | The unique identifier of the [[Item Specification]] that this Bill of Process is defined for.            |
| **name**                  | `string`          | `false`      | The human-readable name of the Bill of Process.                                                          |
| **description**           | `string`          | `true`       | An optional description of the Bill of Process.                                                          |
| **isReleased**            | `bool`            | `false`      | Whether this Bill of Process has been released and is available for use in production orders.            |
| **versionTag**            | `string`          | `false`      | A version tag for the Bill of Process, used to distinguish revisions.                                    |
| **createdAt**             | `DateTime`        | `false`      | The date and time the Bill of Process was created.                                                       |
| **updatedAt**             | `DateTime`        | `false`      | The date and time the Bill of Process was last updated.                                                  |
| **createdById**           | `Guid`            | `false`      | The unique identifier of the user who created the Bill of Process.                                       |
| **updatedById**           | `Guid`            | `false`      | The unique identifier of the user who last updated the Bill of Process.                                  |
