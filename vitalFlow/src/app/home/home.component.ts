import { Component, OnInit } from '@angular/core';
import { faBars, faBell, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faBars = faBars;
  faBell = faBell;
  faMagnifyingGlass = faMagnifyingGlass;
  isUserLoggedIn: boolean = false;

  ngOnInit(): void {
    this.isUserLoggedIn = this.isLoggedIn();
    
  }

  isLoggedIn(){
    const user = localStorage.getItem('user');
    return  user? true: false;
  }
  logout(){
    localStorage.removeItem('user');
    this.isUserLoggedIn = false;
  }
}
