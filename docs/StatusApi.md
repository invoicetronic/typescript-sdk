# StatusApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**statusGet**](#statusget) | **GET** /status | Account status|

# **statusGet**
> Status statusGet()

This endpoint is used to know how many operations (invoices + validations) and signatures are left on your account.   When `signature_left` is 0, you will receive a `403 Forbidden` response if you try to sign an invoice. Likewise, if `operation_left` is 0, you will receive a `403 Forbidden` response when storing or validating an invoice.  You can raise the limits by purchasing operations and/or signatures from the [Dashboard](https://dashboard.invoicetronic.com).  __Please note__ that these values are not enforced if you are on the Sandbox. See the [API Keys & Sandbox](https://invoicetronic.com/apikeys/) documentation section to learn more about the Sandbox.

### Example

```typescript
import {
    StatusApi,
    Configuration
} from '@invoicetronic/sdk';

const configuration = new Configuration();
const apiInstance = new StatusApi(configuration);

const { status, data } = await apiInstance.statusGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Status**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

