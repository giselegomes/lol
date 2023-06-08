import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManutencaoRoupasComponent } from './manutencao-roupas/manutencao-roupas.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { RoupaService } from 'src/app/roupa/services/roupa.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ManutencaoRoupasComponent,
    
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [
    RoupaService,
  ]
})
export class ManutencaoRoupasModule { }
