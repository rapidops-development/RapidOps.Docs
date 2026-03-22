## Description

A Bill of Process Entry defines a single step within a [[Bill Of Process]]. Entries can declare dependencies on other entries using parent entry IDs, with a configurable combination logic (AND, OR, or XOR) that determines when the step becomes available for execution. Each entry is associated with a Location and carries an estimated duration for scheduling purposes.

## Properties

| **Property Name**                  | **Property Type**          | **Nullable** | **Description**                                                                                                                                     |
| ---------------------------------- | -------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **id**                             | `Guid`                     | `false`      | The unique identifier of the Bill of Process Entry.                                                                                                 |
| **billOfProcessId**                | `Guid`                     | `false`      | The unique identifier of the [[Bill Of Process]] that this entry belongs to.                                                                        |
| **name**                           | `string`                   | `false`      | The human-readable name of the process step.                                                                                                        |
| **description**                    | `string`                   | `true`       | An optional description of the process step.                                                                                                        |
| **parentBillOfProcessEntryIds**    | `ICollection<Guid>?`       | `true`       | A collection of unique identifiers of parent entries that must be completed before this entry becomes available, subject to `parentCombinationOperation`. |
| **parentCombinationOperation**     | `ParentCombinationType`    | `false`      | The logical operation applied to parent entries to determine when this step is available. One of `AND`, `OR`, or `XOR`.                             |
| **sequenceNumber**                 | `ulong?`                   | `true`       | An optional sequence number for ordering entries within the Bill of Process.                                                                        |
| **locationId**                     | `Guid`                     | `false`      | The unique identifier of the Location where this process step is performed.                                                                         |
| **estimatedDuration**              | `TimeSpan`                 | `false`      | The estimated time required to complete this process step.                                                                                          |
| **createdAt**                      | `DateTime`                 | `false`      | The date and time the Bill of Process Entry was created.                                                                                            |
| **updatedAt**                      | `DateTime`                 | `false`      | The date and time the Bill of Process Entry was last updated.                                                                                       |
| **createdById**                    | `Guid`                     | `false`      | The unique identifier of the user who created the Bill of Process Entry.                                                                            |
| **updatedById**                    | `Guid`                     | `false`      | The unique identifier of the user who last updated the Bill of Process Entry.                                                                       |
| **attributes**                     | `JsonDocument`             | `true`       | A flexible JSON object for storing additional user-defined attributes of the Bill of Process Entry.                                                 |
