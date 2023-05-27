import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManutencaoFuncionarioComponent } from './manutencao-funcionario/';
import { ComponentsModule } from 'src/app/components/components.module';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    ManutencaoFuncionarioComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule
  ]
})
export class ManutencaoFuncionarioModule { }
