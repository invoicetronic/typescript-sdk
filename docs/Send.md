# Send


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Unique identifier. Leave it at 0 for new records as it will be set automatically. | [optional] [default to undefined]
**created** | **string** | Creation date. It is set automatically. | [optional] [default to undefined]
**version** | **number** | Row version, for optimistic concurrency. It is set automatically. | [optional] [default to undefined]
**user_id** | **number** | User id. | [optional] [default to undefined]
**company_id** | **number** | Company id. On send, this is the sender and must be set in advance. On receive, it will be  automatically set based on the recipient\&#39;s VAT number. If a matching company is not found, the invoice will be rejected until the company is created. | [optional] [default to undefined]
**committente** | **string** | VAT number of the Cessionario/Committente (customer). This is automatically set based on the recipient\&#39;s VAT number. | [optional] [default to undefined]
**prestatore** | **string** | VAT number of the Cedente/Prestatore (vendor). This is automatically set based on the sender\&#39;s VAT number. | [optional] [default to undefined]
**identifier** | **string** | SDI identifier. This is set by the SDI and is guaranted to be unique within the SDI system. | [optional] [default to undefined]
**file_name** | **string** | Xml file name. | [optional] [default to undefined]
**format** | **string** | SDI format (FPA12, FPR12, FSM10, ...) | [optional] [default to undefined]
**payload** | **string** | Xml payloaad. This is the actual xml content, as string. On send, it can be base64 encoded. If it\&#39;s not, it will be encoded before sending. It is guaranteed to be cyphered at rest. | [default to undefined]
**last_update** | **string** | Last update from SDI. | [optional] [default to undefined]
**date_sent** | **string** | When the invoice was sent to SDI. | [optional] [default to undefined]
**documents** | [**Array&lt;DocumentData&gt;**](DocumentData.md) | The invoices included in the payload. This is set by the system, based on the xml content. | [optional] [default to undefined]
**encoding** | **string** | Whether the payload is Base64 encoded or a plain XML (text). | [optional] [default to undefined]
**meta_data** | **{ [key: string]: string; }** | Optional metadata, as json. | [optional] [default to undefined]
**company** | [**Company**](Company.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Send } from '@invoicetronic/ts-sdk';

const instance: Send = {
    id,
    created,
    version,
    user_id,
    company_id,
    committente,
    prestatore,
    identifier,
    file_name,
    format,
    payload,
    last_update,
    date_sent,
    documents,
    encoding,
    meta_data,
    company,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
