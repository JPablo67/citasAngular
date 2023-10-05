import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SearchModule } from "../search/search.module";
import { HeaderComponent } from '../header/header.component';
import { HeaderModule } from '../header/header.module';
import { CitasModule } from '../citas/citas.module';


@NgModule({
    declarations: [
        DashboardComponent,
        SidenavComponent,
    ],
    exports: [
        DashboardComponent,
        SidenavComponent
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        SearchModule,
        HeaderModule,
        CitasModule
    ]
})
export class DashboardModule { }
