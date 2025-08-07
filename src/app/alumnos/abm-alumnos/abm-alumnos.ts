import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AlumnosService } from '../../services/alumnos';
import { Alumno } from './../../shared/alumnos.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-abm-alumnos',
  imports: [],
  templateUrl: './abm-alumnos.html',
  styleUrls: ['./abm-alumnos.css']
})
export class AbmAlumnosComponent implements OnInit {
  alumnoForm: FormGroup;
  alumnos: Alumno[] = [];
  alumnosDataSource = new MatTableDataSource<Alumno>();
  columnas: string[] = ['id', 'nombre', 'apellido', 'email', 'dni', 'acciones'];

  constructor(
    private fb: FormBuilder,
    private alumnosService: AlumnosService
  ) {
    // Se inicializa acá, dentro del constructor, NO antes
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

  agregarAlumno(): void {
    const nuevoAlumno = this.alumnoForm.value;
    this.alumnosService.agregarAlumno(nuevoAlumno).subscribe((a) => {
      this.alumnos.push(a);
      this.alumnosDataSource.data = [...this.alumnos];
      this.alumnoForm.reset();
    });
  }

  editarAlumno(alumno: Alumno): void {
    console.log('Editar alumno:', alumno);
    // lógica de edición opcional
  }

  eliminarAlumno(alumno: Alumno): void {
    console.log('Eliminar alumno:', alumno);
    // lógica de eliminación opcional
  }
}