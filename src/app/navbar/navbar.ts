import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
  standalone: true,
  imports: [RouterModule, CommonModule]
})
export class Navbar implements OnInit {
  rol: string | null = null;
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isAuthenticated();
    this.rol = this.authService.getUserRole();
  }

  logout(): void {
    this.authService.logout();
    this.isLoggedIn = false;
    this.rol = null;
    this.router.navigate(['/login']);
  }
}