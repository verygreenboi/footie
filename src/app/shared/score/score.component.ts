import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-goal',
    templateUrl: './score.component.html',
    styleUrls: ['./score.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScoreComponent implements OnInit {
    constructor() {
    }
    ngOnInit(): void {
    }

}
