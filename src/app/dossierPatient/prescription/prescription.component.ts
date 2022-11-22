import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IPrescription } from './prescription.model';
import { PrescriptionService } from './prescription.service';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})
export class PrescriptionComponent implements OnInit {

  prescriptions: IPrescription[] = [];

  constructor( protected prescriptionService: PrescriptionService) {}
  
  ngOnInit(): void {
    this.prescriptionService.getByPatientId(1)
    .subscribe((res: HttpResponse<IPrescription[]>) => {
      this.prescriptions = res.body ?? [];
    });
  }
}
