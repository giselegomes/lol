import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PedidoOnlineComponent } from './cliente/pedido-online/pedido-online.component';
import { AppRoutingModule } from './app-routing.module';
import { InicialClienteComponent } from './cliente/inicial-cliente/inicial-cliente.component';
import { OrcamentosComponent } from './cliente/orcamentos/orcamentos.component';
import { ListagemPedidosComponent } from './cliente/listagem-pedidos/listagem-pedidos.component'
import { PedidoAprovadoComponent } from './components/pedido-aprovado/pedido-aprovado.component';
import { ConsultarPedidosComponent } from './cliente/consultar-pedidos/consultar-pedidos.component';
import { PedidoComponent } from './components/pedido/pedido.component';

// Módulos
import { LoginModule } from './login/login.module';
import { AutocadastroModule } from './autocadastro/autocadastro.module';

// Módulos Funcionário
import { InicialFuncionarioModule } from './funcionario/inicial-funcionario';

@NgModule({
  declarations: [
    AppComponent,
    PedidoOnlineComponent,
    InicialClienteComponent,
    OrcamentosComponent,
    ListagemPedidosComponent,
    PedidoAprovadoComponent,
    ConsultarPedidosComponent,
    PedidoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InicialFuncionarioModule,
    LoginModule,
    AutocadastroModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
