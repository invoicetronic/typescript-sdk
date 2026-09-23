# Permissions

Permissions of a restricted key, per resource. A missing property means no access to that resource. Each permission cannot exceed the one of the main key the restricted key belongs to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**company** | **string** | Companies: &#x60;Read&#x60; lists and reads them, &#x60;Write&#x60; also creates, updates and deletes them. | [optional] [default to undefined]
**send** | **string** | Outgoing invoices: &#x60;Read&#x60; lists and reads them, &#x60;Write&#x60; also sends and validates invoices. | [optional] [default to undefined]
**receive** | **string** | Incoming invoices: &#x60;Read&#x60; lists and reads them, &#x60;Write&#x60; also deletes them. | [optional] [default to undefined]
**webhook** | **string** | Webhooks: &#x60;Read&#x60; lists and reads them, &#x60;Write&#x60; also creates, updates and deletes them. | [optional] [default to undefined]
**update** | **string** | SDI status updates of outgoing invoices. | [optional] [default to undefined]
**log** | **string** | Event log. | [optional] [default to undefined]
**webhookhistory** | **string** | Webhook delivery history. | [optional] [default to undefined]
**_export** | **string** | Invoice export. | [optional] [default to undefined]
**status** | **string** | Account status (remaining operations and signatures). | [optional] [default to undefined]

## Example

```typescript
import { Permissions } from '@invoicetronic/ts-sdk';

const instance: Permissions = {
    company,
    send,
    receive,
    webhook,
    update,
    log,
    webhookhistory,
    _export,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
