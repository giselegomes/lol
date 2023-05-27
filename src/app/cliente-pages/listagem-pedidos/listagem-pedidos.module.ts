import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListagemPedidosComponent } from './listagem-pedidos';
import { ComponentsModule } from 'src/app/components/components.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ListagemPedidosComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class ListagemPedidosModule { }
