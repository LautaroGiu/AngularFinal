import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Inscripciones } from "./inscripciones";
import { InscripcionesRoutingModule } from "./inscripciones-routing.module";
import { AbmInscripciones } from "./abm-inscripciones/abm-inscripciones";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InscripcionesRoutingModule,
    FormsModule,
    Inscripciones,
    AbmInscripciones
  ]
})
export class InscripcionesModule { }