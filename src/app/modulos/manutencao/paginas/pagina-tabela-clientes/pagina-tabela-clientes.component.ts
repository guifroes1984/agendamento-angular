import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/core/modelos/Cliente';
import { Page } from 'src/app/core/modelos/page';
import { ClienteService } from 'src/app/core/services/cliente.service';

@Component({
  selector: 'app-pagina-tabela-clientes',
  templateUrl: './pagina-tabela-clientes.component.html',
  styleUrls: ['./pagina-tabela-clientes.component.css']
})
export class PaginaTabelaClientesComponent implements OnInit {

  constructor(private clienteService: ClienteService) { }

  clientePage: Page<Cliente> = {} as Page<Cliente>;
  page = 1;

  nomeFiltro: string = "";

  ngOnInit(): void {
    this.carregarClientes();
  }

  carregarClientes() {
    this.clienteService.getClientes(this.nomeFiltro, this.page).subscribe({
      next: response => {
        this.clientePage.content = response.body;
        this.clientePage.numberOfElements = parseInt( response.headers.get("X-Total-Count") || "0");
      }
    });
  }

  pageChange() {
    this.carregarClientes();
  }

  filtroNome() {
    this.carregarClientes();
  }

  delete(cliente: Cliente) {
    this.clienteService.delete(cliente).subscribe({
      next: () => {
        this.carregarClientes();
      },
      error: () => {
        alert("Erro ao remover o cliente!");
      }
    });
  }

}
