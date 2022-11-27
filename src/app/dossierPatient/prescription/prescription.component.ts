import { Component, OnInit, Input } from '@angular/core';
import { IPrescription } from './prescription.model';
import { PrescriptionService } from './prescription.service';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})

export class PrescriptionComponent implements OnInit  {

  @Input() userID: number = 0

  prescriptions : IPrescription[] = [];

  constructor( protected prescriptionService: PrescriptionService) {}

  ngOnInit(): void {
    this.prescriptionService.getPrescriptions(this.userID).subscribe(prescriptions => {
      this.prescriptions = prescriptions
    });
  }
}
