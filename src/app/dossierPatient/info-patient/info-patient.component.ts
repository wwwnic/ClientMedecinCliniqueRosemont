import { Component, OnInit, Input } from '@angular/core';
import { IinfoPatient } from "./info-patient.model";
import { infoPatient } from "./info-patient.model";
import { HttpResponse } from "@angular/common/http";
import { InfoPatientService } from './info-patient.service';

@Component({
  selector: 'app-info-patient',
  templateUrl: './info-patient.component.html',
  styleUrls: ['./info-patient.component.css']
})
export class InfoPatientComponent implements OnInit  {
  infoPatient: IinfoPatient = new infoPatient();

  @Input() userID: number = 0;

  constructor( protected infoPatientService: InfoPatientService) {}

  ngOnInit(): void {
    this.infoPatientService.getPatient(this.userID).subscribe(patient => {
      this.infoPatient = patient
    });
  }
}