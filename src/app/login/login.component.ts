import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { AuthService } from '../shared/auth/auth.service';
import { EsercenteService } from '../services/esercente.service';
import { ProdottoService } from '../services/prodotto.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']


})

export class LoginComponent implements OnInit {

  public form : FormGroup;


  user = {
    email: '',
    password: '',

  };

  validation_messages = {
    'email': [
      { type: 'required', message: 'Il campo Email è obbligatorio.' },
    ],
    'password': [
     { type: 'required', message: 'Il campo Password è obbligatorio.' },
   ],
  };

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private serve: EsercenteService,
    private prodService: ProdottoService,
    private router: Router
  ) {}


  ngOnInit() {

    this.form = this.formBuilder.group({
      email: ['',Validators.required],
      password: ['',Validators.required]


    });

  }

  goToRegister() {

    this.router.navigate(['/registrazione']);

  }


  login(){

    const navigationExtras: NavigationExtras = {
      queryParams: {

        utente:this.user.email
        }
    };
    this.auth.login(this.user.email,this.user.password)
    .then(() => {
      this.serve.getUtenti().subscribe(res => {
        res.forEach(element => {
          if(element.email == this.user.email) {
            this.router.navigate(['/negozi'], navigationExtras);
          }
        });
      });
    });
  }
}
