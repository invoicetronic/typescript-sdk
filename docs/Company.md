# Company

A company model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Unique identifier. For POST requests, leave it at &#x60;0&#x60; — the server will assign one automatically. For PUT requests, set it to the id of the record you want to update. | [optional] [default to undefined]
**created** | **string** | Creation date. It is set automatically. | [optional] [readonly] [default to undefined]
**version** | **number** | Row version, for optimistic concurrency. It is set automatically. | [optional] [readonly] [default to undefined]
**user_id** | **number** | User id. It is set automatically based on the authenticated user. | [optional] [readonly] [default to undefined]
**vat** | **string** | Vat number. Must include the country code. | [default to undefined]
**fiscal_code** | **string** | Fiscal code. In most cases it\&#39;s the same as the vat number. | [default to undefined]
**name** | **string** | Name | [default to undefined]

## Example

```typescript
import { Company } from '@invoicetronic/ts-sdk';

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
