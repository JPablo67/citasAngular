import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private http: HttpClient) {}

  login(credentials: any) {
    return this.http.post('https://app.gosummus.com/testing/api/login', credentials);
  }
}
