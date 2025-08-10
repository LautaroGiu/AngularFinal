import { Routes } from '@angular/router';
import { AbmAlumnosComponent } from './alumnos/abm-alumnos/abm-alumnos';
import { Cursos } from './cursos/cursos';
import { Inscripciones } from './inscripciones/inscripciones';

export const routes: Routes = [
  { path: 'cursos', component: Cursos },
  { path: 'inscripciones', component: Inscripciones },
  { path: '', redirectTo: '/alumnos', pathMatch: 'full' },
  { path: '**', redirectTo: '/alumnos' }
];