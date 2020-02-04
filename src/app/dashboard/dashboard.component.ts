import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Prodotto } from '../interface/prodotto';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ProdottoService } from '../services/prodotto.service';
import { NegozioService } from '../services/negozio.service';


@Component({
  templateUrl: './dashboard.component.html',
})

export class DashboardComponent implements OnInit {
  shop = '';
  products: Prodotto[] = [];
  negozioID: string = 'KY13Jqlma2lYfdw34NYj';
  prodotto: Prodotto;
  prodotto2:Prodotto;
  prod:Prodotto;
  prod2:Prodotto[]=[];
  private id_negozio;

  constructor(private nService:NegozioService, private prodService:ProdottoService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {

    this.route.queryParams.subscribe(async params => {
      this.id_negozio = params['id_negozio'];
    });

    this.nService.getNegozio(this.id_negozio).subscribe(element=>{
      element.prodotti.forEach(res=>{
        this.prod=res;
        this.prod2.push(this.prod);
      })
      for(let p of this.prod2){
        this.prodService.getProdotto(p).subscribe(res => {
          this.prodotto = res;
          this.products.push(this.prodotto);
        });
      }
    });
 }

  deleteProduct(id) {

   return this.prodService.removeProdotto(id);

  };


}
