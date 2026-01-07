# WebHook


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Unique identifier. Leave it at 0 for new records as it will be set automatically. | [optional] [default to undefined]
**created** | **string** | Creation date. It is set automatically. | [optional] [default to undefined]
**version** | **number** | Row version, for optimistic concurrency. It is set automatically. | [optional] [default to undefined]
**user_id** | **number** | User id. | [optional] [default to undefined]
**company_id** | **number** | Company id. | [optional] [default to undefined]
**url** | **string** | The url of your application\&#39;s endpoint that will receive a POST request when the webhook is fired. | [default to undefined]
**enabled** | **boolean** | Wether the webhook is enabled. On creation, this is set to &#x60;true&#x60;. | [optional] [default to undefined]
**secret** | **string** | The secret used to generate webhook signatures, only returned on creation. You should store this value securely and validate it on every call, to ensure that the caller is InvoicetronicApi. | [optional] [default to undefined]
**description** | **string** | An optional description. | [optional] [default to undefined]
**events** | **Array&lt;string&gt;** | List of events to that trigger the webhook.  See Invoicetronic.SupportedEvents.Available for a list of valid event names. | [optional] [default to undefined]

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
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
