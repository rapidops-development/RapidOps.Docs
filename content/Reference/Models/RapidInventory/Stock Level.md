## Description

A Stock Level tracks the current quantity of a specific [[Inventory/Item Specification|Item Specification]] or serialised [[Inventory/Item|Item]] held at a given [[Inventory/Location|Location]]. It supports optional minimum and maximum thresholds which, when enforced, will automatically generate [[Stock Level Alert|Stock Level Alerts]] when the stock quantity breaches the configured limits.

## Properties

| **Property Name**         | **Property Type**    | **Nullable** | **Description**                                                                                                   |
| ------------------------- | -------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------- |
| **id**                    | `Guid`               | `false`      | The unique identifier of the Stock Level.                                                                         |
| **itemSpecificationId**   | `Guid?`              | `true`       | The unique identifier of the [[Inventory/Item Specification|Item Specification]] being tracked. Mutually exclusive with `itemId`. |
| **itemSpecification**     | `ItemSpecification`  | `true`       | The [[Inventory/Item Specification|Item Specification]] being tracked.                                            |
| **itemId**                | `Guid?`              | `true`       | The unique identifier of the serialised [[Inventory/Item|Item]] being tracked. Mutually exclusive with `itemSpecificationId`. |
| **item**                  | `Item`               | `true`       | The serialised [[Inventory/Item|Item]] being tracked.                                                             |
| **locationId**            | `Guid`               | `false`      | The unique identifier of the [[Inventory/Location|Location]] where this stock is held.                            |
| **location**              | `Location`           | `true`       | The [[Inventory/Location|Location]] where this stock is held.                                                     |
| **level**                 | `double`             | `false`      | The current quantity of stock at this location.                                                                   |
| **minLevel**              | `double?`            | `true`       | The minimum acceptable stock level. If enforced, a `TooLow` alert is raised when breached.                       |
| **maxLevel**              | `double?`            | `true`       | The maximum acceptable stock level. If enforced, a `TooHigh` alert is raised when breached.                      |
| **enforceMinLevel**       | `bool`               | `false`      | Whether the minimum stock level threshold is enforced and will generate alerts.                                   |
| **enforceMaxLevel**       | `bool`               | `false`      | Whether the maximum stock level threshold is enforced and will generate alerts.                                   |
| **updatedAt**             | `DateTime`           | `false`      | The date and time the Stock Level was last updated.                                                               |
