import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RelatorioMelhoresClientesComponent } from './relatorio-melhores-clientes/relatorio-melhores-clientes.component';




@NgModule({
  declarations: [
    RelatorioMelhoresClientesComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RelatorioMelhoresClientesModule { }
