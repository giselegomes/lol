import { Component } from '@angular/core';

@Component({
  selector: 'app-visualizar-pedidos',
  templateUrl: './visualizar-pedidos.component.html',
  styleUrls: ['./visualizar-pedidos.component.css']
})
export class VisualizarPedidosComponent {
  selectedStatus: string = ''; // Variável para armazenar o valor selecionado no seletor

  // Lista de pedidos
  pedidos = [
    { id: 1, status: "Em aberto", dt_recolhimento: "10/12/2022", dt_devolucao: '12/12/2022', dataHora: new Date(2023, 4, 18, 1, 30) },
    { id: 1, status: "Rejeitado", dt_recolhimento: "10/12/2022", dt_devolucao: '12/12/2022', dataHora: new Date(2023, 4, 18, 1, 30) },
    { id: 1, status: "Recolhido", dt_recolhimento: "10/12/2022", dt_devolucao: '12/12/2022', dataHora: new Date(2023, 4, 18, 1, 30) },
    { id: 1, status: "Aguardando pagamento", dt_recolhimento: "10/12/2022", dt_devolucao: '12/12/2022', dataHora: new Date(2023, 4, 18, 1, 30) },
    { id: 1, status: "Pago", dt_recolhimento: "10/12/2022", dt_devolucao: '12/12/2022', dataHora: new Date(2023, 4, 18, 1, 30) },
    { id: 1, status: "Finalizado", dt_recolhimento: "10/12/2022", dt_devolucao: '12/12/2022', dataHora: new Date(2023, 4, 18, 1, 30) }
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
