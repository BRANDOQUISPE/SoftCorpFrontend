import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  imports: [],
  selector: 'app-dashboard',
  styleUrl: './dashboard.scss',
  templateUrl: './dashboard.html',
})
export class Dashboard {
  constructor(private router: Router){}
  seleccionarRol(rol: string){
    if(rol == 'jefe'){
      this.router.navigate(['./jefe']);
    }
    if(rol == 'tecnico'){
      this.router.navigate(['./tecnico']);
    }
    if(rol == 'personal'){
      this.router.navigate(['./personal']);
    }
  }
}
