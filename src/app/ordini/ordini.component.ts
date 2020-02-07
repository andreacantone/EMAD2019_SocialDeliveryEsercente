import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Ordine } from '../interface/ordine';
import { NegozioService } from '../services/negozio.service';
import { OrdineService } from '../services/ordine.service';
import { NavExtrasService } from '../interface/NavExtraService';
import { Prodotto } from '../interface/prodotto';



@Component({

  templateUrl: './ordini.component.html',

})

export class OrdiniComponent implements OnInit {

  ordini: Ordine[] = [];
  prodotto: Prodotto[] = [];
  negozioID: string = '';


  constructor(private route: ActivatedRoute, private ordineService: OrdineService, private navExtra: NavExtrasService,  private router: Router) { }


  listElementClicked(ordine: Ordine) {
    const navigationExtras: NavigationExtras = {
      queryParams: {

        idCliente:ordine.id_cliente
        }
    };
    this.navExtra.setProdotti(ordine.prodotti);
    this.router.navigate(['/dettagli'], navigationExtras);
  }

  ngOnInit() {
    this.negozioID = this.navExtra.getNegozio();
    this.ordineService.getOrdini().subscribe(res => {
      res.forEach(element => {
        if(element.id_negozio == this.negozioID){
          this.ordini.push(element);

        }
      });
    });

}


  toValue(key: number): string {
    if (key === 0) {
      return 'PARTITO';
    } else if (key === 1) {
      return 'CONSEGNATO';
    }
    return 'ATTESA';
  }

  getNegozioName(idNegozio: string) {

  }



}
