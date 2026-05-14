<<<<<<< HEAD
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

interface Pergunta {
  id: number;
  pergunta: string;
  alternativas: string[];
  respostaCorreta: number;
}

@Component({
  selector: 'app-quiz',
  imports: [CommonModule],
  templateUrl: './quiz.html',
  styleUrl: './quiz.css',
})
export class Quiz {

  nome = signal<string>('');

  perguntas = signal<Pergunta[]>([]);
  respostas = signal<(number | null)[]>([]);
  finalizado = signal<boolean>(false);

  http = inject(HttpClient);

  constructor(private router: Router) { }

  ngOnInit() {

    this.nome.set(sessionStorage.getItem('nome') || 'Aluno');

    this.http.get<Pergunta[]>('/assets/quiz.json').subscribe({
      next: (dados) => {
        this.perguntas.set(dados);
        this.respostas.set(new Array(dados.length).fill(null));
      },
      error: (erro) => {
        console.error('Erro ao carregar o quiz:', erro);
      }
    });
  }

  responder(indicePergunta: number, indiceAlternativa: number) {
    if (this.finalizado()) {
      alert('a')
      
    }
    

    const respostasAtualizadas = [...this.respostas()];

    // Impede alterar a resposta depois de clicar
    if (respostasAtualizadas[indicePergunta] !== null) {
      return;
    }

    respostasAtualizadas[indicePergunta] = indiceAlternativa;
    this.respostas.set(respostasAtualizadas);
  }

  acertou(indicePergunta: number): boolean {
    const respostaUsuario = this.respostas()[indicePergunta];
    const pergunta = this.perguntas()[indicePergunta];

    return respostaUsuario === pergunta.respostaCorreta;
  }
  totalAcertos(): number {
    return this.perguntas().filter((pergunta, index) => {
      return this.respostas()[index] === pergunta.respostaCorreta;
    }).length;
  }

  todasRespondidas(): boolean {

    return this.respostas().every(resposta => resposta !== null);
  }

  conferirResultado() {
    if (!this.todasRespondidas()) {
      alert('Responda todas as perguntas antes de conferir o resultado.');
      return;
    }

    const acertos = this.totalAcertos();
    const total = this.perguntas().length;

    sessionStorage.setItem('resultado', String(acertos));
    sessionStorage.setItem('totalPerguntas', String(total));

    this.finalizado.set(true);

    this.router.navigate(['/inicio']);
  }


}
=======
import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz',
  imports: [],
  templateUrl: './quiz.html',
  styleUrl: './quiz.css',
})
export class Quiz {}
>>>>>>> 3f59c1e49920f99067e461b54ffa5d706d893ba2
