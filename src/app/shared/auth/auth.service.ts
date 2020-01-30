import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import { Observable } from 'rxjs';



@Injectable(

  { providedIn: 'root'}
)
export class AuthService {

 //public user: Observable<firebase.User>;
  constructor(private afAuth: AngularFireAuth) {
   //this.user = afAuth.authState;
  }


  login(email, password) {

      return this.afAuth.auth.signInWithEmailAndPassword(email, password);

  }

  register(email: string, pass: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, pass);
 }

  logout() {
    this.afAuth.auth.signOut();
  }



}
