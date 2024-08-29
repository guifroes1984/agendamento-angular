import { NgModule } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AgendarRoutingModule } from './agendar-routing.module';
import { PaginaCompromissosHojeComponent } from './paginas/pagina-compromissos-hoje/pagina-compromissos-hoje.component';
import { PaginaCriarCompromissosComponent } from './paginas/pagina-criar-compromissos/pagina-criar-compromissos.component';
import { PaginaCancelarCompromissosComponent } from './paginas/pagina-cancelar-compromissos/pagina-cancelar-compromissos.component';
import { PaginaHistoricoClienteComponent } from './paginas/pagina-historico-cliente/pagina-historico-cliente.component';
import { PaginaDiasTrabalhoProfissionaisComponent } from './paginas/pagina-dias-trabalho-profissionais/pagina-dias-trabalho-profissionais.component';
import { FormularioCriarAgendamentoComponent } from './componentes/formulario-criar-agendamento/formulario-criar-agendamento.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PaginaCompromissosHojeComponent,
    PaginaCriarCompromissosComponent,
    PaginaCancelarCompromissosComponent,
    PaginaHistoricoClienteComponent,
    PaginaDiasTrabalhoProfissionaisComponent,
    FormularioCriarAgendamentoComponent
  ],
  imports: [
    CommonModule,
    AgendarRoutingModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [
    JsonPipe
  ]
})
export class AgendarModule { }
