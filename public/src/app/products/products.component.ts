import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];

  constructor(private _dataService: DataService) {
  }

  ngOnInit() {
    this._dataService.products
      .subscribe(
        products => { this.products = products; console.log(products) },
        error => { console.log(error) }
      )
  }

}
