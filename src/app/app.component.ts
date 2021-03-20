import { Component } from '@angular/core';
import { MatchService } from 'src/app/match.service';
import { MatchMetaData } from 'src/app/models';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'state-management';
    info$: Observable<MatchMetaData>;

    constructor(matchService: MatchService) {
        this.info$ = matchService.matchInfo;
    }
}
