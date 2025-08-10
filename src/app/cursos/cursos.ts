import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

interface Curso {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.html',
  styleUrls: ['./cursos.css'],
  imports: [CommonModule, ReactiveFormsModule], //NO OLVIDES IMPORTAR LO NECESARIO
})
export class Cursos implements OnInit {
  cursos: Curso[] = [];
  cursoForm: FormGroup;
  editando: boolean = false;
  cursoEnEdicion: number | null = null;

  constructor(private fb: FormBuilder) {
    this.cursoForm = this.fb.group({
      nombre: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Datos iniciales
    this.cursos = [
      { id: 1, nombre: 'Matemáticas' },
      { id: 2, nombre: 'Programación' }
    ];
  }

  agregarCurso(): void {
    if (this.cursoForm.invalid) return;

    if (this.editando && this.cursoEnEdicion !== null) {
      // Modo edición
      const index = this.cursos.findIndex(c => c.id === this.cursoEnEdicion);
      if (index !== -1) {
        this.cursos[index].nombre = this.cursoForm.value.nombre;
      }
      this.editando = false;
      this.cursoEnEdicion = null;
    } else {
      // Nuevo curso
      const nuevoCurso: Curso = {
        id: this.cursos.length > 0 ? Math.max(...this.cursos.map(c => c.id)) + 1 : 1,
        nombre: this.cursoForm.value.nombre
      };
      this.cursos.push(nuevoCurso);
    }

    this.cursoForm.reset();
  }

  editarCurso(curso: Curso): void {
    this.editando = true;
    this.cursoEnEdicion = curso.id;
    this.cursoForm.setValue({ nombre: curso.nombre });
  }

  eliminarCurso(id: number): void {
    this.cursos = this.cursos.filter(c => c.id !== id);
  }
}
