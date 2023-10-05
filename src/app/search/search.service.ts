import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {


  urlBase = environment.API_URL

  constructor(private http: HttpClient) {

  }

  
}
