import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http'; 
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { jwtDecode } from "jwt-decode";

interface CustomJwtPayload {
  sub: string;
  scope: string[];
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private accessToken: string = '';
  public authenticated: boolean = false;
  public username: string = '';
  public roles: string[] = [];

  constructor(private http: HttpClient) { }

  public login(username: string, password: string): Observable<any> {
    return this.http.post('http://localhost:8085/auth/login', { username, password });
  }

  loadProfile(data: any) {
    if (!data || !data['access-token']) {
      console.error('Invalid token data received');
      return;
    }

    try {
      this.authenticated = true;
      this.accessToken = data['access-token'];
      // Store the token in localStorage for persistence
      localStorage.setItem('access-token', this.accessToken);
      
      if (this.accessToken) {
        const decodedJwt = jwtDecode<CustomJwtPayload>(this.accessToken);
        this.username = decodedJwt.sub || '';
        this.roles = decodedJwt.scope || [];
      }
    } catch (error) {
      console.error('Error decoding JWT:', error);
      this.authenticated = false;
      this.accessToken = '';
      this.username = '';
      this.roles = [];
    }
  }

  getAccessToken(): string {
    return this.accessToken || localStorage.getItem('access-token') || '';
  }
}
