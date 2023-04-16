import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
//import { PedidoComponent } from './pedido/pedido.component';
//import { PedidoAprovadoComponent } from './pedido-aprovado/pedido-aprovado.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarFuncionarioComponent } from './sidebar-funcionario/sidebar-funcionario.component';


@NgModule({

  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    SidebarFuncionarioComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    SidebarFuncionarioComponent
  ]
})

export class ComponentsModule { }
