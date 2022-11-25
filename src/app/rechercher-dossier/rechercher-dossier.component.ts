import { IinfoPatient } from "./rechercher-dossier.model";
import { HttpResponse } from '@angular/common/http';
import { Component, OnInit, NgModule } from '@angular/core';
import { RechercherDossierService } from './rechercher-dossier.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rechercher-dossier',
  templateUrl: './rechercher-dossier.component.html',
  styleUrls: ['./rechercher-dossier.component.css']
})
export class RechercherDossierComponent {

  patients: IinfoPatient[] = []
  rechercheInput: string = ""

  constructor(protected router: Router, protected rechercherService: RechercherDossierService) {}

  rechercher(): void {
    this.rechercherService.getByPatientId(this.rechercheInput)
    .subscribe((res: HttpResponse<IinfoPatient[]>) => {
      this.patients = res.body ?? []
    });
  }

 naviguerAuDossier(id:number): void {
  this.router.navigate(['/dossier', id],)
}

}
