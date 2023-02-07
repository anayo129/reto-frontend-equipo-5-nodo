import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-index',
  templateUrl: './navbar-index.component.html',
  styleUrls: ['./navbar-index.component.css']
})
export class NavbarIndexComponent {
  showLogin: boolean = false; 
  showHeader: boolean = true;
  showIndex: boolean = true; 
  
  constructor(private router: Router) {}

  onLoginClick() {
    this.router.navigate(['/login']);
    this.showHeader = false;
    this.showLogin = true; 
    this.showIndex = false; 
  }
}
