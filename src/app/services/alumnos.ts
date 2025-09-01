import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alumno } from "../shared/alumnos.model";

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  private apiUrl = 'https://68b4c85f45c901678771232c.mockapi.io/alumnos';

  constructor(private http: HttpClient) {}

  // Obtener todos los alumnos
  getAlumnos(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(this.apiUrl);
  }

  // Obtener un alumno por ID
  getAlumnoById(id: number): Observable<Alumno> {
    return this.http.get<Alumno>(`${this.apiUrl}/${id}`);
  }

  // Agregar un alumno
  agregarAlumno(alumno: Omit<Alumno, 'id'>): Observable<Alumno> {
    return this.http.post<Alumno>(this.apiUrl, alumno);
  }

  // Modificar un alumno
  modificarAlumno(alumno: Alumno): Observable<Alumno> {
    return this.http.put<Alumno>(`${this.apiUrl}/${alumno.id}`, alumno);
  }

  // Eliminar un alumno
  borrarAlumno(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}