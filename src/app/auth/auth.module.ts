import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { IsLoggedInGuard } from 'src/app/auth/is-logged-in.guard';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            {
                path: '',
                component: LoginComponent,
                canActivate: [IsLoggedInGuard]
            }
        ]),
        SharedModule
    ],
    providers: [
        IsLoggedInGuard
    ]
})
export class AuthModule {
}
