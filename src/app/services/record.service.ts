import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class RecordService {
   Data:any=[];
  constructor(public fireservices:AngularFirestore) { }
  public Record:{};
  create_NewRec(detail)
  {
    detail.forEach(Record => {
      this.fireservices.collection('users').add({
        name:Record.inputName,
        email:Record.inputEmail,
        address:Record.inputAddress,
        phone:Record.inputPhone
      });
    }); 
  }
  get_AllRec()
  {

   return this.fireservices.collection('users').snapshotChanges();
  }

  delete_Rec(record_id)
  {
    this.fireservices.doc('users/' + record_id).delete();
  }
}
