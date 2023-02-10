import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Material } from './material';

@Injectable({
  providedIn: 'root'
})


export class GetMaterialService {


  constructor(private http: HttpClient) { }

  getDataByIdCurso(idCurso: number) {
    return this.http.get<Material[]>('http://localhost:3000/material')
      .pipe(map(posts => posts.filter((post: Material) => post.id_curso === idCurso)));
  }
}
