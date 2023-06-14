import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './services/login.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const usuarioLogado = this.loginService.usuarioLogado;
    const allowedRoles = route.data?.['role'] as string[]; // Obtém as funções permitidas para a rota
    const url = state.url;

    if (usuarioLogado) {
      if (allowedRoles && !allowedRoles.includes(usuarioLogado.perfil)) {
        // Se o perfil do usuário não estiver na rota, ele será redirecionado para a página de login
        this.router.navigate(['/'], { queryParams: { error: "Proibido acesso a " + url } });
        return false;
      }
      return true; // Permite o acesso à rota se o usuário estiver autenticado e tiver a função permitida
    } else {
      // Se não estiver logado, redireciona para a página de login
      this.router.navigate(['/'], {
        queryParams: {
          error: "Deve fazer o login antes de acessar " + url
        }
      });
      return false;
    }
  }
}
