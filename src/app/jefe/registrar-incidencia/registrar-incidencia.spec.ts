import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrarIncidencia } from './registrar-incidencia';

describe('RegistrarIncidencia', () => {
  let component: RegistrarIncidencia;
  let fixture: ComponentFixture<RegistrarIncidencia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarIncidencia],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrarIncidencia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
