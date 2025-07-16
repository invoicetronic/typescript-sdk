# WebhookApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**webhookGet**](#webhookget) | **GET** /webhook | List webhooks|
|[**webhookIdDelete**](#webhookiddelete) | **DELETE** /webhook/{id} | Delete a webhook by id|
|[**webhookIdGet**](#webhookidget) | **GET** /webhook/{id} | Get a webhook by id|
|[**webhookPost**](#webhookpost) | **POST** /webhook | Add a webhook|
|[**webhookPut**](#webhookput) | **PUT** /webhook | Update a webhook|
|[**webhookhistoryGet**](#webhookhistoryget) | **GET** /webhookhistory | List webhook history items|
|[**webhookhistoryIdGet**](#webhookhistoryidget) | **GET** /webhookhistory/{id} | Get a webhook history item by id|

# **webhookGet**
> Array<WebHook> webhookGet()

Webhooks are used to notify external services about write events that occur in the API. You can subscribe to specific events and receive a notification when they occur.

### Example

```typescript
import {
    WebhookApi,
    Configuration
} from '@invoicetronic/ts-sdk';

const configuration = new Configuration();
const apiInstance = new WebhookApi(configuration);

let companyId: number; //Company id (optional) (default to undefined)
let page: number; //Page number. (optional) (default to 1)
let pageSize: number; //Items per page. Cannot be greater than 200. (optional) (default to 100)
let sort: string; //Sort by field. Prefix with \'-\' for descending order. (optional) (default to undefined)
let description: string; // (optional) (default to undefined)
let enabled: boolean; // (optional) (default to undefined)
let events: string; // (optional) (default to undefined)
let url: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.webhookGet(
    companyId,
    page,
    pageSize,
    sort,
    description,
    enabled,
    events,
    url
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **companyId** | [**number**] | Company id | (optional) defaults to undefined|
| **page** | [**number**] | Page number. | (optional) defaults to 1|
| **pageSize** | [**number**] | Items per page. Cannot be greater than 200. | (optional) defaults to 100|
| **sort** | [**string**] | Sort by field. Prefix with \&#39;-\&#39; for descending order. | (optional) defaults to undefined|
| **description** | [**string**] |  | (optional) defaults to undefined|
| **enabled** | [**boolean**] |  | (optional) defaults to undefined|
| **events** | [**string**] |  | (optional) defaults to undefined|
| **url** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Array<WebHook>**

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

# **webhookIdDelete**
> WebHook webhookIdDelete()

Webhooks are used to notify external services about write events that occur in the API. You can subscribe to specific events and receive a notification when they occur.

### Example

```typescript
import {
    WebhookApi,
    Configuration
} from '@invoicetronic/ts-sdk';

const configuration = new Configuration();
const apiInstance = new WebhookApi(configuration);

let id: number; //Item id (default to undefined)

const { status, data } = await apiInstance.webhookIdDelete(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | Item id | defaults to undefined|


### Return type

**WebHook**

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

# **webhookIdGet**
> WebHook webhookIdGet()

Webhooks are used to notify external services about write events that occur in the API. You can subscribe to specific events and receive a notification when they occur.

### Example

```typescript
import {
    WebhookApi,
    Configuration
} from '@invoicetronic/ts-sdk';

const configuration = new Configuration();
const apiInstance = new WebhookApi(configuration);

let id: number; //Item id (default to undefined)

const { status, data } = await apiInstance.webhookIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | Item id | defaults to undefined|


### Return type

**WebHook**

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

# **webhookPost**
> WebHook webhookPost(webHook)

Webhooks are used to notify external services about write events that occur in the API. You can subscribe to specific events and receive a notification when they occur.

### Example

```typescript
import {
    WebhookApi,
    Configuration,
    WebHook
} from '@invoicetronic/ts-sdk';

const configuration = new Configuration();
const apiInstance = new WebhookApi(configuration);

let webHook: WebHook; //

const { status, data } = await apiInstance.webhookPost(
    webHook
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webHook** | **WebHook**|  | |


### Return type

**WebHook**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Created |  -  |
|**400** | Bad Request |  -  |
|**422** | Unprocessable Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **webhookPut**
> WebHook webhookPut(webHook)

Webhooks are used to notify external services about write events that occur in the API. You can subscribe to specific events and receive a notification when they occur.

### Example

```typescript
import {
    WebhookApi,
    Configuration,
    WebHook
} from '@invoicetronic/ts-sdk';

const configuration = new Configuration();
const apiInstance = new WebhookApi(configuration);

let webHook: WebHook; //

const { status, data } = await apiInstance.webhookPut(
    webHook
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webHook** | **WebHook**|  | |


### Return type

**WebHook**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**422** | Unprocessable Content |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **webhookhistoryGet**
> Array<WebHookHistory> webhookhistoryGet()

Webhook history items are stored in the database and can be accessed via the API. They are preserved for 15 in both the live and sandbox environments.

### Example

```typescript
import {
    WebhookApi,
    Configuration
} from '@invoicetronic/ts-sdk';

const configuration = new Configuration();
const apiInstance = new WebhookApi(configuration);

let page: number; //Page number. (optional) (default to 1)
let pageSize: number; //Items per page. Cannot be greater than 200. (optional) (default to 100)
let sort: string; //Sort by field. Prefix with \'-\' for descending order. (optional) (default to undefined)
let webhookId: number; //WebHook id (optional) (default to undefined)

const { status, data } = await apiInstance.webhookhistoryGet(
    page,
    pageSize,
    sort,
    webhookId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | Page number. | (optional) defaults to 1|
| **pageSize** | [**number**] | Items per page. Cannot be greater than 200. | (optional) defaults to 100|
| **sort** | [**string**] | Sort by field. Prefix with \&#39;-\&#39; for descending order. | (optional) defaults to undefined|
| **webhookId** | [**number**] | WebHook id | (optional) defaults to undefined|


### Return type

**Array<WebHookHistory>**

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

# **webhookhistoryIdGet**
> WebHookHistory webhookhistoryIdGet()

Webhook history items are stored in the database and can be accessed via the API. They are preserved for 15 in both the live and sandbox environments.

### Example

```typescript
import {
    WebhookApi,
    Configuration
} from '@invoicetronic/ts-sdk';

const configuration = new Configuration();
const apiInstance = new WebhookApi(configuration);

let id: number; //Item id (default to undefined)

const { status, data } = await apiInstance.webhookhistoryIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | Item id | defaults to undefined|


### Return type

**WebHookHistory**

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

