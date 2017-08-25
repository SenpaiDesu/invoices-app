import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Customer } from '../models/customer.model';
import { Product } from '../models/product.model';
import { Invoice } from '../models/invoice.model';

@Injectable()
export class DataService {

  private apiUrl = 'http://localhost:8000/api';

  constructor(private _http: HttpClient) { }

  wrapInArray(data): Array<any> {
    if (!(data instanceof Array)) 
      data = [ data ];
    return data;
  }

  get customers(): Observable<Customer[]> {
    return this._http.get(`${this.apiUrl}/customers`)
      .map(data => this.wrapInArray(data));
  }

  get products(): Observable<Product[]> {
    return this._http.get(`${this.apiUrl}/products`)
      .map(data => this.wrapInArray(data));
  }

  get invoices(): Observable<Invoice[]> {
    return this._http.get(`${this.apiUrl}/invoices`)
      .map(data => this.wrapInArray(data));
  }

  addInvoice(invoice: Invoice): Observable<Invoice> {
    return this._http.post(`${this.apiUrl}/invoices`, invoice);
  }

  removeInvoice(id: number): Observable<Invoice> {
    return this._http.delete(`${this.apiUrl}/invoices/${id}`);
  }

}
