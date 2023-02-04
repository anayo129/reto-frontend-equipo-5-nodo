import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergeticoComponent } from './energetico.component';

describe('EnergeticoComponent', () => {
  let component: EnergeticoComponent;
  let fixture: ComponentFixture<EnergeticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnergeticoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnergeticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
