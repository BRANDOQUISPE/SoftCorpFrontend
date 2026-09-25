import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-jefe',
  styleUrl: './jefe.scss',
  templateUrl: './jefe.html',
})
export class Jefe {
  constructor(private router: Router) {}

  irDisponibilidad() {
    this.router.navigate(['/jefe/disponibilidad']);
  }

  irAsignarIncidencia() {
    this.router.navigate(['/jefe/asignar-incidencia']);
  }

  irEquiposComplicados() {
    this.router.navigate(['/jefe/equipos-complicados']);
  }

  irIncidentesSolucionados() {
    this.router.navigate(['/jefe/incidentes-solucionados']);
  }

  volverDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
