// import { InjectionToken } from '@angular/core';
// import { combineLatest, Observable, of } from 'rxjs';
// import { Match, MatchEvent, MatchMetaData } from 'src/app/models';
// import { events, meta } from 'src/app/match.data';
// import { delay, filter, map, mapTo, mergeAll, mergeMap, scan } from 'rxjs/operators';
//
// const matchMeta$: Observable<MatchMetaData> = of(meta);
// const matchEvents$: Observable<MatchEvent> = of(events).pipe(
//   mergeAll(),
//   mergeMap(event => of(undefined).pipe(
//     mapTo(event),
//     delay(1000 * Math.floor(Math.random() * Math.floor(5))),
//   ), 1)
// );
//
// export const matchObservable: Observable<Match> = combineLatest(
//   [
//     matchMeta$,
//     matchEvents$.pipe(
//       filter(event => !!event.description),
//       scan((acc, curr) => [...acc, curr], ([] as MatchEvent[]))
//     )
//   ]
// ).pipe(
//   map(res => ({meta: res[0], events: res[1]}))
// );
//
// export const MATCH_OBSERVABLE_TOKEN = new InjectionToken<Observable<Match>>('MATCH_OBSERVABLE', {
//   providedIn: 'root',
//   factory: () => matchObservable
// });
//
