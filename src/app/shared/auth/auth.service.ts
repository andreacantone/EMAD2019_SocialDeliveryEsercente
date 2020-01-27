import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
//import { EsercenteService } from 'src/app/services/esercente.service';


@Injectable()
export class AuthService {

//  public user: Observable<firebase.User>;
  constructor(private afAuth: AngularFireAuth) {
//    this.user = afAuth.authState;
  }


  login(email, password) {

      return this.afAuth.auth.signInWithEmailAndPassword(email, password);

  }
/*
  isAuthenticated(): Observable<boolean> {
    return this.user.map(user => user && user.uid !== undefined);
  }
*/
  logout() {
    this.afAuth.auth.signOut();
  }



}
