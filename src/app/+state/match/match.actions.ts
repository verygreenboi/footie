import { Match } from 'src/app/models';

export class MatchAction {
  public static readonly type = '[Match] Add item';
  constructor(public payload: string) { }
}

export class NewMatch {
  public static readonly type = '[MATCH] NewMatch';
  constructor(public data: Match) {
  }
}
