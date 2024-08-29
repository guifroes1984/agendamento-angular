import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TiposCompromissos } from '../modelos/tipos-compromissos';

@Injectable({
  providedIn: 'root'
})
export class TiposCompromissoService {

  baseUrl = "http://localhost:3000/tipos-compromissos";

  constructor(private http: HttpClient) { }

  getCompromissos(): Observable<TiposCompromissos[]> {
    return this.http.get<TiposCompromissos[]>(this.baseUrl);
  }

}
