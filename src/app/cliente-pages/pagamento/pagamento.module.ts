import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagamentoComponent } from './pagamento';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [
    PagamentoComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PagamentoModule { }
