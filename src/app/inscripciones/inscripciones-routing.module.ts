import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Inscripciones } from './inscripciones';
import { AbmInscripciones } from './abm-inscripciones/abm-inscripciones';

const routes: Routes = [
  { path: '', component: Inscripciones },
  { path: 'abm', component: AbmInscripciones },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscripcionesRoutingModule { }
