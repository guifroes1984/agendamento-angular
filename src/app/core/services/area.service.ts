import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Area } from '../modelos/area';
import { Profissional } from '../modelos/profissionais';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  baseUrl = "http://localhost:3000/areas";

  constructor(private http: HttpClient) { }

  getAreas(): Observable<Area[]> {
    return this.http.get<Area[]>(this.baseUrl);
  }

  getProfissionaisPorArea(area: Area): Observable<Profissional[]> {
    let url = `${this.baseUrl}/${area.id}/profissionais`;
    return this.http.get<Profissional[]>(url);
  }

  getProfissionaisAtivosPorArea(area: Area): Observable<Profissional[]> {
    let url = `${this.baseUrl}/${area.id}/profissionais?ativo=true`;
    return this.http.get<Profissional[]>(url);
  }

}
