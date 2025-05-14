# DatiGeneraliDocumento


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tipo_documento** | **string** |  | [optional] [default to undefined]
**divisa** | **string** |  | [optional] [default to undefined]
**data** | **string** |  | [optional] [default to undefined]
**numero** | **string** |  | [optional] [default to undefined]
**dati_ritenuta** | [**Array&lt;DatiRitenuta&gt;**](DatiRitenuta.md) |  | [optional] [default to undefined]
**dati_bollo** | [**DatiBollo**](DatiBollo.md) |  | [optional] [default to undefined]
**dati_cassa_previdenziale** | [**Array&lt;DatiCassaPrevidenziale&gt;**](DatiCassaPrevidenziale.md) |  | [optional] [default to undefined]
**sconto_maggiorazione** | [**Array&lt;ScontoMaggiorazione&gt;**](ScontoMaggiorazione.md) |  | [optional] [default to undefined]
**importo_totale_documento** | **number** |  | [optional] [default to undefined]
**arrotondamento** | **number** |  | [optional] [default to undefined]
**causale** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**art73** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { DatiGeneraliDocumento } from '@invoicetronic/sdk';

const instance: DatiGeneraliDocumento = {
    tipo_documento,
    divisa,
    data,
    numero,
    dati_ritenuta,
    dati_bollo,
    dati_cassa_previdenziale,
    sconto_maggiorazione,
    importo_totale_documento,
    arrotondamento,
    causale,
    art73,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
