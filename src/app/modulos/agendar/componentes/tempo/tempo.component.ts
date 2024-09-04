import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Tempo } from './modelos/tempo';

@Component({
  selector: 'app-tempo',
  templateUrl: './tempo.component.html',
  styleUrls: ['./tempo.component.css']
})
export class TempoComponent implements OnInit, OnChanges {

  @Input()
  tempos: Tempo[] = [];

  @Input()
  tempoError: string = "";

  @Output()
  tempoSelecionadoEvent = new EventEmitter<Tempo>();

  horarioSelecionado: Tempo = {} as Tempo;

  ngOnInit(): void {
    this.reniciarTempos();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.horarioSelecionado = {} as Tempo;

    if(this.tempos.length === 0) {
      this.reniciarTempos();
    }
  }

  reniciarTempos() {
    this.tempos = [
      { horarioInicio: "08:00:00", horarioFim: "08:30:00", disponivel: false },
      { horarioInicio: "08:30:00", horarioFim: "09:00:00", disponivel: false },
      { horarioInicio: "09:00:00", horarioFim: "09:30:00", disponivel: false },
      { horarioInicio: "09:30:00", horarioFim: "10:00:00", disponivel: false },
      { horarioInicio: "10:00:00", horarioFim: "10:30:00", disponivel: false },
      { horarioInicio: "10:30:00", horarioFim: "11:00:00", disponivel: false },
      { horarioInicio: "11:00:00", horarioFim: "11:30:00", disponivel: false },
      { horarioInicio: "11:30:00", horarioFim: "12:00:00", disponivel: false },
      { horarioInicio: "14:00:00", horarioFim: "14:30:00", disponivel: false },
      { horarioInicio: "14:30:00", horarioFim: "15:00:00", disponivel: false },
      { horarioInicio: "15:00:00", horarioFim: "15:30:00", disponivel: false },
      { horarioInicio: "15:30:00", horarioFim: "16:00:00", disponivel: false },
      { horarioInicio: "16:00:00", horarioFim: "16:30:00", disponivel: false },
      { horarioInicio: "16:30:00", horarioFim: "17:00:00", disponivel: false },
      { horarioInicio: "17:00:00", horarioFim: "17:30:00", disponivel: false },
      { horarioInicio: "17:30:00", horarioFim: "18:00:00", disponivel: false }
    ];
  }

  onHorarioSelecionado(horarios: Tempo) {
    this.horarioSelecionado = horarios;
    this.tempoSelecionadoEvent.emit(this.horarioSelecionado);
  }

}
