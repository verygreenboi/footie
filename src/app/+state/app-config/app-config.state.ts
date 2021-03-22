import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Login, SetTitle, SetUser } from 'src/app/+state/app-config/app-config.actions';
import { Inject, Injectable, NgZone } from '@angular/core';
import { GRAVATAR_FACTORY_TOKEN, GravatarFactory } from 'src/app/core/gravatar.factory';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { outsideNavigator, OutsideZoneNavigator } from 'src/app/shared/utils';
import { GetCompetition } from 'src/app/+state/match/match.actions';

export interface AppConfigStateModel {
    title?: string;
    user?: string;
}

@State<AppConfigStateModel>({
    name: 'appConfig',
    defaults: {}
})
@Injectable()
export class AppConfigState {

    private readonly navigator: OutsideZoneNavigator;

    constructor(
        @Inject(GRAVATAR_FACTORY_TOKEN) private gravatarFactory: GravatarFactory,
        private router: Router,
        private titleService: Title,
        private zone: NgZone
    ) {
        this.navigator = outsideNavigator;
    }

    @Selector()
    static getState(state: AppConfigStateModel): AppConfigStateModel {
        return state;
    }

    @Selector()
    static getAppTitle(state: AppConfigStateModel): string | undefined {
        return state.title;
    }

    @Selector()
    static getUser(state: AppConfigStateModel): string | undefined {
        return state.user;
    }

    @Action(SetUser)
    setUser({ patchState }: StateContext<AppConfigStateModel>, { email: user }: SetUser): void {
        patchState({
            user
        });
    }

    @Action(SetTitle)
    setTitle({ patchState }: StateContext<AppConfigStateModel>, { title }: SetTitle): void {
        patchState({
            title
        });
        this.titleService.setTitle(title);
    }

    @Action(Login)
    async login({ dispatch }: StateContext<AppConfigStateModel>, { email }: Login): Promise<boolean> {
        try {
            await dispatch([new GetCompetition(), new SetUser(email)]).toPromise();
            return await this.navigator(this.zone, this.router)(['/']);
        } catch (e) {
            console.log(e);
            return false;
        }
    }
}
