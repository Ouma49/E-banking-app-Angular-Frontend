import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      username: this.fb.control(""),
      password: this.fb.control("")
    });
  }

  handleLogin() {
    this.errorMessage = '';
    if (this.formLogin.valid) {
      const username = this.formLogin.value.username;
      const password = this.formLogin.value.password;
      
      this.authService.login(username, password).subscribe({
        next: (data) => {
          this.authService.loadProfile(data);
          this.router.navigate(['/admin']);
        },
        error: (err: HttpErrorResponse) => {
          if (err.status === 401) {
            this.errorMessage = 'Invalid username or password';
          } else {
            this.errorMessage = 'An error occurred during login. Please try again.';
          }
          console.error('Login failed:', err);
        }
      });
    }
  }
}
