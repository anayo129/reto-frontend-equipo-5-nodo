import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { GetCuerpoService } from '../services/get-cuerpo.service';
import { GetCursoService } from '../services/get-curso.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent  implements OnInit{
  cuerpo: any;
  curso1: any;
  curso2: any;
  curso3: any;
  curso4: any;
  curso5: any;

  constructor( private router: Router, private cookieService: CookieService, private getCuerpoService: GetCuerpoService, private getCursoService:GetCursoService) {}

  ngOnInit() {
    this.getCuerpoService.getData().subscribe(data => {
      this.cuerpo = data;
    });
    this.getCursos();
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

    redirectCurso(id: any){
    this.cookieService.set('id_curso', id);
    this.router.navigate(['/curso']);
  }

}
