## Description

A Location Capability Type defines a category of capability that a Location can possess, such as basic assembly, packing, or functional testing. Capability types are identified by a unique text identifier and are used to match [[MES/Item|Items]] to Locations that have the required capabilities to perform a given process step.

## Properties

| **Property Name**   | **Property Type** | **Nullable** | **Description**                                                                                                       |
| ------------------- | ----------------- | ------------ | --------------------------------------------------------------------------------------------------------------------- |
| **id**              | `Guid`            | `false`      | The unique identifier of the Location Capability Type.                                                                |
| **textIdentifier**  | `string`          | `false`      | A unique text identifier for the Location Capability Type (e.g. `basic-assembly`, `packing`, `functional-testing`).  |
| **name**            | `string`          | `false`      | The human-readable name of the Location Capability Type.                                                              |
| **description**     | `string`          | `false`      | A description of what this capability type represents and what operations it enables.                                 |
