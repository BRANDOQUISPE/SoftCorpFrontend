import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EquiposComplicados } from './equipos-complicados';

describe('EquiposComplicados', () => {
  let component: EquiposComplicados;
  let fixture: ComponentFixture<EquiposComplicados>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquiposComplicados],
    }).compileComponents();

    fixture = TestBed.createComponent(EquiposComplicados);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
