import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NovoFuncionarioComponent } from './novo-funcionario/novo-funcionario.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    NovoFuncionarioComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
  ]
})
export class NovoFuncionarioModule { }
