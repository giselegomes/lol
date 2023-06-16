import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl, NgForm } from '@angular/forms';

import { RoupaService } from 'src/app/roupa/services/roupa.service';
import { Roupa } from 'src/app/shared/models/roupa.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-roupa',
  templateUrl: './nova-roupa.component.html',
  styleUrls: ['./nova-roupa.component.css']
})
export class NovaRoupaComponent implements OnInit {

  @ViewChild('formCliente') formCliente!: NgForm;
  formRoupa: FormGroup;
  roupa: Roupa;


  constructor(
    private formBuilder: FormBuilder,

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
  }

  // inserir(): void {
  //   if (this.formRoupa.valid) {
  //     this.roupaService.inserirRoupa(this.roupa);
  //     this.router.navigate(['/funcionario/manutencao-roupas']);
  //   }
  // }
}
