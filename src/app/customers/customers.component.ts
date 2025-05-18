import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { CommonModule, NgIf } from '@angular/common';
import { CustomerService } from '../services/customer.service';
import { catchError, Observable, throwError, map } from 'rxjs';
import { Customer } from '../model/customer.model';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CommonModule, NgIf, ReactiveFormsModule],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent implements OnInit {
  customers!: Observable<Array<Customer>>;
  errorMessage!: string;
  searchFormGroup: FormGroup | undefined;

  constructor(private customerService: CustomerService, private fb: FormBuilder) {
    this.searchFormGroup = this.fb.group({
      keyword: this.fb.control("")
    });

    this.handleSearchCustomers();
  }

  ngOnInit(): void {
    this.loadCustomers();
  }

  private loadCustomers() {
    this.customers = this.customerService.getCustomer().pipe(
      catchError(err => {
        console.error('Error loading customers:', err);
        this.errorMessage = err.message;
        return throwError(() => err);
      })
    );
  }

  handleSearchCustomers() {
    if (!this.searchFormGroup) {
      console.error('Search form group is not initialized');
      return;
    }

    const kw = this.searchFormGroup.get('keyword')?.value;
    console.log('Searching for keyword:', kw);
    
    if (!kw) {
      console.log('No keyword provided, loading all customers');
      this.loadCustomers();
      return;
    }

    this.customers = this.customerService.searchCustomers(kw).pipe(
      catchError(err => {
        console.error('Search error:', err);
        this.errorMessage = err.message;
        return throwError(() => err);
      })
    );
  }

  handleDeleteCustomer(c: Customer) {
    let conf = confirm("Are you sure you want to delete this customer?");
    if (!conf) return;
    
    this.customerService.deleteCustomer(c.id).subscribe({
      next: () => {
        alert("Customer deleted successfully");
        this.loadCustomers(); // Recharger la liste des clients
      },
      error: err => {
        console.error("Error deleting customer:", err);
        alert("Error deleting customer");
      }
    });
  }
}