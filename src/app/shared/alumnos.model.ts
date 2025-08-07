import { Observable } from "rxjs";

export interface Alumno {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  dni: string;
  promedio: number;
}
export interface AlumnosService {
  obtenerAlumnos(): Observable<Alumno[]>;
  agregarAlumno(alumno: Alumno): void;
  editarAlumno(alumno: Alumno): void;
  eliminarAlumno(id: number): void;
}