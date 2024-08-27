import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ManutencaoRoutingModule } from './manutencao-routing.module';
import { PaginaAreaComponent } from './paginas/pagina-area/pagina-area.component';
import { PaginaProfissionalComponent } from './paginas/pagina-profissional/pagina-profissional.component';
import { PaginaTipoAtendimentoComponent } from './paginas/pagina-tipo-atendimento/pagina-tipo-atendimento.component';
import { PaginaUsuarioComponent } from './paginas/pagina-usuario/pagina-usuario.component';
import { PaginaTabelaClientesComponent } from './paginas/pagina-tabela-clientes/pagina-tabela-clientes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginaFormularioClienteComponent } from './paginas/pagina-formulario-cliente/pagina-formulario-cliente.component';
import { SharedModule } from "../../shared/shared.module";



@NgModule({
  declarations: [
    PaginaAreaComponent,
    PaginaProfissionalComponent,
    PaginaTipoAtendimentoComponent,
    PaginaUsuarioComponent,
    PaginaTabelaClientesComponent,
    PaginaFormularioClienteComponent,
  ],
  imports: [
    CommonModule,
    ManutencaoRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    SharedModule
]
})
export class ManutencaoModule { }
