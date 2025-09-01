// import { Component } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';
// import { FormGroup, FormsModule, Validators, FormBuilder } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { Alumno } from '../../shared/alumnos.model';
// import { ReactiveFormsModule } from "@angular/forms";
// import { AlumnosService } from "../../services/alumnos";

// @Component({
//   selector: 'app-abm-alumnos',
//   templateUrl: './abm-alumnos.html',
//   styleUrls: ['./abm-alumnos.css'],
//   imports: [FormsModule, CommonModule]
// })
// export class AbmAlumnosComponent {
//   alumno: Alumno = {
//     id: 0,
//     nombre: '',
//     apellido: '',
//     email: '',
//     dni: '',
//     promedio: 0,
//   };

//   id?: number;

//   constructor(
//     private route: ActivatedRoute,
//     private router: Router,
//     private alumnosService: AlumnosService
//   ) {}

//   ngOnInit(): void {
//     this.id = Number(this.route.snapshot.paramMap.get('id'));

//     if (this.id) {
//       // cargar alumno desde el service
//       this.alumnosService.getAlumnoById(this.id).subscribe((alumno) => {
//         this.alumno = alumno;
//       });
//     }
//   }

//   guardar(): void {
//     if (this.id) {
//       // editar
//       this.alumnosService.modificarAlumno(this.alumno).subscribe(() => {
//         alert('Alumno modificado');
//         this.router.navigate(['/alumnos']);
//       });
//     } else {
//       // agregar
//       this.alumnosService.agregarAlumno(this.alumno).subscribe(() => {
//         alert('Alumno agregado');
//         this.router.navigate(['/alumnos']);
//       });
//     }
//   }
// }