import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaAreaComponent } from './paginas/pagina-area/pagina-area.component';
import { PaginaProfissionalComponent } from './paginas/pagina-profissional/pagina-profissional.component';
import { PaginaTipoAtendimentoComponent } from './paginas/pagina-tipo-atendimento/pagina-tipo-atendimento.component';
import { PaginaClienteComponent } from './paginas/pagina-cliente/pagina-cliente.component';
import { PaginaUsuarioComponent } from './paginas/pagina-usuario/pagina-usuario.component';

const routes: Routes = [
  { path: 'area', component: PaginaAreaComponent },
  { path: 'profissional', component: PaginaProfissionalComponent },
  { path: 'tipo-atendimento', component: PaginaTipoAtendimentoComponent },
  { path: 'cliente', component: PaginaClienteComponent },
  { path: 'usuario', component: PaginaUsuarioComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManutencaoRoutingModule { }
