import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth';
import { Router } from "@angular/router";

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.html',
  styleUrls: ['./usuarios.css']
})
export class Usuarios implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (!this.authService.isAdmin()) {
      this.router.navigate(['/no-autorizado']);
    }
  }
}
