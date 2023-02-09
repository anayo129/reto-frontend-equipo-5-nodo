import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Course } from 'src/assets/mocks/courses';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css'],
})
export class PagosComponent {
  course: Course | undefined;
  constructor(
    private readonly courseService: CoursesService,
    private readonly router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // console.log(this.courseService.getCourses());

    this.router.queryParams.subscribe((params: Params) => {
      console.log(this.courseService.getCourse(params['courseId']));
      console.log(params);
      this.course = this.courseService.getCourse(params['courseId']);
    });
  }
}
