import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { FixturesComponent } from 'src/app/fixtures/fixtures.component';
import { NgxsModule } from '@ngxs/store';
import { MatchState } from 'src/app/+state/match/match.state';
import { MatchService } from 'src/app/core/match.service';


@NgModule({
    declarations: [
        FixturesComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        NgxsModule.forFeature([MatchState]),
        RouterModule.forChild([
            {
                path: '',
                component: FixturesComponent
            }
        ])
    ],
    providers: [
        MatchService
    ]
})
export class FixturesModule {
}
