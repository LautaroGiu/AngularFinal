import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Usuario } from '../shared/usuario.model';

export type Rol = 'ADMIN' | 'USER' | null;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private rol: Rol = null;

  loginComoAdmin(): void {
    this.rol = 'ADMIN';
    localStorage.setItem('rol', 'ADMIN');
  }

  loginComoUsuario(): void {
    this.rol = 'USER';
    localStorage.setItem('rol', 'USER');
  }

  logout(): void {
    this.rol = null;
    localStorage.removeItem('rol');
  }

  getRolActual(): Rol {
    if (!this.rol) {
      const guardado = localStorage.getItem('rol');
      if (guardado === 'ADMIN' || guardado === 'USER') {
        this.rol = guardado;
      }
    }
    return this.rol;
  }

  isAdmin(): boolean {
    return this.getRolActual() === 'ADMIN';
  }

  isUser(): boolean {
    return this.getRolActual() === 'USER';
  }

  isLoggedIn(): boolean {
    return this.getRolActual() !== null;
  }
}