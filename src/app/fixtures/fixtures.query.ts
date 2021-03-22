import { Match } from 'src/app/models';
import { createSelector } from '@ngxs/store';
import { MatchState } from 'src/app/+state/match/match.state';

export interface FixturesViewModel {
    matchDay: number;
    matches: Match[];
    previous?: number;
    next?: number;
}

export class FixturesQuery {
    static getMatchesByMatchDay(matchDay: number): (matches: Match[]) => FixturesViewModel {
        return createSelector([MatchState.getMatches], (m: Match[]) => {
            const lastMatch = m[m.length - 1].matchday;
            const matches = m.filter(match => match.matchday === matchDay).map(match => ({
                ...match,
                homeTeam: {
                    ...match.homeTeam,
                    name: match.homeTeam.name.replace('FC', '')
                },
                awayTeam: {
                    ...match.awayTeam,
                    name: match.awayTeam.name.replace('FC', '')
                }
            }));
            return {
                matchDay,
                matches,
                previous: (matchDay - 1) > 0 ? matchDay - 1 : undefined,
                next: (matchDay + 1) <= lastMatch ? matchDay + 1 : undefined
            };
        });
    }
}
