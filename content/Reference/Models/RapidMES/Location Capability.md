## Description

A Location Capability represents the association between a [[MES/Location|Location]] and a [[Location Capability Type]], indicating whether that capability is currently enabled at the Location. Capabilities determine which types of process steps can be executed at a given Location and can be enabled or disabled without removing the association.

## Properties

| **Property Name**             | **Property Type**          | **Nullable** | **Description**                                                                                                        |
| ----------------------------- | -------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------- |
| **id**                        | `Guid`                     | `false`      | The unique identifier of the Location Capability.                                                                      |
| **locationId**                | `Guid`                     | `false`      | The unique identifier of the [[MES/Location|Location]] that has this capability.                                       |
| **locationCapabilityTypeId**  | `Guid`                     | `false`      | The unique identifier of the [[Location Capability Type]] that describes this capability.                              |
| **locationCapabilityType**    | `LocationCapabilityType`   | `false`      | The [[Location Capability Type]] that describes this capability.                                                       |
| **isEnabled**                 | `bool`                     | `false`      | Whether this capability is currently enabled at the Location.                                                          |
