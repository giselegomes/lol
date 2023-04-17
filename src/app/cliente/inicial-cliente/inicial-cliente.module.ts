import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicialClienteComponent } from './inicial-cliente/inicial-cliente.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [
    InicialClienteComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class InicialClienteModule { }
