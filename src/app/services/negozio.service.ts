import { Injectable } from '@angular/core';
import {Negozio} from '../interface/negozio';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Prodotto } from '../interface/prodotto';


@Injectable({
  providedIn: 'root'
})
export class NegozioService {

  private negozioCollection: AngularFirestoreCollection<Negozio>;

  private negozio: Observable<Negozio[]>;



  constructor(db: AngularFirestore, ) {

    this.negozioCollection = db.collection<Negozio>('negozi');

    this.negozio = this.negozioCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getNegozi() {
    return this.negozio;
  }

  getNegozio(id) {
    return this.negozioCollection.doc<Negozio>(id).valueChanges();
  }

  getNegozioNoSubscribe(id) {
    return this.negozioCollection.doc(id);
  }

  updateNegozio(negozio: Negozio, id: string) {
    return this.negozioCollection.doc(id).update(negozio);
  }

  addNegozio(negozio: Negozio) {
    return this.negozioCollection.add(negozio);

  }

  updateProdotti(idNegozio: string, prodotti: string[]) {
    this.negozioCollection.doc(idNegozio).update({prodotti: prodotti});
  }

  removeNegozio(id) {
    return this.negozioCollection.doc(id).delete();
  }
}
