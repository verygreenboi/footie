import { Action, createSelector, NgxsOnInit, Selector, State, StateContext } from '@ngxs/store';
import { GetCompetition, MatchAction } from 'src/app/+state/match/match.actions';
import { Competition, CompetitionResponse, Match } from 'src/app/models';
import { MatchService } from 'src/app/core/match.service';
import { Injectable } from '@angular/core';

export interface MatchStateModel {
    items: string[];
    competitionRes: CompetitionResponse;
}

@State<MatchStateModel>({
    name: 'match'
})
@Injectable()
export class MatchState implements NgxsOnInit {

    constructor(private matchService: MatchService) {
    }

    @Selector()
    public static getState(state: MatchStateModel): MatchStateModel {
        return state;
    }

    @Selector()
    static getCompetitionResponse(state: MatchStateModel): CompetitionResponse {
        return state.competitionRes;
    }

    @Selector([MatchState.getCompetitionResponse])
    static getCompetition(response: CompetitionResponse): Competition {
        return response.competition;
    }

    @Selector([MatchState.getCompetitionResponse])
    static getMatches(state: MatchStateModel, response: CompetitionResponse): Match[] {
        return response.matches ?? [];
    }

    @Selector([MatchState.getMatches])
    static getCurrentMatchDay(state: MatchStateModel, matches: Match[]): number {
        const season = matches[0]?.season;
        if (!season) {
            return 0;
        }
        return season.currentMatchday;
    }

    ngxsOnInit({ dispatch }: StateContext<any>): void {
        dispatch(new GetCompetition());
    }


    @Action(MatchAction)
    public add(ctx: StateContext<MatchStateModel>, { payload }: MatchAction): void {
        const stateModel = ctx.getState();
        stateModel.items = [...stateModel.items, payload];
        ctx.setState(stateModel);
    }

    @Action(GetCompetition)
    async getCompetition(ctx: StateContext<MatchStateModel>): Promise<void> {
        const competitionRes = await this.matchService.getFixtures().toPromise();
        ctx.patchState({
            competitionRes
        });
    }
}
