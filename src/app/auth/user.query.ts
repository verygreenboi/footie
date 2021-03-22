import { Selector } from '@ngxs/store';
import { AppConfigState } from 'src/app/+state/app-config/app-config.state';
import { url } from 'gravatar';

export type ToolbarViewModel = { email: string | undefined; avatar: string | undefined; title: string | undefined; };

export class UserQuery {
    @Selector([AppConfigState.getUser, AppConfigState.getAppTitle])
    static getToolbarViewModel(user: string | undefined, title: string): ToolbarViewModel | undefined {
        return {
            email: user,
            avatar: user ? url(user, { s: '24' }) : undefined,
            title
        };
    }
}
