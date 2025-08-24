import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app';
import { AlumnosModule } from './alumnos/alumnos.module';
import { CursosModule } from './cursos/cursos.module';
import { InscripcionesModule } from './inscripciones/inscripciones.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AbmAlumnosComponent } from './alumnos/abm-alumnos/abm-alumnos';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { AlumnosService } from './services/alumnos';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Navbar } from './navbar/navbar';
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlumnosModule,
    CursosModule,
    InscripcionesModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    RouterModule,
    HttpClientModule,
    Navbar, 
    AppComponent,
    AbmAlumnosComponent,
    FormsModule
    ],
  providers: [],
  bootstrap: [],
})
export class AppModule { }
