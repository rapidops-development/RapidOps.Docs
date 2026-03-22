## Description

A Process Event records the completion or outcome of a [[Bill Of Process Entry]] step for a specific [[MES/Item|Item]]. It captures the result, the location where the step was performed, and any associated event data payload. Events can be rewound to allow a step to be re-executed if needed.

## Properties

| **Property Name**          | **Property Type**      | **Nullable** | **Description**                                                                                                     |
| -------------------------- | ---------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------- |
| **id**                     | `Guid`                 | `false`      | The unique identifier of the Process Event.                                                                         |
| **itemId**                 | `Guid`                 | `false`      | The unique identifier of the [[MES/Item|Item]] that this event belongs to.                                          |
| **billOfProcessEntryId**   | `Guid`                 | `false`      | The unique identifier of the [[Bill Of Process Entry]] step that was performed.                                     |
| **processEventResultId**   | `Guid`                 | `false`      | The unique identifier of the [[Process Event Result]] that classifies the outcome of this event.                    |
| **processEventResult**     | `ProcessEventResult`   | `false`      | The [[Process Event Result]] that classifies the outcome of this event.                                             |
| **locationId**             | `Guid`                 | `false`      | The unique identifier of the Location where the process step was performed.                                         |
| **isRewound**              | `bool`                 | `false`      | Whether this event has been rewound, allowing the associated process step to be re-executed.                        |
| **eventType**              | `string`               | `false`      | A string identifier describing the type of event that was recorded.                                                 |
| **eventData**              | `JsonDocument`         | `true`       | An optional JSON payload containing additional data captured during the process step.                               |
| **createdAt**              | `DateTime`             | `false`      | The date and time the Process Event was created.                                                                    |
| **updatedAt**              | `DateTime`             | `false`      | The date and time the Process Event was last updated.                                                               |
| **createdById**            | `Guid`                 | `false`      | The unique identifier of the user who created the Process Event.                                                    |
| **updatedById**            | `Guid`                 | `false`      | The unique identifier of the user who last updated the Process Event.                                               |
