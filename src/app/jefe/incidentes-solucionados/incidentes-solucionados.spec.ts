import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IncidentesSolucionados } from './incidentes-solucionados';

describe('IncidentesSolucionados', () => {
  let component: IncidentesSolucionados;
  let fixture: ComponentFixture<IncidentesSolucionados>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncidentesSolucionados],
    }).compileComponents();

    fixture = TestBed.createComponent(IncidentesSolucionados);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
