# SubKeyUpdate

A restricted key to update. All the editable fields are replaced: an omitted `permissions`, `company_ids` or `cors_origins` means none.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **string** | Human-readable label, e.g. the name of the tenant the key is for. | [default to undefined]
**active** | **boolean** | Whether the key can authenticate. Defaults to true. | [optional] [default to undefined]
**permissions** | [**Permissions**](Permissions.md) |  | [optional] [default to undefined]
**company_ids** | **Array&lt;number&gt;** | Companies the key can access. When omitted or empty, the key can access all the companies of the account, including the ones created later. | [optional] [default to undefined]
**cors_origins** | **Array&lt;string&gt;** | Browser origins allowed to call the API with this key (CORS), e.g. &#x60;https://app.example.com&#x60; or &#x60;*.example.com&#x60;. A key used from a browser is public: keep its permissions and companies minimal. | [optional] [default to undefined]
**id** | **number** | Id of the restricted key to update. | [optional] [default to undefined]
**version** | **number** | Row version read with the key, for optimistic concurrency: a stale version fails with 422. | [optional] [default to undefined]

## Example

```typescript
import { SubKeyUpdate } from '@invoicetronic/ts-sdk';

const instance: SubKeyUpdate = {
    description,
    active,
    permissions,
    company_ids,
    cors_origins,
    id,
    version,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
