import { Action, Selector, State, StateContext } from '@ngxs/store';
import { MatchAction, NewMatch } from 'src/app/+state/match/match.actions';
import { Match, MatchMetaData } from 'src/app/models';

export interface MatchStateModel {
    items: string[];
    match?: Match;
}

@State<MatchStateModel>({
    name: 'match',
    defaults: {
        items: []
    }
})
export class MatchState {

    @Selector()
    public static getState(state: MatchStateModel): MatchStateModel {
        return state;
    }

    @Selector()
    public static getMatchInformation(state: MatchStateModel): MatchMetaData {
      return state?.match?.meta ?? {
        homeTeam: {
          name: '',
          logo: ''
        },
        awayTeam: {
          name: '',
          logo: ''
        },
        venue: '',
        competition: '',
        date: new Date()
      };
    }

    @Action(MatchAction)
    public add(ctx: StateContext<MatchStateModel>, { payload }: MatchAction): void {
        const stateModel = ctx.getState();
        stateModel.items = [...stateModel.items, payload];
        ctx.setState(stateModel);
    }

    @Action(NewMatch)
    public newMatch({ dispatch, setState, patchState }: StateContext<MatchStateModel>, { data }: NewMatch): void {
      patchState({
        match: data
      });
    }
}
