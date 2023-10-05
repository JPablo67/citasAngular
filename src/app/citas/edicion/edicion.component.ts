import { Component } from '@angular/core';
import { Cita } from '../cita';
import { CitasService } from '../citas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edicion',
  templateUrl: './edicion.component.html',
  styleUrls: ['./edicion.component.css']
})
export class EdicionComponent {

  
  nombre:string=''

  citaa:Cita={
    
    cedula:'',
    fecha:'',
    hora:'',
    nombre:'',
    observaciones:''
    
  }

  constructor(private route: ActivatedRoute,private citasService: CitasService) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.nombre = params['nombre'];
      console.log(this.nombre)
      this.getCitasByNombre()
    });
    
  }

 

  getCitasByNombre() {
    this.citasService.obetenerCitaPorNombre(this.nombre).subscribe((res:any) => {
      console.log(res.cita);
      this.citaa=res.cita;
      console.log(this.citaa);
    
      
      
      
    });
  }

}
