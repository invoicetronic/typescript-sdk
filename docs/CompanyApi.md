# CompanyApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**companyGet**](#companyget) | **GET** /company | List companies|
|[**companyIdDelete**](#companyiddelete) | **DELETE** /company/{id} | Delete a company|
|[**companyIdGet**](#companyidget) | **GET** /company/{id} | Get a company by id|
|[**companyPost**](#companypost) | **POST** /company | Add a company|
|[**companyPut**](#companyput) | **PUT** /company | Update a company|

# **companyGet**
> Array<Company> companyGet()

Retrieve a paginated list of companies.  **Companies** are the entities that send and receive invoices. They are automatically created from invoice data when invoices are sent or received.

### Example

```typescript
import {
    CompanyApi,
    Configuration
} from '@invoicetronic/ts-sdk';

const configuration = new Configuration();
const apiInstance = new CompanyApi(configuration);

let page: number; //Page number. (optional) (default to 1)
let pageSize: number; //Items per page. Cannot be greater than 200. (optional) (default to 100)
let sort: string; //Sort by field. Prefix with \'-\' for descending order. (optional) (default to undefined)

const { status, data } = await apiInstance.companyGet(
    page,
    pageSize,
    sort
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | Page number. | (optional) defaults to 1|
| **pageSize** | [**number**] | Items per page. Cannot be greater than 200. | (optional) defaults to 100|
| **sort** | [**string**] | Sort by field. Prefix with \&#39;-\&#39; for descending order. | (optional) defaults to undefined|


### Return type

**Array<Company>**

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

# **companyIdDelete**
> Company companyIdDelete()

Delete a company by its internal id.  **Companies** are the entities that send and receive invoices. They are automatically created from invoice data when invoices are sent or received.  **Warning:** Deleting a company will permanently remove all associated data, including sent invoices, received invoices, invoice updates from SDI, logs, and webhooks.  If the company has any linked invoices, you must explicitly confirm deletion by adding `?force=true` to the request. Without this parameter, the API will return `409 Conflict` with details about the linked data.

### Example

```typescript
import {
    CompanyApi,
    Configuration
} from '@invoicetronic/ts-sdk';

const configuration = new Configuration();
const apiInstance = new CompanyApi(configuration);

let id: number; //Item id (default to undefined)
let force: boolean; //Force delete including all related data. (optional) (default to false)

const { status, data } = await apiInstance.companyIdDelete(
    id,
    force
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | Item id | defaults to undefined|
| **force** | [**boolean**] | Force delete including all related data. | (optional) defaults to false|


### Return type

**Company**

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
|**409** | Conflict |  -  |
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **companyIdGet**
> Company companyIdGet()

Retrieve a company by its internal id.  **Companies** are the entities that send and receive invoices. They are automatically created from invoice data when invoices are sent or received.

### Example

```typescript
import {
    CompanyApi,
    Configuration
} from '@invoicetronic/ts-sdk';

const configuration = new Configuration();
const apiInstance = new CompanyApi(configuration);

let id: number; //Item id (default to undefined)

const { status, data } = await apiInstance.companyIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | Item id | defaults to undefined|


### Return type

**Company**

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

# **companyPost**
> Company companyPost(company)

Add a new company.  **Companies** are the entities that send and receive invoices. They are automatically created from invoice data when invoices are sent or received.

### Example

```typescript
import {
    CompanyApi,
    Configuration,
    Company
} from '@invoicetronic/ts-sdk';

const configuration = new Configuration();
const apiInstance = new CompanyApi(configuration);

let company: Company; //

const { status, data } = await apiInstance.companyPost(
    company
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **company** | **Company**|  | |


### Return type

**Company**

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

# **companyPut**
> Company companyPut(company)

Update an existing company.  **Companies** are the entities that send and receive invoices. They are automatically created from invoice data when invoices are sent or received.

### Example

```typescript
import {
    CompanyApi,
    Configuration,
    Company
} from '@invoicetronic/ts-sdk';

const configuration = new Configuration();
const apiInstance = new CompanyApi(configuration);

let company: Company; //

const { status, data } = await apiInstance.companyPut(
    company
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **company** | **Company**|  | |


### Return type

**Company**

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

