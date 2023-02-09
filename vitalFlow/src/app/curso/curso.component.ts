import { Component, OnInit} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { GetCursoService } from '../services/get-curso.service';
import { GetMaterialService } from '../services/get-material.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit  {

  cursos: any;
  material: any;

  constructor( private cookieService: CookieService, private getCursoService : GetCursoService, private getMaterialService: GetMaterialService) {}

  ngOnInit() {
      // const value: string = this.cookieService.get('id_curso');
      const value: number = parseInt( this.cookieService.get('id_curso'));
      this.getCursoService.getData(value).subscribe(data => {
        this.cursos = data;
      });
      this.getMaterialService.getDataByIdCurso(value).subscribe(data => {
        this.material = data;
      });
  }

  
}

