import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  private products: Product[];
  private input: Product;

  constructor(private _dataService: DataService) {
    this.input = new Product();
  }

  ngOnInit() {
    this._dataService.products
      .subscribe(
        products => { this.products = products; console.log(products) },
        error => { console.log(error) }
      )
  }

  onPostProduct() {
    this._dataService.addProduct(this.input)
      .subscribe(
        product => { this.ngOnInit() },
        error => { console.log(error) }
      )
  }

  onRemoveProduct(id: number) {
    this._dataService.removeProduct(id)
      .subscribe(
        success => { this.ngOnInit() },
        error => { console.log(error) }
      )
  }

}
