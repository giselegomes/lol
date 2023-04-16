import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PedidoOnlineComponent } from './pedido-online/pedido-online.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [
    PedidoOnlineComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PedidoOnlineModule { }
