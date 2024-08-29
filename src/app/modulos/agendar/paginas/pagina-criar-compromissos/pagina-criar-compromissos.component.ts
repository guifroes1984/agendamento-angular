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

@Component({
  selector: 'app-pagina-criar-compromissos',
  templateUrl: './pagina-criar-compromissos.component.html',
  styleUrls: ['./pagina-criar-compromissos.component.css']
})
export class PaginaCriarCompromissosComponent implements OnInit {

  constructor(
    private areaService: AreaService,
    private tipoCompromissoService: TiposCompromissoService,
    private cilienteService: ClienteService,
    private jsonPipe: JsonPipe
  ) { }

  @ViewChild(FormularioCriarAgendamentoComponent)
  private formularioCriarAgendamentoComponente !: FormularioCriarAgendamentoComponent;

  areas: Area[] = [];
  tiposCompromissos: TiposCompromissos[] = [];
  profissionaisPorArea: Profissional[] = [];

  ngOnInit(): void {
    this.carregarAreas();
    this.carregarTiposCompromissos();
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
