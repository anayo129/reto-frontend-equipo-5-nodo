import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  showLoginn: boolean = true; 
  showForm: boolean = false;
  showMensageEmail: boolean = false; 
  
  constructor(private router: Router) {}

  onLoginClick() {
    this.router.navigate(['/formulario']);
    this.showLoginn = false; 
    this.showForm = true;
  }

  onLoginClickPassword() {
    this.router.navigate(['/password']);
    this.showLoginn = false; 
    this.showMensageEmail = true;
  }

}
