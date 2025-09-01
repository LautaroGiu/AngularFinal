import { Routes } from '@angular/router';
import { Alumnos } from './alumnos/alumnos';
import { Cursos } from './cursos/cursos';
import { Inscripciones } from './inscripciones/inscripciones';
import { Login } from './login/login';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'alumnos', component: Alumnos },
  { path: 'cursos', component: Cursos },
  { path: 'inscripciones', component: Inscripciones },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];