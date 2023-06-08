import { Injectable } from '@angular/core';

import { Funcionario } from '../../shared/models/funcionario.model';

const LS_CHAVE: string = "chave_funcionarios";

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

  // busca por id
  buscarFuncionario(id: number): Funcionario | undefined {
    const funcionarios: Funcionario[] = this.listarFuncionarios();

    return funcionarios.find(funcionario => funcionario.id === id);
  }

  atualizarFuncionario(funcionario: Funcionario): void {
    const funcionarios: Funcionario[] = this.listarFuncionarios();

    funcionarios.forEach((obj, index, objs) => {
      if (funcionario.id === obj.id) {
        objs[index] = funcionario
      }
    });

    localStorage[LS_CHAVE] = JSON.stringify(funcionarios)
  }

  removerFuncionario(id: number): void {
    let funcionarios: Funcionario[] = this.listarFuncionarios();

    funcionarios = funcionarios.filter(funcionario => funcionario.id !== id);

    localStorage[LS_CHAVE] = JSON.stringify(funcionarios)
  }
}
