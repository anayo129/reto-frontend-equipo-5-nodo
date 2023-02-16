import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Course } from 'src/assets/mocks/courses';
import { CoursesService } from '../services/courses.service';
import { CookieService } from 'ngx-cookie-service';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';

declare var WidgetCheckout: any;
@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css'],
})
export class PagosComponent {
  formPagos = new FormGroup({
    nombreCurso: new FormControl('', [Validators.required]),
    precioCurso: new FormControl(0, [Validators.required]),
    nombreUsuario: new FormControl('', [Validators.required]),
    apellidoUsuario: new FormControl('', [Validators.required]),
    correoUsuario: new FormControl('', [Validators.required]),
  });
  usuario: any | undefined;
  course: any | undefined;
  constructor(
    private readonly courseService: CoursesService,
    private readonly activedRoute: ActivatedRoute,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router

  ) {}

  ngOnInit(): void {
    this. activedRoute.queryParams.subscribe((params: Params) => {
      console.log(this.courseService.getCourseById(params['courseId']));
      console.log(params);
      let userString = localStorage.getItem('user');
      if (userString) {
        this.usuario = JSON.parse(userString);
        this.formPagos.controls['nombreUsuario'].setValue(this.usuario.name);
        this.formPagos.controls['apellidoUsuario'].setValue(
          this.usuario.lastname
        );
        this.formPagos.controls['correoUsuario'].setValue(this.usuario.email);
      }
      this.courseService.getCourseById(params['courseId']).subscribe((data) => {
        this.course = data;
        this.formPagos.controls['nombreCurso'].setValue(this.course.nombre);
        this.formPagos.controls['precioCurso'].setValue(this.course.precio);
      });

    });

   
  }

  abrirCheckOut() {

    var checkout = new WidgetCheckout({
      currency: 'COP',
      amountInCents:   this.formPagos.controls['precioCurso'].value,
      reference: this.generarReferencia(5),
      publicKey: 'pub_test_Q5yDA9xoKdePzhSGeVe9HAez7HgGORGf',
      // redirectUrl: 'https://transaction-redirect.wompi.co/check', // Opcional

      customerData: {
        email: this.formPagos.controls['correoUsuario'].value,
        fullName: this.formPagos.controls['nombreUsuario'].value,
        phoneNumber: '3040777777',
        phoneNumberPrefix: '+57',
      },
    });
    checkout.open( (result: any) =>{
      var transaction = result.transaction;
      console.log(result);
      console.log('Transaction ID: ', transaction.id);
      console.log('Transaction object: ', transaction);
      this.router.navigate(['/material/1'])
    });
  }

  generarReferencia(longitud:number){
    const banco = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let aleatoria = "";
    for (let i = 0; i < longitud; i++) {
        aleatoria += banco.charAt(Math.floor(Math.random() * banco.length));
    }
    return aleatoria;
};
}
