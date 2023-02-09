import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Curso } from '../interface/curso';

@Injectable({
  providedIn: 'root'
})
export class GetCursoService {

  constructor( private http: HttpClient ) { }

  getData(id: number) {
    return this.http.get(`http://localhost:3000/cursos/${id}`)
      .pipe(map(post => post));
  }

  getDataByIdCuerpo(idCuerpo: number) {
    return this.http.get<Curso[]>('http://localhost:3000/cursos')
      .pipe(map(posts => posts.filter((post: Curso) => post.id_cuerpo === idCuerpo)));
  }
}
