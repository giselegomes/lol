import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RelatorioClientesComponent } from './relatorio-clientes/relatorio-clientes.component';

@NgModule({
  declarations: [
    RelatorioClientesComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RelatorioClientesModule { }
