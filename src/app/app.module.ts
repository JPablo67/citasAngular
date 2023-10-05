import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { ListarCitasComponent } from './citas/listar-citas/listar-citas.component';
import { AsignarCitasComponent } from './citas/asignar-citas/asignar-citas.component';
import { EditarCitaComponent } from './citas/editar-cita/editar-cita.component';
import { LoginModule } from './login/login.module';
import { SearchModule } from './search/search.module';
import { HeaderModule } from './header/header.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { CitasModule } from './citas/citas.module';
import { SidenavComponent } from './dashboard/sidenav/sidenav.component';
import { EdicionComponent } from './citas/edicion/edicion.component';

@NgModule({
  declarations: [
    AppComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    SearchModule,
    HeaderModule,
    DashboardModule,
    CitasModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
