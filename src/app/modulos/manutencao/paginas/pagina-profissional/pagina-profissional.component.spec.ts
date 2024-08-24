import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaProfissionalComponent } from './pagina-profissional.component';

describe('PaginaProfissionalComponent', () => {
  let component: PaginaProfissionalComponent;
  let fixture: ComponentFixture<PaginaProfissionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaProfissionalComponent]
    });
    fixture = TestBed.createComponent(PaginaProfissionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
