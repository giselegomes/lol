import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicialClienteComponent } from './inicial-cliente/inicial-cliente/inicial-cliente.component';

const routes: Routes = [
    {path: 'cliente', component: InicialClienteComponent},];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [RouterModule]
})
export class ClienteRoutingModule { }
