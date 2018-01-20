import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { PAGES_ROUTES } from './pages.routes';
import { FormsModule } from '@angular/forms';

//temp
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';

//ng2-charts 
import { ChartsModule } from 'ng2-charts';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';


@NgModule({
   declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Grafica1Component,
        IncrementadorComponent,
        GraficoDonaComponent
   ],
   exports: [
        DashboardComponent,
        ProgressComponent,
        Grafica1Component,
   ],
   imports: [
       SharedModule,
       PAGES_ROUTES,
       FormsModule,
       ChartsModule
   ]
})

export class PagesModule {}