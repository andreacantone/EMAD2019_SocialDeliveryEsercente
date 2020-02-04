import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { NegozioService } from '../services/negozio.service';

@Component({
  templateUrl: './addnegozio.component.html',

})

export class AddNegozioComponent implements OnInit {

  form: FormGroup;
  private id;

  validation_messages = {
   'nome': [
     { type: 'required', message: 'Il campo Nome è obbligatorio.' }
   ],
   'p_iva': [
     { type: 'required', message: 'Il campo Partita Iva è obbligatorio.' }
   ]
 };

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private router: Router,
    public negozioService: NegozioService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.createForm();
    this.route.queryParams.subscribe(async params => {
      this.id = params['utente'];

   });
  }

  createForm() {
    this.form = this.fb.group({
      nome: ['', Validators.required ],
      p_iva: ['', Validators.required ]
    });
  }


  resetFields() {
    this.form = this.fb.group({
      nome: new FormControl('', Validators.required),
      p_iva: new FormControl('', Validators.required)
    });
  }



  onSubmit(value) {
     const navigationExtras: NavigationExtras = {
      queryParams: {

        utente:this.id
        }
    };
    value.id_esercente = this.id;
    this.negozioService.addNegozio(value)
    .then(
      res => {
        this.resetFields();
        this.router.navigate(['/negozi'],navigationExtras);
      }
   );

  }

}