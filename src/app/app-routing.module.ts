import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component"
import { AutocadastroComponent } from "./components/autocadastro/autocadastro.component";
import { PedidoOnlineComponent } from "./components/pedido-online/pedido-online.component";
import { InicialClienteComponent } from "./components/inicial-cliente/inicial-cliente.component";

const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'autocadastro', component: AutocadastroComponent},
    {path: 'pedido-online', component: PedidoOnlineComponent},
    {path: 'inicial-cliente', component: InicialClienteComponent}

]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}