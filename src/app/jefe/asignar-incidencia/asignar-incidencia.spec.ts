import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsignarIncidencia } from './asignar-incidencia';

describe('AsignarIncidencia', () => {
  let component: AsignarIncidencia;
  let fixture: ComponentFixture<AsignarIncidencia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsignarIncidencia],
    }).compileComponents();

    fixture = TestBed.createComponent(AsignarIncidencia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
