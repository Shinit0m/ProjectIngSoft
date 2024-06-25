import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenRecetaComponent } from './gen-receta.component';

describe('GenRecetaComponent', () => {
  let component: GenRecetaComponent;
  let fixture: ComponentFixture<GenRecetaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenRecetaComponent]
    });
    fixture = TestBed.createComponent(GenRecetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
