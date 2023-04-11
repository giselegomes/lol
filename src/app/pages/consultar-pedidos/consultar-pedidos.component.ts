import { Component } from '@angular/core';


@Component({
  selector: 'app-consultar-pednumeroPedidoos',
  templateUrl: './consultar-pedidos.component.html',
  styleUrls: ['./consultar-pedidos.component.css']
})

export class ConsultarPedidosComponent 

{
  numeroPedido: string;
  items = [
    { numeroPedido: "1", status: "Cancelado", dt_recolhimento: "10/12/2022", dt_devolucao: '12/12/2022', valor: "24,00" },
    { numeroPedido: "2", status: "Aprovado", dt_recolhimento: "10/12/2022", dt_devolucao: '12/12/2022', valor: "32,00" },
    { numeroPedido: "3", status: "Aguardando Pagamento", dt_recolhimento: "10/12/2022", dt_devolucao: '12/12/2022', valor: "22,00" },
    { numeroPedido: "4", status: "Em aberto", dt_recolhimento: "10/12/2022", dt_devolucao: '12/12/2022', valor: "33,00" },
    { numeroPedido: "5", status: "Em aberto", dt_recolhimento: "10/12/2022", dt_devolucao: '12/12/2022', valor: "89,00" },
    { numeroPedido: "6", status: "Em aberto", dt_recolhimento: "10/12/2022", dt_devolucao: '12/12/2022', valor: "67,00" },
    { numeroPedido: "7", status: "Em aberto", dt_recolhimento: "10/12/2022", dt_devolucao: '12/12/2022', valor: "100,00" },
    { numeroPedido: "8", status: "Em aberto", dt_recolhimento: "10/12/2022", dt_devolucao: '12/12/2022', valor: "92,00" },
    { numeroPedido: "9", status: "Em aberto", dt_recolhimento: "10/12/2022", dt_devolucao: '12/12/2022', valor: "22,00" }
  ]; 
}



