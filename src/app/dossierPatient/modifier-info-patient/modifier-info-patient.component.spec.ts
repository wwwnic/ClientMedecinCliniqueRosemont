import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierInfoPatientComponent } from './modifier-info-patient.component';

describe('ModifierInfoPatientComponent', () => {
  let component: ModifierInfoPatientComponent;
  let fixture: ComponentFixture<ModifierInfoPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierInfoPatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierInfoPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
