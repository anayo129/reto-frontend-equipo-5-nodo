import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute } from '@angular/router';
import { GetMaterialService } from '../services/get-material.service';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {
  material: any;
  id: any;

  constructor(private route: ActivatedRoute, private cookieService: CookieService, private getMaterialService:GetMaterialService){}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    // const value: number = parseInt( this.cookieService.get('id_material'));
    this.getMaterialService.getData(parseInt(this.id)).subscribe(data => {
      this.material = data;
    });
   
}
}
