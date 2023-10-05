import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitasRoutingModule } from './citas-routing.module';
import { ListarCitasComponent } from './listar-citas/listar-citas.component';
import { AsignarCitasComponent } from './asignar-citas/asignar-citas.component';
import { EditarCitaComponent } from './editar-cita/editar-cita.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EdicionComponent } from './edicion/edicion.component';


@NgModule({
  declarations: [
    ListarCitasComponent,
    AsignarCitasComponent,
    EditarCitaComponent,
    EdicionComponent
  ],
  imports: [
    CommonModule,
    CitasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    ListarCitasComponent,
    AsignarCitasComponent,
    EditarCitaComponent,
    EdicionComponent
  ]
})
export class CitasModule { }
