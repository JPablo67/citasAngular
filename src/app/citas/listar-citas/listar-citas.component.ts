import { Component } from '@angular/core';
import { Cita } from '../cita';
import { SwalUtils } from 'src/app/utils/swal-utils';
import { CitasService } from '../citas.service';

@Component({
  selector: 'app-listar-citas',
  templateUrl: './listar-citas.component.html',
  styleUrls: ['./listar-citas.component.css']
})
export class ListarCitasComponent {

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
