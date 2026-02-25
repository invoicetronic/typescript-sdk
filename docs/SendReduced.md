# SendReduced

Reduced Send data for Update responses, containing only the essential fields.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identifier** | **string** | SDI identifier. | [optional] [default to undefined]
**prestatore** | **string** | VAT number of the Cedente/Prestatore (vendor). | [optional] [default to undefined]
**meta_data** | **{ [key: string]: string; }** | Optional metadata, as json. | [optional] [default to undefined]
**documents** | [**Array&lt;DocumentData&gt;**](DocumentData.md) | The invoices included in the payload. | [optional] [default to undefined]
**date_sent** | **string** | When the invoice was sent to SDI. | [optional] [default to undefined]

## Example

```typescript
import { SendReduced } from '@invoicetronic/ts-sdk';

const instance: SendReduced = {
    identifier,
    prestatore,
    meta_data,
    documents,
    date_sent,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
