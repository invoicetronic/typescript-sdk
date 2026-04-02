# StatusApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**statusGet**](#statusget) | **GET** /status | Account status|

# **statusGet**
> Status statusGet()

Retrieve the number of operations (invoices + validations) and signatures left on your account.  When `signature_left` is 0, you will receive a `403 Forbidden` response when trying to sign an invoice. Likewise, if `operation_left` is 0, you will receive a `403 Forbidden` response when storing or validating an invoice.  You can also check your account status from the [Dashboard](https://dashboard.invoicetronic.com), where you can purchase additional operations and/or signatures.  **Please note** that these values are not enforced if you are on the [Sandbox](https://invoicetronic.com/en/docs/sandbox/).

### Example

```typescript
import {
    StatusApi,
    Configuration
} from '@invoicetronic/ts-sdk';

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

