import { Routes } from '@angular/router';
import {CustomersComponent} from './customers/customers.component';
import {AccountsComponent} from './accounts/accounts.component';
import { NewCostumerComponent } from './new-costumer/new-costumer.component';


export const routes: Routes = [
  { path: '', redirectTo: '/customer', pathMatch: 'full' },
  { path : "customer",component : CustomersComponent},
  { path : "accounts",component : AccountsComponent},
  { path : "new-customer",component : NewCostumerComponent},


];


