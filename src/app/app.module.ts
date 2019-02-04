import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as Material from "@angular/material";  // Importa todas los componentes de Angular 
import { HttpClientModule } from "@angular/common/http"; // Http comunicacion con el back
import { FormsModule } from '@angular/forms';
import { ModalDialogModule } from 'ngx-modal-dialog';

import { AppRoutingModule } from './app-routing.module';

// COMPONENT
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/seguridad/login/login.component';
import { AdUserComponent } from './componentes/ad/ad-user/ad-user.component';


// SERVICES
import { LoginService } from './services/seguridad/login.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ModalDialogModule,
    Material.MatAutocompleteModule,
    Material.MatBadgeModule,
    Material.MatBottomSheetModule,
    Material.MatButtonModule,
    Material.MatButtonToggleModule,
    Material.MatCardModule,
    Material.MatCheckboxModule,
    Material.MatChipsModule,
    Material.MatStepperModule,
    Material.MatDatepickerModule,
    Material.MatDialogModule,
    Material.MatDividerModule,
    Material.MatExpansionModule,
    Material.MatGridListModule,
    Material.MatIconModule,
    Material.MatInputModule,
    Material.MatListModule,
    Material.MatMenuModule,
    Material.MatNativeDateModule,
    Material.MatPaginatorModule,
    Material.MatProgressBarModule,
    Material.MatProgressSpinnerModule,
    Material.MatRadioModule,
    Material.MatRippleModule,
    Material.MatSelectModule,
    Material.MatSidenavModule,
    Material.MatSliderModule,
    Material.MatSlideToggleModule,
    Material.MatSnackBarModule,
    Material.MatSortModule,
    Material.MatTableModule,
    Material.MatTabsModule,
    Material.MatToolbarModule,
    Material.MatTooltipModule,
    Material.MatTreeModule,
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
