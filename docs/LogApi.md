# LogApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**logGet**](#logget) | **GET** /log | List events|
|[**logIdGet**](#logidget) | **GET** /log/{id} | Get an event by id|

# **logGet**
> Array<Event> logGet()

Every API operation is logged and can be retrieved here. Log records are preserved for 15 days.

### Example

```typescript
import {
    LogApi,
    Configuration
} from '@invoicetronic/sdk';

const configuration = new Configuration();
const apiInstance = new LogApi(configuration);

let companyId: number; //Company id (optional) (default to undefined)
let endpoint: string; // (optional) (default to undefined)
let method: string; // (optional) (default to undefined)
let apiVerion: number; //Api version (optional) (default to undefined)
let statusCode: number; //Response status code (optional) (default to undefined)
let dateCreatedFrom: string; //UTC ISO 8601 (2024-11-29T12:34:56Z) (optional) (default to undefined)
let dateCreatedTo: string; //UTC ISO 8601 (2024-11-29T12:34:56Z) (optional) (default to undefined)
let page: number; //Page number. Defaults to 1. (optional) (default to 1)
let pageSize: number; //Items per page. Defaults to 50. Cannot be greater than 200. (optional) (default to 100)
let sort: string; //Sort by field. Prefix with \'-\' for descending order. (optional) (default to undefined)
let query: string; // (optional) (default to undefined)
let success: boolean; // (optional) (default to undefined)
let dateTimeFrom: string; //Date and time of the event (optional) (default to undefined)
let dateTimeTo: string; //Date and time of the event (optional) (default to undefined)

const { status, data } = await apiInstance.logGet(
    companyId,
    endpoint,
    method,
    apiVerion,
    statusCode,
    dateCreatedFrom,
    dateCreatedTo,
    page,
    pageSize,
    sort,
    query,
    success,
    dateTimeFrom,
    dateTimeTo
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **companyId** | [**number**] | Company id | (optional) defaults to undefined|
| **endpoint** | [**string**] |  | (optional) defaults to undefined|
| **method** | [**string**] |  | (optional) defaults to undefined|
| **apiVerion** | [**number**] | Api version | (optional) defaults to undefined|
| **statusCode** | [**number**] | Response status code | (optional) defaults to undefined|
| **dateCreatedFrom** | [**string**] | UTC ISO 8601 (2024-11-29T12:34:56Z) | (optional) defaults to undefined|
| **dateCreatedTo** | [**string**] | UTC ISO 8601 (2024-11-29T12:34:56Z) | (optional) defaults to undefined|
| **page** | [**number**] | Page number. Defaults to 1. | (optional) defaults to 1|
| **pageSize** | [**number**] | Items per page. Defaults to 50. Cannot be greater than 200. | (optional) defaults to 100|
| **sort** | [**string**] | Sort by field. Prefix with \&#39;-\&#39; for descending order. | (optional) defaults to undefined|
| **query** | [**string**] |  | (optional) defaults to undefined|
| **success** | [**boolean**] |  | (optional) defaults to undefined|
| **dateTimeFrom** | [**string**] | Date and time of the event | (optional) defaults to undefined|
| **dateTimeTo** | [**string**] | Date and time of the event | (optional) defaults to undefined|


### Return type

**Array<Event>**

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

# **logIdGet**
> Event logIdGet()

Every API operation is logged and can be retrieved here. Log records are preserved for 15 days.

### Example

```typescript
import {
    LogApi,
    Configuration
} from '@invoicetronic/sdk';

const configuration = new Configuration();
const apiInstance = new LogApi(configuration);

let id: number; //Item id (default to undefined)

const { status, data } = await apiInstance.logIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | Item id | defaults to undefined|


### Return type

**Event**

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

