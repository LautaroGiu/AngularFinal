import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Cursos } from './cursos';
import { AbmCursos } from './abm-cursos/abm-cursos';

const routes: Routes = [
  { path: '', component: Cursos },
  { path: 'abm', component: AbmCursos },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
