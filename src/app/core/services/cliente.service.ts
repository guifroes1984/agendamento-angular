import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../modelos/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl = "http://localhost:3000/clientes";

  constructor(private http: HttpClient) { }

  getClientes(clienteNomeFiltro: string, page: number): Observable<HttpResponse<Cliente[]>> {
    let url = `${this.baseUrl}?nome_like=${clienteNomeFiltro}&_page=${page}&_limit=10&_sort=nome`;
    return this.http.get<Cliente[]>(url, {observe: 'response'});
  }

  delete(cliente: Cliente): Observable<void> {
    let url = `${this.baseUrl}/${cliente.id}`;
    return this.http.delete<void>(url);
  }


}
