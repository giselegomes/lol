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
    { id: 1, status: "Cancelado", dt_recolhimento: "10/12/2022", dt_devolucao: '12/12/2022', valor: "22,00" },
    { id: 2, status: "Aprovado", dt_recolhimento: "10/12/2022", dt_devolucao: '12/12/2022', valor: "22,00" },
    { id: 3, status: "Aguardando Pagamento", dt_recolhimento: "10/12/2022", dt_devolucao: '12/12/2022', valor: "22,00" },
    { id: 4, status: "Em aberto", dt_recolhimento: "10/12/2022", dt_devolucao: '12/12/2022', valor: "22,00" },
    { id: 5, status: "Em aberto", dt_recolhimento: "10/12/2022", dt_devolucao: '12/12/2022', valor: "22,00" },
    { id: 6, status: "Em aberto", dt_recolhimento: "10/12/2022", dt_devolucao: '12/12/2022', valor: "22,00" },
    { id: 7, status: "Em aberto", dt_recolhimento: "10/12/2022", dt_devolucao: '12/12/2022', valor: "22,00" },
    { id: 8, status: "Em aberto", dt_recolhimento: "10/12/2022", dt_devolucao: '12/12/2022', valor: "22,00" },
    { id: 9, status: "Em aberto", dt_recolhimento: "10/12/2022", dt_devolucao: '12/12/2022', valor: "22,00" }
  ];
  // Método para aplicar o filtro de status do pedido
  applyStatusFilter() {
    if (this.selectedStatus === '') {
      // Se nenhum status for selecionado, mostra todos os pedidos
      return this.pedidos;
    } else {
      // Filtra a lista de pedidos pelo status selecionado
      return this.pedidos.filter(pedido => pedido.status === this.selectedStatus);
    }
  }

  cancelarPedido(id: number) {
    const pedido = this.pedidos.find(p => p.id === id);
    if (pedido) {
      pedido.status = 'Cancelado';
    }
  }
}

