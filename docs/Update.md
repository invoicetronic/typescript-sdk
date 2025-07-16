# Update


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Unique identifier. Leave it at 0 for new records as it will be set automatically. | [optional] [default to undefined]
**created** | **string** | Creation date. It is set automatically. | [optional] [default to undefined]
**version** | **number** | Row version, for optimistic concurrency. It is set automatically. | [optional] [default to undefined]
**user_id** | **number** | User id. | [optional] [default to undefined]
**company_id** | **number** | Company id. | [optional] [default to undefined]
**send_id** | **number** | Send id. This is the id of the sent invoice to which this update refers to. | [optional] [default to undefined]
**last_update** | **string** | Last update from SDI. | [optional] [default to undefined]
**state** | **string** | State of the document. Theses are the possible values, as per the SDI documentation: | [optional] [default to undefined]
**description** | **string** | Description for the state. | [optional] [default to undefined]
**message_id** | **string** | SDI message id. | [optional] [default to undefined]
**errors** | **Array&lt;Error&gt;** | SDI errors, if any. | [optional] [default to undefined]
**is_read** | **boolean** | Wether the item has been read at least once. | [optional] [default to undefined]
**send** | [**SendReduced**](SendReduced.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Update } from '@invoicetronic/ts-sdk';

const instance: Update = {
    id,
    created,
    version,
    user_id,
    company_id,
    send_id,
    last_update,
    state,
    description,
    message_id,
    errors,
    is_read,
    send,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
