import { Component } from '@angular/core';

@Component({
  selector: 'app-listagem-pedidos',
  templateUrl: './listagem-pedidos.component.html',
  styleUrls: ['./listagem-pedidos.component.css']
})
export class ListagemPedidosComponent {
  selectedStatus: string = ''; // Variável para armazenar o valor selecionado no seletor

  // Lista de pedidos
  pedidos = [
    { num_pedido: 111, status: "Cancelado", dataHora: new Date(2022, 2, 8, 1, 28), valor: "22,00" },
    { num_pedido: 222, status: "Aprovado", dataHora: new Date(2022, 2, 1, 1, 28), valor: "22,00" },
    { num_pedido: 333, status: "Aguardando Pagamento", dataHora: new Date(2023, 2, 8, 1, 28), valor: "22,00" },
    { num_pedido: 444, status: "Em aberto", dataHora: new Date(2023, 2, 3, 1, 28), valor: "22,00" },
    { num_pedido: 555, status: "Em aberto", dataHora: new Date(2022, 2, 5, 1, 28), valor: "22,00" },
    { num_pedido: 666, status: "Em aberto", dataHora: new Date(2021, 2, 7, 1, 28), valor: "22,00" },
    { num_pedido: 777, status: "Em aberto", dataHora: new Date(2021, 2, 8, 1, 28), valor: "22,00" },
    { num_pedido: 888, status: "Em aberto", dataHora: new Date(2020, 2, 9, 1, 28), valor: "22,00" },
    { num_pedido: 999, status: "Em aberto", dataHora: new Date(2020, 2, 1, 1, 28), valor: "22,00" }
  ];
  
  // Método para aplicar o filtro de status do pedido
  applyStatusFilter() {
    if (this.selectedStatus === '') {
      // Se nenhum status for selecionado, mostra todos os pedidos em ordem decrescente
      return this.pedidos.sort((a, b) => b.dataHora.getTime() - a.dataHora.getTime());
    } else {
      // Filtra a lista de pedidos pelo status selecionado
      return this.pedidos.filter(pedido => pedido.status === this.selectedStatus);
    }
  }

  cancelarPedido(num_pedido: number) {
    const pedido = this.pedidos.find(p => p.num_pedido === num_pedido);
    if (pedido) {
      pedido.status = 'Cancelado';
    }
  }
}

