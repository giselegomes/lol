import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component"
import { AutocadastroComponent } from "./pages/autocadastro/autocadastro.component";
import { PedidoOnlineComponent } from "./pages/pedido-online/pedido-online.component";
import { InicialClienteComponent } from "./pages/inicial-cliente/inicial-cliente.component";
import { OrcamentosComponent } from "./pages/orcamentos/orcamentos.component";


const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'autocadastro', component: AutocadastroComponent},
    {path: 'pedido-online', component: PedidoOnlineComponent},
    {path: 'inicial-cliente', component: InicialClienteComponent},
    {path: 'orcamentos', component: OrcamentosComponent}

]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}