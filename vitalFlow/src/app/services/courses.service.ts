import { Injectable } from '@angular/core';
import { courses as coursesMock } from '../../assets/mocks/courses';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private courses = coursesMock;
  constructor( private http: HttpClient ) {}

  getCourseById(id: number) {
    return this.http.get(`http://localhost:3000/cursos/${id}`)
      .pipe(map(post => post));
  }

  getAllCourses() {
    return this.http.get('http://localhost:3000/cursos');
  }

}
