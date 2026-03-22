## Description

A Process Event Result is a reference record that classifies the outcome of a [[Process Event]]. Standard result types include Success, Failed, Stopped, and Skipped, each indicating a different outcome for a completed process step. The `isSuccessful` flag determines whether a result counts as a valid completion of the step in the production flow.

## Properties

| **Property Name**   | **Property Type** | **Nullable** | **Description**                                                                                                          |
| ------------------- | ----------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------ |
| **id**              | `Guid`            | `false`      | The unique identifier of the Process Event Result.                                                                       |
| **resultType**      | `string`          | `false`      | The name of the result type (e.g. `Success`, `Failed`, `Stopped`, `Skipped`).                                           |
| **description**     | `string`          | `true`       | An optional description of what this result type represents.                                                             |
| **isSuccessful**    | `bool`            | `false`      | Whether this result type represents a successful completion of the process step.                                         |
| **createdAt**       | `DateTime`        | `false`      | The date and time the Process Event Result was created.                                                                  |
| **updatedAt**       | `DateTime`        | `false`      | The date and time the Process Event Result was last updated.                                                             |
| **createdById**     | `Guid`            | `false`      | The unique identifier of the user who created the Process Event Result.                                                  |
| **updatedById**     | `Guid`            | `false`      | The unique identifier of the user who last updated the Process Event Result.                                             |
