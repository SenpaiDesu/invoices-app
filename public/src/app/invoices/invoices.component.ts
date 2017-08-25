import { Component, OnInit, OnChanges } from '@angular/core';

import { DataService } from '../services/data.service';
import { Customer } from '../models/customer.model';
import { Product } from '../models/product.model';
import { Invoice } from '../models/invoice.model';


@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {

  private customers: Customer[];
  private products: Product[];
  private invoices: Invoice[];

  private input: Invoice;
  private prices: number[];
  
  
  constructor(private _dataService: DataService) {
    this.input = new Invoice();
    this.input.discount = 0;
  }

  ngOnInit() {
    this._dataService.customers
      .subscribe(
        customers => { this.customers = customers },
        error => { console.log(error) }
      );

    this._dataService.products
      .subscribe(
        products => { this.products = products },
        error => { console.log(error) }
      );

    this._dataService.invoices
      .subscribe(
        invoices => { this.invoices = invoices },
        error => { console.log(error) }
      )
  }

  onPostInvoice() {
    this._dataService.addInvoice(this.input)
      .subscribe(
        invoice => { this.ngOnInit() },
        error => { console.log(error) }
      )
  }

  onRemoveInvoice(id) {
    this._dataService.removeInvoice(id)
      .subscribe(
        success => { this.ngOnInit() },
        error => { console.log(error) }
      )
  }

  onChangeTotalCost() {
    console.log(this.input.discount);
    const withoutDiscount = this.prices
      .reduce((sum, value) => {
        return sum + value;
      })
    const withDiscount = withoutDiscount * (1 - this.input.discount * 0.01);
    if (withDiscount >= 0) this.input.total = withDiscount;
    else this.input.total = 0;
  }

}
