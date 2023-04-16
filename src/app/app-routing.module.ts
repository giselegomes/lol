import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login/login.component";
import { AutocadastroComponent } from "./autocadastro/autocadastro/autocadastro.component";
import { InicialClienteComponent } from "./cliente/inicial-cliente/inicial-cliente/inicial-cliente.component";

import { PedidoOnlineComponent } from "./cliente/pedido-online/pedido-online.component";
import { OrcamentosComponent } from "./cliente/orcamentos/orcamentos.component";
import { ListagemPedidosComponent } from "./cliente/listagem-pedidos/listagem-pedidos.component";
import { ConsultarPedidosComponent } from "./cliente/consultar-pedidos/consultar-pedidos.component";
import { PedidoComponent } from "./components/pedido/pedido.component";
import { InicialFuncionarioComponent } from "./funcionario/inicial-funcionario/inicial-funcionario";


const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'autocadastro', component: AutocadastroComponent},

    {path: 'pedido-online', component: PedidoOnlineComponent},
    {path: 'inicial-cliente', component: InicialClienteComponent},
    {path: 'orcamentos', component: OrcamentosComponent},
    {path: 'listagem-pedidos', component: ListagemPedidosComponent},
    {path: 'consultar-pedidos', component: ConsultarPedidosComponent},
    {path: 'pedido', component:PedidoComponent},
    {path: 'inicial-funcionario', component:InicialFuncionarioComponent}
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}