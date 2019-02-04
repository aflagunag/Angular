import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  login:boolean = true;

  irLogin() {
    this.login = false;
    console.log("ir Login")
  }
}
