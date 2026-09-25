import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jefe',
  imports: [],
  templateUrl: './jefe.html',
  styleUrl: './jefe.scss'
})
export class Jefe {

  opcionActual = 0;

  constructor(private router: Router) {}

  siguiente() {
    this.opcionActual++;

    if (this.opcionActual > 5) {
      this.opcionActual = 0;
    }
  }

  anterior() {
    this.opcionActual--;

    if (this.opcionActual < 0) {
      this.opcionActual = 5;
    }
  }

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

  irRegistrarIncidencia() {
    this.router.navigate(['/jefe/registrar-incidencia']);
  }


  volverDashboard() {
    this.router.navigate(['/dashboard']);
  }
  irHistorialEquipos() {
  this.router.navigate(['/jefe/historial-equipos']);
}
}