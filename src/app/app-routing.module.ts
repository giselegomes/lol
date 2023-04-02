import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AutocadastroComponent } from "./componets/autocadastro/autocadastro.component";
import { LoginComponent } from "./componets/login/login.component";

const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'autocadastro', component: AutocadastroComponent}
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}