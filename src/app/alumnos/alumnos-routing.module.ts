import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbmAlumnosComponent } from './abm-alumnos/abm-alumnos';

const routes: Routes = [
  { path: '', component: AbmAlumnosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRouting { }