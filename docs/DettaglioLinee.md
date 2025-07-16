# DettaglioLinee


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**numero_linea** | **number** |  | [optional] [default to undefined]
**tipo_cessione_prestazione** | **string** |  | [optional] [default to undefined]
**codice_articolo** | [**Array&lt;CodiceArticolo&gt;**](CodiceArticolo.md) |  | [optional] [default to undefined]
**descrizione** | **string** |  | [optional] [default to undefined]
**quantita** | **number** |  | [optional] [default to undefined]
**unita_misura** | **string** |  | [optional] [default to undefined]
**data_inizio_periodo** | **string** |  | [optional] [default to undefined]
**data_fine_periodo** | **string** |  | [optional] [default to undefined]
**prezzo_unitario** | **number** |  | [optional] [default to undefined]
**sconto_maggiorazione** | [**Array&lt;ScontoMaggiorazione&gt;**](ScontoMaggiorazione.md) |  | [optional] [default to undefined]
**prezzo_totale** | **number** |  | [optional] [default to undefined]
**aliquota_iva** | **number** |  | [optional] [default to undefined]
**ritenuta** | **string** |  | [optional] [default to undefined]
**natura** | **string** |  | [optional] [default to undefined]
**riferimento_amministrazione** | **string** |  | [optional] [default to undefined]
**altri_dati_gestionali** | [**Array&lt;AltriDatiGestionali&gt;**](AltriDatiGestionali.md) |  | [optional] [default to undefined]

## Example

```typescript
import { DettaglioLinee } from '@invoicetronic/ts-sdk';

const instance: DettaglioLinee = {
    numero_linea,
    tipo_cessione_prestazione,
    codice_articolo,
    descrizione,
    quantita,
    unita_misura,
    data_inizio_periodo,
    data_fine_periodo,
    prezzo_unitario,
    sconto_maggiorazione,
    prezzo_totale,
    aliquota_iva,
    ritenuta,
    natura,
    riferimento_amministrazione,
    altri_dati_gestionali,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
