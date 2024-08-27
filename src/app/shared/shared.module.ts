import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './componentes/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { ToastComponent } from './componentes/toast/toast.component';
import { ModalComponent } from './componentes/modal/modal.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ToastComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    ToastComponent,
    ModalComponent
  ]
})
export class SharedModule { }
