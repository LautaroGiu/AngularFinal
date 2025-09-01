import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-abm-usuarios',
  templateUrl: './abm-usuarios.html',
  styleUrls: ['./abm-usuarios.css'],
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule]
})
export class AbmUsuarios implements OnInit {
  form: FormGroup;
  isEditMode: boolean = false;
  userId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      rol: ['USER', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');
    if (this.userId) {
      this.isEditMode = true;
      this.loadUser(this.userId);
    }
  }

  loadUser(id: string) {

    this.form.patchValue({
      nombre: 'Usuario Ejemplo',
      email: 'user@example.com',
      rol: 'USER',
      password: ''
    });
  }

  submit() {
    if (this.form.invalid) return;

    const userData = this.form.value;

    if (this.isEditMode) {
      console.log('Editar usuario', this.userId, userData);
    } else {
      console.log('Crear usuario', userData);
    }

    this.router.navigate(['/usuarios/nuevo']); 
  }
}