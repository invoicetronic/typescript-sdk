# Receive

A received invoice.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Unique identifier. For POST requests, leave it at &#x60;0&#x60; — the server will assign one automatically. For PUT requests, set it to the id of the record you want to update. | [optional] [default to undefined]
**created** | **string** | Creation date. It is set automatically. | [optional] [readonly] [default to undefined]
**version** | **number** | Row version, for optimistic concurrency. It is set automatically. | [optional] [readonly] [default to undefined]
**user_id** | **number** | User id. It is set automatically based on the authenticated user. | [optional] [readonly] [default to undefined]
**company_id** | **number** | Company id. It is set automatically based on the VAT number extracted from the invoice payload (the sender for &#x60;send&#x60;, the recipient for &#x60;receive&#x60;). | [optional] [readonly] [default to undefined]
**committente** | **string** | VAT number of the Cessionario/Committente (customer). This is automatically set based on the recipient\&#39;s VAT number. | [optional] [readonly] [default to undefined]
**prestatore** | **string** | VAT number of the Cedente/Prestatore (vendor). This is automatically set based on the sender\&#39;s VAT number. | [optional] [readonly] [default to undefined]
**identifier** | **string** | SDI identifier. This is set by the SDI and is guaranteed to be unique within the SDI system. | [optional] [readonly] [default to undefined]
**file_name** | **string** | Xml file name. If not provided on send, it will be auto-generated. | [optional] [default to undefined]
**format** | **string** | SDI format (FPA12, FPR12, FSM10, ...) | [optional] [default to undefined]
**payload** | **string** | Xml payload. This is the actual xml content, as string. On send, it can be base64 encoded. If it\&#39;s not, it will be encoded before sending. It is guaranteed to be encrypted at rest. | [default to undefined]
**last_update** | **string** | Last update from SDI. | [optional] [readonly] [default to undefined]
**date_sent** | **string** | When the invoice was sent to SDI. | [optional] [readonly] [default to undefined]
**documents** | [**Array&lt;DocumentData&gt;**](DocumentData.md) | The invoices included in the payload. This is set by the system, based on the xml content. | [optional] [readonly] [default to undefined]
**encoding** | **string** | Whether the payload is Base64 encoded or a plain XML (text). | [optional] [default to undefined]
**nome_prestatore** | **string** | Business name of the prestatore (supplier/seller) extracted from the invoice XML. | [optional] [default to undefined]
**is_read** | **boolean** | Whether the invoice has been read at least once. Set to true only when the invoice is requested with include_payload&#x3D;true. | [optional] [default to undefined]
**message_id** | **string** | SDI message id. | [optional] [default to undefined]

## Example

```typescript
import { Receive } from '@invoicetronic/ts-sdk';

const instance: Receive = {
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
    nome_prestatore,
    is_read,
    message_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
