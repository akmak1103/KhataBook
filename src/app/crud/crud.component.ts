import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  customer: any;
  customerName: string;
  customerAge: number;
  customerAddress: string;
  message: string;


  constructor(public crudservice: CrudService,public authservice: AuthService) { }

  ngOnInit() {
    this.crudservice.get_Allcustomer().subscribe(data => {

      this.customer = data.map(e => {
        return {
          id: e.payload.doc.id,
          isedit: false,
          name: e.payload.doc.data()['name'],
          age: e.payload.doc.data()['age'],
          info: e.payload.doc.data()['info'],
        };
      })
      console.log(this.customer);

    });
  }

  CreateRecord() {
    let Record = {};
    Record['name'] = this.customerName;
    Record['age'] = this.customerAge;
    Record['info'] = this.customerAddress;

    this.crudservice.create_Newcustomer(Record).then(res => {

      this.customerName = "";
      this.customerAge = undefined;
      this.customerAddress = "";
      console.log(res);
      this.message = "Customer Added!";
    }).catch(error => {
      console.log(error);
    });

  }

  EditRecord(Record) {
    Record.isedit = true;
    Record.editname = Record.name;
    Record.editage = Record.age;
    Record.editinfo = Record.info;

  }

  Updatarecord(recorddata) {
    let record = {};
    record['name'] = recorddata.editname;
    record['age'] = recorddata.editage;
    record['info'] = recorddata.editinfo;
    this.crudservice.update_customer(recorddata.id, record);
    recorddata.isedit = false;
  }

  Deletecustomer(record_id) {
    this.crudservice.delete_customer(record_id);
  }
}
