import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './componentes/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { ToastComponent } from './componentes/toast/toast.component';
import { ModalComponent } from './componentes/modal/modal.component';
import { TempoPipe } from './pipes/tempo.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    ToastComponent,
    ModalComponent,
    TempoPipe
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    ToastComponent,
    ModalComponent,
    TempoPipe
  ]
})
export class SharedModule { }
