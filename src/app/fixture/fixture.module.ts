import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FixtureComponent } from './fixture.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
    declarations: [FixtureComponent],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class FixtureModule {
}
