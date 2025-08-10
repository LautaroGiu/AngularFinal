import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Alumno } from './../../shared/alumnos.model';
import { AlumnosService } from '../../services/alumnos';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from "@angular/material/table";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-abm-alumnos',
  templateUrl: './abm-alumnos.html',
  styleUrls: ['./abm-alumnos.css'],
  imports: [ReactiveFormsModule, CommonModule, MatTableModule], //NO OLVIDES IMPORTAR LO NECESARIO
})
export class AbmAlumnosComponent implements OnInit {
  alumnoForm: FormGroup;
  alumnos: Alumno[] = [];
  alumnosDataSource = new MatTableDataSource<Alumno>();
  columnas: string[] = ['id', 'nombre', 'apellido', 'email', 'dni', 'acciones'];

  mostrarLista = false;
// La lista de alumnos cambiará con un btn

// Constructor para inicializar el formulario y el servicio
  constructor(
    private fb: FormBuilder,
    private alumnosService: AlumnosService
  ) {
    this.alumnoForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dni: ['', Validators.required],
      promedio: ['', Validators.required],
    });
  }

  ngOnInit(): void {
      this.alumnosService.obtenerAlumnos().subscribe((a) => {
      this.alumnos = a;
      this.alumnosDataSource.data = a;
    });
  }

    cargarAlumnos(): void {
    this.alumnosService.obtenerAlumnos().subscribe((a) => {
      this.alumnos = a;
      this.alumnosDataSource.data = a;
    });
  }

  agregarAlumno(): void {
    const nuevoAlumno = this.alumnoForm.value;
      this.alumnosService.agregarAlumno(nuevoAlumno).subscribe((a) => {
      this.alumnos.push(a);
      this.alumnosDataSource.data = [...this.alumnos];
      this.alumnoForm.reset();
    });
  }

  editarAlumno(alumno: Alumno): void {
    this.alumnoForm.patchValue(alumno);
  }

  eliminarAlumno(alumno: Alumno): void {
      this.alumnosService.eliminarAlumno(alumno.id).subscribe(() => {
      this.alumnos = this.alumnos.filter(a => a.id !== alumno.id);
      this.alumnosDataSource.data = [...this.alumnos];
    });
  }

  toggleLista(): void {
    if (!this.mostrarLista) {
    // Cuando se presiona (Ver) carga la lista desde el servicio
      this.cargarAlumnos();
    }
    this.mostrarLista = !this.mostrarLista;
}
}
