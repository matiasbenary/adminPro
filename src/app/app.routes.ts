import { RouterModule, Routes } from '@angular/router';

import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { Grafica1Component } from 'app/pages/grafica1/grafica1.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from 'app/login/register.component';



const appRoutes: Routes = [
    { 
        path:'',
        component: PagesComponent,
        children:[
            { path: 'dashboard', component: DashboardComponent },
            { path: 'grafica1', component: Grafica1Component },
            { path: 'progress', component: ProgressComponent },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        ]
    },
    { path: 'login',component: LoginComponent },
    { path: 'register',component: RegisterComponent },
    
    { path: '**', component: NopagefoundComponent },
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );

