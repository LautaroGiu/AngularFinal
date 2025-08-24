export type Rol = 'ADMIN' | 'USER';

export interface Usuario {
  id: number;
  username: string;
  password: string;
  rol: Rol;
}