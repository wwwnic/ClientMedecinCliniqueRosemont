import { Component,Input } from '@angular/core';
import { Prescription } from "../prescription/prescription.model";

@Component({
  selector: 'app-ajouter-prescription',
  templateUrl: './ajouter-prescription.component.html',
  styleUrls: ['./ajouter-prescription.component.css']
})

export class AjouterPrescriptionComponent {

  @Input() userID: number = 0;

  formPrescription = ""
  formNote = ""
  formRef = ""

  goToInformation(formPrescription:string, formNote:string, formRef:string): void {
    let pres = new Prescription(0, 1, this.userID, this.formPrescription, this.formNote, this.formRef)
  }
}
