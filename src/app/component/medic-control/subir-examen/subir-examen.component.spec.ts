import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirExamenComponent } from './subir-examen.component';

describe('SubirExamenComponent', () => {
  let component: SubirExamenComponent;
  let fixture: ComponentFixture<SubirExamenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubirExamenComponent]
    });
    fixture = TestBed.createComponent(SubirExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
