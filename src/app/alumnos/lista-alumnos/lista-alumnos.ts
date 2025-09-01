// import { Component } from '@angular/core';

// interface Alumno {
//   id: number;
//   nombre: string;
//   apellido: string;
//   email: string;
//   dni: string;
//   promedio: number;
// }

// @Component({
//   selector: 'app-lista-alumnos',
//   templateUrl: './lista-alumnos.html',
//   styleUrls: ['./lista-alumnos.css']
// })
// export class ListaAlumnosComponent {
// alumnos: Alumno[] = [
//     { id: 1, nombre: 'Juan', apellido: 'Pérez', email: 'juan@gmail.com', dni: '12345678', promedio: 8.5 },
//     { id: 2, nombre: 'María', apellido: 'Gómez', email: 'maria@gmail.com', dni: '87654321', promedio: 9.0 }
//   ];

//   // para mensajes en pantalla
//   mensaje: string = '';
//   mostrarMensaje = false;

//   verAlumno(alumno: Alumno) {
//     this.mensaje =
//       `Alumno: ${alumno.nombre} ${alumno.apellido} | ` +
//       `Email: ${alumno.email} | DNI: ${alumno.dni} | Promedio: ${alumno.promedio}`;
//     this.mostrarMensaje = true;
//     this.ocultarMensaje();
//   }

//   editarAlumno(alumno: Alumno) {
//     this.mensaje = `Editar alumno: ${alumno.nombre}`;
//     this.mostrarMensaje = true;
//     this.ocultarMensaje();
//   }

//   eliminarAlumno(id: number) {
//     this.alumnos = this.alumnos.filter(a => a.id !== id);
//     this.mensaje = 'Alumno eliminado con éxito';
//     this.mostrarMensaje = true;
//     this.ocultarMensaje();
//   }

//   private ocultarMensaje() {
//     setTimeout(() => {
//       this.mostrarMensaje = false;
//     }, 3000);
//   }
// }