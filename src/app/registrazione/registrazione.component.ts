import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { EsercenteService } from '../services/esercente.service';
import { NegozioService } from '../services/negozio.service';
import { AuthService } from '../shared/auth/auth.service';

@Component({
  templateUrl: './registrazione.component.html',


})

export class RegistrazioneComponent implements OnInit {

  form: FormGroup;

  validation_messages = {
   'nome': [
     { type: 'required', message: 'Nome è obbligatorio.' }
   ],
   'cognome': [
     { type: 'required', message: 'Cognome è obbligatorio.' }
   ],
   'email': [
     { type: 'required', message: 'Email è obbligatorio.' },
   ],
   'password': [
    { type: 'required', message: 'Password è obbligatoria.' },
  ],
 };

  constructor(
    private fb: FormBuilder,
    private fb2: FormBuilder,
    public dialog: MatDialog,
    private router: Router,
    public esercenteService: EsercenteService,
    private auth: AuthService
  ) { }
  email: string = '';
  password: string = '';

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      nome: ['', Validators.required ],
      cognome: ['', Validators.required ],
      email: ['', Validators.required ],
      password: ['', Validators.required]
    });
  }




  resetFields() {
    this.form = this.fb.group({
      nome: new FormControl('', Validators.required),
      cognome: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  onSubmit(value) {
    this.auth.register(value.email, value.password)
    .then(()=>
    this.esercenteService.addUtente(value)
    .then(
      res => {
        this.resetFields();
        this.router.navigate(['/dashboard']);
      }
    ));
  }

}



