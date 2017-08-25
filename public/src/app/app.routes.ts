import { Routes } from '@angular/router';

import { CustomersComponent } from './customers/customers.component';
import { ProductsComponent } from './products/products.component';
import { InvoicesComponent } from './invoices/invoices.component';

export const routes: Routes = [
  { path: 'customers', component: CustomersComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'invoices', component: InvoicesComponent },
  { path: '', pathMatch: 'full', redirectTo: '/invoices' }
]