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

  afficherFormulaire = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.id = params['id'];
      }
    );
  }

  cacherFormulaire($event: boolean){
    this.afficherFormulaire = $event
  }

  voirFomulaire(): void {
    this.afficherFormulaire = true;
  }

}