import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaCompromissosHojeComponent } from './pagina-compromissos-hoje.component';

describe('PaginaCompromissosHojeComponent', () => {
  let component: PaginaCompromissosHojeComponent;
  let fixture: ComponentFixture<PaginaCompromissosHojeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaCompromissosHojeComponent]
    });
    fixture = TestBed.createComponent(PaginaCompromissosHojeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
