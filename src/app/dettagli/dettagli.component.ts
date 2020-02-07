import { Component, OnInit } from '@angular/core';
import { Prodotto } from '../interface/prodotto';
import { ActivatedRoute } from '@angular/router';
import {ProdottoService} from '../services/prodotto.service';
import { Ordine } from '../interface/ordine';
import { NavExtrasService } from '../interface/NavExtraService';
import { ProdottoOrdine } from '../interface/prodotto_ordine';
import { Cliente } from '../interface/cliente';
import { ClienteService } from '../services/cliente.service';

@Component({
  templateUrl: './dettagli.component.html'
})

export class DettagliComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private prodService: ProdottoService, private navExtra: NavExtrasService, private clienteService:ClienteService) {

   }

  prodOrdine: ProdottoOrdine = {
    id:"",
    quantita:0
  };
  prodotti: ProdottoOrdine[] = [];
  prodottiDaCaricare: Prodotto[] = [];
  cliente:Cliente;
  idCliente: string ='';
  prodotto: Prodotto = {
    id:null,
    nome:null,
    descrizione:null,
    prezzo:null,
    quantita:null,
    mezzo:null};


  ngOnInit() {

    this.route.queryParams.subscribe(async params => {
      this.idCliente = params['idCliente'];
      this.clienteService.getCliente(this.idCliente).subscribe(res=>{
        this.cliente=res;

      })

   });


    this.route.queryParams.subscribe( async params => {
      this.prodotti = this.navExtra.getProdotti();
      for(let prod of this.prodotti) {
        this.prodService.getProdotto(prod.id).subscribe(res => {
          this.prodotto = res;
          this.prodotto.id = prod.id;
          this.prodottiDaCaricare.push(this.prodotto);
        });
      }
      });

}


  editButtonPressed(){
    this.goToAddProductForm();
  }

  private async goToAddProductForm() {

  }


}
