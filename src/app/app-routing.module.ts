import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

//Rotas
import { ClienteRoutingModule } from "./cliente/cliente-routing.module";
import { FuncionarioRoutingModule } from "./funcionario/funcionario-routing.module";

// Public
import { LoginComponent } from "./login/login/login.component";
import { AutocadastroComponent } from "./autocadastro/autocadastro/autocadastro.component";

// Cliente
import { PedidoOnlineComponent } from "./cliente/pedido-online/pedido-online/pedido-online.component";
import { ListagemPedidosComponent } from "./cliente/listagem-pedidos/listagem-pedidos/listagem-pedidos.component";
import { ConsultarPedidosComponent } from "./cliente/consultar-pedidos/consultar-pedidos/consultar-pedidos.component"
import { PagamentoComponent } from "./cliente/pagamento/pagamento/pagamento.component";

// Funcionário
import { PedidoComponent } from "./components/pedido/pedido.component";


const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'autocadastro', component: AutocadastroComponent},
    {path: 'pedido-online', component: PedidoOnlineComponent},
    {path: 'pagamento', component: PagamentoComponent},

    {path: 'listagem-pedidos', component: ListagemPedidosComponent},
    {path: 'consultar-pedidos', component: ConsultarPedidosComponent},
    {path: 'pedido', component:PedidoComponent}
]

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes),
        ClienteRoutingModule,
        FuncionarioRoutingModule
    ],
    exports: [RouterModule]
})

export class AppRoutingModule{}