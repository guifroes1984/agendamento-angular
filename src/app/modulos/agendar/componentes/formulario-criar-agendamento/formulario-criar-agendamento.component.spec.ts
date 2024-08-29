import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCriarAgendamentoComponent } from './formulario-criar-agendamento.component';

describe('FormularioCriarAgendamentoComponent', () => {
  let component: FormularioCriarAgendamentoComponent;
  let fixture: ComponentFixture<FormularioCriarAgendamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioCriarAgendamentoComponent]
    });
    fixture = TestBed.createComponent(FormularioCriarAgendamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
