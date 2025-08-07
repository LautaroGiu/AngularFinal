import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Alumno } from '../shared/alumnos.model';

@Injectable({ providedIn: 'root' })
export class AlumnosService {
  private alumnos: Alumno[] = [];
  private nextId = 1;

  obtenerAlumnos(): Observable<Alumno[]> {
    return of(this.alumnos);
  }

  agregarAlumno(alumno: Alumno): Observable<Alumno> {
    const nuevoAlumno = { ...alumno, id: this.nextId++ };
    this.alumnos.push(nuevoAlumno);
    return of(nuevoAlumno);
  }

  eliminarAlumno(id: number): Observable<boolean> {
    const inicial = this.alumnos.length;
    this.alumnos = this.alumnos.filter(a => a.id !== id);
    return of(this.alumnos.length < inicial);
  }

  editarAlumno(alumnoEditado: Alumno): Observable<Alumno> {
    const index = this.alumnos.findIndex(a => a.id === alumnoEditado.id);
    if (index !== -1) {
      this.alumnos[index] = alumnoEditado;
      return of(alumnoEditado);
    } else {
      return of(null as any);
    }
  }
}