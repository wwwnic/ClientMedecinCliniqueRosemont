import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Prescription } from "../prescription/prescription.model";
import { AjouterPrescriptionService } from './ajouter-prescription.service';
import { HttpResponse } from '@angular/common/http';
import { PrescriptionService } from '../prescription/prescription.service'
import { EventManager } from '@angular/platform-browser';


@Component({
  selector: 'app-ajouter-prescription',
  templateUrl: './ajouter-prescription.component.html',
  styleUrls: ['./ajouter-prescription.component.css']
})

export class AjouterPrescriptionComponent {

  @Input() userID: number = 0;

  @Output() formulaireEstVisible = new EventEmitter<boolean>();;

  constructor( protected ajouterPrescription: AjouterPrescriptionService,  protected presService: PrescriptionService) {}

  formPrescription = ""
  formNote = ""
  formRef = ""

  cacherFormulaireDansDossier() {
    this.formulaireEstVisible.emit(false);
  }

  ajouterInfo(): void {
    let sommeLongeurTexte = this.formPrescription.length + this.formNote.length + this.formRef.length
    if(sommeLongeurTexte < 1) return
    this.cacherFormulaireDansDossier()
    let pres = new Prescription(1, 1, this.userID, this.formPrescription, this.formNote, this.formRef)
    this.ajouterPrescription.AjouterInfoAuDossier(pres)
      .subscribe((res: HttpResponse<any>) => {
        this.presService.loadPrescription(this.userID);
      })   
  }
}
