import { IinfoPatient } from "./rechercher-dossier.model";
import { HttpResponse } from '@angular/common/http';
import { Component, OnInit, NgModule } from '@angular/core';
import { RechercherDossierService } from './rechercher-dossier.service';

  
@Component({
  selector: 'app-rechercher-dossier',
  templateUrl: './rechercher-dossier.component.html',
  styleUrls: ['./rechercher-dossier.component.css']
})
export class RechercherDossierComponent {

  patients: IinfoPatient[] = [];
  recherche: string = ""


  constructor( protected rechercherService: RechercherDossierService) {}

  rechercher(): void {
    this.rechercherService.getByPatientId(this.recherche)
    .subscribe((res: HttpResponse<IinfoPatient[]>) => {
      this.patients = res.body ?? [];
    });
  }

}
