import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './modulos/home/home.module';
import { ManutencaoModule } from './modulos/manutencao/manutencao.module';
import { AgendarModule } from './modulos/agendar/agendar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SharedModule,
    HomeModule,
    ManutencaoModule,
    AgendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
