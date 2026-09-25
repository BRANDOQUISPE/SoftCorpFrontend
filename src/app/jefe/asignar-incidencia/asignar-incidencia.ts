import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asignar-incidencia',
  imports: [],
  templateUrl: './asignar-incidencia.html',
  styleUrl: './asignar-incidencia.scss'
})
export class AsignarIncidencia {

  mensaje = '';

  constructor(private router: Router) {}

  asignar() {
    this.mensaje = 'Incidente asignado correctamente.';
  }

  volver() {
    this.router.navigate(['/jefe']);
  }

}