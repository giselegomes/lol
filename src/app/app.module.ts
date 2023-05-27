import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'; 


//Componentes globais
import { PedidoAprovadoComponent } from './components/pedido-aprovado/pedido-aprovado.component';
import { PedidoComponent } from './components/pedido/pedido.component';

// Módulos: Public
import { LoginModule } from './login/login.module';
import { AutocadastroModule } from './autocadastro/autocadastro.module';

// Módulos: Funcionário
import { InicialFuncionarioModule } from './funcionario-pages/inicial-funcionario';
import { VisualizarPedidosModule } from './funcionario-pages/visualizar-pedidos/visualizar-pedidos.module';
import { ManutencaoRoupasModule } from './funcionario-pages/manutencao-roupas';
import { RelatorioReceitaModule } from './funcionario-pages/relatorio-receita';
import { RelatorioClientesModule } from './funcionario-pages/relatorio-clientes';
import { RelatorioMelhoresClientesModule } from './funcionario-pages/relatorio-melhores-clientes';
import { ManutencaoFuncionarioModule } from './funcionario-pages/manutencao-funcionario';
import { NovoFuncionarioModule } from './funcionario-pages/novo-funcionario';

// Módulos: Cliente
import { InicialClienteModule } from './cliente-pages/inicial-cliente';
import { PedidoOnlineModule } from './cliente-pages/pedido-online/pedido-online.module';
import { ListagemPedidosModule } from './cliente-pages/listagem-pedidos/listagem-pedidos.module';
import { ConsultarPedidosModule } from './cliente-pages/consultar-pedidos/consultar-pedidos.module';
import { PagamentoModule } from './cliente-pages/pagamento/pagamento.module';

// 
import { ClienteModule } from './cliente/cliente.module';

@NgModule({
  declarations: [
    AppComponent,
    PedidoAprovadoComponent,
    PedidoComponent
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
    ListagemPedidosModule,
    ConsultarPedidosModule,
    InicialFuncionarioModule,
    VisualizarPedidosModule,
    PagamentoModule,
    RelatorioReceitaModule,
    RelatorioClientesModule,
    RelatorioMelhoresClientesModule,
    HttpClientModule,
    ManutencaoFuncionarioModule,
    NovoFuncionarioModule,
    ClienteModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
