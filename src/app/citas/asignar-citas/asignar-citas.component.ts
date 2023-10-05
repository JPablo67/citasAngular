import { Component } from '@angular/core';
import { CitasService } from '../citas.service';
import { Cita } from '../cita';
import { SwalUtils } from 'src/app/utils/swal-utils';

@Component({
  selector: 'app-asignar-citas',
  templateUrl: './asignar-citas.component.html',
  styleUrls: ['./asignar-citas.component.css']
})
export class AsignarCitasComponent {

  cita:Cita={
    
    cedula:'',
    nombre:'',
    fecha:'',
    hora:'',
    observaciones:''
    
  }
  

  constructor(private citasService: CitasService) {

  }

  agregarCita():void{

    if(this.cita.cedula==''||this.cita.nombre==''||this.cita.fecha==''||this.cita.hora==''||this.cita.observaciones==''){
      SwalUtils.customMessageError('Campos Faltantes','Ingrese todos los datos');

    }else{
      this.citasService.crearCita(this.cita).subscribe((data) =>{
        
      })
      SwalUtils.customMessageOk('Cita Agendada','Base de datos de citas actualizada'),
      this.cita.cedula='',
      this.cita.nombre='',
      this.cita.fecha='',
      this.cita.hora='',
      this.cita.observaciones=''
    }
  };




}
