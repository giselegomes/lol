import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { HttpClientModule } from '@angular/common/http'; // Importe o HttpClientModule

import { AutocadastroComponent } from './autocadastro/autocadastro.component';
import { ComponentsModule } from '../components/components.module';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [
    AutocadastroComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    ComponentsModule,
    NgxMaskModule.forRoot(),
    HttpClientModule
  ]
})

export class AutocadastroModule { }
