---
tags:
---
## Description

Item Specification is a blueprint for [[Item]]s or materials that are built and used by a factory. They describe what will be built or consumed by a process within a manufacturing line.

Item Specification is used throughout the platform as a parent entity for many other models, such as [[Bill Of Process]] and [[Bill Of Material]].
## Properties

|**Property Name**|**Property Type**|**Nullable**|**Description**|
|---|---|---|---|
|**id**|`Guid`|`false`|The unique identifier (Primary Key) of the Item Specification.|
|**createdAt**|`DateTime`|`false`|The date and time the Item Specification was created.|
|**updatedAt**|`DateTime`|`false`|The date and time the Item Specification was last updated.|
|**createdById**|`Guid`|`false`|The user ID of the person who created the Item Specification.|
|**updatedById**|`Guid`|`false`|The user ID of the person who last updated the Item Specification.|
|**versionTag**|`string`|`false`|The version tag associated with this specification.|
|**isReleased**|`bool`|`false`|Indicates whether the Item Specification has been officially released.|
|**name**|`string`|`false`|The human-readable name of the Item Specification.|
|**description**|`string?`|`true`|An optional description providing more detail about the item.|
|**units**|`string?`|`true`|The units of measurement for the item (e.g., kg, liters, units).|
|**isFractional**|`bool`|`false`|Indicates if the item can be divided into smaller units.|
|**price**|`double?`|`true`|The price of the item (nullable).|
|**attributes**|`JsonDocument?`|`true`|User-defined custom attributes for the item, stored as JSON.|
|**serialNumberTemplateId**|`Guid?`|`true`|ID of the template used for generating serial numbers.|
