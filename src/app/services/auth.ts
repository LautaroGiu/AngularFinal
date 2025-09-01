import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of } from 'rxjs';

export type Rol = 'ADMIN' | 'USER' | null;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private rolActual: Rol = null;
  private loggedIn = false;

login(email: string, password: string): Observable<boolean> {
  if (email === 'admin@app.com' && password === 'admin') {
    this.rolActual = 'ADMIN';
    this.loggedIn = true;
    localStorage.setItem('rolActual', this.rolActual);
    localStorage.setItem('loggedIn', 'true');
    return of(true);
  } else if (email === 'user@app.com' && password === 'user') {
    this.rolActual = 'USER';
    this.loggedIn = true;
    localStorage.setItem('rolActual', this.rolActual);
    localStorage.setItem('loggedIn', 'true');
    return of(true);
  } else {
    return new Observable<boolean>((observer) => {
      observer.error({ error: { message: 'Credenciales inválidas' } });
    });
  }
}

// Recuperar sesión al inicializar el servicio
constructor(private router: Router, private http: HttpClient) {
  const rol = localStorage.getItem('rolActual');
  const logged = localStorage.getItem('loggedIn');
  this.rolActual = rol as Rol;
  this.loggedIn = logged === 'true';
}

logout(): void {
  this.rolActual = null;
  this.loggedIn = false;
  localStorage.removeItem('rolActual');
  localStorage.removeItem('loggedIn');
  this.router.navigate(['/login']);
}

  isAuthenticated(): boolean {
    return this.loggedIn;
  }

  getUserRole(): Rol {
    return this.rolActual;
  }

  isAdmin(): boolean {
    return this.rolActual === 'ADMIN';
  }

  isUser(): boolean {
    return this.rolActual === 'USER';
  }
}
//   private rol: Rol = null;

//   loginComoAdmin(): void {
//     this.rol = 'ADMIN';
//     localStorage.setItem('rol', 'ADMIN');
//   }

//   loginComoUsuario(): void {
//     this.rol = 'USER';
//     localStorage.setItem('rol', 'USER');
//   }

//   logout(): void {
//     this.rol = null;
//     localStorage.removeItem('rol');
//   }

//   getRolActual(): Rol {
//     if (!this.rol) {
//       const guardado = localStorage.getItem('rol');
//       if (guardado === 'ADMIN' || guardado === 'USER') {
//         this.rol = guardado;
//       }
//     }
//     return this.rol;
//   }

//   isAdmin(): boolean {
//     return this.getRolActual() === 'ADMIN';
//   }

//   isUser(): boolean {
//     return this.getRolActual() === 'USER';
//   }

//   isLoggedIn(): boolean {
//     return this.getRolActual() !== null;
//   }
