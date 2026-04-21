# Status

Account status with remaining operations and signatures.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation_left** | **number** | Operations (invoices and validations) left. | [optional] [default to undefined]
**signature_left** | **number** | Signatures left. | [optional] [default to undefined]
**has_active_seat** | **boolean** | Whether the current API key has an active Desk seat. | [optional] [default to undefined]
**is_sub_key** | **boolean** | Whether the current API key is a sub-key (restricted key). | [optional] [default to undefined]

## Example

```typescript
import { Status } from '@invoicetronic/ts-sdk';

const instance: Status = {
    operation_left,
    signature_left,
    has_active_seat,
    is_sub_key,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
