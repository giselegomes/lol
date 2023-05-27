import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RelatorioReceitaComponent } from './relatorio-receita/relatorio-receita.component';

@NgModule({
  declarations: [
    RelatorioReceitaComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RelatorioReceitaModule { }
