import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VisualizarPedidosComponent } from './visualizar-pedidos/visualizar-pedidos.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    VisualizarPedidosComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class VisualizarPedidosModule { }
