import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelarHoraComponent } from './cancelar-hora.component';

describe('CancelarHoraComponent', () => {
  let component: CancelarHoraComponent;
  let fixture: ComponentFixture<CancelarHoraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CancelarHoraComponent]
    });
    fixture = TestBed.createComponent(CancelarHoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
