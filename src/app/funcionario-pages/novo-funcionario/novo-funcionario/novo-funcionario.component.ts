import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl, NgForm } from '@angular/forms';

import { FuncionarioService } from '../../../funcionario/services/funcionario.service';
import { Funcionario } from '../../../shared/models/funcionario.model';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-novo-funcionario',
  templateUrl: './novo-funcionario.component.html',
  styleUrls: ['./novo-funcionario.component.css']
})

export class NovoFuncionarioComponent implements OnInit {
  @ViewChild('formCliente') formCliente!: NgForm;
  novoFuncionario: boolean = true;
  funcionario: Funcionario = new Funcionario();
  id!: string;
  loading!: boolean;
  formFuncionario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
    private funcionarioService: FuncionarioService,
    private router: Router
  ) {
    this.formFuncionario = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      dt_nasc: ['', Validators.required],
      senha: ['', Validators.required],
      confirmarSenha: ['', Validators.required]
    }, { validator: this.validaSenha });
  }

  ngOnInit(): void {
    this.funcionario = new Funcionario();
    this.loading = false;

    this.id = this.route.snapshot.params['id'];
    this.novoFuncionario = !this.id;

    if (!this.novoFuncionario) {
      this.funcionarioService.buscarPorId(+this.id).subscribe(
        funcionario => {
          this.funcionario = funcionario;
          this.funcionario.senha = "";
        }
      );
    }
  }

  validaSenha: ValidatorFn = (control: AbstractControl): { [key: string]: any } | null => {
    const senha = control.get('senha');
    const confirmarSenha = control.get('confirmarSenha');

    return senha && confirmarSenha && senha.value !== confirmarSenha.value ? { 'passwordMismatch': true } : null;
  };

  inserirFuncionario(): void {
    this.loading = true;
    if (this.formFuncionario.valid) {
      if (this.novoFuncionario) {
        this.funcionario.perfil = 'funcionario'; // Definindo o perfil como 'cliente'
        this.funcionarioService.inserirFuncionario(this.funcionario).subscribe(
          funcionario => {
            this.loading = false;
            this.router.navigate(["/funcionario/manutencao-funcionario"])
          }
        );
      }
      else {
        this.funcionarioService.alterar(this.funcionario).subscribe(
          funcionario => {
            this.loading = false;
            this.router.navigate(["/funcionario/manutencao-funcionario"])
          }
        );
      }
    }
    this.loading = false;
  }
}