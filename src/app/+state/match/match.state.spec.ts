import { TestBed, async } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { MatchState, MatchStateModel } from 'src/app/+state/match/match.state';
import { MatchAction } from 'src/app/+state/match/match.actions';

describe('Match store', () => {
  let store: Store;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([MatchState])]
    }).compileComponents();
    store = TestBed.get(Store);
  }));

  it('should create an action and add an item', () => {
    const expected: MatchStateModel = {
      items: ['item-1']
    };
    store.dispatch(new MatchAction('item-1'));
    const actual = store.selectSnapshot(MatchState.getState);
    expect(actual).toEqual(expected);
  });

});
