import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contrasena',
  templateUrl: './contrasena.component.html',
  styleUrls: ['./contrasena.component.css']
})
export class ContrasenaComponent {
  showLogin: boolean = false;
  showMensageEmail: boolean = true; 

  constructor(private router: Router) {}

  onClickBack() {
    this.router.navigate(['/login']); 
  
  }
}
