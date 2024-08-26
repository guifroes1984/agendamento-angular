import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

import { ClienteService } from 'src/app/core/services/cliente.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagina-formulario-cliente',
  templateUrl: './pagina-formulario-cliente.component.html',
  styleUrls: ['./pagina-formulario-cliente.component.css']
})
export class PaginaFormularioClienteComponent implements OnInit {

  clienteForm: FormGroup;
  estaEditando: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
    private location: Location,
    private router: ActivatedRoute
  ) {

    this.clienteForm = this.formBuilder.group({
      id: [''],
      nome: ['', Validators.required],
      telefone: ['', Validators.required],
      dataNascimento: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    this.router.paramMap.subscribe( params =>{
      let clienteId = Number(params.get("id") ?? "0");

      if (clienteId) {
        this.carregarCliente(clienteId);
        this.estaEditando = true;
      }
    })
  }
  carregarCliente(clienteId: number) {
    this.clienteService.getClienteById(clienteId).subscribe({
      next: cliente => this.clienteForm.setValue(cliente),
      error: () => alert("Erro ao carregar um cliente")
    })
  }

  salvar() {
    if (this.clienteForm.valid) {
      if (this.estaEditando) {
        this.clienteService.atualizar(this.clienteForm.value).subscribe(
          {
            next: () => {
              this.location.back();
            },
            error: () => alert("Erro ao salvar o cliente")
          }
        );
      }
      else {
        this.clienteService.salvar(this.clienteForm.value).subscribe(
          {
            next: () => {
              this.location.back();
            },
            error: () => alert("Erro ao salvar o cliente")
          }
        )
      }
    }
  }

  cancela() {
    this.location.back();
  }

  get cNome() {
    return this.clienteForm.get("nome")
  }

  get cTelefone() {
    return this.clienteForm.get("telefone")
  }

  get cdataNascimento() {
    return this.clienteForm.get("dataNascimento")
  }

}
