import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  getNomeReal(): string {
    return "Marcia Pereira";
  }

  eAdmin(): boolean {
    return true;
  }

  logout() {
    console.log("Sair");
  }

}
