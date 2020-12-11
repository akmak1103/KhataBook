import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(public fireservices:AngularFirestore) { }

  create_Newcustomer(Record)
  {
    return this.fireservices.collection('Customer').add(Record);
  }

  get_Allcustomer()
  {
    return this.fireservices.collection('Customer').snapshotChanges();
  }

  update_customer(recordid, record)
  {
    this.fireservices.doc('Customer/' + recordid).update(record);
  }

  delete_customer(record_id)
  {
    this.fireservices.doc('Customer/' + record_id).delete();
  }


}
