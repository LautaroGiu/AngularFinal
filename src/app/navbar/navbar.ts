import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from '../services/auth'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
  imports: [RouterModule, CommonModule]
})
export class Navbar {
  paginaActual = '';

  constructor(
    public auth: AuthService,
    private router: Router
  ) {}

  loginAdmin(): void {
    this.auth.loginComoAdmin();
    this.router.navigate(['/alumnos']);
  }

  loginUser(): void {
    this.auth.loginComoUsuario();
    this.router.navigate(['/alumnos']);
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}