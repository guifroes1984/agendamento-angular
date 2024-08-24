import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaTipoAtendimentoComponent } from './pagina-tipo-atendimento.component';

describe('PaginaTipoAtendimentoComponent', () => {
  let component: PaginaTipoAtendimentoComponent;
  let fixture: ComponentFixture<PaginaTipoAtendimentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaTipoAtendimentoComponent]
    });
    fixture = TestBed.createComponent(PaginaTipoAtendimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
