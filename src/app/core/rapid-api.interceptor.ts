import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RapidApiInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const req = request.clone();
    if (req.url.includes('rapidapi.com')) {
      req.headers.append('x-rapidapi-key', 'e878c6b74bmsh25baa62285717d0p13f2b3jsnb7083aecdea3');
      req.headers.append('x-rapidapi-host', 'api-football-v1.p.rapidapi.com');
      req.headers.append('useQueryString', 'true');
    }
    return next.handle(req);
  }
}
