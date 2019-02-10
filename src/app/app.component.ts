import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  login: boolean = true;
  display = 'none';

  irLogin() {
    this.login = false;
    console.log("ir Login")
  }

  openModal() {
    // this.login = false;
    console.log("Modal")
    this.display = 'block';
  }

  closeModal() {
    this.display = 'none';
  }
}
