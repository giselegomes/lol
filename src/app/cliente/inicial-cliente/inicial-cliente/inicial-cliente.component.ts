import { Component } from '@angular/core';

@Component({
  selector: 'app-inicial-cliente',
  templateUrl: './inicial-cliente.component.html',
  styleUrls: ['./inicial-cliente.component.css']
})
export class InicialClienteComponent {
  pedidos = [
    { num_pedido: '1', status_pedido: "Cancelado", dt_recolhimento: "10/12/2022", dt_devolucao: '12/12/2022', valor: "22,00" },
    { num_pedido: '2', status_pedido: "Aprovado", dt_recolhimento: "10/12/2022", dt_devolucao: '12/12/2022', valor: "22,00" },
    { num_pedido: '3', status_pedido: "Aguardando Pagamento", dt_recolhimento: "10/12/2022", dt_devolucao: '12/12/2022', valor: "22,00" },
    { num_pedido: '4', status_pedido: "Em Aberto", dt_recolhimento: "10/12/2022", dt_devolucao: '12/12/2022', valor: "22,00" },
    { num_pedido: '5', status_pedido: "Em Aberto", dt_recolhimento: "10/12/2022", dt_devolucao: '12/12/2022', valor: "22,00" },
    { num_pedido: '6', status_pedido: "Em Aberto", dt_recolhimento: "10/12/2022", dt_devolucao: '12/12/2022', valor: "22,00" },
    { num_pedido: '7', status_pedido: "Em Aberto", dt_recolhimento: "10/12/2022", dt_devolucao: '12/12/2022', valor: "22,00" },
    { num_pedido: '8', status_pedido: "Em Aberto", dt_recolhimento: "10/12/2022", dt_devolucao: '12/12/2022', valor: "22,00" },
    { num_pedido: '9', status_pedido: "Em Aberto", dt_recolhimento: "10/12/2022", dt_devolucao: '12/12/2022', valor: "22,00" }
  ];
}
