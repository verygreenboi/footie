import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/shared/base.component';
import { Store } from '@ngxs/store';
import { ActivatedRoute, Router } from '@angular/router';
import { delayWhen, filter, map, retryWhen, switchMap, takeUntil, tap } from 'rxjs/operators';
import { MatchState } from 'src/app/+state/match/match.state';
import { Observable, timer } from 'rxjs';
import { FixturesQuery, FixturesViewModel } from 'src/app/fixtures/fixtures.query';

@Component({
    selector: 'app-fixtures',
    templateUrl: './fixtures.component.html',
    styleUrls: ['./fixtures.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FixturesComponent extends BaseComponent implements OnInit, OnDestroy {
    title?: string | undefined = 'Fixtures';

    matchDayFixtures: Observable<FixturesViewModel> = this.activatedRoute.queryParams.pipe(
        filter(params => !!params.matchDay && params.matchDay !== '0'),
        switchMap(params => this.store.select(FixturesQuery.getMatchesByMatchDay(parseInt(params.matchDay, 10)))),
        tap(console.log),
    );

    constructor(store: Store, private activatedRoute: ActivatedRoute, private router: Router) {
        super(store);
    }

    ngOnInit(): void {
        super.ngOnInit();
        this.activatedRoute.queryParams.pipe(
            filter(params => !params.matchDay || params.matchDay === '0'),
            switchMap(() => this.store.select(MatchState.getCurrentMatchDay).pipe(
                map((matchDay: number) => {
                    if (!matchDay || matchDay === 0) {
                        throw new Error('No match day');
                    }
                    return matchDay;
                }),
                retryWhen(errors => errors.pipe(
                    delayWhen(() => timer(5 * 1000))
                ))
            )),
            switchMap((matchDay: number) =>
                this.router.navigate(
                    ['.'],
                    {
                        relativeTo: this.activatedRoute, queryParams: {
                            matchDay
                        }
                    }
                )
            ),
            takeUntil(this.destroy$)
        ).subscribe();
    }

}
