import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent{


  constructor( private router: Router, private cookieService: CookieService) {}

    redirectMaterial(id: any){
    this.cookieService.set('id_curso', id);
    this.router.navigate(['/curso']);
  }

}
