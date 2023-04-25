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
    { id: 1111, status: "Em aberto", dataHora: new Date(2022, 2, 8, 1, 28) },
    { id: 2222, status: "Rejeitado", dataHora: new Date(2023, 3, 1, 5, 56) },
    { id: 3333, status: "Recolhido", dataHora: new Date(2021, 4, 19, 23, 50) },
    { id: 4444, status: "Aguardando pagamento", dataHora: new Date(2023, 4, 18, 7, 30) },
    { id: 5555, status: "Pago", dataHora: new Date(2020, 4, 18, 1, 30) },
    { id: 6666, status: "Finalizado", dataHora: new Date(2022, 4, 18, 1, 30) },
    { id: 7777, status: "Pago", dataHora: new Date(2023, 12, 25, 5, 30) },
    { id: 8888, status: "Recolhido", dataHora: new Date(2021, 5, 18, 2, 50) }
  ];

  // Método para aplicar o filtro de status do pedido
  applyStatusFilter() {
    if (this.selectedStatus === '') {
      // Se nenhum status for selecionado, mostra todos os pedidos ordenados por data/hora
      return this.pedidos.sort((a, b) => a.dataHora.getTime() - b.dataHora.getTime());
    } else {
      // Filtra a lista de pedidos pelo status selecionado
      return this.pedidos.filter(pedido => pedido.status === this.selectedStatus);
    }
  }

  // Modais
  confirmar: boolean = false;
  finalizar: boolean = false;
  recolher: boolean = false;

  pedidoSelecionado: any;
  numeroPedido: number;

  abrirModalConfirmar(id: number) {
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

  abrirModalFinalizar(id: number) {
    // abre a modal 
    this.finalizar = true;
    // pega o pedido selecionado
    this.pedidoSelecionado = this.pedidos.find(p => p.id === id);
    // para printar o número do pedido na modal
    this.numeroPedido = id;
  }

  confirmarFinalizacao() {
    // ao clicar, muda o status para "Finalizado"
    this.pedidoSelecionado.status = 'Finalizado';
    // fecha a modal
    this.finalizar = false;
    alert("Finalização confirmada! Pedido Finalizado.")
  }

  abrirModalRecolhimento(id: number) {
    // abre a modal 
    this.recolher = true;
    // pega o pedido selecionado
    this.pedidoSelecionado = this.pedidos.find(p => p.id === id);
    // para printar o número do pedido na modal
    this.numeroPedido = id;
  }

  confirmarRecolhimento() {
    // ao clicar, muda o status para "Recolhido"
    this.pedidoSelecionado.status = 'Recolhido';
    // fecha a modal
    this.recolher = false;
    alert("Pedido recolhido.")
  }
}

