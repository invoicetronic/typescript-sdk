# DatiGenerali


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dati_generali_documento** | [**DatiGeneraliDocumento**](DatiGeneraliDocumento.md) |  | [optional] [default to undefined]
**dati_ordine_acquisto** | [**Array&lt;DatiOrdineAcquisto&gt;**](DatiOrdineAcquisto.md) |  | [optional] [default to undefined]
**dati_contratto** | [**Array&lt;DatiContratto&gt;**](DatiContratto.md) |  | [optional] [default to undefined]
**dati_convenzione** | [**Array&lt;DatiConvenzione&gt;**](DatiConvenzione.md) |  | [optional] [default to undefined]
**dati_ricezione** | [**Array&lt;DatiRicezione&gt;**](DatiRicezione.md) |  | [optional] [default to undefined]
**dati_fatture_collegate** | [**Array&lt;DatiFattureCollegate&gt;**](DatiFattureCollegate.md) |  | [optional] [default to undefined]
**dati_sal** | [**Array&lt;DatiSAL&gt;**](DatiSAL.md) |  | [optional] [default to undefined]
**dati_ddt** | [**Array&lt;DatiDDT&gt;**](DatiDDT.md) |  | [optional] [default to undefined]
**dati_trasporto** | [**DatiTrasporto**](DatiTrasporto.md) |  | [optional] [default to undefined]
**fattura_principale** | [**FatturaPrincipale**](FatturaPrincipale.md) |  | [optional] [default to undefined]

## Example

```typescript
import { DatiGenerali } from '@invoicetronic/ts-sdk';

const instance: DatiGenerali = {
    dati_generali_documento,
    dati_ordine_acquisto,
    dati_contratto,
    dati_convenzione,
    dati_ricezione,
    dati_fatture_collegate,
    dati_sal,
    dati_ddt,
    dati_trasporto,
    fattura_principale,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
