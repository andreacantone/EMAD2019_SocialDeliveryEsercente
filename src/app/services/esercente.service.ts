import { Injectable } from '@angular/core';
import {Esercente} from '../interface/esercente';
import {Negozio} from '../interface/negozio';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EsercenteService {
  private esercenteCollection: AngularFirestoreCollection<Esercente>;
  private negoziCollection: AngularFirestoreCollection<Negozio>;

  private esercente: Observable<Esercente[]>;
  private negozio: Observable<Negozio[]>;
  private nuovonegozio: Negozio[];

  constructor(db: AngularFirestore) {
    this.esercenteCollection = db.collection<Esercente>('esercente');
    this.negoziCollection = db.collection<Negozio>('negozi');

    this.esercente = this.esercenteCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );

    this.negozio = this.negoziCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );

 }

 getUtenti() {
  return this.esercenteCollection.valueChanges();
 }


  getUtente(id) {
    return this.esercenteCollection.doc<Esercente>(id).valueChanges();
  }

  addNegozio(negozio: Negozio) {


  }



  addUtente(esercente: Esercente) {
    return this.esercenteCollection.doc(esercente.email).set({
      nome: esercente.nome,
      cognome: esercente.cognome,
      email: esercente.email


    });
  }
}
