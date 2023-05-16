import { NgModule } from '@angular/core';
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
    RouterModule
  ]
})
export class NovoFuncionarioModule { }
