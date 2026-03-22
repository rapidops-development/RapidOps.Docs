## Description

A Bill of Material Entry defines a single component or material required within a [[Bill Of Material]]. It specifies which [[Inventory/Item Specification|Item Specification]] is needed and in what quantity, allowing the system to track material requirements for production runs. Entries are consumed during production and recorded as [[Material Consumption Entry|Material Consumption Entries]].

## Properties

| **Property Name**         | **Property Type**    | **Nullable** | **Description**                                                                                           |
| ------------------------- | -------------------- | ------------ | --------------------------------------------------------------------------------------------------------- |
| **id**                    | `Guid`               | `false`      | The unique identifier of the Bill of Material Entry.                                                      |
| **billOfMaterialId**      | `Guid`               | `false`      | The unique identifier of the [[Bill Of Material]] that this entry belongs to.                             |
| **itemSpecificationId**   | `Guid`               | `false`      | The unique identifier of the [[Inventory/Item Specification|Item Specification]] required by this entry.  |
| **billOfMaterial**        | `BillOfMaterial`     | `true`       | The [[Bill Of Material]] that this entry belongs to.                                                      |
| **itemSpecification**     | `ItemSpecification`  | `true`       | The [[Inventory/Item Specification|Item Specification]] required by this entry.                           |
| **quantity**              | `double`             | `false`      | The quantity of the Item Specification required per unit of the parent Bill of Material.                  |
| **attributes**            | `JsonDocument`       | `true`       | A flexible JSON object for storing additional user-defined attributes of the Bill of Material Entry.      |
