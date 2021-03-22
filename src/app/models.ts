export interface CompetitionResponse {
    count: number;
    filters: Filters;
    competition: Competition;
    matches: Match[];
}

export interface Competition {
    id: number;
    area: Area;
    name: string;
    code: string;
    plan: string;
    lastUpdated: Date;
}

export interface Area {
    id: number;
    name: string;
}

export interface Filters {
}

export interface Match {
    id: number;
    season: Season;
    utcDate: Date;
    status: string;
    matchday: number;
    stage: string;
    group: string;
    lastUpdated: Date;
    odds: Odds;
    score: Score;
    homeTeam: Area;
    awayTeam: Area;
    referees: Referee[];
}

export interface Odds {
    msg: string;
}

export interface Referee {
    id: number;
    name: string;
    role: string;
    nationality: null | string;
}

export interface Score {
    winner: null | string;
    duration: string;
    fullTime: ExtraTime;
    halfTime: ExtraTime;
    extraTime: ExtraTime;
    penalties: ExtraTime;
}

export interface ExtraTime {
    homeTeam: number | null;
    awayTeam: number | null;
}

export interface Season {
    id: number;
    startDate: Date;
    endDate: Date;
    currentMatchday: number;
}

