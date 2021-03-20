export interface Goal {
  goals: number,
  scorers: string[];
}

export interface Team {
  name: string;
  logo: string;
}

export enum MatchEventType {
  GOAL,
  MISS,
  MATCH_START,
  MATCH_END,
  HALF_TIME,
  FOUL,
  PENALTY,
  YELLOW_CARD,
  RED_CARD,
  INJURY,
  SUBSTITUTION,
  OFFSIDE,
  NO_EVENT
}

export interface MatchEvent {
  type: MatchEventType;
  description?: string;
  time?: Date;
  eventMeta?: { [key: string]: unknown };
}

export interface MatchMetaData {
  homeTeam: Team;
  awayTeam: Team;
  venue: string;
  competition: string;
  date: Date;
}

export interface Match {
  meta: MatchMetaData;
  events: MatchEvent[];
}
