import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  consultarLogin () {
    console.log ("Consultar services Login")
    const url_api = 'http://localhost:3000/api/AdRoles/listarAdRole';
    // const url_api = 'http://localhost:3000/api/adUsers/consultarAdUser';
    let hola = {
      adClientId : 0,
      adOrgId : 1000
    }       
    return this.http.post(url_api, hola);
  }

  guardarLogin (loginData) {
    console.log ("Guardar services Login")
    const url_api = 'http://localhost:3000/api/AdUsers/guardarAdUser';
    return this.http.post(url_api, loginData);
  }


}
