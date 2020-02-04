import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Prodotto } from '../interface/prodotto';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ProdottoService } from '../services/prodotto.service';


@Component({
  templateUrl: './dashboard.component.html',
})

export class DashboardComponent implements OnInit {
  shop = '';
  products: Prodotto[] = [];
  negozioID: string = 'KY13Jqlma2lYfdw34NYj';
  prodotto: Prodotto;

  constructor(private prodService:ProdottoService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {

    this.prodService.getAllProdotti().subscribe(res => {
      res.forEach(element => {
        this.prodotto = element;
        this.products.push(this.prodotto);
      });
    });
  }




  deleteProduct(id) {

   return this.prodService.removeProdotto(id);

  };


}
