import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-equipos-complicados',
  imports: [],
  templateUrl: './equipos-complicados.html',
  styleUrl: './equipos-complicados.scss'
})
export class EquiposComplicados {

  constructor(private router: Router) {}

  volver() {
    this.router.navigate(['/jefe']);
  }

}