import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Goal } from 'src/app/models';

@Component({
  selector: 'app-goal',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScoreComponent implements OnInit {

  private matchEventLoc: Goal = {
    goals: 0,
    scorers: []
  };

  constructor() {
  }

  @Input()
  get matchEvent(): Goal {
    return this.matchEventLoc;
  }

  set matchEvent(newEvent: Goal) {
    this.matchEventLoc = newEvent;
  }

  ngOnInit(): void {
  }

}
