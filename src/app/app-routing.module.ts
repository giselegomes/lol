import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AutocadastroComponent } from "./components/autocadastro/autocadastro.component";
import { LoginComponent } from "./components/login/login.component";
import { PedidoOnlineComponent } from "./components/pedido-online/pedido-online.component";

const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'autocadastro', component: AutocadastroComponent},
    {path: 'pedido-online', component: PedidoOnlineComponent}
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}