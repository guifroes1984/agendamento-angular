import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaFormularioClienteComponent } from './pagina-formulario-cliente.component';

describe('PaginaFormularioClienteComponent', () => {
  let component: PaginaFormularioClienteComponent;
  let fixture: ComponentFixture<PaginaFormularioClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaFormularioClienteComponent]
    });
    fixture = TestBed.createComponent(PaginaFormularioClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
