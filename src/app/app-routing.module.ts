import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoPatientComponent } from './dossierPatient/info-patient/info-patient.component';
import { LoginComponent } from './login/login.component';
import { PrescriptionComponent } from './dossierPatient/prescription/prescription.component';
import { DossierComponent } from './dossierPatient/dossier/dossier.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'prescription', component: PrescriptionComponent },
  { path: 'information', component: InfoPatientComponent },
  { path: 'dossier', component: DossierComponent },
  { path: 'user', children: [
  { path: 'profil', component: LoginComponent },
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}