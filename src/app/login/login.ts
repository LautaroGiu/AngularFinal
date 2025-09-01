import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule]
})
export class Login {
  form: FormGroup;
  error: string | null = null;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.form = this.fb.group({
      email: ['admin@app.com', [Validators.required, Validators.email]],
      password: ['admin', Validators.required],
    });
  }

  submit() {
    if (this.form.invalid) return;

    const { email, password } = this.form.value;

    this.authService.login(email, password).subscribe({
      next: () => {
        if (this.authService.isAdmin()) {
          this.router.navigate(['/usuarios']); // admin va a usuarios
        } else {
          this.router.navigate(['/alumnos']); // usuario normal va a alumnos
        }
      },
      error: (err: any) => this.error = err.error?.message || 'Error en el login'
    });
  }
}
