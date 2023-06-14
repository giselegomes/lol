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
import { EditarFuncionarioComponent } from './editar-funcionario/editar-funcionario';
import { NovaRoupaComponent } from './nova-roupa/nova-roupa/nova-roupa.component';
import { EditarRoupaComponent } from './editar-roupa/editar-roupa/editar-roupa.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
    {
        path: 'funcionario',
        redirectTo: 'funcionario/inicial-funcionario',
        pathMatch: 'full'
    },
    {
        path: 'funcionario/inicial-funcionario',
        component: InicialFuncionarioComponent,
        canActivate: [AuthGuard],
        data: {
            role: 'funcionario'
        }
    },
    {
        path: 'funcionario/visualizar-pedido',
        component: VisualizarPedidosComponent,
        canActivate: [AuthGuard],
        data: {
            role: 'funcionario'
        }
    },
    {
        path: 'funcionario/manutencao-roupas',
        component: ManutencaoRoupasComponent,
        canActivate: [AuthGuard],
        data: {
            role: 'funcionario'
        }
    },
    {
        path: 'funcionario/nova-roupa',
        component: NovaRoupaComponent,
        canActivate: [AuthGuard],
        data: {
            role: 'funcionario'
        }
    },
    {
        path: 'funcionario/manutencao-funcionario',
        component: ManutencaoFuncionarioComponent,
        canActivate: [AuthGuard],
        data: {
            role: 'funcionario'
        }
    },
    {
        path: 'funcionario/novo-funcionario',
        component: NovoFuncionarioComponent,
        canActivate: [AuthGuard],
        data: {
            role: 'FUNC'
        }
    },
    {
        path: 'funcionario/relatorio-receita',
        component: RelatorioReceitaComponent,
        canActivate: [AuthGuard],
        data: {
            role: 'FUNC'
        }
    },
    {
        path: 'funcionario/relatorio-clientes',
        component: RelatorioClientesComponent,
        canActivate: [AuthGuard],
        data: {
            role: 'FUNC'
        }
    },
    {
        path: 'funcionario/relatorio-melhores-clientes',
        component: RelatorioMelhoresClientesComponent,
        canActivate: [AuthGuard],
        data: {
            role: 'FUNC'
        }
    },
    {
        path: 'funcionario/editar-roupa/:id',
        component: EditarRoupaComponent,
        canActivate: [AuthGuard],
        data: {
            role: 'FUNC'
        }
    },
    {
        path: 'funcionario/editar-funcionario/:id',
        component: EditarFuncionarioComponent,
        canActivate: [AuthGuard],
        data: {
            role: 'FUNC'
        }
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [RouterModule]
})
export class FuncionarioRoutingModule { }
