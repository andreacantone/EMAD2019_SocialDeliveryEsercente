import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ordine } from '../interface/ordine';
import { NegozioService } from '../services/negozio.service';
import { OrdineService } from '../services/ordine.service';


@Component({

  templateUrl: './ordini.component.html',

})

export class OrdiniComponent implements OnInit {
  numero_ordine = 0;
  ordini: Ordine[] = [];
  negozioID: string = 'KY13Jqlma2lYfdw34NYj';

  constructor(private route: ActivatedRoute, private ordineService: OrdineService) { }


  listElementClicked(ordine: Ordine) {

  }

  ngOnInit() {

    this.ordineService.getOrdini().subscribe(res => {
      res.forEach(element => {
        if(element.id_negozio == this.negozioID){
          this.ordini.push(element);
          this.numero_ordine = this.numero_ordine+1;
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
