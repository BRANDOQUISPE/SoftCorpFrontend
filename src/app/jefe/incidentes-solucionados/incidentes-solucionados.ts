import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-incidentes-solucionados',
  imports: [],
  templateUrl: './incidentes-solucionados.html',
  styleUrl: './incidentes-solucionados.scss'
})
export class IncidentesSolucionados {

  constructor(private router: Router) {}

  volver() {
    this.router.navigate(['/jefe']);
  }

}