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
}
