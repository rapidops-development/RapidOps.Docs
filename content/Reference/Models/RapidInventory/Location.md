## Description

A Location represents a physical place within the facility where inventory can be stored. Locations are positioned in 3D space and can hold stock of various [[Inventory/Item Specification|Item Specifications]] and serialised [[Inventory/Item|Items]], tracked through [[Stock Level|Stock Levels]].

## Properties

| **Property Name** | **Property Type** | **Nullable** | **Description**                                                                     |
| ----------------- | ----------------- | ------------ | ----------------------------------------------------------------------------------- |
| **id**            | `Guid`            | `false`      | The unique identifier of the Location.                                              |
| **name**          | `string`          | `false`      | The human-readable name of the Location.                                            |
| **positionX**     | `double`          | `false`      | The X coordinate of the Location in the facility's 3D coordinate space.            |
| **positionY**     | `double`          | `false`      | The Y coordinate of the Location in the facility's 3D coordinate space.            |
| **positionZ**     | `double`          | `false`      | The Z coordinate of the Location in the facility's 3D coordinate space.            |
| **attributes**    | `JsonDocument`    | `true`       | A flexible JSON object for storing additional user-defined attributes of the Location. |
