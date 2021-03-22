import { NgZone } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

export type OutsideZoneNavigator = (zone: NgZone, router: Router) =>
    (commands: any[], extras?: NavigationExtras) => Promise<boolean>;

export const outsideNavigator: OutsideZoneNavigator = (zone: NgZone, router: Router) => (commands: any[], extras?: NavigationExtras) => {
    return new Promise( (resolve) => {
        zone.run(async () => {
            return await router.navigate(['/']);
        }).then(res => resolve(res));
    });
};

