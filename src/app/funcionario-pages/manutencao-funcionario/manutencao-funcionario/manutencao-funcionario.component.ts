import { Component, OnInit } from '@angular/core';

import { FuncionarioService } from '../../../funcionario/services/funcionario.service';
import { Funcionario } from '../../../shared/models/funcionario.model';

@Component({
  selector: 'app-manutencao-funcionario',
  templateUrl: './manutencao-funcionario.component.html',
  styleUrls: ['./manutencao-funcionario.component.css']
})
export class ManutencaoFuncionarioComponent implements OnInit {

  funcionarios: Funcionario[] = [];

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
    this.funcionarios = this.listarFuncionarios();
  }

  listarFuncionarios(): Funcionario[] {
    return this.funcionarioService.listarFuncionarios();
  }

  removerFuncionario($event: any, funcionario: Funcionario) {
    $event.preventDefault();
    if(confirm(`Deseja realmente remover o(a) ${funcionario.nome}?`)) {
      this.funcionarioService.removerFuncionario(funcionario.id!);
      this.funcionarios = this.listarFuncionarios();
    }
  }
}
