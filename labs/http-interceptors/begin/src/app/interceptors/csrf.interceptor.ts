import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CSRFInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const setHeaders = {'x-csrf-token': 'my-csrf-token'};
    const clonedReqWithHeaders = req.clone({ setHeaders });

    console.log('Adding CSRF header');

    return next.handle(clonedReqWithHeaders);
  }
}
