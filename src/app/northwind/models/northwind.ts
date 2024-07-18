export interface Northwind {
    id:                   string;
    nome:                 string;
    contatto:             string;
    indirizzoCompleto:    string;
    telefono:             string;
    ordini:               UltimoOrdine[];
    numeroTotaleOrdini:   number;
    sommaTotaleOrdini:    number;
    ultimoOrdine:         UltimoOrdine;
    dataUltimoOrdine:     Date;
    numeroTotaliProdotti: number;
    listaProdotti:        ListaProdotti[];
}

export interface ListaProdotti {
    id:        number;
    nome:      string;
    fornitore: string;
}

export interface UltimoOrdine {
    id:             number;
    data:           Date;
    trasporto:      number;
    corriere:       string;
    dettagliOrdini: DettagliOrdini[];
    totale:         number;
}

export interface DettagliOrdini {
    nomeProdotto:   string;
    prezzoUnitario: number;
    quantita:       number;
    sconto:         number;
}