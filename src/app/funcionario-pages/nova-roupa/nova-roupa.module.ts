import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';
import { RouterModule } from '@angular/router';
import { NovaRoupaComponent } from './nova-roupa/nova-roupa.component';


@NgModule({
  declarations: [
    NovaRoupaComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
  ]
})
export class NovaRoupaModule { }
