# WebHookHistory

Webhook history.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Unique identifier. Leave it at 0 for new records as it will be set automatically. | [optional] [default to undefined]
**created** | **string** | Creation date. It is set automatically. | [optional] [default to undefined]
**version** | **number** | Row version, for optimistic concurrency. It is set automatically. | [optional] [default to undefined]
**web_hook_id** | **number** | Webhook id. | [optional] [default to undefined]
**user_id** | **number** | User id. | [optional] [default to undefined]
**event** | **string** | Event name. | [optional] [default to undefined]
**status_code** | **number** | Status code. | [optional] [default to undefined]
**date_time** | **string** | Date and time of the request. | [optional] [default to undefined]
**success** | **boolean** | Wether the request was successful. | [optional] [readonly] [default to undefined]

## Example

```typescript
import { WebHookHistory } from '@invoicetronic/ts-sdk';

const instance: WebHookHistory = {
    id,
    created,
    version,
    web_hook_id,
    user_id,
    event,
    status_code,
    date_time,
    success,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
