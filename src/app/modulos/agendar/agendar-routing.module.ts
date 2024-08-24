import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaCompromissosHojeComponent } from './paginas/pagina-compromissos-hoje/pagina-compromissos-hoje.component';
import { PaginaCriarCompromissosComponent } from './paginas/pagina-criar-compromissos/pagina-criar-compromissos.component';
import { PaginaCancelarCompromissosComponent } from './paginas/pagina-cancelar-compromissos/pagina-cancelar-compromissos.component';
import { PaginaHistoricoClienteComponent } from './paginas/pagina-historico-cliente/pagina-historico-cliente.component';
import { PaginaDiasTrabalhoProfissionaisComponent } from './paginas/pagina-dias-trabalho-profissionais/pagina-dias-trabalho-profissionais.component';

const routes: Routes = [
  { path: 'compromissos-hoje', component: PaginaCompromissosHojeComponent },
  { path: 'criar-compromissos', component: PaginaCriarCompromissosComponent },
  { path: 'cancelar-compromissos', component: PaginaCancelarCompromissosComponent },
  { path: 'historico-cliente', component: PaginaHistoricoClienteComponent },
  { path: 'dias-trabalho-profissionais', component: PaginaDiasTrabalhoProfissionaisComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgendarRoutingModule { }
