import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-incidencia',
  imports: [],
  templateUrl: './registrar-incidencia.html',
  styleUrl: './registrar-incidencia.scss'
})
export class RegistrarIncidencia {

  mensaje = '';

  constructor(private router: Router) {}

  registrar() {
    this.mensaje = 'Incidencia registrada correctamente.';
  }

  volver() {
    this.router.navigate(['/jefe']);
  }
}