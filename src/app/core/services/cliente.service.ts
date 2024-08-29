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

  getClientesPagina(clienteNomeFiltro: string, page: number): Observable<HttpResponse<Cliente[]>> {
    let url = `${this.baseUrl}?nome_like=${clienteNomeFiltro}&_page=${page}&_limit=10&_sort=nome`;
    return this.http.get<Cliente[]>(url, {observe: 'response'});
  }

  getClientesComNomeContendo(clienteNomeFiltro: string): Observable<Cliente[]> {
    let url = `${this.baseUrl}?nome_like=${clienteNomeFiltro}&_limit=10`;
    return this.http.get<Cliente[]>(url);
  }

  delete(cliente: Cliente): Observable<void> {
    let url = `${this.baseUrl}/${cliente.id}`;
    return this.http.delete<void>(url);
  }

  salvar(cliente: Cliente): Observable<void> {
    return this.http.post<void>(this.baseUrl, cliente);
  }

  getClienteById(id: number): Observable<Cliente> {
    let url = `${this.baseUrl}/${id}`;
    return this.http.get<Cliente>(url);
  }

  atualizar(cliente: Cliente): Observable<void> {
    let url = `${this.baseUrl}/${cliente.id}`;
    return this.http.put<void>(url, cliente);
  }

}
