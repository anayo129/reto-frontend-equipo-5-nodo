import { Component, OnInit} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { GetCursoService } from '../services/get-curso.service';
import { GetMaterialService } from '../services/get-material.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit  {

  cursos: any;
  material: any;
  id: any;

  constructor(private route: ActivatedRoute  ,private router: Router, private cookieService: CookieService, private getCursoService : GetCursoService, private getMaterialService: GetMaterialService) {
    
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.getCursoService.getData(this.id).subscribe(data => {
      this.cursos = data;
    });      
    this.getMaterialService.getDataByIdCurso(parseInt(this.id)).subscribe(data => {
      this.material = data;
    });
      // const value: number = parseInt( this.cookieService.get('id_curso'));
      
  }

  redirectMaterial(id: string){
    // this.cookieService.set('id_material', id);
    this.router.navigate(['/material', id]);
  }

  redirectPagos(id: string){
    this.router.navigate(['/pagos', id]);
  }

  
}

