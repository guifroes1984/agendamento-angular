import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaHistoricoClienteComponent } from './pagina-historico-cliente.component';

describe('PaginaHistoricoClienteComponent', () => {
  let component: PaginaHistoricoClienteComponent;
  let fixture: ComponentFixture<PaginaHistoricoClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaHistoricoClienteComponent]
    });
    fixture = TestBed.createComponent(PaginaHistoricoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
