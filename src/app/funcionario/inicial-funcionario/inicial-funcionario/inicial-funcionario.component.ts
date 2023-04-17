import { Component } from '@angular/core';

@Component({
  selector: 'app-inicial-funcionario',
  templateUrl: './inicial-funcionario.component.html',
  styleUrls: ['./inicial-funcionario.component.css']
})


export class InicialFuncionarioComponent {

  pedidos = [
    { num_pedido: '444', status_pedido: "Em Aberto", dataHora: new Date(2023, 4, 18, 1, 30) },
    { num_pedido: '555', status_pedido: "Em Aberto", dataHora: new Date(2023, 3, 16, 1, 20) },
    { num_pedido: '666', status_pedido: "Em Aberto", dataHora: new Date(2023, 2, 11, 13, 30) },
    { num_pedido: '777', status_pedido: "Em Aberto", dataHora: new Date(2023, 3, 16, 9, 30) },
    { num_pedido: '888', status_pedido: "Em Aberto", dataHora: new Date(2023, 4, 16, 10, 50) },
    { num_pedido: '999', status_pedido: "Em Aberto", dataHora: new Date(2023, 3, 18, 8, 30) }
  ];

  // pedidos em ordem crescente
  get pedidosSorted() {
    return this.pedidos.sort((a, b) => a.dataHora.getTime() - b.dataHora.getTime());
  }

}
