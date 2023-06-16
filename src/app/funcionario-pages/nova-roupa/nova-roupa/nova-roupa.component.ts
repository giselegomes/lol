import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl, NgForm } from '@angular/forms';

import { RoupaService } from 'src/app/roupa/services/roupa.service';
import { Roupa } from 'src/app/shared/models/roupa.model';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nova-roupa',
  templateUrl: './nova-roupa.component.html',
  styleUrls: ['./nova-roupa.component.css']
})
export class NovaRoupaComponent implements OnInit {

  @ViewChild('formCliente') formCliente!: NgForm;
  novaRoupa: boolean = true;
  roupa: Roupa = new Roupa();
  id!: string;
  loading!: boolean;
  formRoupa: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
    private roupaService: RoupaService,
    private router: Router
  ) {
    this.formRoupa = this.formBuilder.group({
      nome: [''],
      valor: [''],
      prazo: [''],
    });
  }

  ngOnInit(): void {
    this.roupa = new Roupa();
    this.loading = false;
  }

  inserirRoupa(): void {
    this.loading = true;
    if (this.formRoupa.valid) {
      if (this.novaRoupa) {
        this.roupaService.inserirRoupa(this.roupa).subscribe(
          () => {
            this.loading = false;
            this.router.navigate(['/funcionario/manutencao-roupas']);
            alert('Peça cadastrada com sucesso!');
          },
          (error) => {
            this.loading = false;
            // Lógica de tratamento de erro
          }
        );
      } else {
        // Lógica de atualização da roupa existente
      }
    }
  }
}
