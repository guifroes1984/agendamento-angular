import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManutencaoRoutingModule } from './manutencao-routing.module';
import { PaginaAreaComponent } from './paginas/pagina-area/pagina-area.component';
import { PaginaProfissionalComponent } from './paginas/pagina-profissional/pagina-profissional.component';
import { PaginaTipoAtendimentoComponent } from './paginas/pagina-tipo-atendimento/pagina-tipo-atendimento.component';
import { PaginaClienteComponent } from './paginas/pagina-cliente/pagina-cliente.component';
import { PaginaUsuarioComponent } from './paginas/pagina-usuario/pagina-usuario.component';


@NgModule({
  declarations: [
    PaginaAreaComponent,
    PaginaProfissionalComponent,
    PaginaTipoAtendimentoComponent,
    PaginaClienteComponent,
    PaginaUsuarioComponent
  ],
  imports: [
    CommonModule,
    ManutencaoRoutingModule
  ]
})
export class ManutencaoModule { }
