# WebHookHistory

Webhook history.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Unique identifier. For POST requests, leave it at &#x60;0&#x60; — the server will assign one automatically. For PUT requests, set it to the id of the record you want to update. | [optional] [default to undefined]
**created** | **string** | Creation date. It is set automatically. | [optional] [readonly] [default to undefined]
**version** | **number** | Row version, for optimistic concurrency. It is set automatically. | [optional] [readonly] [default to undefined]
**web_hook_id** | **number** | Webhook id. | [optional] [default to undefined]
**user_id** | **number** | User id. | [optional] [default to undefined]
**event** | **string** | Event name. | [optional] [default to undefined]
**event_id** | **number** | Id of the event that triggered the delivery. It matches the &#x60;id&#x60; field of the webhook payload, so all the attempts made for the same event share it. Null for deliveries recorded before retries were introduced. | [optional] [default to undefined]
**attempt** | **number** | Delivery attempt number, starting at 1. Failed deliveries (any non-2xx response except 410, or a network error) are retried with increasing delays; each retry is recorded as a separate history item. | [optional] [default to undefined]
**status_code** | **number** | HTTP status code returned by the webhook endpoint. A value of 0 means the request could not be completed due to a network error (e.g., DNS resolution failure, connection refused, or timeout). This typically indicates that the endpoint URL is misconfigured or no longer exists. | [optional] [default to undefined]
**error** | **string** | Error description, if any. Null when the delivery is successful (2xx). Contains the exception message for network errors (status code 0) or the response body for non-2xx HTTP responses. | [optional] [default to undefined]
**date_time** | **string** | Date and time of the request. | [optional] [default to undefined]
**success** | **boolean** | Whether the request was successful. | [optional] [readonly] [default to undefined]

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
    event_id,
    attempt,
    status_code,
    error,
    date_time,
    success,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
