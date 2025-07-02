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

Companies are the entities that send and receive invoices. As you send invoices, companies are added as needed (company details are extrapolated). **You can only receive invoices for existing companies, so ensure they exist**.

### Example

```typescript
import {
    CompanyApi,
    Configuration
} from '@invoicetronic/sdk';

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

Companies are the entities that send and receive invoices. As you send invoices, companies are added as needed (company details are extrapolated). **You can only receive invoices for existing companies, so ensure they exist**.

### Example

```typescript
import {
    CompanyApi,
    Configuration
} from '@invoicetronic/sdk';

const configuration = new Configuration();
const apiInstance = new CompanyApi(configuration);

let id: number; //Item id (default to undefined)

const { status, data } = await apiInstance.companyIdDelete(
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
|**422** | Unprocessable Content |  -  |
|**400** | Bad Request |  -  |
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **companyIdGet**
> Company companyIdGet()

Companies are the entities that send and receive invoices. As you send invoices, companies are added as needed (company details are extrapolated). **You can only receive invoices for existing companies, so ensure they exist**.

### Example

```typescript
import {
    CompanyApi,
    Configuration
} from '@invoicetronic/sdk';

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

Companies are the entities that send and receive invoices. As you send invoices, companies are added as needed (company details are extrapolated). **You can only receive invoices for existing companies, so ensure they exist**.

### Example

```typescript
import {
    CompanyApi,
    Configuration,
    Company
} from '@invoicetronic/sdk';

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

Companies are the entities that send and receive invoices. As you send invoices, companies are added as needed (company details are extrapolated). **You can only receive invoices for existing companies, so ensure they exist**.

### Example

```typescript
import {
    CompanyApi,
    Configuration,
    Company
} from '@invoicetronic/sdk';

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

