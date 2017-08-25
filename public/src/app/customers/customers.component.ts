import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';
import { Customer } from '../models/customer.model';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers: Customer[];
  
  constructor(private _dataService: DataService) { 
  }

  ngOnInit() {
    this._dataService.customers
      .subscribe(
        customers => { this.customers = customers; console.log(customers); },
        error => { console.log(error) }
      )
  }

}
