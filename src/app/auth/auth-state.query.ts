import { Selector } from '@ngxs/store';
import { AppConfigState } from 'src/app/+state/app-config/app-config.state';

export class AuthStateQuery {
    @Selector([AppConfigState.getUser])
    static isLoggedIn(email: string | undefined): boolean {
        return !!email;
    }
}
