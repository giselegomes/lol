import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicialClienteComponent } from './inicial-cliente/inicial-cliente/inicial-cliente.component';
import { PedidoOnlineComponent } from './pedido-online/pedido-online/pedido-online.component';
import { ListagemPedidosComponent } from './listagem-pedidos/listagem-pedidos/listagem-pedidos.component';
import { ConsultarPedidosComponent } from './consultar-pedidos/consultar-pedidos/consultar-pedidos.component';
import { PagamentoComponent } from './pagamento/pagamento/pagamento.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
    {
        path: 'cliente',
        redirectTo: 'cliente/inicial-cliente',
        pathMatch: 'full'
    },
    {
        path: 'cliente/inicial-cliente',
        component: InicialClienteComponent,
        canActivate: [AuthGuard],
        data: {
            role: 'cliente'
        }
    },
    {
        path: 'cliente/pedido-online',
        component: PedidoOnlineComponent,
        canActivate: [AuthGuard],
        data: {
            role: 'cliente'
        }
    },
    {
        path: 'cliente/listagem-pedidos',
        component: ListagemPedidosComponent,
        canActivate: [AuthGuard],
        data: {
            role: 'cliente'
        }
    },
    {
        path: 'cliente/consultar-pedidos',
        component: ConsultarPedidosComponent,
        canActivate: [AuthGuard],
        data: {
            role: 'cliente'
        }
    },
    {
        path: 'cliente/pagar-pedido',
        component: PagamentoComponent,
        canActivate: [AuthGuard],
        data: {
            role: 'cliente'
        }
    }
];


@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        RouterModule
    ],
    exports: [RouterModule]
})
export class ClienteRoutingModule { }
