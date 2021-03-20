import { MatchEvent, MatchEventType, MatchMetaData } from 'src/app/models';
import * as moment from 'moment';

const today = moment().startOf('day').add(14, 'hours');

export const meta: MatchMetaData = {
  homeTeam: {
    name: 'Manchester United',
    logo: 'https://images.onefootball.com/icons/teams/164/21.png'
  },
  awayTeam: {
    name: 'Arsenal FC',
    logo: 'https://images.onefootball.com/icons/teams/164/2.png'
  },
  venue: 'Old Trafford Road',
  competition: 'Premiere League',
  date: today.toDate()
};

export const events: MatchEvent[] = [
  {
    type: MatchEventType.NO_EVENT,
    time: today.toDate()
  },
  {
    type: MatchEventType.MATCH_START,
    description: 'Lineups are announced and players are warming up.',
    time: today.add(2, 'minutes').toDate()
  },
  {
    type: MatchEventType.FOUL,
    description: 'Foul by Thiago (Arsenal).',
    time: today.add(2.8, 'minutes').toDate()
  },
  {
    type: MatchEventType.NO_EVENT,
    description: 'Fernandes (Manchester United) wins a free kick in the defensive half.',
    time: today.add(3, 'minutes').toDate()
  },
  {
    type: MatchEventType.GOAL,
    description: 'GOOOOOAAAAAAALLLLLL! And it\'s Rashford who finds the back of the net with a beautiful volley.',
    time: today.add(3, 'minutes').toDate(),
    eventMeta: {
      scoringTeamId: 'home'
    }
  },
  {
    type: MatchEventType.YELLOW_CARD,
    description: 'Thiago (Arsenal) is shown the yellow card for a bad foul.',
    time: today.add(5, 'minutes').toDate(),
  },
  {
    type: MatchEventType.MISS,
    description: 'Attempt missed. Cavani (Manchester United) left footed shot from outside the box misses to the right. Assisted by Marcus Rashford.',
    time: today.add(6, 'minutes').toDate(),
  },
  {
    type: MatchEventType.GOAL,
    description: 'GOOOOOAAAAAAALLLLLL! And it\'s Saka who finds the back of the net with a beautiful volley.',
    time: today.add(13, 'minutes').toDate(),
    eventMeta: {
      scoringTeamId: 'away'
    }
  }
];
