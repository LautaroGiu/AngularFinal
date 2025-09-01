import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Usuario {
  id: number;
  email: string;
  password: string;
  nombre: string;
  direccion: string;
  telefono: string;
  perfil: 'ADMIN' | 'USER';
}

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.html',
  styleUrls: ['./usuarios.css'],
  imports: [CommonModule, FormsModule],
})
export class Usuarios implements OnInit {

  usuarios: Usuario[] = [];
  nuevoUsuario: Usuario = { id: 0, email: '', password: '', nombre: '', direccion: '', telefono: '', perfil: 'USER' };
  editando: boolean = false;
  usuarioEnEdicion: number | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // solo admin
    if (!this.authService.isAdmin()) {
      this.router.navigate(['/no-autorizado']);
    }

    const usuariosGuardados = localStorage.getItem('usuarios');
    if (usuariosGuardados) {
      this.usuarios = JSON.parse(usuariosGuardados);
    }
  }

  guardarUsuario() {
    if (this.editando && this.usuarioEnEdicion !== null) {
      const index = this.usuarios.findIndex(u => u.id === this.usuarioEnEdicion);
      if (index !== -1) {
        this.usuarios[index] = { ...this.nuevoUsuario, id: this.usuarioEnEdicion };
      }
      this.editando = false;
      this.usuarioEnEdicion = null;
    } else {
      this.nuevoUsuario.id = this.usuarios.length > 0 ? Math.max(...this.usuarios.map(u => u.id)) + 1 : 1;
      this.usuarios.push({ ...this.nuevoUsuario });
    }

    localStorage.setItem('usuarios', JSON.stringify(this.usuarios));
    this.nuevoUsuario = { id: 0, email: '', password: '', nombre: '', direccion: '', telefono: '', perfil: 'USER' };
  }

  editarUsuario(usuario: Usuario) {
    this.editando = true;
    this.usuarioEnEdicion = usuario.id;
    this.nuevoUsuario = { ...usuario };
  }

  eliminarUsuario(id: number) {
    this.usuarios = this.usuarios.filter(u => u.id !== id);
    localStorage.setItem('usuarios', JSON.stringify(this.usuarios));
  }
}