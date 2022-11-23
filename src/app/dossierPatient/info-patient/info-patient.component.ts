import { Component, OnInit } from '@angular/core';
import { IinfoPatient } from "./info-patient.model";
import { infoPatient } from "./info-patient.model";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { InfoPatientService } from './info-patient.service';

@Component({
  selector: 'app-info-patient',
  templateUrl: './info-patient.component.html',
  styleUrls: ['./info-patient.component.css']
})
export class InfoPatientComponent implements OnInit  {
  infoPatient: IinfoPatient = new infoPatient();

  constructor( protected infoPatientService: InfoPatientService) {
  }

  ngOnInit(): void {
    this.infoPatientService.getById(1)
    .subscribe((res: HttpResponse<IinfoPatient>) => {
      this.infoPatient = res.body ?? new infoPatient();
    });
  }
}