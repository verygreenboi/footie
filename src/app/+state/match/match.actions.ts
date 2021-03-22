export class MatchAction {
    public static readonly type = '[Match] Add item';

    constructor(public payload: string) {
    }
}

export class GetCompetition {
    public static readonly type = '[MATCH] GetCompetition';
}
