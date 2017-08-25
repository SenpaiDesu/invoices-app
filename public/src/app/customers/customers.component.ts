import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';
import { Customer } from '../models/customer.model';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  private customers: Customer[];
  private input: Customer;
  
  constructor(private _dataService: DataService) { 
    this.input = new Customer();
  }

  ngOnInit() {
    this._dataService.customers
      .subscribe(
        customers => { this.customers = customers; console.log(customers); },
        error => { console.log(error) }
      )
  }

  onPostCustomer() {
    this._dataService.addCustomer(this.input)
      .subscribe(
        customer => { this.ngOnInit() },
        error => { console.log(error) }
      )
  }

  onRemoveCustomer(id: number) {
    this._dataService.removeCustomer(id)
      .subscribe(
        success => { this.ngOnInit() },
        error => { console.log(error) }
      )
  }

}
