import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth/auth.service';
import { EsercenteService } from '../services/esercente.service';
import { ProdottoService } from '../services/prodotto.service';

@Component({
  templateUrl: './login.component.html',


})

export class LoginComponent implements OnInit {

  public form : FormGroup;

  user = {
    email: '',
    password: '',

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

  login(){
    console.log(this.user.email);
    this.auth.login(this.user.email,this.user.password)
    .then(() => {
      this.serve.getUtenti().subscribe(res => {
        res.forEach(element => {
          if(element.email == this.user.email) {
            this.router.navigate(['/dashboard']);
          }
        });
      });
    });
  }
}
