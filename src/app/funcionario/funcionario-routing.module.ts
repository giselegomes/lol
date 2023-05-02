import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicialFuncionarioComponent } from './inicial-funcionario';
import { VisualizarPedidosComponent } from './visualizar-pedidos/visualizar-pedidos/visualizar-pedidos.component';
import { ManutencaoRoupasComponent } from './manutencao-roupas/manutencao-roupas/manutencao-roupas.component';
import { RelatorioReceitaComponent } from './relatorio-receita';
import { RelatorioClientesComponent } from './relatorio-clientes';
    
const routes: Routes = [
        {
            path: 'funcionario',
            redirectTo: 'funcionario/inicial-funcionario',
            pathMatch: 'full'
        },
        {
            path: 'funcionario/inicial-funcionario',
            component: InicialFuncionarioComponent
        },
        {
            path: 'funcionario/visualizar-pedido',
            component: VisualizarPedidosComponent
        },
        {
            path: 'funcionario/manutencao-roupas',
            component: ManutencaoRoupasComponent
        },
        {
            path: 'funcionario/relatorio-receita',
            component: RelatorioReceitaComponent
        },
        {
            path: 'funcionario/relatorio-clientes',
            component: RelatorioClientesComponent
        }
    ];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [RouterModule]
})
export class FuncionarioRoutingModule { }
