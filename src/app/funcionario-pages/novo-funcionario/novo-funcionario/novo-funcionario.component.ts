import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

import { FuncionarioService } from '../../../funcionario/services/funcionario.service';
import { Funcionario } from '../../../shared/models/funcionario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-novo-funcionario',
  templateUrl: './novo-funcionario.component.html',
  styleUrls: ['./novo-funcionario.component.css']
})
export class NovoFuncionarioComponent implements OnInit {
  formFuncionario: FormGroup;
  funcionario: Funcionario;

  constructor(
    private formBuilder: FormBuilder,
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
  }

  validaSenha: ValidatorFn = (control: AbstractControl): { [key: string]: any } | null => {
    const senha = control.get('senha');
    const confirmarSenha = control.get('confirmarSenha');

    return senha && confirmarSenha && senha.value !== confirmarSenha.value ? { 'passwordMismatch': true } : null;
  };

  inserirFuncionario(): void {
    if (this.formFuncionario.valid) {
      this.funcionarioService.inserirFuncionario(this.funcionario);
      this.router.navigate(['/funcionario/manutencao-funcionario']);
    }
  }
}
