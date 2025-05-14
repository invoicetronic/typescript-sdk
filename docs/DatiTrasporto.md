# DatiTrasporto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dati_anagrafici_vettore** | [**DatiAnagraficiVettore**](DatiAnagraficiVettore.md) |  | [optional] [default to undefined]
**mezzo_trasporto** | **string** |  | [optional] [default to undefined]
**causale_trasporto** | **string** |  | [optional] [default to undefined]
**numero_colli** | **number** |  | [optional] [default to undefined]
**descrizione** | **string** |  | [optional] [default to undefined]
**unita_misura_peso** | **string** |  | [optional] [default to undefined]
**peso_lordo** | **number** |  | [optional] [default to undefined]
**peso_netto** | **number** |  | [optional] [default to undefined]
**data_ora_ritiro** | **string** |  | [optional] [default to undefined]
**data_inizio_trasporto** | **string** |  | [optional] [default to undefined]
**tipo_resa** | **string** |  | [optional] [default to undefined]
**indirizzo_resa** | [**IndirizzoResa**](IndirizzoResa.md) |  | [optional] [default to undefined]
**data_ora_consegna** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { DatiTrasporto } from '@invoicetronic/sdk';

const instance: DatiTrasporto = {
    dati_anagrafici_vettore,
    mezzo_trasporto,
    causale_trasporto,
    numero_colli,
    descrizione,
    unita_misura_peso,
    peso_lordo,
    peso_netto,
    data_ora_ritiro,
    data_inizio_trasporto,
    tipo_resa,
    indirizzo_resa,
    data_ora_consegna,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
