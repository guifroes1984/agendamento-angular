import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendarRoutingModule } from './agendar-routing.module';
import { PaginaCompromissosHojeComponent } from './paginas/pagina-compromissos-hoje/pagina-compromissos-hoje.component';
import { PaginaCriarCompromissosComponent } from './paginas/pagina-criar-compromissos/pagina-criar-compromissos.component';
import { PaginaCancelarCompromissosComponent } from './paginas/pagina-cancelar-compromissos/pagina-cancelar-compromissos.component';
import { PaginaHistoricoClienteComponent } from './paginas/pagina-historico-cliente/pagina-historico-cliente.component';
import { PaginaDiasTrabalhoProfissionaisComponent } from './paginas/pagina-dias-trabalho-profissionais/pagina-dias-trabalho-profissionais.component';


@NgModule({
  declarations: [
    PaginaCompromissosHojeComponent,
    PaginaCriarCompromissosComponent,
    PaginaCancelarCompromissosComponent,
    PaginaHistoricoClienteComponent,
    PaginaDiasTrabalhoProfissionaisComponent
  ],
  imports: [
    CommonModule,
    AgendarRoutingModule
  ]
})
export class AgendarModule { }
