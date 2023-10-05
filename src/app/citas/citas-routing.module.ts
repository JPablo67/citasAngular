import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarCitasComponent } from './listar-citas/listar-citas.component';
import { AsignarCitasComponent } from './asignar-citas/asignar-citas.component';
import { EditarCitaComponent } from './editar-cita/editar-cita.component';
import { EdicionComponent } from './edicion/edicion.component';

const routes: Routes = [
  {
    path:'',component:ListarCitasComponent
  },
  {
    path:'asignar',component:AsignarCitasComponent
  },
  {
    path:'edicion/:nombre',component:EdicionComponent
  },
  {
    path:'editar',component:EditarCitaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitasRoutingModule { }
