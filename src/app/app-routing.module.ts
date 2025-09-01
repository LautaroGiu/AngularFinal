import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlTree } from '@angular/router';
import { Login } from './login/login';
const routes: Routes = [
  { path: 'login', component: Login, data: { title: 'Login' }},

  // protección simple SIN guard: si no hay usuario, redirige a /login dentro del layout (ver 7)
  { path: 'alumnos', loadChildren: () => import('./alumnos/alumnos-module').then(m => m.AlumnosModule) },
  { path: 'cursos',  loadChildren: () => import('./cursos/cursos-module').then(m => m.CursosModule) },
  { path: 'inscripciones', loadChildren: () => import('./inscripciones/inscripciones-module').then(m => m.InscripcionesModule) },
  { path: 'usuarios', loadChildren: () => import('./usuarios/usuarios-module').then(m => m.UsuariosModule) },

  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}