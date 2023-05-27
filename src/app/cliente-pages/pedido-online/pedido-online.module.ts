import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PedidoOnlineComponent } from './pedido-online';
import { ComponentsModule } from 'src/app/components/components.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PedidoOnlineComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class PedidoOnlineModule { }
