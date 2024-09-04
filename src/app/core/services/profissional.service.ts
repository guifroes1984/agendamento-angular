import { Injectable } from '@angular/core';
import { Profissional } from '../modelos/profissionais';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Tempo } from 'src/app/modulos/agendar/componentes/tempo/modelos/tempo';
import { Time } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ProfissionalService {

  baseUrl = "http://localhost:3000/profissionais";

  constructor(private http: HttpClient) { }

  getDiasDisponiveis(profissional: Profissional, calendario: Date): Observable<number[]> {
    let mes = calendario.getMonth() + 1;
    let ano = calendario.getFullYear();
    let url = `${this.baseUrl}/${profissional.id}/dias-disponiveis?year=${ano}&month=${ano}`;

    //return this.http.get<number[]>(url);

    return of ([Math.floor(Math.random() * 20) + 1,
                Math.floor(Math.random() * 20) + 1,
                Math.floor(Math.random() * 20) + 1,
                Math.floor(Math.random() * 20) + 1,
                Math.floor(Math.random() * 20) + 1
    ]);
  }

  getTemposDisponiveis(profissional: Profissional, dataSelecionada: Date): Observable<Tempo[]> {
    let data = dataSelecionada;
    let url = `${this.baseUrl}/${profissional.id}/tempos-disponiveis?date=${data}`;

    //return this.http.get<Time[]>(url);

    return of ([
      { horarioInicio: "08:00:00", horarioFim: "08:30:00", disponivel: Math.random() >= 0.5 },
      { horarioInicio: "08:30:00", horarioFim: "09:00:00", disponivel: Math.random() >= 0.5 },
      { horarioInicio: "09:00:00", horarioFim: "09:30:00", disponivel: Math.random() >= 0.5 },
      { horarioInicio: "09:30:00", horarioFim: "10:00:00", disponivel: Math.random() >= 0.5 },
      { horarioInicio: "10:00:00", horarioFim: "10:30:00", disponivel: Math.random() >= 0.5 },
      { horarioInicio: "10:30:00", horarioFim: "11:00:00", disponivel: Math.random() >= 0.5 },
      { horarioInicio: "11:00:00", horarioFim: "11:30:00", disponivel: Math.random() >= 0.5 },
      { horarioInicio: "11:30:00", horarioFim: "12:00:00", disponivel: Math.random() >= 0.5 },
      { horarioInicio: "14:00:00", horarioFim: "14:30:00", disponivel: Math.random() >= 0.5 },
      { horarioInicio: "14:30:00", horarioFim: "15:00:00", disponivel: Math.random() >= 0.5 },
      { horarioInicio: "15:00:00", horarioFim: "15:30:00", disponivel: Math.random() >= 0.5 },
      { horarioInicio: "15:30:00", horarioFim: "16:00:00", disponivel: Math.random() >= 0.5 },
      { horarioInicio: "16:00:00", horarioFim: "16:30:00", disponivel: Math.random() >= 0.5 },
      { horarioInicio: "16:30:00", horarioFim: "17:00:00", disponivel: Math.random() >= 0.5 },
      { horarioInicio: "17:00:00", horarioFim: "17:30:00", disponivel: Math.random() >= 0.5 },
      { horarioInicio: "17:30:00", horarioFim: "18:00:00", disponivel: Math.random() >= 0.5 }
    ]);
  }
}
