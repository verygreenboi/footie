import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Store } from '@ngxs/store';
import { AuthStateQuery } from 'src/app/auth/auth-state.query';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class IsLoggedOutGuard implements CanLoad {
    constructor(private store: Store, private router: Router) {
    }

    get isLoggedIn(): boolean {
        return this.store.selectSnapshot(AuthStateQuery.isLoggedIn);
    }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.isLoggedIn) {
      return true;
    } else {
      return this.router.parseUrl('/login');
    }
  }

}
