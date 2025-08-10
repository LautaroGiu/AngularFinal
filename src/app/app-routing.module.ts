import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbmAlumnosComponent } from './alumnos/abm-alumnos/abm-alumnos';
import { Cursos } from './cursos/cursos';
import { Inscripciones } from './inscripciones/inscripciones';

const routes: Routes = [
  { path: 'alumnos', component: AbmAlumnosComponent },
  { path: 'cursos', component: Cursos },
  { path: 'inscripciones', component: Inscripciones },
  { path: '', redirectTo: '/alumnos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}