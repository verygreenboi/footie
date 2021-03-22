import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsLoggedOutGuard } from 'src/app/auth/is-logged-out.guard';

const routes: Routes = [
    {
        path: 'login',
        loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: 'fixtures',
        loadChildren: () => import('src/app/fixtures/fixtures.module').then(m => m.FixturesModule),
        canLoad: [IsLoggedOutGuard]
    },
    {
        path: '',
        redirectTo: 'fixtures',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
