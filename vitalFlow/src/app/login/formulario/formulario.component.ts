import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
    formUsers = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email:  new FormControl('', [Validators.required]),
    password:  new FormControl('', [Validators.required])
  });
  errorMessage: string = ''; 
  
  constructor(private http : HttpClient, private router : Router){}

  onSubmit(){

    if(!this.formUsers.valid){
      this.errorMessage = 'El formulario no está completo.';
      return;
    }

    const data = this.formUsers.value;
    console.log(data);
    this.http.post<any>(`${environment.apiUrl}/users`, data).subscribe(res=> {
      this.formUsers.reset();
      this.router.navigate(['/login']);
    });
  }
}
