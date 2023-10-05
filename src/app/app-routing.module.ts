import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListarCitasComponent } from './citas/listar-citas/listar-citas.component';

const routes: Routes = [
  
  {
    path:'',component:LoginComponent
  },
  {
    path:'dashboard',component:DashboardComponent,
    children: [
      /**IMPORTANTE: cuando la aplicacion cargue la ruta
       * http://localhost:4200/dashboard lo vamos a redireccionar a su hijo: movies
       * */
      {
        path: '', redirectTo: '/dashboard/citas', pathMatch: 'full'
      },
      {
        path: 'citas', loadChildren: () => import('./citas/citas.module').then(m=>m.CitasModule)
      }
    ]
  },
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
