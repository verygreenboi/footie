import { Inject, Injectable, OnDestroy } from '@angular/core';
import { MATCH_OBSERVABLE_TOKEN } from 'src/app/football-datasource';
import { Match, MatchMetaData } from 'src/app/models';
import { Observable, Subscription } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { NewMatch } from 'src/app/+state/match/match.actions';
import { MatchState } from 'src/app/+state/match/match.state';

@Injectable({
  providedIn: 'root'
})
export class MatchService implements OnDestroy {
  @Select(MatchState.getMatchInformation) matchInfo!: Observable<MatchMetaData>;
  subscription: Subscription;

  constructor(@Inject(MATCH_OBSERVABLE_TOKEN) match$: Observable<Match>, store: Store) {
    this.subscription = match$.pipe(
      tap(match => store.dispatch(new NewMatch(match)))
    ).subscribe((event) => {
      console.log('MATCH', event);
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
