import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/core/app-routing.module';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { MatchService } from 'src/app/core/match.service';
import { RouterModule } from '@angular/router';
import { AppConfigState } from 'src/app/+state/app-config/app-config.state';
import { GRAVATAR_FACTORY_TOKEN } from 'src/app/core/gravatar.factory';
import { url } from 'gravatar';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RapidApiInterceptor } from 'src/app/core/rapid-api.interceptor';
import { FootballDataApiInterceptor } from 'src/app/core/football-data-api.interceptor';


@NgModule({
    declarations: [],
    exports: [
        RouterModule
    ],
    imports: [
        AppRoutingModule,
        CommonModule,
        HttpClientModule,
        NgxsModule.forRoot([AppConfigState]),
        NgxsStoragePluginModule.forRoot(),
        NgxsLoggerPluginModule.forRoot()
    ],
    providers: [
        MatchService,
        {
            provide: GRAVATAR_FACTORY_TOKEN,
            useFactory: () => (email: string): string => {
                return url(email);
            }
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RapidApiInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: FootballDataApiInterceptor,
            multi: true
        }
    ]
})
export class CoreModule {
}
