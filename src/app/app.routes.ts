import { Routes } from '@angular/router';
import { Inicio } from './components/inicio/inicio';
import { Quiz } from './components/quiz/quiz';
import { Resultado } from './components/resultado/resultado';

export const routes: Routes = [
    {
        path: 'inicio',
        component: Inicio
    },
     {
        path: 'quiz',
        component: Quiz
    },
     {
        path: 'resultado',
        component: Resultado
    },
    {
// Rota padrão que redireciona para a página de autenticação
path: '', pathMatch: 'full', redirectTo: '/inicio'
}

];
