import { HttpInterceptorFn, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

export const appHttpInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  
  if (authService.getAccessToken()) {
    const newRequest = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + authService.getAccessToken())
    });
    return next(newRequest);
  }
  
  return next(req);
};
