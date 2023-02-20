import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-promiciones',
  templateUrl: './promiciones.component.html',
  styleUrls: ['./promiciones.component.css']
})
export class PromicionesComponent {

  constructor(private router: Router){}

  redirectAromaterapia(){
    this.router.navigate(['/curso', 8]);
  }

  redirectYoga(){
    this.router.navigate(['/curso', 4]);
  }

  redirectMeditacion(){
    this.router.navigate(['/curso', 11]);
  }
}
