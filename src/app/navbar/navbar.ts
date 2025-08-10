import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
  imports: [RouterOutlet],
})
export class Navbar {
  paginaActual = '';

  constructor(private router: Router) {}

  irA(pagina: string) {
    this.paginaActual = pagina;
    this.router.navigate([`/${pagina}`]);
  }
}