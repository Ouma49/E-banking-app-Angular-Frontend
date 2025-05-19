import { Routes } from '@angular/router';
import {CustomersComponent} from './customers/customers.component';
import {AccountsComponent} from './accounts/accounts.component';
import { NewCostumerComponent } from './new-costumer/new-costumer.component';
import { LoginComponent } from './login/login.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';


export const routes: Routes = [
  { path: '', redirectTo: '/customer', pathMatch: 'full' },
 
  { path  : "login", component : LoginComponent},
  { path  : "", redirectTo : "/login" , pathMatch : "full"},
  { path : "admin", component : AdminTemplateComponent, children :[
    { path : "customers",component : CustomersComponent},
  { path : "accounts",component : AccountsComponent},
  { path : "new-customer",component : NewCostumerComponent},

  ]},



];


