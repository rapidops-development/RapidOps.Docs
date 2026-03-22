## Description

A Stock Level Alert is raised when the quantity recorded in a [[Stock Level]] breaches its configured minimum or maximum threshold. Alerts are created automatically when an enforced threshold is violated and serve as notifications that inventory replenishment or reduction may be required.

## Properties

| **Property Name** | **Property Type**        | **Nullable** | **Description**                                                                                                   |
| ----------------- | ------------------------ | ------------ | ----------------------------------------------------------------------------------------------------------------- |
| **id**            | `Guid`                   | `false`      | The unique identifier of the Stock Level Alert.                                                                   |
| **stockLevelId**  | `Guid`                   | `false`      | The unique identifier of the [[Stock Level]] that triggered this alert.                                           |
| **stockLevel**    | `StockLevel`             | `true`       | The [[Stock Level]] that triggered this alert.                                                                    |
| **alertType**     | `StockLevelAlertType`    | `false`      | The type of alert raised. `TooLow` indicates stock has fallen below the minimum threshold; `TooHigh` indicates it has exceeded the maximum. |
| **createdAt**     | `DateTime`               | `false`      | The date and time the Stock Level Alert was created.                                                              |
