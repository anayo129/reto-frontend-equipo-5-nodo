import { Component, OnInit } from '@angular/core';
import { GetTestService } from '../services/get-test.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit  {

  test: any;
  id: any;
  testForm:any = FormGroup;

  constructor(private route: ActivatedRoute  ,private router: Router, private getTestService : GetTestService, private formBuilder: FormBuilder) {
    
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });     
    // this.getTestService.getDataByIdCuerpo(parseInt(this.id)).subscribe(data => {
    //   this.test = data;
    // });
    this.getTestService.getData(this.id).subscribe(data => {
      this.test = data;
    }); 

    this.testForm = this.formBuilder.group({
      // nombre: ['', Validators.required],
      // edad: ['', Validators.required],
      pregunta1: ['', Validators.required],
      pregunta2: ['', Validators.required],
      pregunta3: ['', Validators.required],
      pregunta4: ['', Validators.required],
      pregunta5: ['', Validators.required],
      pregunta6: ['', Validators.required],
      pregunta7: ['', Validators.required],
      pregunta8: ['', Validators.required],
      pregunta9: ['', Validators.required],
      pregunta10: ['', Validators.required]
    });
      
  }


  submitForm() {
    if (this.testForm.valid) {
      console.log(this.testForm.value);
      alert('Formulario enviado correctamente');
      this.router.navigate(['/home']);
    } 
  }
}
