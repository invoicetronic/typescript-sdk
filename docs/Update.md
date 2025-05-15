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
**date_sent** | **string** | When the document was sent to the SDI. | [optional] [default to undefined]
**last_update** | **string** | Last update from SDI. | [optional] [default to undefined]
**identifier** | **string** | SDI identifier. This is set by the SDI and it is unique within the SDI system. | [optional] [default to undefined]
**state** | **string** | State of the document. Theses are the possible values, as per the SDI documentation: | [optional] [default to undefined]
**description** | **string** | Description for the state. | [optional] [default to undefined]
**message_id** | **string** | SDI message id. | [optional] [default to undefined]
**errors** | **Array&lt;Error&gt;** | SDI errors, if any. | [optional] [default to undefined]
**is_read** | **boolean** | Wether the item has been read at least once. | [optional] [default to undefined]
**meta_data** | **{ [key: string]: string; }** | Metadata from the Send item this update refers to. | [optional] [default to undefined]
**documents** | [**Array&lt;DocumentData&gt;**](DocumentData.md) | Invoice references from the Send item this update refers to. | [optional] [default to undefined]

## Example

```typescript
import { Update } from '@invoicetronic/sdk';

const instance: Update = {
    id,
    created,
    version,
    user_id,
    company_id,
    send_id,
    date_sent,
    last_update,
    identifier,
    state,
    description,
    message_id,
    errors,
    is_read,
    meta_data,
    documents,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
