import { Component, AfterViewInit, OnInit } from '@angular/core';

import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { Router } from '@angular/router';
import { ProdottoService } from '../services/prodotto.service';
import { Negozio } from '../interface/negozio';
import { NegozioService } from '../services/negozio.service';


@Component({
  templateUrl: './negozi.component.html',
})

export class NegoziComponent implements OnInit {
  shop = '';
  negozi: Negozio[] = [];
  negozioID: string = 'KY13Jqlma2lYfdw34NYj';
  negozio: Negozio;
  private id;
  private idN;

  constructor(private negozioService:NegozioService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.route.queryParams.subscribe(async params => {
       this.id = params['utente'];

    });

    this.negozioService.getNegozi().subscribe(res => {
      res.forEach(element => {
        if(element.id_esercente == this.id){
        this.negozio = element;
        this.negozi.push(this.negozio);
        }
      });
    });
  }


  aggiungiNegozio(){

    const navigationExtras: NavigationExtras = {
      queryParams: {

        utente:this.id
        }
    };
    this.router.navigate(['/addnegozio'], navigationExtras);

  }

  apriVetrina(idNegozio){

    this.idN = idNegozio;
    const navigationExtras: NavigationExtras = {
      queryParams: {

        id_negozio:this.idN
        }
    };
    this.router.navigate(['/dashboard'], navigationExtras);
  }



}
