# ReceiveApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**receiveGet**](#receiveget) | **GET** /receive | List incoming invoices|
|[**receiveIdDelete**](#receiveiddelete) | **DELETE** /receive/{id} | Delete an incoming invoice by id|
|[**receiveIdGet**](#receiveidget) | **GET** /receive/{id} | Get an incoming invoice by id|

# **receiveGet**
> Array<Receive> receiveGet()

Receive invoices are the invoices that are received from other companies. They are preserved for two years in the live environment and 24 hours in the Sandbox.

### Example

```typescript
import {
    ReceiveApi,
    Configuration
} from '@invoicetronic/sdk';

const configuration = new Configuration();
const apiInstance = new ReceiveApi(configuration);

let companyId: number; //Company id (optional) (default to undefined)
let identifier: string; //SDI identifier. (optional) (default to undefined)
let unread: boolean; //Unread items only. (optional) (default to undefined)
let committente: string; //Vat number or fiscal code. (optional) (default to undefined)
let prestatore: string; //Vat number or fiscal code. (optional) (default to undefined)
let fileName: string; //File name. (optional) (default to undefined)
let lastUpdateFrom: string; //UTC ISO 8601 (2024-11-29T12:34:56Z) (optional) (default to undefined)
let lastUpdateTo: string; //UTC ISO 8601 (2024-11-29T12:34:56Z) (optional) (default to undefined)
let dateSentFrom: string; //UTC ISO 8601 (2024-11-29T12:34:56Z) (optional) (default to undefined)
let dateSentTo: string; //UTC ISO 8601 (2024-11-29T12:34:56Z) (optional) (default to undefined)
let documentDateFrom: string; //UTC ISO 8601 (2024-11-29T12:34:56Z) (optional) (default to undefined)
let documentDateTo: string; //UTC ISO 8601 (2024-11-29T12:34:56Z) (optional) (default to undefined)
let documentNumber: string; //Document number. (optional) (default to undefined)
let includePayload: boolean; //Include payload in the response. Defaults to false. (optional) (default to undefined)
let page: number; //Page number. Defaults to 1. (optional) (default to 1)
let pageSize: number; //Items per page. Defaults to 50. Cannot be greater than 200. (optional) (default to 100)
let sort: string; //Sort by field. Prefix with \'-\' for descending order. (optional) (default to undefined)

const { status, data } = await apiInstance.receiveGet(
    companyId,
    identifier,
    unread,
    committente,
    prestatore,
    fileName,
    lastUpdateFrom,
    lastUpdateTo,
    dateSentFrom,
    dateSentTo,
    documentDateFrom,
    documentDateTo,
    documentNumber,
    includePayload,
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
| **unread** | [**boolean**] | Unread items only. | (optional) defaults to undefined|
| **committente** | [**string**] | Vat number or fiscal code. | (optional) defaults to undefined|
| **prestatore** | [**string**] | Vat number or fiscal code. | (optional) defaults to undefined|
| **fileName** | [**string**] | File name. | (optional) defaults to undefined|
| **lastUpdateFrom** | [**string**] | UTC ISO 8601 (2024-11-29T12:34:56Z) | (optional) defaults to undefined|
| **lastUpdateTo** | [**string**] | UTC ISO 8601 (2024-11-29T12:34:56Z) | (optional) defaults to undefined|
| **dateSentFrom** | [**string**] | UTC ISO 8601 (2024-11-29T12:34:56Z) | (optional) defaults to undefined|
| **dateSentTo** | [**string**] | UTC ISO 8601 (2024-11-29T12:34:56Z) | (optional) defaults to undefined|
| **documentDateFrom** | [**string**] | UTC ISO 8601 (2024-11-29T12:34:56Z) | (optional) defaults to undefined|
| **documentDateTo** | [**string**] | UTC ISO 8601 (2024-11-29T12:34:56Z) | (optional) defaults to undefined|
| **documentNumber** | [**string**] | Document number. | (optional) defaults to undefined|
| **includePayload** | [**boolean**] | Include payload in the response. Defaults to false. | (optional) defaults to undefined|
| **page** | [**number**] | Page number. Defaults to 1. | (optional) defaults to 1|
| **pageSize** | [**number**] | Items per page. Defaults to 50. Cannot be greater than 200. | (optional) defaults to 100|
| **sort** | [**string**] | Sort by field. Prefix with \&#39;-\&#39; for descending order. | (optional) defaults to undefined|


### Return type

**Array<Receive>**

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

# **receiveIdDelete**
> Receive receiveIdDelete()

Receive invoices are the invoices that are received from other companies. They are preserved for two years in the live environment and 24 hours in the Sandbox.

### Example

```typescript
import {
    ReceiveApi,
    Configuration
} from '@invoicetronic/sdk';

const configuration = new Configuration();
const apiInstance = new ReceiveApi(configuration);

let id: number; //Item id (default to undefined)

const { status, data } = await apiInstance.receiveIdDelete(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | Item id | defaults to undefined|


### Return type

**Receive**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**422** | Unprocessable Content |  -  |
|**400** | Bad Request |  -  |
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **receiveIdGet**
> Receive receiveIdGet()

Receive invoices are the invoices that are received from other companies. They are preserved for two years in the live environment and 24 hours in the Sandbox.

### Example

```typescript
import {
    ReceiveApi,
    Configuration
} from '@invoicetronic/sdk';

const configuration = new Configuration();
const apiInstance = new ReceiveApi(configuration);

let id: number; //Item id (default to undefined)

const { status, data } = await apiInstance.receiveIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | Item id | defaults to undefined|


### Return type

**Receive**

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

