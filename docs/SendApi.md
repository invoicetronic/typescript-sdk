# SendApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**sendFilePost**](#sendfilepost) | **POST** /send/file | Add an invoice by file|
|[**sendGet**](#sendget) | **GET** /send | List invoices|
|[**sendIdGet**](#sendidget) | **GET** /send/{id} | Get a invoice by id|
|[**sendJsonPost**](#sendjsonpost) | **POST** /send/json | Add an invoice by json|
|[**sendPost**](#sendpost) | **POST** /send | Add an invoice|
|[**sendValidateFilePost**](#sendvalidatefilepost) | **POST** /send/validate/file | Validate an invoice file|
|[**sendValidateJsonPost**](#sendvalidatejsonpost) | **POST** /send/validate/json | Validate an invoice by json|
|[**sendValidatePost**](#sendvalidatepost) | **POST** /send/validate | Validate an invoice|
|[**sendValidateXmlPost**](#sendvalidatexmlpost) | **POST** /send/validate/xml | Validate an invoice by xml|
|[**sendXmlPost**](#sendxmlpost) | **POST** /send/xml | Add an invoice by xml|

# **sendFilePost**
> Send sendFilePost()

Send invoices are the invoices that are sent to the SDI. They are preserved for two years in the live environment and 15 days in the Sandbox.

### Example

```typescript
import {
    SendApi,
    Configuration
} from '@invoicetronic/sdk';

const configuration = new Configuration();
const apiInstance = new SendApi(configuration);

let file: File; // (default to undefined)
let validate: boolean; //Validate the document first, and reject it on failure. (optional) (default to false)
let signature: 'None' | 'Apply' | 'Force' | 'Auto'; //Whether to digitally sign the document. (optional) (default to 'Auto')

const { status, data } = await apiInstance.sendFilePost(
    file,
    validate,
    signature
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **file** | [**File**] |  | defaults to undefined|
| **validate** | [**boolean**] | Validate the document first, and reject it on failure. | (optional) defaults to false|
| **signature** | [**&#39;None&#39; | &#39;Apply&#39; | &#39;Force&#39; | &#39;Auto&#39;**]**Array<&#39;None&#39; &#124; &#39;Apply&#39; &#124; &#39;Force&#39; &#124; &#39;Auto&#39;>** | Whether to digitally sign the document. | (optional) defaults to 'Auto'|


### Return type

**Send**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Created |  -  |
|**400** | Bad Request |  -  |
|**422** | Unprocessable Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sendGet**
> Array<Send> sendGet()

test **markdown**.

### Example

```typescript
import {
    SendApi,
    Configuration
} from '@invoicetronic/sdk';

const configuration = new Configuration();
const apiInstance = new SendApi(configuration);

let companyId: number; //Company id (optional) (default to undefined)
let identifier: string; //SDI identifier. (optional) (default to undefined)
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
let page: number; //Page number. (optional) (default to 1)
let pageSize: number; //Items per page. Cannot be greater than 200. (optional) (default to 100)
let sort: string; //Sort by field. Prefix with \'-\' for descending order. (optional) (default to undefined)

const { status, data } = await apiInstance.sendGet(
    companyId,
    identifier,
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
| **page** | [**number**] | Page number. | (optional) defaults to 1|
| **pageSize** | [**number**] | Items per page. Cannot be greater than 200. | (optional) defaults to 100|
| **sort** | [**string**] | Sort by field. Prefix with \&#39;-\&#39; for descending order. | (optional) defaults to undefined|


### Return type

**Array<Send>**

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

# **sendIdGet**
> Send sendIdGet()

Send invoices are the invoices that are sent to the SDI. They are preserved for two years in the live environment and 15 days in the Sandbox.

### Example

```typescript
import {
    SendApi,
    Configuration
} from '@invoicetronic/sdk';

const configuration = new Configuration();
const apiInstance = new SendApi(configuration);

let id: number; //Item id (default to undefined)

const { status, data } = await apiInstance.sendIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | Item id | defaults to undefined|


### Return type

**Send**

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

# **sendJsonPost**
> Send sendJsonPost(fatturaOrdinaria)

Send invoices are the invoices that are sent to the SDI. They are preserved for two years in the live environment and 15 days in the Sandbox.

### Example

```typescript
import {
    SendApi,
    Configuration,
    FatturaOrdinaria
} from '@invoicetronic/sdk';

const configuration = new Configuration();
const apiInstance = new SendApi(configuration);

let fatturaOrdinaria: FatturaOrdinaria; //
let validate: boolean; //Validate the document first, and reject it on failure. (optional) (default to false)
let signature: 'None' | 'Apply' | 'Force' | 'Auto'; //Whether to digitally sign the document. (optional) (default to 'Auto')

const { status, data } = await apiInstance.sendJsonPost(
    fatturaOrdinaria,
    validate,
    signature
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fatturaOrdinaria** | **FatturaOrdinaria**|  | |
| **validate** | [**boolean**] | Validate the document first, and reject it on failure. | (optional) defaults to false|
| **signature** | [**&#39;None&#39; | &#39;Apply&#39; | &#39;Force&#39; | &#39;Auto&#39;**]**Array<&#39;None&#39; &#124; &#39;Apply&#39; &#124; &#39;Force&#39; &#124; &#39;Auto&#39;>** | Whether to digitally sign the document. | (optional) defaults to 'Auto'|


### Return type

**Send**

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

# **sendPost**
> Send sendPost(send)

Send invoices are the invoices that are sent to the SDI. They are preserved for two years in the live environment and 15 days in the Sandbox.

### Example

```typescript
import {
    SendApi,
    Configuration,
    Send
} from '@invoicetronic/sdk';

const configuration = new Configuration();
const apiInstance = new SendApi(configuration);

let send: Send; //
let validate: boolean; //Validate the document first, and reject it on failure. (optional) (default to false)
let signature: 'None' | 'Apply' | 'Force' | 'Auto'; //Whether to digitally sign the document. (optional) (default to 'Auto')

const { status, data } = await apiInstance.sendPost(
    send,
    validate,
    signature
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **send** | **Send**|  | |
| **validate** | [**boolean**] | Validate the document first, and reject it on failure. | (optional) defaults to false|
| **signature** | [**&#39;None&#39; | &#39;Apply&#39; | &#39;Force&#39; | &#39;Auto&#39;**]**Array<&#39;None&#39; &#124; &#39;Apply&#39; &#124; &#39;Force&#39; &#124; &#39;Auto&#39;>** | Whether to digitally sign the document. | (optional) defaults to 'Auto'|


### Return type

**Send**

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

# **sendValidateFilePost**
> sendValidateFilePost()

Send invoices are the invoices that are sent to the SDI. They are preserved for two years in the live environment and 15 days in the Sandbox.

### Example

```typescript
import {
    SendApi,
    Configuration
} from '@invoicetronic/sdk';

const configuration = new Configuration();
const apiInstance = new SendApi(configuration);

let file: File; // (default to undefined)

const { status, data } = await apiInstance.sendValidateFilePost(
    file
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **file** | [**File**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No Content |  -  |
|**400** | Bad Request |  -  |
|**422** | Unprocessable Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sendValidateJsonPost**
> sendValidateJsonPost(fatturaOrdinaria)

Send invoices are the invoices that are sent to the SDI. They are preserved for two years in the live environment and 15 days in the Sandbox.

### Example

```typescript
import {
    SendApi,
    Configuration,
    FatturaOrdinaria
} from '@invoicetronic/sdk';

const configuration = new Configuration();
const apiInstance = new SendApi(configuration);

let fatturaOrdinaria: FatturaOrdinaria; //

const { status, data } = await apiInstance.sendValidateJsonPost(
    fatturaOrdinaria
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fatturaOrdinaria** | **FatturaOrdinaria**|  | |


### Return type

void (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No Content |  -  |
|**400** | Bad Request |  -  |
|**422** | Unprocessable Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sendValidatePost**
> sendValidatePost(send)

Send invoices are the invoices that are sent to the SDI. They are preserved for two years in the live environment and 15 days in the Sandbox.

### Example

```typescript
import {
    SendApi,
    Configuration,
    Send
} from '@invoicetronic/sdk';

const configuration = new Configuration();
const apiInstance = new SendApi(configuration);

let send: Send; //

const { status, data } = await apiInstance.sendValidatePost(
    send
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **send** | **Send**|  | |


### Return type

void (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No Content |  -  |
|**400** | Bad Request |  -  |
|**422** | Unprocessable Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sendValidateXmlPost**
> sendValidateXmlPost(fatturaOrdinaria)

Send invoices are the invoices that are sent to the SDI. They are preserved for two years in the live environment and 15 days in the Sandbox.

### Example

```typescript
import {
    SendApi,
    Configuration,
    FatturaOrdinaria
} from '@invoicetronic/sdk';

const configuration = new Configuration();
const apiInstance = new SendApi(configuration);

let fatturaOrdinaria: FatturaOrdinaria; //

const { status, data } = await apiInstance.sendValidateXmlPost(
    fatturaOrdinaria
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fatturaOrdinaria** | **FatturaOrdinaria**|  | |


### Return type

void (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/xml
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No Content |  -  |
|**400** | Bad Request |  -  |
|**422** | Unprocessable Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sendXmlPost**
> Send sendXmlPost(fatturaOrdinaria)

Send invoices are the invoices that are sent to the SDI. They are preserved for two years in the live environment and 15 days in the Sandbox.

### Example

```typescript
import {
    SendApi,
    Configuration,
    FatturaOrdinaria
} from '@invoicetronic/sdk';

const configuration = new Configuration();
const apiInstance = new SendApi(configuration);

let fatturaOrdinaria: FatturaOrdinaria; //
let validate: boolean; //Validate the document first, and reject it on failure. (optional) (default to false)
let signature: 'None' | 'Apply' | 'Force' | 'Auto'; //Whether to digitally sign the document. (optional) (default to 'Auto')

const { status, data } = await apiInstance.sendXmlPost(
    fatturaOrdinaria,
    validate,
    signature
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fatturaOrdinaria** | **FatturaOrdinaria**|  | |
| **validate** | [**boolean**] | Validate the document first, and reject it on failure. | (optional) defaults to false|
| **signature** | [**&#39;None&#39; | &#39;Apply&#39; | &#39;Force&#39; | &#39;Auto&#39;**]**Array<&#39;None&#39; &#124; &#39;Apply&#39; &#124; &#39;Force&#39; &#124; &#39;Auto&#39;>** | Whether to digitally sign the document. | (optional) defaults to 'Auto'|


### Return type

**Send**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/xml
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Created |  -  |
|**400** | Bad Request |  -  |
|**422** | Unprocessable Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

