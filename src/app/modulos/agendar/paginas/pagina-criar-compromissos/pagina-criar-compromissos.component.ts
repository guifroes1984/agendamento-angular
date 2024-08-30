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

  onProfissionalSelecionado(profissional: Profissional) {
    this.profissionalSelecionado = profissional;
    this.calendarioMes = new Date();
    this.carregarDiasDisponiveis();
  }

  naDataSelecionada(date: Date) {
    alert(date);
  }

  noMesAlterado(date: Date) {
    this.calendarioMes = date;
    this.carregarDiasDisponiveis();
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
    })
  }

  criarAgendamento() {
    this.formularioCriarAgendamentoComponente.submitted = true;
    alert(this.jsonPipe.transform(this.formularioCriarAgendamentoComponente.Agendamentoform.value));
  }

}
