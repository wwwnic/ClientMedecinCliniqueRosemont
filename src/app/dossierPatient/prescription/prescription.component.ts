import { HttpResponse } from '@angular/common/http';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IPrescription } from './prescription.model';
import { PrescriptionService } from './prescription.service';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})
export class PrescriptionComponent implements OnInit  {

  prescriptions: IPrescription[] = [];
  @Input() userID: number = 0;

  constructor( protected prescriptionService: PrescriptionService) {}

  ngOnInit(): void {
    this.getByPatientId();
  }

  getByPatientId() {
    if (this.userID !== 0) {
      this.prescriptionService.getByPatientId(this.userID)
      .subscribe((res: HttpResponse<IPrescription[]>) => {
        this.prescriptions = res.body ?? [];
      });
    }
  }
}
