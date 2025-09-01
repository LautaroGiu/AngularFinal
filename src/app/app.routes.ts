import { Routes } from '@angular/router';
import { Alumnos } from './alumnos/alumnos';
import { Cursos } from './cursos/cursos';
import { Inscripciones } from './inscripciones/inscripciones';

export const routes: Routes = [
  { path: 'alumnos', component: Alumnos },
  { path: 'cursos', component: Cursos },
  { path: 'inscripciones', component: Inscripciones },
  { path: '', redirectTo: '/alumnos', pathMatch: 'full' },
  { path: '**', redirectTo: '/alumnos' }
];