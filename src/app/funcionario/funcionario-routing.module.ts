import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicialFuncionarioComponent } from './inicial-funcionario';
import { VisualizarPedidosComponent } from './visualizar-pedidos/visualizar-pedidos/visualizar-pedidos.component';

const routes: Routes = [
    {path: 'funcionario', component: InicialFuncionarioComponent},
    {path: 'funcionario/visualizar-pedido', component: VisualizarPedidosComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [RouterModule]
})
export class FuncionarioRoutingModule { }
