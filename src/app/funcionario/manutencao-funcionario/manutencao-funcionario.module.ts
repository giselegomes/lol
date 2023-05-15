import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManutencaoFuncionarioComponent } from './manutencao-funcionario/';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [
    ManutencaoFuncionarioComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class ManutencaoFuncionarioModule { }
