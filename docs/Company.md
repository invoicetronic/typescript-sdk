# Company

A company model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Unique identifier. Leave it at 0 for new records as it will be set automatically. | [optional] [default to undefined]
**created** | **string** | Creation date. It is set automatically. | [optional] [default to undefined]
**version** | **number** | Row version, for optimistic concurrency. It is set automatically. | [optional] [default to undefined]
**user_id** | **number** | User id. | [optional] [default to undefined]
**vat** | **string** | Vat number. Must include the country code. | [default to undefined]
**fiscal_code** | **string** | Fiscal code. In most cases it\&#39;s the same as the vat number. | [default to undefined]
**name** | **string** | Name | [default to undefined]

## Example

```typescript
import { Company } from '@invoicetronic/sdk';

const instance: Company = {
    id,
    created,
    version,
    user_id,
    vat,
    fiscal_code,
    name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
