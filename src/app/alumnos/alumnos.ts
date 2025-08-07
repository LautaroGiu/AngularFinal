import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.html'
})
export class Alumnos {
  alumnoForm: FormGroup;
  alumnos: any[] = [];

  constructor(private fb: FormBuilder) {
    this.alumnoForm = this.fb.group({
      nombre: [''],
      apellido: [''],
      email: [''],
      dni: [''],
      promedio: ['']
    });
  }

  agregarAlumno() {
    const nuevoAlumno = this.alumnoForm.value;
    this.alumnos.push(nuevoAlumno);
    this.alumnoForm.reset();
  }

  editarAlumno(alumno: any) {
    this.alumnoForm.patchValue(alumno);
    this.eliminarAlumno(alumno); 
    // Evitamos duplicados al editar
  }

  eliminarAlumno(alumno: any) {
    this.alumnos = this.alumnos.filter(a => a !== alumno);
  }
}