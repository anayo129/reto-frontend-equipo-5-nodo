import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { GetMaterialService } from '../services/get-material.service';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {
  material: any;

  constructor(private router: Router, private cookieService: CookieService, private getMaterialService:GetMaterialService){}

  ngOnInit() {
    const value: number = parseInt( this.cookieService.get('id_material'));
    console.log(value)
    this.getMaterialService.getData(value).subscribe(data => {
      this.material = data;
    });
   
}
}
