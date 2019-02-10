import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/seguridad/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private dataApi: LoginService) { }

  display: number;
  hide = true;
  loginData = {
    adClientId: '0',
    adOrgId: '1000',
    adRoleId: null,
    estado: null
  };

  ngOnInit() {
    this.display = 0;
    console.log("entro Login");
  }

  guardarLogin() {

    this.loginData.adRoleId = 2;
    this.loginData.estado = '01';

    console.log("11111111111111111", this.loginData)
    this.dataApi.guardarLogin(this.loginData)
      .subscribe((resp) => console.log("11111111111111", resp))
  }

}
