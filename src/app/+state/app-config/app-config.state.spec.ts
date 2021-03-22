import { TestBed, async } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { AppConfigState, AppConfigStateModel } from './app-config.state';
import { SetTitle } from './app-config.actions';

describe('AppConfig store', () => {
  let store: Store;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([AppConfigState])]
    }).compileComponents();
    store = TestBed.get(Store);
  }));

  it('should create an action and add an item', () => {
    const expected: AppConfigStateModel = {
      items: ['item-1']
    };
    store.dispatch(new SetTitle('item-1'));
    const actual = store.selectSnapshot(AppConfigState.getState);
    expect(actual).toEqual(expected);
  });

});
