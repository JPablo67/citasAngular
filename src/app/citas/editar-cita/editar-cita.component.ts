import { Component } from '@angular/core';
import { Cita } from '../cita';
import { CitasService } from '../citas.service';
import { SwalUtils } from 'src/app/utils/swal-utils';

@Component({
  selector: 'app-editar-cita',
  templateUrl: './editar-cita.component.html',
  styleUrls: ['./editar-cita.component.css']
})
export class EditarCitaComponent {

  citas!: Cita[];

  constructor(private citasService: CitasService) {

  }

  ngOnInit(): void {
    this.getCitasActuales()
  }

  getCitasActuales() {
    this.citasService.getCitas().subscribe((res:any) => {
      console.log(res);
      if (res) {
        this.citas = res.citas
        console.log(this.citas);
      } else {
        SwalUtils.customMessageError("Error", "No se encontratron datos")
      }
    }, (error) => {
      console.log(error);
      SwalUtils.customMessageError("Error", "Error al consultar los datos")
    })
  }

}
