# FatturaOrdinaria


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sistema_emittente** | **string** |  | [optional] [default to undefined]
**fattura_elettronica_header** | [**FatturaElettronicaHeader**](FatturaElettronicaHeader.md) |  | [optional] [default to undefined]
**fattura_elettronica_body** | [**Array&lt;FatturaElettronicaBody&gt;**](FatturaElettronicaBody.md) |  | [optional] [default to undefined]

## Example

```typescript
import { FatturaOrdinaria } from '@invoicetronic/sdk';

const instance: FatturaOrdinaria = {
    sistema_emittente,
    fattura_elettronica_header,
    fattura_elettronica_body,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
