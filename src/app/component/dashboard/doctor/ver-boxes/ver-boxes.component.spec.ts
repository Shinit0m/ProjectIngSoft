import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerBoxesComponent } from './ver-boxes.component';

describe('VerBoxesComponent', () => {
  let component: VerBoxesComponent;
  let fixture: ComponentFixture<VerBoxesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerBoxesComponent]
    });
    fixture = TestBed.createComponent(VerBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
