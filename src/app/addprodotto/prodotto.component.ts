import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { ProdottoService } from '../services/prodotto.service';
import { NavExtrasService } from '../interface/NavExtraService';
import { NegozioService } from '../services/negozio.service';
import { Prodotto } from '../interface/prodotto';
import 'rxjs/add/operator/toPromise';
import { Negozio } from '../interface/negozio';
import {Location} from '@angular/common';

@Component({
  templateUrl: './prodotto.component.html',
  styleUrls: ['./prodotto.component.css']

})

export class ProdottoComponent implements OnInit {

  form: FormGroup;
  path = '../assets/images/big/';
  idNegozio = '';


  validation_messages = {
   'nome': [
     { type: 'required', message: 'Il campo Nome è obbligatorio.' }
   ],
   'descrizione': [
     { type: 'required', message: 'Il campo Descrizione è obbligatorio.' }
   ],
   'prezzo': [
     { type: 'required', message: 'Il campo Prezzo è obbligatorio.' },
   ],
   'quantita': [
    { type: 'required', message: 'Il campo Quantita è obbligatorio.' },
  ],
  'mezzo': [
    { type: 'required', message: 'Il campo Mezzo è obbligatorio.' },
  ]
 };

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private router: Router,
    public prodottoService: ProdottoService,
    private navExtra: NavExtrasService,
    public negozioService: NegozioService,
    private _location: Location
  ) { }

  ngOnInit() {
    this.idNegozio = this.navExtra.getNegozio();
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      nome: ['', Validators.required ],
      descrizione: ['', Validators.required ],
      prezzo: ['', Validators.required ],
      quantita: ['', Validators.required],
      mezzo: ['', Validators.required]
    });
  }


  resetFields() {
    this.form = this.fb.group({
      nome: new FormControl('', Validators.required),
      descrizione: new FormControl('', Validators.required),
      prezzo: new FormControl('', Validators.required),
      quantita: new FormControl('', Validators.required),
      mezzo: new FormControl('', Validators.required)
    });
  }



  onSubmit(value) {
    value.immagine = this.path + value.nome + '.jpg';
    this.prodottoService.addProdotto(value)
    .then(
      res => {
        this.negozioService.getNegozioNoSubscribe(this.idNegozio).get().toPromise()
          .then(doc =>{
            const negozio = doc.data();
            let prodotti: string[] = negozio.prodotti;
            if(prodotti == null)
              prodotti = [];

            prodotti.push(res.id);
            this.negozioService.updateProdotti(this.idNegozio,prodotti);

    })
        console.log(res.id);
        this.resetFields();
        this._location.back();
      }
   );

  }

}
