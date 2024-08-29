import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OperatorFunction } from 'rxjs';
import { Area } from 'src/app/core/modelos/area';
import { Cliente } from 'src/app/core/modelos/Cliente';
import { Profissional } from 'src/app/core/modelos/profissionais';
import { TiposCompromissos } from 'src/app/core/modelos/tipos-compromissos';

@Component({
  selector: 'app-formulario-criar-agendamento',
  templateUrl: './formulario-criar-agendamento.component.html',
  styleUrls: ['./formulario-criar-agendamento.component.css']
})
export class FormularioCriarAgendamentoComponent {

  @Input()
  areas: Area[] = [];

  @Input()
  tiposCompromissos: TiposCompromissos[] = [];

  @Input()
  profissionais: Profissional[] = [];

  @Input()
  buscaClientes !: OperatorFunction<string, readonly Cliente[]>

  @Output()
  selecionadoAreaEvent = new EventEmitter<Area>;

  submitted: boolean = false;

  Agendamentoform: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.Agendamentoform = this.formBuilder.group({
      area: ['', Validators.required],
      profissional: [{value: '', disabled: true}, Validators.required],
      tiposCompromissos: ['', Validators.required],
      cliente: ['', Validators.required],
      comentarios: ['']
    });
   }

   /*Usado pelo componente typeahead*/
   formatador = (cliente: Cliente) => cliente.nome;

   OnAreaChanged() {
    this.selecionadoAreaEvent.emit(this.Agendamentoform.value['area']);
    this.Agendamentoform.controls["profissional"].enable();
   }

   getClienteSelecionado(): Cliente {
    return this.Agendamentoform.controls["cliente"].value;
   }

   get afArea() {return this.Agendamentoform.get('area');}

   get afProfissional() {return this.Agendamentoform.get('profissional');}

   get aftiposCompromissos() {return this.Agendamentoform.get('tiposCompromissos');}

   get afCliente() {return this.Agendamentoform.get('cliente');}

}
