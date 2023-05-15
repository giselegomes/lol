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
import { InicialFuncionarioModule } from './funcionario/inicial-funcionario';
import { VisualizarPedidosModule } from './funcionario/visualizar-pedidos/visualizar-pedidos.module';
import { ManutencaoRoupasModule } from './funcionario/manutencao-roupas';
import { RelatorioReceitaModule } from './funcionario/relatorio-receita';
import { RelatorioClientesModule } from './funcionario/relatorio-clientes';
import { RelatorioMelhoresClientesModule } from './funcionario/relatorio-melhores-clientes';
import { ManutencaoFuncionarioModule } from './funcionario/manutencao-funcionario';


// Módulos: Cliente
import { InicialClienteModule } from './cliente/inicial-cliente';
import { PedidoOnlineModule } from './cliente/pedido-online/pedido-online.module';
import { ListagemPedidosModule } from './cliente/listagem-pedidos/listagem-pedidos.module';
import { ConsultarPedidosModule } from './cliente/consultar-pedidos/consultar-pedidos.module';
import { PagamentoModule } from './cliente/pagamento/pagamento.module';



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
    ManutencaoFuncionarioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
