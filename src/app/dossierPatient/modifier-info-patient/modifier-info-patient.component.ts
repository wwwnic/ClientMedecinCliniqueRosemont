import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModifierInfoPatientService } from './modifier-info-patient.service';
import { Patient } from './modifier-info-patient.model';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-modifier-info-patient',
  templateUrl: './modifier-info-patient.component.html',
  styleUrls: ['./modifier-info-patient.component.css']
})
export class ModifierInfoPatientComponent {

  @Output() formulaireEstVisible = new EventEmitter<boolean>();;

  constructor(protected modifierInfoPatientService : ModifierInfoPatientService) { }


  cacherFormulaireDansDossier() {
    this.formulaireEstVisible.emit(false);
  }

  @Input() userID: number = 0;

  dateDeNaissance = ""
  allergie = ""
  sexe = ""

  envoyerInfoPatinent(){
    let sommeText = this.dateDeNaissance.length + this.allergie.length + this.sexe.length
    if(sommeText < 1) return
    this.cacherFormulaireDansDossier()
    let info = new Patient(this.userID,"","","","",this.dateDeNaissance,0,this.sexe,this.allergie);
    this.modifierInfoPatientService.AjouterInfoAuDossier(info)
      .subscribe((res: HttpResponse<any>) => {
        
      })   
  }
}
