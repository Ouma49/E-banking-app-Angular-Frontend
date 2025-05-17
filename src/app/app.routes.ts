import { Routes } from '@angular/router';
import {CustomersComponent} from './customers/customers.component';
import {AccountsComponent} from './accounts/accounts.component';


export const routes: Routes = [
  { path: '', redirectTo: '/customer', pathMatch: 'full' },
  { path : "customer",component : CustomersComponent},
  { path : "accounts",component : AccountsComponent},

];


