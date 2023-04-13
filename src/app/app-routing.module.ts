import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./cliente/login/login.component"
import { AutocadastroComponent } from "./cliente/autocadastro/autocadastro.component";
import { PedidoOnlineComponent } from "./cliente/pedido-online/pedido-online.component";
import { InicialClienteComponent } from "./cliente/inicial-cliente/inicial-cliente.component";
import { OrcamentosComponent } from "./cliente/orcamentos/orcamentos.component";
import { ListagemPedidosComponent } from "./cliente/listagem-pedidos/listagem-pedidos.component";
import { ConsultarPedidosComponent } from "./cliente/consultar-pedidos/consultar-pedidos.component";
import { PedidoComponent } from "./components/pedido/pedido.component";


const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'autocadastro', component: AutocadastroComponent},
    {path: 'pedido-online', component: PedidoOnlineComponent},
    {path: 'inicial-cliente', component: InicialClienteComponent},
    {path: 'orcamentos', component: OrcamentosComponent},
    {path: 'listagem-pedidos', component: ListagemPedidosComponent},
    {path: 'consultar-pedidos', component: ConsultarPedidosComponent},
    {path: 'pedido', component:PedidoComponent}

]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}