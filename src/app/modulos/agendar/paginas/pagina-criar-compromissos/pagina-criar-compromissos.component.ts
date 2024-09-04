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
import { Compromisso } from 'src/app/core/modelos/compromiso';
import { ModalComponent } from 'src/app/shared/componentes/modal/modal.component';
import { CompromissoService } from 'src/app/core/services/compromisso.service';
import { ToastService } from 'src/app/core/services/toast.service';

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
  compromisso: Compromisso = {} as Compromisso;

  @ViewChild(FormularioCriarAgendamentoComponent)
  private formularioCriarAgendamentoComponente !: FormularioCriarAgendamentoComponent;

  //Componete Tempo
  tempoSelecionado !: Tempo;
  temposDisponiveis: Tempo[] = [];
  dataSelecionada !: Date;
  calendarioError: string = "";

  //Componente Calendário
  calendarioMes: Date = new Date();
  diasDisponiveis: number[] = [];
  tempoError: string = "";

  constructor(
    private areaService: AreaService,
    private tipoCompromissoService: TiposCompromissoService,
    private cilienteService: ClienteService,
    private profissionalService: ProfissionalService, 
    private compromissoService: CompromissoService, 
    private toastService: ToastService
  ) { }

  ngOnInit(): void {
    this.carregarAreas();
    this.carregarTiposCompromissos();
  }

  onTempoSelecionado(tempo: Tempo) {
    this.tempoSelecionado = tempo;
    this.tempoError = "";
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
    this.calendarioError = "";
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

  limpar() {
    this.formularioCriarAgendamentoComponente.limpaForm();
    this.temposDisponiveis = [];
    this.diasDisponiveis = [];
    this.compromisso = {} as Compromisso;
  }

  criarAgendamento(modalConfirma: ModalComponent) {
    this.formularioCriarAgendamentoComponente.submitted = true;
    this.verificaDataHoraErros();

    if (this.consultaValida()) {
      this.compromisso = this.criarCompromissoObjeto();
      modalConfirma.open({size: "lg"}).then(confirm => {
        if (confirm) {
          this.compromissoService.salvar(this.compromisso).subscribe({
            next: () => {
              this.toastService.show("Agendamento criado com sucesso!", {classname: "bg-success text-light"});
              this.limpar();
            },
            error: () => {
              this.toastService.show("Erro ao fazer o agendamento!", {classname: "bg-danger text-light"});
            }
          });
        }
        });
    }
  }

  private criarCompromissoObjeto(): Compromisso {
    let compromisso: Compromisso = {} as Compromisso;
    compromisso = {...this.formularioCriarAgendamentoComponente.Agendamentoform.value};
    compromisso.horarioInicio = this.tempoSelecionado.horarioInicio;
    compromisso.horarioFim = this.tempoSelecionado.horarioFim;
    compromisso.data = this.dataSelecionada;
    return compromisso;
  }

  private verificaDataHoraErros(): void {
    if (!this.dataSelecionada) {
      this.calendarioError = "Selecione uma data!"
    }
    if (!this.tempoSelecionado) {
      this.tempoError = "Selecione um horário!"
    }
  }

  private consultaValida(): boolean {
    return !!(this.formularioCriarAgendamentoComponente.Agendamentoform.valid && this.dataSelecionada && this.tempoSelecionado);
  }

}
