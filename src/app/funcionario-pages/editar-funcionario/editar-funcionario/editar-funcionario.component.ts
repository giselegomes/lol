import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionarioService } from 'src/app/funcionario/services/funcionario.service';
import { Funcionario } from 'src/app/shared/models/funcionario.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-editar-funcionario',
  templateUrl: './editar-funcionario.component.html',
  styleUrls: ['./editar-funcionario.component.css']
})
export class EditarFuncionarioComponent implements OnInit {
  @ViewChild("formFuncionario") formFuncionario!: NgForm;
  funcionario!: Funcionario;

  constructor(
    private funcionarioService: FuncionarioService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // let id = +this.route.snapshot.params['id'];
    // // const res = this.funcionarioService.buscarFuncionario(id);

    // if (res !== undefined) {
    //   this.funcionario = res;
    // } else {
    //   throw new Error("Funcionário não encontrado: id = " + id);
    // }
  }

  // atualizarFuncionario(): void {
  //   if (this.formFuncionario.form.valid) {
  //     this.funcionarioService.atualizarFuncionario(this.funcionario);
  //     this.router.navigate(['/funcionario/manutencao-funcionario']);
  //   }
  // }
}
