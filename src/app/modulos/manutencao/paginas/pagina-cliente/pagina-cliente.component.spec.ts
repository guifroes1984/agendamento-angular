import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaClienteComponent } from './pagina-cliente.component';

describe('PaginaClienteComponent', () => {
  let component: PaginaClienteComponent;
  let fixture: ComponentFixture<PaginaClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaClienteComponent]
    });
    fixture = TestBed.createComponent(PaginaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
