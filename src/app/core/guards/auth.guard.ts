import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean | UrlTree {
    // Simulação: verifica se existe um token salvo
    const isAuthenticated = !!localStorage.getItem('userToken');
    if (isAuthenticated) {
      return true;
    } else {
      // Se não estiver autenticado, redirecione para o login
      return this.router.createUrlTree(['/auth/login']);
    }
  }
}
