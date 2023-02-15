import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Course } from 'src/assets/mocks/courses';
import { CoursesService } from '../services/courses.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css'],
})
export class PagosComponent {
  course: Course | undefined;
  id_curso: any;
  constructor(
    private readonly courseService: CoursesService,
    private readonly router: ActivatedRoute,
    private readonly cookieService: CookieService
  ) {}

  ngOnInit(): void {
    // console.log(this.courseService.getCourses());
    this.router.params.subscribe(params => {
      this.id_curso = params['id'];
    });
    this.router.queryParams.subscribe((params: Params) => {
      console.log(this.courseService.getCourse(params['courseId']));
      console.log(params);
      this.course = this.courseService.getCourse(params['courseId']);
    });

   



  }
}
