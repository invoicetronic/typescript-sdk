# Event


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Unique identifier. Leave it at 0 for new records as it will be set automatically. | [optional] [default to undefined]
**created** | **string** | Creation date. It is set automatically. | [optional] [default to undefined]
**version** | **number** | Row version, for optimistic concurrency. It is set automatically. | [optional] [default to undefined]
**user_id** | **number** | User id. | [optional] [default to undefined]
**api_key_id** | **number** | Api key id. | [optional] [default to undefined]
**company_id** | **number** | Company id. | [optional] [default to undefined]
**method** | **string** | Request method. | [optional] [default to undefined]
**endpoint** | **string** | API endpoint. | [optional] [default to undefined]
**api_version** | **number** | Api version. | [optional] [default to undefined]
**status_code** | **number** | Status code returned by the API. | [optional] [default to undefined]
**date_time** | **string** | Date and time of the request. | [optional] [default to undefined]
**error** | **string** | Response error. | [optional] [default to undefined]
**resource_id** | **number** | ID of the resource created or modified by this request. | [optional] [default to undefined]
**success** | **boolean** | Wether the request was successful. | [optional] [readonly] [default to undefined]
**query** | **string** | Request query. Only used for internal logging, not sent to webhooks. | [optional] [default to undefined]
**response_body** | **string** | Response payload. It is guaranteed to be cyphered at rest. | [optional] [default to undefined]

## Example

```typescript
import { Event } from '@invoicetronic/ts-sdk';

const instance: Event = {
    id,
    created,
    version,
    user_id,
    api_key_id,
    company_id,
    method,
    endpoint,
    api_version,
    status_code,
    date_time,
    error,
    resource_id,
    success,
    query,
    response_body,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
