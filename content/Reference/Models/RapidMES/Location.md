## Description

A Location represents a physical workstation or area within the factory where manufacturing process steps are performed. Each Location is positioned in 3D space and has a set of [[Location Capability|Location Capabilities]] that determine what types of operations can be carried out there. Locations are referenced by [[MES/Bill Of Process Entry|Bill Of Process Entries]] to indicate where each step must be executed.

## Properties

| **Property Name**   | **Property Type**                  | **Nullable** | **Description**                                                                                             |
| ------------------- | ---------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------- |
| **id**              | `Guid`                             | `false`      | The unique identifier of the Location.                                                                      |
| **name**            | `string`                           | `false`      | The human-readable name of the Location.                                                                    |
| **capabilitiesIds** | `Guid[]`                           | `false`      | An array of [[Location Capability Type]] identifiers representing the capabilities configured at this Location. |
| **capabilities**    | `ICollection<LocationCapability>`  | `false`      | The collection of [[Location Capability|Location Capabilities]] associated with this Location.              |
| **positionX**       | `double`                           | `false`      | The X coordinate of the Location in the facility's 3D coordinate space.                                    |
| **positionY**       | `double`                           | `false`      | The Y coordinate of the Location in the facility's 3D coordinate space.                                    |
| **positionZ**       | `double`                           | `false`      | The Z coordinate of the Location in the facility's 3D coordinate space.                                    |
| **attributes**      | `JsonDocument`                     | `true`       | A flexible JSON object for storing additional user-defined attributes of the Location.                      |
