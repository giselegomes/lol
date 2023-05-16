import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicialFuncionarioComponent } from './inicial-funcionario';
import { VisualizarPedidosComponent } from './visualizar-pedidos/visualizar-pedidos/visualizar-pedidos.component';
import { ManutencaoRoupasComponent } from './manutencao-roupas/manutencao-roupas/manutencao-roupas.component';
import { RelatorioReceitaComponent } from './relatorio-receita';
import { RelatorioClientesComponent } from './relatorio-clientes';
import { RelatorioMelhoresClientesComponent } from './relatorio-melhores-clientes';
import { ManutencaoFuncionarioComponent } from './manutencao-funcionario/manutencao-funcionario';
import { NovoFuncionarioComponent } from './novo-funcionario/novo-funcionario';
    
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
            path: 'funcionario/manutencao-funcionario',
            component: ManutencaoFuncionarioComponent
        },
        {
            path: 'funcionario/novo-funcionario',
            component: NovoFuncionarioComponent
        },
        {
            path: 'funcionario/relatorio-receita',
            component: RelatorioReceitaComponent
        },
        {
            path: 'funcionario/relatorio-clientes',
            component: RelatorioClientesComponent
        },
        {
            path: 'funcionario/relatorio-melhores-clientes',
            component: RelatorioMelhoresClientesComponent
        }
    ];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [RouterModule]
})
export class FuncionarioRoutingModule { }
