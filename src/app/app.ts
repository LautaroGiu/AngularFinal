import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AbmAlumnosComponent } from "./alumnos/abm-alumnos/abm-alumnos";
import { Navbar} from "./navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AbmAlumnosComponent, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  protected readonly title = signal('ProyectoFinal');
}
