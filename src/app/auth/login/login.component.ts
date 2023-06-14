import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from '../services/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Login } from 'src/app/shared/models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('formLogin') formLogin!: NgForm;
  login: Login = new Login();
  loading: boolean = false;
  message!: string;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute) {

    if (this.loginService.usuarioLogado) {
      this.router.navigate(["/funcionario"]);
    }
  }
  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.message = params['error'];
      });
  }
  
  logar(): void {
    this.loading = true;
    if (this.formLogin.form.valid) {
      this.loginService.login(this.login).subscribe((result) => {
        const usu = result.usuario;
        const tipo = result.tipo;
  
        console.log('Usuário:', usu);
        console.log('Tipo de usuário:', tipo);
  
        if (usu != null) {
          this.loginService.usuarioLogado = usu;
          this.loading = false;
          if (tipo === 'cliente') {
            this.router.navigate(['/cliente']);
          } else if (tipo === 'funcionario') {
            this.router.navigate(['/funcionario']);
          } else {
            this.router.navigate(['/']);
          }
        } else {
          this.loading = false;
          this.message = "usuário ou senha inválidos";
        }
      });
    }
  }
  


}
