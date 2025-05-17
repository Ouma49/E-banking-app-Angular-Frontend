import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { CommonModule, NgIf } from '@angular/common';
import { CustomerService } from '../services/customer.service';
import { catchError, Observable, throwError } from 'rxjs';
import { Customer } from '../model/customer.model';

@Component({
  selector: 'app-customers',
  imports: [CommonModule, NgIf],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent implements OnInit
 {

  customers! :Observable<Array<Customer>>; //No default value
  errorMessage!:string;

  constructor(private customerService : CustomerService){

  }


ngOnInit(): void {
   this.customers=this.customerService.getCustomer().pipe(
    catchError(err =>{
      this.errorMessage=err.message;
      return throwError(err);

    })
   );


}
}
