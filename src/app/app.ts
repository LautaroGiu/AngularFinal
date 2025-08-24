import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AbmAlumnosComponent } from "./alumnos/abm-alumnos/abm-alumnos";
import { Navbar} from "./navbar/navbar";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [RouterOutlet, AbmAlumnosComponent, Navbar]
})
export class AppComponent {
  protected readonly title = signal('ProyectoFinal');
}
