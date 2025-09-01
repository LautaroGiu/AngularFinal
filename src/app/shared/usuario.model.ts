export type Perfil = 'ADMIN' | 'USER';

export interface Usuario {
  id: string;
  email: string;
  password: string;
  nombre: string;
  direccion: string;
  telefono: string;
  perfil: Perfil;
}