import { Injectable } from '@angular/core';
import { Profissional } from '../modelos/profissionais';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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

}
