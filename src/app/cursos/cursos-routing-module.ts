import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbmCursos } from './abm-cursos/abm-cursos';

const routes: Routes = [
  { path: 'nuevo', component: AbmCursos },
  { path: 'editar/:id', component: AbmCursos }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule {}
