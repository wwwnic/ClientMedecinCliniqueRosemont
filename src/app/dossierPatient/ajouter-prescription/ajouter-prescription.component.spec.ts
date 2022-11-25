import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterPrescriptionComponent } from './ajouter-prescription.component';

describe('AjouterPrescriptionComponent', () => {
  let component: AjouterPrescriptionComponent;
  let fixture: ComponentFixture<AjouterPrescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterPrescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterPrescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
