import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListagemPedidosComponent } from './listagem-pedidos/listagem-pedidos.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    ListagemPedidosComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ListagemPedidosModule { }
