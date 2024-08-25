import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaTabelaClientesComponent } from './pagina-tabela-clientes.component';

describe('PaginaTabelaClientesComponent', () => {
  let component: PaginaTabelaClientesComponent;
  let fixture: ComponentFixture<PaginaTabelaClientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaTabelaClientesComponent]
    });
    fixture = TestBed.createComponent(PaginaTabelaClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
