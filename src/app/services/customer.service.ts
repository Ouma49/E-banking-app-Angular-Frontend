import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Customer } from '../model/customer.model';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  
  backendHost:string="http://localhost:8085";

  constructor(private http:HttpClient) { }

  public getCustomer():Observable<Array<Customer>>{
    return this.http.get<Array<Customer>>(this.backendHost+"/customers")
  }

  public searchCustomers(keyword: string): Observable<Array<Customer>> {
    console.log('Making search request to:', this.backendHost+"/customers/search?keyword="+keyword);
    return this.http.get<Array<Customer>>(this.backendHost+"/customers/search?keyword="+keyword).pipe(
      tap(response => console.log('Search response:', response)),
      catchError(error => {
        console.error('Search request failed:', error);
        return throwError(() => error);
      })
    );
  }

  public saveCustomer(customer: Customer):Observable<Customer>{
    return this.http.post<Customer>(this.backendHost+"/customers",customer)
  }

  public deleteCustomer(id: number): Observable<void> {
    return this.http.delete<void>(this.backendHost+"/customers/"+id).pipe(
      tap(() => console.log('Customer deleted successfully')),
      catchError(error => {
        console.error('Error deleting customer:', error);
        return throwError(() => error);
      })
    );
  }
}
