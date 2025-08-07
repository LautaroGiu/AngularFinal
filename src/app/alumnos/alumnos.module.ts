import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbmAlumnosComponent } from './abm-alumnos/abm-alumnos';
import { AlumnosRouting } from './alumnos-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AlumnosRouting,
    FormsModule,
    AbmAlumnosComponent,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class AlumnosModule { }