import { Component, OnInit } from '@angular/core';
import { Prodotto } from '../interface/prodotto';
import { ActivatedRoute } from '@angular/router';
import {ProdottoService} from '../services/prodotto.service';
import { Ordine } from '../interface/ordine';
import { NavExtrasService } from '../interface/NavExtraService';

@Component({
  templateUrl: './dettagli.component.html'
})

export class DettagliComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private prodService: ProdottoService, private navExtra: NavExtrasService) {

   }

  prodotti: Prodotto[] = [];
  prodotto: Prodotto = {
    id:null,
    nome:null,
    descrizione:null,
    prezzo:null,
    quantita:null,
    mezzo:null};


  ngOnInit() {

    this.route.queryParams.subscribe( async params => {
      this.prodotti.push(params['ordini2']);
      console.log(this.prodotti[0]);
     console.log(params[0]);
      });

}

     /*
      const id = params['ordineID'];
      this.prodService.getAllProdotti().subscribe(res => {
        console.log(res);
      })
    });
  }
*/
  editButtonPressed(){
    this.goToAddProductForm();
  }

  private async goToAddProductForm() {

  }


}
