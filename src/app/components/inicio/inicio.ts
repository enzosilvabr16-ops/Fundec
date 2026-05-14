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
<<<<<<< HEAD
    nome: new FormControl('')
=======
    nome : new FormControl('')
>>>>>>> 3f59c1e49920f99067e461b54ffa5d706d893ba2
  });

  //função chamada quando o formulário for submetido
  iniciar() {
<<<<<<< HEAD
    //salvar o nome da pessoa na sessão do navegador
    sessionStorage.setItem('nome', this.formulario.value.nome!);
    location.href = '/quiz';
  }
=======
   console.log(this.formulario.value);
}
>>>>>>> 3f59c1e49920f99067e461b54ffa5d706d893ba2
}
