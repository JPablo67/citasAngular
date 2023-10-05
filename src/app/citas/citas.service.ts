import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cita } from './cita';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  constructor(private http: HttpClient) {}

  getCitas() {
    return this.http.get('https://app.gosummus.com/testing/api/citas');
  }

  obetenerCitaPorNombre(nombre: string) {
    return this.http.get(`https://app.gosummus.com/testing/api/cita/${nombre}`);
  }

  crearCita(cita: Cita) {
    return this.http.post('https://app.gosummus.com/testing/api/cita', cita);
  }

  updateCita(cita: Cita) {
    return this.http.put('https://app.gosummus.com/testing/api/cita', cita);
  }
}
