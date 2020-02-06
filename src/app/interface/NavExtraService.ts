import { Injectable } from '@angular/core';
import { ProdottoOrdine } from './prodotto_ordine';
import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y';

@Injectable({
  providedIn: 'root'
})
export class NavExtrasService {

    extras: any;
    prodotti: ProdottoOrdine[];
    negozio: string;

      constructor() { }

      public setNegozio(negozio) {
        this.negozio = negozio;
      }

      public getNegozio() {
        return this.negozio;
      }

      public setProdotti(prodotti) {
        this.prodotti = prodotti;
      }

      public getProdotti() {
        return this.prodotti;
      }

      public setExtras(data){
        this.extras = data;
      }

      public getExtras(){
        return this.extras;
      }
    }
