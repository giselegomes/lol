import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarFuncionarioComponent } from './editar-funcionario/editar-funcionario.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    EditarFuncionarioComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ]
})
export class EditarFuncionarioModule { }
