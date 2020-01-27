import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth/auth.service';
import { EsercenteService } from '../services/esercente.service';

@Component({
  templateUrl: './login.component.html',


})

export class LoginComponent implements OnInit {

  public form : FormGroup;

  user = {
    email: '',
    password: '',

  };



  constructor() {}
/*
    this.form = this.formBuilder.group({
      email: ['',Validators.required],
      password: ['',Validators.required]


    });

  }
*/
  ngOnInit() {

  }
/*
  login(){

    this.authService.login(this.user.email,this.user.password)
    .then(() => {
      this.serve.getUtenti().subscribe(res => {
        res.forEach(element => {
          if(element.email == this.user.email) {
            // è un cliente
            this.router.navigate(['/dashboard']);
          }
        })
        //qui fuori dal for vuol dire che è un drive ma è asincrono quindi viene eseguito mentre il for è ancora attivo
      })

    })
    .catch((err) =>{
      error => alert(error)
     // this.presentAlert('Error',err.message);
    })
}
*/

}

