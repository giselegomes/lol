import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicialFuncionarioComponent } from './inicial-funcionario/';
import { ComponentsModule } from 'src/app/components/components.module';
@NgModule({
  declarations: [
    InicialFuncionarioComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class InicialFuncionarioModule { }
