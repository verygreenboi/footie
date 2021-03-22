import { Injectable, OnDestroy } from '@angular/core';
import { Store } from '@ngxs/store';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CompetitionResponse } from 'src/app/models';

@Injectable()
export class MatchService {

    baseUrl = 'https://api.football-data.org/v2';
    competitionId = '2021';

    constructor(store: Store, private http: HttpClient) {}

    getFixtures(): Observable<CompetitionResponse> {
      return this.http.get<CompetitionResponse>(`${this.baseUrl}/competitions/${this.competitionId}/matches`);
    }
}
