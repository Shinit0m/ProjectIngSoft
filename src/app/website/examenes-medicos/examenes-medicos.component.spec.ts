import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenesMedicosComponent } from './examenes-medicos.component';

describe('ExamenesMedicosComponent', () => {
  let component: ExamenesMedicosComponent;
  let fixture: ComponentFixture<ExamenesMedicosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExamenesMedicosComponent]
    });
    fixture = TestBed.createComponent(ExamenesMedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
