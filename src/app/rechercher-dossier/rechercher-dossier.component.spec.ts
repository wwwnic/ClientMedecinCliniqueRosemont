import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercherDossierComponent } from './rechercher-dossier.component';

describe('RechercherDossierComponent', () => {
  let component: RechercherDossierComponent;
  let fixture: ComponentFixture<RechercherDossierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercherDossierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechercherDossierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
