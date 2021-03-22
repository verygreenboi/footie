import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { AuthStateQuery } from 'src/app/auth/auth-state.query';

@Injectable()
export class IsLoggedInGuard implements CanActivate {

    constructor(private store: Store, private router: Router) {
    }

    get isLoggedIn(): boolean {
        return this.store.selectSnapshot(AuthStateQuery.isLoggedIn);
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (this.isLoggedIn) {
            return this.router.parseUrl('/');
        } else {
            return true;
        }
    }
}
