import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"; 


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PrescriptionComponent } from './dossierPatient/prescription/prescription.component';
import { InfoPatientComponent } from './dossierPatient/info-patient/info-patient.component';
import { DossierComponent } from './dossierPatient/dossier/dossier.component';
import { RechercherDossierComponent } from './rechercher-dossier/rechercher-dossier.component';
import { AjouterPrescriptionComponent } from './dossierPatient/ajouter-prescription/ajouter-prescription.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrescriptionComponent,
    InfoPatientComponent,
    DossierComponent,
    RechercherDossierComponent,
    AjouterPrescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
