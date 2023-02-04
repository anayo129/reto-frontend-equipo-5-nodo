import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmocionalComponent } from './emocional.component';

describe('EmocionalComponent', () => {
  let component: EmocionalComponent;
  let fixture: ComponentFixture<EmocionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmocionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmocionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
