import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  imports: [CommonModule,FormsModule],
})
export class LoginComponent {
  rolSeleccionado: 'ADMIN' | 'USER' | null = null;

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    if (this.rolSeleccionado === 'ADMIN') {
      this.auth.loginComoAdmin();
      this.router.navigate(['/usuarios']); 
    } else if (this.rolSeleccionado === 'USER') {
      this.auth.loginComoUsuario();
      this.router.navigate(['/home']); 
    } else {
      alert('Selecciona un rol para iniciar sesión');
    }
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}

