import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromicionesComponent } from './promiciones.component';

describe('PromicionesComponent', () => {
  let component: PromicionesComponent;
  let fixture: ComponentFixture<PromicionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromicionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromicionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
