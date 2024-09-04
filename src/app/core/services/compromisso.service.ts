import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Compromisso } from '../modelos/compromiso';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompromissoService {

  baseUrl = "http://localhost:3000/compromissos";

  constructor(private http: HttpClient) { }

  salvar(compromisso: Compromisso): Observable<Compromisso> {
    return this.http.post<Compromisso>(this.baseUrl, compromisso);
  }

}
