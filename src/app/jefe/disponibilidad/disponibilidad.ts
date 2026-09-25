import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-disponibilidad',
  imports: [],
  templateUrl: './disponibilidad.html',
  styleUrl: './disponibilidad.scss'
})
export class Disponibilidad {

  constructor(private router: Router) {}

  volver() {
    this.router.navigate(['/jefe']);
  }

}