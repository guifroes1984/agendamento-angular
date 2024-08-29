import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/core/modelos/Cliente';
import { Page } from 'src/app/core/modelos/page';
import { ClienteService } from 'src/app/core/services/cliente.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { ModalComponent } from 'src/app/shared/componentes/modal/modal.component';

@Component({
  selector: 'app-pagina-tabela-clientes',
  templateUrl: './pagina-tabela-clientes.component.html',
  styleUrls: ['./pagina-tabela-clientes.component.css']
})
export class PaginaTabelaClientesComponent implements OnInit {

  constructor(private clienteService: ClienteService,
              private toastService: ToastService
  ) { }

  clientePage: Page<Cliente> = {} as Page<Cliente>;
  page = 1;

  clientes: Cliente[] = [];
  nomeFiltro: string = "";
  clienteSelecionado !: Cliente;

  ngOnInit(): void {
    this.carregarClientes();
  }

  carregarClientes() {
    this.clienteService.getClientesPagina(this.nomeFiltro, this.page).subscribe({
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

  delete(cliente: Cliente, modalConfirma: ModalComponent) {
    this.clienteSelecionado = cliente;
    modalConfirma.open().then(confirm => {
      if (confirm) {
        this.clienteService.delete(cliente).subscribe({
          next: () => {
            this.toastService.show("Cliente removido com sucesso!", {classname: "bg-success text-light"});
            this.carregarClientes();
          },
          error: () => {
            this.toastService.show("Erro ao remover o cliente!", {classname: "bg-danger text-light"});

          }
        });
      }
    })
  }

}
