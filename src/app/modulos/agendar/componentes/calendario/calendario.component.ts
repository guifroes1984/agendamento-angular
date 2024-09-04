import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Data } from '@angular/router';
import { Dia } from './modelos/dia';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit, OnChanges {

  @Input()
  calendarioMes !: Date;

  @Input()
  diasDisponiveis: number[] = [];

  @Output()
  mudouMesEvent = new EventEmitter<Date>();

  @Input()
  calendarioError: string = "";

  @Output()
  dataSelecionadaEvent = new EventEmitter<Date>();

  dias: Dia[] = [];

  diaSelecionado: number = 0;

  ngOnInit(): void {
    this.carregarCalendario();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.hasOwnProperty("diasDisponiveis")) {
      this.diaSelecionado = 0;
      this.carregarCalendario();
    }
  }

  onDiaSelecionado(dia: number) {
    this.diaSelecionado = dia;
    this.dataSelecionadaEvent.emit(new Date(this.calendarioMes.getFullYear(), this.calendarioMes.getMonth(), this.diaSelecionado));
  }

  carregarCalendario() {
    this.dias = [
                 ... this.getDiasIniciaisBranco(this.calendarioMes.getFullYear(), this.calendarioMes.getMonth()),
                 ... this.getDiasNoMes(this.calendarioMes.getFullYear(), this.calendarioMes.getMonth())
                ];

    this.dias = [ ... this.dias,
                  ... this.getDiasFimBranco(this.calendarioMes.getFullYear(), this.calendarioMes.getMonth(), this.dias.length),
                ];

  }

  getDiasFimBranco(ano: number, mes: number, length: number) {
    let resto = 7 - length % 7;
    let dias: Dia[] = [];

    for(let i=0; i < resto; i++) {
      dias.push({} as Dia)
    }

    if(dias.length + length == 35) {
      for(let i = 0; i < 7; i++) {
        dias.push({} as Dia);
      }
    }

    return dias;
  }

  getDiasIniciaisBranco(ano: number, mes: number): Dia[] {
    let primeiroDia = this.getPrimeiroDiaMes(ano, mes);
    let diaVazio: number = 0;
    let diaSemana = primeiroDia.getDay();
    let dias: Dia[] = [];

    if (diaSemana == 0) {
      diaVazio = 6;
    } else {
      diaVazio = diaSemana - 1;
    }

    for(let i=0; i < diaVazio; i++){
      dias.push({} as Dia)
    }
    return dias;
  }

  getPrimeiroDiaMes(ano: number, mes: number): Date {
    return new Date(ano, mes, 1);
  }

  getDiasNoMes(ano: number, mes: number): Dia[] {
    let numeroDeDias: number = this.getNumeroDeDias(ano, mes);
    let dias: Dia[] = [];

    for(let i=1; i<= numeroDeDias; i++) {
      if(this.diasDisponiveis.includes(i)) {
        dias.push({dia:i, disponivel: true});
      } else {
        dias.push({dia:i, disponivel: false});
      }
    }
    return dias;
  }

  getNumeroDeDias(ano: number, mes: number): number {
    return new Date(ano, mes + 1, 0).getDate();
  }

  noProximoMes() {
    this.calendarioMes = new Date(this.calendarioMes);
    this.calendarioMes.setMonth(this.calendarioMes.getMonth()+1);
    this.calendarioMes.setDate(1);
    this.carregarCalendario();
    this.mudouMesEvent.emit(new Date(this.calendarioMes));
    this.diaSelecionado = 0;
  }

  noMesAnterior() {
    let dataAnterior = new Date(this.calendarioMes);
    dataAnterior.setMonth(dataAnterior.getMonth() - 1);
    dataAnterior.setDate(1);

    if (this.eDataAtualDoAno(dataAnterior)) {
      dataAnterior.setDate(new Date().getDate());
    }
    this.calendarioMes = dataAnterior;
    this.carregarCalendario();
    this.mudouMesEvent.emit(new Date(this.calendarioMes));
    this.diaSelecionado = 0;
  }

  showPreviousMonth(): boolean {
    return !this.eDataAtualDoAno(this.calendarioMes);
  }

  eDataNoFuturo = (date: Date): boolean => date >= new Date();
  eDataAtualDoAno = (date: Date): boolean => date.getMonth() == new Date().getMonth() && date.getFullYear() == new Date().getFullYear();

}
