import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ordine } from '../interface/ordine';
import { NegozioService } from '../services/negozio.service';
import { OrdineService } from '../services/ordine.service';


@Component({

  templateUrl: './ordini.component.html',

})

export class OrdiniComponent implements OnInit {

  ordini: Ordine[] = [];
  negozioID: string = 'KY13Jqlma2lYfdw34NYj';

  constructor(private route: ActivatedRoute, private ordineService: OrdineService) { }


  listElementClicked(ordine: Ordine) {

  }

  ngOnInit() {

    this.ordineService.getOrdini();

}




  toValue(key: number): string {
    console.log('OK');
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
