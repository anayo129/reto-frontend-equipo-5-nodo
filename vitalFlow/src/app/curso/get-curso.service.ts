import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetCursoService {

  constructor( private http: HttpClient ) { }

  getData(id: number) {
    return this.http.get(`http://localhost:3000/cursos/${id}`)
      .pipe(map(post => post));
  }
}
