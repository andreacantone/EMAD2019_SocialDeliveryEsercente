import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { ProdottoService } from '../services/prodotto.service';

@Component({
  templateUrl: './prodotto.component.html',
  styleUrls: ['./prodotto.component.css']

})

export class ProdottoComponent implements OnInit {

  form: FormGroup;


  validation_messages = {
   'nome': [
     { type: 'required', message: 'Nome è obbligatorio.' }
   ],
   'descrizione': [
     { type: 'required', message: 'Descrizione è obbligatorio.' }
   ],
   'prezzo': [
     { type: 'required', message: 'Prezzo è obbligatorio.' },
   ],
   'quantita': [
    { type: 'required', message: 'Quantita è obbligatorio.' },
  ],
  'mezzo': [
    { type: 'required', message: 'Mezzo è obbligatorio.' },
  ]
 };

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private router: Router,
    public prodottoService: ProdottoService
  ) { }

  ngOnInit() {
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
    this.prodottoService.addProdotto(value)
    .then(
      res => {
        this.resetFields();
        this.router.navigate(['/dashboard']);
      }
   );
  }

}
