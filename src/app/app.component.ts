import { Component } from '@angular/core';
import { LoginComponent } from './componentes/seguridad/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  login:boolean = true;

  irLogin() {
    this.login = false;
  }
}
