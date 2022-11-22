import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoPatientComponent } from './info-patient.component';

describe('InfoPatientComponent', () => {
  let component: InfoPatientComponent;
  let fixture: ComponentFixture<InfoPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoPatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
