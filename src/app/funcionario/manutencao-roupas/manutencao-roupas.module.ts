import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManutencaoRoupasComponent } from './manutencao-roupas/manutencao-roupas.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    ManutencaoRoupasComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ManutencaoRoupasModule { }
