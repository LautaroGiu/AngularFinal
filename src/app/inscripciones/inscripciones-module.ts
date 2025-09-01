import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscripcionesRoutingModule } from './inscripciones-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AbmInscripciones } from './abm-inscripciones/abm-inscripciones';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InscripcionesRoutingModule
  ]
})
export class InscripcionesModule {}