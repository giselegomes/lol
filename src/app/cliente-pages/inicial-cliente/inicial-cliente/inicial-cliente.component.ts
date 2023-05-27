import { Component } from '@angular/core';

@Component({
  selector: 'app-inicial-cliente',
  templateUrl: './inicial-cliente.component.html',
  styleUrls: ['./inicial-cliente.component.css']
})

export class InicialClienteComponent {

  pedidos = [
    { num_pedido: 111, status: "Em aberto", dt_recolhimento: "10/12/2022", dt_devolucao: '12/12/2022', valor: "22,00" },
    { num_pedido: 222, status: "Em aberto", dt_recolhimento: "10/12/2022", dt_devolucao: '12/12/2022', valor: "22,00" },
    { num_pedido: 333, status: "Aguardando pagamento", dt_recolhimento: "10/12/2022", dt_devolucao: '12/12/2022', valor: "22,00" },
    { num_pedido: 444, status: "Aguardando pagamento", dt_recolhimento: "10/12/2022", dt_devolucao: '12/12/2022', valor: "22,00" },
    { num_pedido: 555, status: "Recolhido", dt_recolhimento: "10/12/2022", dt_devolucao: '12/12/2022', valor: "22,00" },
    { num_pedido: 666, status: "Finalizado", dt_recolhimento: "10/12/2022", dt_devolucao: '12/12/2022', valor: "22,00" },
    { num_pedido: 777, status: "Rejeitado", dt_recolhimento: "10/12/2022", dt_devolucao: '12/12/2022', valor: "22,00" },
    { num_pedido: 888, status: "Pago", dt_recolhimento: "10/12/2022", dt_devolucao: '12/12/2022', valor: "22,00" },
    { num_pedido: 999, status: "Pago", dt_recolhimento: "10/12/2022", dt_devolucao: '12/12/2022', valor: "22,00" },
  ];
}
