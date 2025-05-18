import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../model/customer.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-costumer',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './new-costumer.component.html',
  styleUrl: './new-costumer.component.css'
})
export class NewCostumerComponent implements OnInit {
  newCustomerFormGroup!: FormGroup;

  constructor(private fb: FormBuilder, private customerService: CustomerService, private router: Router) {}

  ngOnInit(): void {
    this.newCustomerFormGroup = this.fb.group({
      name: this.fb.control(null, [Validators.required, Validators.minLength(4)]),
      email: this.fb.control(null, [Validators.required, Validators.email])
    });
    console.log('Form initialized:', this.newCustomerFormGroup);
  }

  handleSaveCustomer() {
    console.log('Form value:', this.newCustomerFormGroup.value);
    console.log('Form valid:', this.newCustomerFormGroup.valid);
    console.log('Name errors:', this.newCustomerFormGroup.get('name')?.errors);
    
    let customer: Customer = this.newCustomerFormGroup.value;
    this.customerService.saveCustomer(customer).subscribe({
      next: data => {
        alert("Customer has been saved successfully !");
        this.newCustomerFormGroup.reset();
        this.router.navigateByUrl("/customer");
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
