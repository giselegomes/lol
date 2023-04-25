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
    { id: 2, status: "Rejeitado", dt_recolhimento: "10/12/2022", dt_devolucao: '12/12/2022', dataHora: new Date(2023, 4, 18, 1, 30) },
    { id: 3, status: "Recolhido", dt_recolhimento: "10/12/2022", dt_devolucao: '12/12/2022', dataHora: new Date(2023, 4, 18, 1, 30) },
    { id: 4, status: "Aguardando pagamento", dt_recolhimento: "10/12/2022", dt_devolucao: '12/12/2022', dataHora: new Date(2023, 4, 18, 1, 30) },
    { id: 5, status: "Pago", dt_recolhimento: "10/12/2022", dt_devolucao: '12/12/2022', dataHora: new Date(2023, 4, 18, 1, 30) },
    { id: 6, status: "Finalizado", dt_recolhimento: "10/12/2022", dt_devolucao: '12/12/2022', dataHora: new Date(2023, 4, 18, 1, 30) },
    { id: 7, status: "Recolhido", dt_recolhimento: "10/12/2022", dt_devolucao: '12/12/2022', dataHora: new Date(2023, 4, 18, 1, 30) },
    { id: 8, status: "Recolhido", dt_recolhimento: "10/12/2022", dt_devolucao: '12/12/2022', dataHora: new Date(2023, 4, 18, 1, 30) }
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

  // Modal de confirmação de lavagem inicia com o valor false 
  confirmar: boolean = false;
  pedidoSelecionado: any;
  numeroPedido: number;

  abrirModal(id: number) {
    // abre a modal 
    this.confirmar = true;
    // pega o pedido selecionado
    this.pedidoSelecionado = this.pedidos.find(p => p.id === id);
    // para printar o número do pedido na modal
    this.numeroPedido = id;
  }

  confirmarLavagem() {
    // ao clicar, muda o status para "aguardando pagamento"
    this.pedidoSelecionado.status = 'Aguardando pagamento';
    // fecha a modal
    this.confirmar = false;
    alert("Lavagem confirmada! Pedido aguardando pagamento do cliente.")
  }
  confirmarFinalizacao() {
    // ao clicar, muda o status para "aguardando pagamento"
    this.pedidoSelecionado.status = 'Finalizado';
    // fecha a modal
    this.confirmar = false;
    alert("Finalização confirmada! Pedido Finalizado.")
  }
}

