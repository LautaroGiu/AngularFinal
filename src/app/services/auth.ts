import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Usuario } from '../shared/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarioActual$ = new BehaviorSubject<Usuario | null>(null);

  login(usuario: Usuario) {
    this.usuarioActual$.next(usuario);
  }

  logout() {
    this.usuarioActual$.next(null);
  }

  getUsuarioActual(): Observable<Usuario | null> {
    return this.usuarioActual$.asObservable();
  }

  getRolActual(): 'ADMIN' | 'USER' | null {
    return this.usuarioActual$.value?.rol ?? null;
  }

  esAdmin(): boolean {
    return this.getRolActual() === 'ADMIN';
  }
}