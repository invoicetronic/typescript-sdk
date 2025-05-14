# DatiTrasmissione


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id_trasmittente** | [**IdTrasmittente**](IdTrasmittente.md) |  | [optional] [default to undefined]
**progressivo_invio** | **string** |  | [optional] [default to undefined]
**formato_trasmissione** | **string** |  | [optional] [default to undefined]
**codice_destinatario** | **string** |  | [optional] [default to undefined]
**contatti_trasmittente** | [**ContattiTrasmittente**](ContattiTrasmittente.md) |  | [optional] [default to undefined]
**pec_destinatario** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { DatiTrasmissione } from '@invoicetronic/sdk';

const instance: DatiTrasmissione = {
    id_trasmittente,
    progressivo_invio,
    formato_trasmissione,
    codice_destinatario,
    contatti_trasmittente,
    pec_destinatario,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
