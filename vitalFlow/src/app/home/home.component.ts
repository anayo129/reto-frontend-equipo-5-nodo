import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faBars, faBell, faMagnifyingGlass, faBrain, faChild, faPersonWalking, faSun, faFaceSmile } from '@fortawesome/free-solid-svg-icons';
// import { CookieService } from 'ngx-cookie-service';
import { GetCuerpoService } from '../services/get-cuerpo.service';
import { GetCursoService } from '../services/get-curso.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faBars = faBars;
  faBell = faBell;
  faBrain = faBrain;
  faChild = faChild;
  faPersonWalking = faPersonWalking; 
  faSun = faSun;  
  faFaceSmile = faFaceSmile;
  faMagnifyingGlass = faMagnifyingGlass;
  
  isUserLoggedIn: boolean = false;

  cuerpo: any;
  curso1: any;
  curso2: any;
  curso3: any;
  curso4: any;
  curso5: any;
  

  constructor( private router: Router, private getCuerpoService: GetCuerpoService, private getCursoService:GetCursoService) {}


  ngOnInit(): void {
    this.isUserLoggedIn = this.isLoggedIn();

    this.getCuerpoService.getData().subscribe(data => {
      this.cuerpo = data;
    });
    this.getCursos();
    
  }

  isLoggedIn(){
    const user = localStorage.getItem('user');
    return  user? true: false;
  }
  logout(){
    localStorage.removeItem('user');
    this.isUserLoggedIn = false;
  }

  getCursos(){
    this.getCursoService.getDataByIdCuerpo(1).subscribe(data => {
      this.curso1 = data;
    });
    this.getCursoService.getDataByIdCuerpo(2).subscribe(data => {
      this.curso2 = data;
    });
    this.getCursoService.getDataByIdCuerpo(3).subscribe(data => {
      this.curso3 = data;
    });
    this.getCursoService.getDataByIdCuerpo(4).subscribe(data => {
      this.curso4 = data;
    });
    this.getCursoService.getDataByIdCuerpo(5).subscribe(data => {
      this.curso5 = data;
    });
  }

    redirectCurso(id: string){
    // this.cookieService.set('id_curso', id);
    this.router.navigate(['/curso', id]);
  }

  redirectTest1(){
    this.router.navigate(['/test', 1]);
  }

  redirectTest2(){
    this.router.navigate(['/test', 2]);
  }
  redirectTest3(){
    this.router.navigate(['/test', 3]);
  }
  redirectTest4(){
    this.router.navigate(['/test', 4]);
  }
  redirectTest5(){
    this.router.navigate(['/test', 5]);
  }


}
