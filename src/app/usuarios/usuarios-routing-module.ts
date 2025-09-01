import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbmUsuarios } from './abm-usuarios';

const routes: Routes = [
  { path: 'nuevo', component: AbmUsuarios },
  { path: 'editar/:id', component: AbmUsuarios }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule {}