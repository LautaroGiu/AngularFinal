import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar} from "./navbar/navbar";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Alumnos } from './alumnos/alumnos';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  standalone: true,
  imports: 
  [
    RouterOutlet, 
    Alumnos,
    Navbar,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AppComponent {
  protected readonly title = signal('ProyectoFinal');
}
