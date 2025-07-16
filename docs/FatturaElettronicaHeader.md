# FatturaElettronicaHeader


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dati_trasmissione** | [**DatiTrasmissione**](DatiTrasmissione.md) |  | [optional] [default to undefined]
**cedente_prestatore** | [**CedentePrestatore**](CedentePrestatore.md) |  | [optional] [default to undefined]
**RappresentanteFiscale** | [**RappresentanteFiscale**](RappresentanteFiscale.md) |  | [optional] [default to undefined]
**cessionario_committente** | [**CessionarioCommittente**](CessionarioCommittente.md) |  | [optional] [default to undefined]
**terzo_intermediario_o_soggetto_emittente** | [**TerzoIntermediarioOSoggettoEmittente**](TerzoIntermediarioOSoggettoEmittente.md) |  | [optional] [default to undefined]
**soggetto_emittente** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { FatturaElettronicaHeader } from '@invoicetronic/ts-sdk';

const instance: FatturaElettronicaHeader = {
    dati_trasmissione,
    cedente_prestatore,
    RappresentanteFiscale,
    cessionario_committente,
    terzo_intermediario_o_soggetto_emittente,
    soggetto_emittente,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
