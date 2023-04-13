import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './cliente/login/login.component';
import { AutocadastroComponent } from './cliente/autocadastro/autocadastro.component';
import { PedidoOnlineComponent } from './cliente/pedido-online/pedido-online.component';
import { AppRoutingModule } from './app-routing.module';
import { InicialClienteComponent } from './cliente/inicial-cliente/inicial-cliente.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { OrcamentosComponent } from './cliente/orcamentos/orcamentos.component';
import { ListagemPedidosComponent } from './cliente/listagem-pedidos/listagem-pedidos.component'
import { PedidoAprovadoComponent } from './components/pedido-aprovado/pedido-aprovado.component';
import { ConsultarPedidosComponent } from './cliente/consultar-pedidos/consultar-pedidos.component';
import { PedidoComponent } from './components/pedido/pedido.component';

// Módulos
import { InicialFuncionarioModule } from './funcionario/inicial-funcionario';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AutocadastroComponent,
    PedidoOnlineComponent,
    InicialClienteComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    OrcamentosComponent,
    ListagemPedidosComponent,
    PedidoAprovadoComponent,
    ConsultarPedidosComponent,
    PedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InicialFuncionarioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
