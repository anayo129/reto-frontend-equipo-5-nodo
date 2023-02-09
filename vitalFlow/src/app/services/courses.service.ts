import { Injectable } from '@angular/core';
import { courses as coursesMock } from '../../assets/mocks/courses';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private courses = coursesMock;
  constructor() {}

  getCourses() {
    return this.courses;
  }

  getCourse(id:string) {
    return this.courses.find((course) => course.id === id);
  }
}
