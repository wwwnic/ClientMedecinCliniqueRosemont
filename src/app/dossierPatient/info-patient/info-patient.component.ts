import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
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

  @Input() userID: number = 0;

  constructor( protected infoPatientService: InfoPatientService) {
  }

  ngOnInit(): void {
    this.getByPatientId();
  }

  getByPatientId() {
    if (this.userID !== 0) {
      this.infoPatientService.getById(this.userID)
      .subscribe((res: HttpResponse<IinfoPatient>) => {
        this.infoPatient = res.body ?? new infoPatient();
      });
    }
  }
}