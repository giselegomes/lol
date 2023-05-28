import { Injectable } from '@angular/core';

import { Funcionario } from '../../shared/models/funcionario.model';

const LS_CHAVE: string = "funcionarios";

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor() { }

  listarFuncionarios(): Funcionario[] {
    const funcionarios = localStorage[LS_CHAVE];
    return funcionarios ? JSON.parse(funcionarios) : [];
  }

  inserirFuncionario(funcionario: Funcionario): void {
    const funcionarios = this.listarFuncionarios();
    funcionario.id = new Date().getTime();

    funcionarios.push(funcionario);

    localStorage[LS_CHAVE] = JSON.stringify(funcionarios);
  }
}
