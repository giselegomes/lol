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
  loading!: boolean;

  constructor(
    private funcionarioService: FuncionarioService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loading = false;
    this.route.params.subscribe(params => {
      const id = +params['id']; // Converter o parâmetro 'id' para número
      this.carregarFuncionario(id);
    });
  }

  carregarFuncionario(id: number): void {
    this.funcionarioService.buscarPorId(id).subscribe(
      funcionario => {
        this.funcionario = funcionario;
      },
      error => {
        // Tratar erro ao carregar o funcionário
      }
    );
  }

  alterar(): void {
    if (this.formFuncionario.form.valid) {
      this.loading = true;
      this.funcionarioService.alterar(this.funcionario).subscribe(
        funcionario => {
          this.loading = false;
          this.router.navigate(['/funcionario/manutencao-funcionario']);
        },
        error => {
          // Tratar erro ao alterar o funcionário
        }
      );
    }
  }
}
