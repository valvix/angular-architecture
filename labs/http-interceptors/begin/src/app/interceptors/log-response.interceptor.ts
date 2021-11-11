import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class LogResponseTimeInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const started = Date.now();
    let ok: string;

    return next.handle(req).pipe(
      tap(
        (httpEvent) => { 
          ok = httpEvent instanceof HttpResponse && 'success';
        },
        (error) => {
          ok = error;
        }
      ),
      finalize(() => {
        const finished = Date.now();
        console.log(`${req.method} having parameters ${req.url} finished with ${ok} in ${finished - started} ms`)
      })
    );
  }
}
