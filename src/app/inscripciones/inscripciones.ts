import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

interface Inscripcion {
  id: number;
  alumno: string;
  curso: string;
  fecha: string;
}

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.html',
  styleUrls: ['./inscripciones.css'],
  imports: [CommonModule, ReactiveFormsModule], //NO OLVIDES IMPORTAR LO NECESARIO
})
export class Inscripciones implements OnInit {
  inscripciones: Inscripcion[] = [];
  inscripcionForm: FormGroup;
  editando: boolean = false;
  inscripcionEnEdicion: number | null = null;

  constructor(private fb: FormBuilder) {
    this.inscripcionForm = this.fb.group({
      alumno: ['', Validators.required],
      curso: ['', Validators.required],
      fecha: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.inscripciones = [
      { id: 1, alumno: 'Juan Pérez', curso: 'Matemáticas', fecha: '2025-08-10' }
    ];
  }

  nuevaInscripcion(): void {
    if (this.inscripcionForm.invalid) return;

    if (this.editando && this.inscripcionEnEdicion !== null) {
      const index = this.inscripciones.findIndex(i => i.id === this.inscripcionEnEdicion);
      if (index !== -1) {
        this.inscripciones[index] = {
          ...this.inscripciones[index],
          ...this.inscripcionForm.value
        };
      }
      this.editando = false;
      this.inscripcionEnEdicion = null;
    } else {
      const nueva: Inscripcion = {
        id: this.inscripciones.length > 0 ? Math.max(...this.inscripciones.map(i => i.id)) + 1 : 1,
        ...this.inscripcionForm.value
      };
      this.inscripciones.push(nueva);
    }

    this.inscripcionForm.reset();
  }

  // Revisar si no hay errores al editar la inscrip.
  editarInscripcion(inscripcion: Inscripcion): void {
    this.editando = true;
    this.inscripcionEnEdicion = inscripcion.id;
    this.inscripcionForm.setValue({
      alumno: inscripcion.alumno,
      curso: inscripcion.curso,
      fecha: inscripcion.fecha
    });
  }

  eliminarInscripcion(id: number): void {
    this.inscripciones = this.inscripciones.filter(i => i.id !== id);
  }
}
