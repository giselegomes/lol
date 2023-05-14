import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { AutocadastroComponent } from './autocadastro/autocadastro.component';
import { NgxMaskModule} from 'ngx-mask';
import { HttpClientModule } from '@angular/common/http'; // Importe o HttpClientModule

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
