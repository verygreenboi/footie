import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as config from '../../assets/config.json';

@Injectable()
export class FootballDataApiInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let req;
    if (request.url.includes('football-data.org')) {
      req = request.clone({
        headers: new HttpHeaders().append('X-Auth-Token', (config as any)['X-Auth-Token'])
      });
    } else {
      req = request;
    }
    return next.handle(req);
  }
}
