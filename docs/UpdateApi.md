# UpdateApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**updateGet**](#updateget) | **GET** /update | List updates|
|[**updateIdGet**](#updateidget) | **GET** /update/{id} | Get an update by id|

# **updateGet**
> Array<Update> updateGet()

Updates are notifications sent by the SDI about the status of invoices you sent.

### Example

```typescript
import {
    UpdateApi,
    Configuration
} from '@invoicetronic/sdk';

const configuration = new Configuration();
const apiInstance = new UpdateApi(configuration);

let companyId: number; //Company id (optional) (default to undefined)
let identifier: string; //SDI identifier. (optional) (default to undefined)
let prestatore: string; //Vat number or fiscal code. (optional) (default to undefined)
let unread: boolean; //Unread items only. (optional) (default to undefined)
let sendId: number; //Send item\'s id. (optional) (default to undefined)
let state: 'Inviato' | 'Consegnato' | 'NonConsegnato' | 'Scartato' | 'AccettatoDalDestinatario' | 'RifiutatoDalDestinatario' | 'ImpossibilitàDiRecapito' | 'DecorrenzaTermini' | 'AttestazioneTrasmissioneFattura'; //SDI state (optional) (default to undefined)
let lastUpdateFrom: string; //UTC ISO 8601 (2024-11-29T12:34:56Z) (optional) (default to undefined)
let lastUpdateTo: string; //UTC ISO 8601 (2024-11-29T12:34:56Z) (optional) (default to undefined)
let dateSentFrom: string; //UTC ISO 8601 (2024-11-29T12:34:56Z) (optional) (default to undefined)
let dateSentTo: string; //UTC ISO 8601 (2024-11-29T12:34:56Z) (optional) (default to undefined)
let page: number; //Page number. (optional) (default to 1)
let pageSize: number; //Items per page. Cannot be greater than 200. (optional) (default to 100)
let sort: string; //Sort by field. Prefix with \'-\' for descending order. (optional) (default to undefined)

const { status, data } = await apiInstance.updateGet(
    companyId,
    identifier,
    prestatore,
    unread,
    sendId,
    state,
    lastUpdateFrom,
    lastUpdateTo,
    dateSentFrom,
    dateSentTo,
    page,
    pageSize,
    sort
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **companyId** | [**number**] | Company id | (optional) defaults to undefined|
| **identifier** | [**string**] | SDI identifier. | (optional) defaults to undefined|
| **prestatore** | [**string**] | Vat number or fiscal code. | (optional) defaults to undefined|
| **unread** | [**boolean**] | Unread items only. | (optional) defaults to undefined|
| **sendId** | [**number**] | Send item\&#39;s id. | (optional) defaults to undefined|
| **state** | [**&#39;Inviato&#39; | &#39;Consegnato&#39; | &#39;NonConsegnato&#39; | &#39;Scartato&#39; | &#39;AccettatoDalDestinatario&#39; | &#39;RifiutatoDalDestinatario&#39; | &#39;ImpossibilitàDiRecapito&#39; | &#39;DecorrenzaTermini&#39; | &#39;AttestazioneTrasmissioneFattura&#39;**]**Array<&#39;Inviato&#39; &#124; &#39;Consegnato&#39; &#124; &#39;NonConsegnato&#39; &#124; &#39;Scartato&#39; &#124; &#39;AccettatoDalDestinatario&#39; &#124; &#39;RifiutatoDalDestinatario&#39; &#124; &#39;ImpossibilitàDiRecapito&#39; &#124; &#39;DecorrenzaTermini&#39; &#124; &#39;AttestazioneTrasmissioneFattura&#39;>** | SDI state | (optional) defaults to undefined|
| **lastUpdateFrom** | [**string**] | UTC ISO 8601 (2024-11-29T12:34:56Z) | (optional) defaults to undefined|
| **lastUpdateTo** | [**string**] | UTC ISO 8601 (2024-11-29T12:34:56Z) | (optional) defaults to undefined|
| **dateSentFrom** | [**string**] | UTC ISO 8601 (2024-11-29T12:34:56Z) | (optional) defaults to undefined|
| **dateSentTo** | [**string**] | UTC ISO 8601 (2024-11-29T12:34:56Z) | (optional) defaults to undefined|
| **page** | [**number**] | Page number. | (optional) defaults to 1|
| **pageSize** | [**number**] | Items per page. Cannot be greater than 200. | (optional) defaults to 100|
| **sort** | [**string**] | Sort by field. Prefix with \&#39;-\&#39; for descending order. | (optional) defaults to undefined|


### Return type

**Array<Update>**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**404** | Not Found |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateIdGet**
> Update updateIdGet()

Updates are notifications sent by the SDI about the status of invoices you sent.

### Example

```typescript
import {
    UpdateApi,
    Configuration
} from '@invoicetronic/sdk';

const configuration = new Configuration();
const apiInstance = new UpdateApi(configuration);

let id: number; //Item id (default to undefined)

const { status, data } = await apiInstance.updateIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | Item id | defaults to undefined|


### Return type

**Update**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

