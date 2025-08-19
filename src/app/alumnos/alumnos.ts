import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { Alumno } from '../shared/alumnos.model';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.html',
  imports: [FormsModule, CommonModule]
})
export class Alumnos{
  alumnos: Alumno[] = []

  constructor(private router: Router) {}

  borrarAlumno(id: number) {
    this.alumnos = this.alumnos.filter(al => al.id !== id);
  }

  modificarAlumno(id: number) {
    this.router.navigate(['/abm-alumnos', id]);
  }

  agregarAlumno() {
    this.router.navigate(['/abm-alumnos']);
  }
}