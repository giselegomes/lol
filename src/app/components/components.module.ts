import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
//import { PedidoComponent } from './pedido/pedido.component';
//import { PedidoAprovadoComponent } from './pedido-aprovado/pedido-aprovado.component';
import { SidebarComponent } from './sidebar-cliente/sidebar.component';
import { SidebarFuncionarioComponent } from './sidebar-funcionario/sidebar-funcionario.component';

@NgModule({

  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    SidebarFuncionarioComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ], 
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    SidebarFuncionarioComponent
  ]
})

export class ComponentsModule { }
