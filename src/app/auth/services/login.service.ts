import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { Login } from 'src/app/shared/models/login.model';
import { Router } from '@angular/router';

const LS_CHAVE: string = "usuarioLogado"

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private router: Router) {}

  public get usuarioLogado(): Usuario {
    const usu = localStorage.getItem(LS_CHAVE);
    return usu ? JSON.parse(usu) : null;
  }

  public set usuarioLogado(usuario: Usuario) {
    localStorage.setItem(LS_CHAVE, JSON.stringify(usuario));
  }

  logout() {
    localStorage.removeItem(LS_CHAVE);
    this.router.navigate(['/']);
  }

  login(login: Login): Observable<{ usuario: Usuario | null, tipo: string }> {
    let usuario: Usuario | null = null;
    let tipo: string = '';

    if (login.login === "cliente" && login.senha === "123") {
      usuario = new Usuario(1, "Razer-Cliente", login.login, login.senha, "cliente");
      tipo = 'cliente';
    } else if (login.login === "funcionario" && login.senha === "123") {
      usuario = new Usuario(1, "Razer-Funcionario", login.login, login.senha, "funcionario");
      tipo = 'funcionario';
    }

    return of({ usuario, tipo });
  }
}
