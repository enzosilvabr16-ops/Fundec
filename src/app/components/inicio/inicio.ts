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
    nome : new FormControl('')
  });

  //função chamada quando o formulário for submetido
  iniciar() {
   console.log(this.formulario.value);
}
}
