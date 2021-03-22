import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreComponent } from 'src/app/shared/score/score.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { PageComponent } from './page/page.component';
import { CardComponent } from './card/card.component';


@NgModule({
    declarations: [
        ScoreComponent,
        ToolbarComponent,
        PageComponent,
        CardComponent
    ],
    exports: [
        ScoreComponent,
        ToolbarComponent,
        PageComponent,
        CardComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule {
}
