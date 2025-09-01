import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OnInit } from "@angular/core";

interface Alumno {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  dni: string;
  promedio: number;
}

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.html',
  styleUrls: ['./alumnos.css'],
  imports: [FormsModule, CommonModule],
  standalone: true
})
export class Alumnos implements OnInit{
alumnos: Alumno[] = [];
  
  alumnoForm: Alumno = { id: 0, nombre: '', apellido: '', email: '', dni: '', promedio: 0 };
  editando: boolean = false;

  ngOnInit() {
    const alumnosGuardados = localStorage.getItem('alumnos');
    if (alumnosGuardados) {
      this.alumnos = JSON.parse(alumnosGuardados);
    }
  }

  guardarAlumno() {
    if (this.editando) {
      // Modificar alumno existente
      const index = this.alumnos.findIndex(a => a.id === this.alumnoForm.id);
      if (index !== -1) this.alumnos[index] = { ...this.alumnoForm };
      this.editando = false;
    } else {
      // Agregar nuevo alumno
      this.alumnoForm.id = this.alumnos.length > 0 ? this.alumnos[this.alumnos.length - 1].id + 1 : 1;
      this.alumnos.push({ ...this.alumnoForm });
    }
    localStorage.setItem('alumnos', JSON.stringify(this.alumnos));
    alert('Alumno guardado con éxito');
    this.limpiarFormulario();
  }

  editarAlumno(alumno: Alumno) {
    this.alumnoForm = { ...alumno };
    this.editando = true;
  }

  borrarAlumno(id: number) {
    this.alumnos = this.alumnos.filter(a => a.id !== id);
    localStorage.setItem('alumnos', JSON.stringify(this.alumnos));
    alert('Alumno eliminado con éxito');
  }

  limpiarFormulario() {
    this.alumnoForm = { id: 0, nombre: '', apellido: '', email: '', dni: '', promedio: 0 };
  }
}