import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  imports: [],
  selector: 'app-login',
  styleUrl: './login.scss',
  templateUrl: './login.html',
})
export class Login {
  constructor(private router: Router){}
  ingresar(){
    this.router.navigate(['/dashboard']);
  }
  
}
