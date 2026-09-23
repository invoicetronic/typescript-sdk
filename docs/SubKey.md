# SubKey

A restricted key. Its secrets are returned only when the key is created or rolled.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Unique identifier. | [optional] [default to undefined]
**created** | **string** | Creation date. | [optional] [readonly] [default to undefined]
**version** | **number** | Row version, for optimistic concurrency. | [optional] [readonly] [default to undefined]
**description** | **string** | Human-readable label. | [optional] [default to undefined]
**active** | **boolean** | Whether the key can authenticate. | [optional] [default to undefined]
**permissions** | [**Permissions**](Permissions.md) |  | [optional] [default to undefined]
**company_ids** | **Array&lt;number&gt;** | Companies the key can access. Empty means all the companies of the account. | [optional] [default to undefined]
**cors_origins** | **Array&lt;string&gt;** | Browser origins allowed to call the API with this key (CORS). | [optional] [default to undefined]
**previous_key_expires_at** | **string** | When the secrets replaced by the last roll stop working; null when there are none still valid. | [optional] [default to undefined]

## Example

```typescript
import { SubKey } from '@invoicetronic/ts-sdk';

const instance: SubKey = {
    id,
    created,
    version,
    description,
    active,
    permissions,
    company_ids,
    cors_origins,
    previous_key_expires_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
