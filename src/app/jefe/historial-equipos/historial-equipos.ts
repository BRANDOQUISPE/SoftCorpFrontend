import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historial-equipos',
  imports: [],
  templateUrl: './historial-equipos.html',
  styleUrl: './historial-equipos.scss'
})
export class HistorialEquipos {

  mostrarHistorial = false;

  constructor(private router: Router) {}

  consultar() {
    this.mostrarHistorial = true;
  }

  volver() {
    this.router.navigate(['/jefe']);
  }
}