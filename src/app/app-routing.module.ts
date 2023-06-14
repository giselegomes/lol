import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Rotas
import { ClienteRoutingModule } from "./cliente-pages/cliente-routing.module";
import { FuncionarioRoutingModule } from "./funcionario-pages/funcionario-routing.module";

// Public
// import { LoginComponent } from "./login/login/login.component";
import { LoginComponent } from "./auth/login/login.component";
import { AutocadastroComponent } from "./autocadastro/autocadastro/autocadastro.component";

import { PedidoComponent } from "./components/pedido/pedido.component";

const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'autocadastro', component: AutocadastroComponent},
    {path: 'pedido', component:PedidoComponent}
]

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes),
        ClienteRoutingModule,
        FuncionarioRoutingModule,
    ],
    exports: [RouterModule]
})

export class AppRoutingModule{}