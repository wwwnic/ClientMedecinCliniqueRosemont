import { Component, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Prescription } from '../prescription/prescription.model'

@Component({
  selector: 'app-dossier',
  templateUrl: './dossier.component.html',
  styleUrls: ['./dossier.component.css']
})
export class DossierComponent {
  id = 0;

  afficherFormulairePrescription = false;

  afficherFormulaireInfoPatient = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.id = params['id'];
      }
    );
  }

  cacherFormulairePrescription($event: boolean){
    this.afficherFormulairePrescription = $event
  }

  cacherFormulaireInformationPatient($event: boolean){
    this.afficherFormulaireInfoPatient = $event
  }

  voirFomulairePrescription(): void {
    this.afficherFormulairePrescription = true;
  }

  voirFormulaireAjouterInformationPatient(): void {
    this.afficherFormulaireInfoPatient = true;
  }



}