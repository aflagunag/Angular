import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/seguridad/login/login.component';
import { AdUserComponent } from './componentes/ad/ad-user/ad-user.component';

const routes: Routes = [
  {path:'index', component: AppComponent},
  {path:'loginComponent', component: LoginComponent},
  {path:'adUserComponent', component: AdUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
