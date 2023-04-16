import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ConsultarPedidosComponent } from './consultar-pedidos/consultar-pedidos.component';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [
    ConsultarPedidosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule
  ]
})
export class ConsultarPedidosModule { }
