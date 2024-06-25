import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetasMedicasComponent } from './recetas-medicas.component';

describe('RecetasMedicasComponent', () => {
  let component: RecetasMedicasComponent;
  let fixture: ComponentFixture<RecetasMedicasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecetasMedicasComponent]
    });
    fixture = TestBed.createComponent(RecetasMedicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
