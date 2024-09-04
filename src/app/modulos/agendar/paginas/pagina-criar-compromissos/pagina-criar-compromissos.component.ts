import { Component, OnInit, ViewChild } from '@angular/core';
import { Area } from 'src/app/core/modelos/area';
import { Profissional } from 'src/app/core/modelos/profissionais';
import { AreaService } from 'src/app/core/services/area.service';
import { TiposCompromissos } from '../../../../core/modelos/tipos-compromissos';
import { TiposCompromissoService } from 'src/app/core/services/tipos-compromisso.service';
import { ClienteService } from 'src/app/core/services/cliente.service';
import { debounceTime, distinctUntilChanged, filter, Observable, switchMap } from 'rxjs';
import { Cliente } from 'src/app/core/modelos/Cliente';
import { FormularioCriarAgendamentoComponent } from '../../componentes/formulario-criar-agendamento/formulario-criar-agendamento.component';
import { JsonPipe } from '@angular/common';
import { ProfissionalService } from 'src/app/core/services/profissional.service';
import { Tempo } from '../../componentes/tempo/modelos/tempo';
import { Compromisso } from 'src/app/core/modelos/comprommiso';

@Component({
  selector: 'app-pagina-criar-compromissos',
  templateUrl: './pagina-criar-compromissos.component.html',
  styleUrls: ['./pagina-criar-compromissos.component.css']
})
export class PaginaCriarCompromissosComponent implements OnInit {

  areas: Area[] = [];
  tiposCompromissos: TiposCompromissos[] = [];
  profissionaisPorArea: Profissional[] = [];
  profissionalSelecionado: Profissional = {} as Profissional;

  @ViewChild(FormularioCriarAgendamentoComponent)
  private formularioCriarAgendamentoComponente !: FormularioCriarAgendamentoComponent;

  //Componete Tempo
  tempoSelecionado !: Tempo;
  temposDisponiveis: Tempo[] = [];
  dataSelecionada !: Date;

  //Componente Calendário
  calendarioMes: Date = new Date();
  diasDisponiveis: number[] = [];

  constructor(
    private areaService: AreaService,
    private tipoCompromissoService: TiposCompromissoService,
    private cilienteService: ClienteService,
    private profissionalService: ProfissionalService,
    private jsonPipe: JsonPipe
  ) { }

  ngOnInit(): void {
    this.carregarAreas();
    this.carregarTiposCompromissos();
  }

  onTempoSelecionado(tempo: Tempo) {
    this.tempoSelecionado = tempo;
  }

  onProfissionalSelecionado(profissional: Profissional) {
    this.profissionalSelecionado = profissional;
    this.diasDisponiveis = [];
    this.temposDisponiveis = [];
    this.calendarioMes = new Date();
    this.carregarDiasDisponiveis();
  }

  naDataSelecionada(data: Date) {
    this.dataSelecionada = data;
    this.carregarTemposDisponiveis();
  }

  noMesAlterado(date: Date) {
    this.calendarioMes = date;
    this.temposDisponiveis = [];
    this.carregarDiasDisponiveis();
  }

  carregarTemposDisponiveis() {
    this.profissionalService.getTemposDisponiveis(this.profissionalSelecionado, this.dataSelecionada).subscribe({
      next: tempos => this.temposDisponiveis = tempos
    })
  }

  carregarDiasDisponiveis() {
    this.profissionalService.getDiasDisponiveis(this.profissionalSelecionado, this.calendarioMes).subscribe({
      next: dias => this.diasDisponiveis = dias
    })
  }

  buscaClientes = (texto: Observable<string>): Observable<Cliente[]> => {
    return texto.pipe(
			debounceTime(200),
			distinctUntilChanged(),
      filter(term => term.length >= 2),
			switchMap(term => this.cilienteService.getClientesComNomeContendo(term))
		);
  }

  carregarTiposCompromissos() {
    this.tipoCompromissoService.getCompromissos().subscribe(
      {
        next: tipos => this.tiposCompromissos = tipos
      }
    )
  }

  carregarAreas() {
    this.areaService.getAreas().subscribe({
      next: areas => this.areas = areas
    })
  }

  onSelectedArea(area: Area) {
    this.areaService.getProfissionaisAtivosPorArea(area).subscribe({
      next: profissionais => {
        this.profissionaisPorArea = profissionais;
      }
    });
    this.temposDisponiveis = [];
    this.diasDisponiveis = [];
  }

  criarAgendamento() {
    this.formularioCriarAgendamentoComponente.submitted = true;
    let compromisso: Compromisso = {} as Compromisso;

    compromisso = {...this.formularioCriarAgendamentoComponente.Agendamentoform.value };
    compromisso.horarioInicio = this.tempoSelecionado.horarioInicio;
    compromisso.horarioFim = this.tempoSelecionado.horarioFim;
    compromisso.data = this.dataSelecionada;

    console.log(this.jsonPipe.transform(compromisso));
  }

}
