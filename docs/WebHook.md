# WebHook

A webhook subscription.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Unique identifier. For POST requests, leave it at &#x60;0&#x60; — the server will assign one automatically. For PUT requests, set it to the id of the record you want to update. | [optional] [default to undefined]
**created** | **string** | Creation date. It is set automatically. | [optional] [readonly] [default to undefined]
**version** | **number** | Row version, for optimistic concurrency. It is set automatically. | [optional] [readonly] [default to undefined]
**user_id** | **number** | User id. It is set automatically based on the authenticated user. | [optional] [readonly] [default to undefined]
**company_id** | **number** | Optional company id. If set, the webhook is restricted to events for that company; if omitted, it fires for all companies on the account. | [optional] [default to undefined]
**url** | **string** | The url of your application\&#39;s endpoint that will receive a POST request when the webhook is fired. | [default to undefined]
**enabled** | **boolean** | Whether the webhook is enabled. On creation, this is set to &#x60;true&#x60;. | [optional] [default to undefined]
**secret** | **string** | The secret used to generate webhook signatures, only returned on creation. You should store this value securely and validate it on every call, to ensure that the caller is InvoicetronicApi. | [optional] [default to undefined]
**description** | **string** | An optional description. | [optional] [default to undefined]
**events** | **Array&lt;string&gt;** | List of events that trigger the webhook. See Invoicetronic.SupportedEvents.Available for a list of valid event names. | [optional] [default to undefined]
**failure_notified_at** | **string** | Timestamp of the last failure notification email sent for this webhook. Set by the notifier service; reset to null on successful delivery. | [optional] [readonly] [default to undefined]

## Example

```typescript
import { WebHook } from '@invoicetronic/ts-sdk';

const instance: WebHook = {
    id,
    created,
    version,
    user_id,
    company_id,
    url,
    enabled,
    secret,
    description,
    events,
    failure_notified_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
