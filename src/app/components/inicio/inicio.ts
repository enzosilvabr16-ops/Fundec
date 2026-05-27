import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {

  formulario = new FormGroup({
    nome: new FormControl('')
  });

  //função chamada quando o formulário for submetido
  iniciar() {
    //salvar o nome da pessoa na sessão do navegador
    sessionStorage.setItem('nome', this.formulario.value.nome!);
    location.href = '/quiz';
  }
}
//feito
