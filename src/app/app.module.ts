import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { OrcamentosComponent } from './cliente/orcamentos/orcamentos.component';
import { ListagemPedidosComponent } from './cliente/listagem-pedidos/listagem-pedidos.component'
import { PedidoAprovadoComponent } from './components/pedido-aprovado/pedido-aprovado.component';
import { ConsultarPedidosComponent } from './cliente/consultar-pedidos/consultar-pedidos.component';
import { PedidoComponent } from './components/pedido/pedido.component';

// Módulos: Public
import { LoginModule } from './login/login.module';
import { AutocadastroModule } from './autocadastro/autocadastro.module';

// Módulos: Funcionário
import { InicialFuncionarioModule } from './funcionario/inicial-funcionario';

// Módulos: Cliente
import { InicialClienteModule } from './cliente/inicial-cliente/inicial-cliente.module';
import { PedidoOnlineModule } from './cliente/pedido-online/pedido-online.module';

@NgModule({
  declarations: [
    AppComponent,
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
    LoginModule,
    AutocadastroModule,
    InicialClienteModule,
    PedidoOnlineModule,
    InicialFuncionarioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
