# FatturaElettronicaBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dati_generali** | [**DatiGenerali**](DatiGenerali.md) |  | [optional] [default to undefined]
**dati_beni_servizi** | [**DatiBeniServizi**](DatiBeniServizi.md) |  | [optional] [default to undefined]
**dati_veicoli** | [**DatiVeicoli**](DatiVeicoli.md) |  | [optional] [default to undefined]
**dati_pagamento** | [**Array&lt;DatiPagamento&gt;**](DatiPagamento.md) |  | [optional] [default to undefined]
**allegati** | [**Array&lt;Allegati&gt;**](Allegati.md) |  | [optional] [default to undefined]

## Example

```typescript
import { FatturaElettronicaBody } from '@invoicetronic/ts-sdk';

const instance: FatturaElettronicaBody = {
    dati_generali,
    dati_beni_servizi,
    dati_veicoli,
    dati_pagamento,
    allegati,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
