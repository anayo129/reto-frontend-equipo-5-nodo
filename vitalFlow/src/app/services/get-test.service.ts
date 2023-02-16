import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Test } from '../interface/test';

@Injectable({
  providedIn: 'root'
})
export class GetTestService {

  constructor(private http: HttpClient) { }

  getData(id: number) {
    return this.http.get(`http://localhost:3000/test/${id}`)
      .pipe(map(post => post));
  }

  getDataByIdCuerpo(idCuerpo: number) {
    return this.http.get<Test[]>('http://localhost:3000/test')
      .pipe(map(posts => posts.filter((post: Test) => post.id_cuerpo === idCuerpo)));
  }
}
