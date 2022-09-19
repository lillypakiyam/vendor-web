import { Injectable } from '@angular/core';
import {AngularFirestore, QueryFn} from '@angular/fire/compat/firestore'
import {BaseDtoModule} from 'src/app/pages/models/base-dto/base-dto.module'
import * as firebase from 'firebase/compat/app'
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor( private Angularfire: AngularFirestore,) {}

  public async create<T extends BaseDtoModule>(collection:string, data: T) :
   Promise<firebase.default.firestore.DocumentSnapshot<firebase.default.firestore.DocumentData>>{
    const doc = await this.Angularfire.collection<T>(collection).add(this.addcreatedAt(data));
    return doc.get()
   }

   addcreatedAt(data:any){
    return{
      ...data, createdAt: firebase.default.firestore.FieldValue.serverTimestamp(),
      updatedAt: firebase.default.firestore.FieldValue.serverTimestamp()
    };
   }
}
